(ns bfuncs.worker-fns
  (:require
   [bfuncs.utils :refer [condf assert-args throw-ex-arg if-first]]
   [cljs.core :as core]
   [cljs.core.async :as async]
   [applied-science.js-interop :as j]
   [cljs.util :refer [debug-prn]]
   ))

(defn echo [label x]
  (println label)
  (prn x))

#_(defmacro inspect-env
    ([] (throw-ex-arg "got: \n"
                      (binding [*print-level* 5] (with-out-str (fipp/pprint &env)))))

    ([keys] (throw-ex-arg "got for path " (prn-str keys) ": \n"
                          (binding [*print-level* 3]
                            (with-out-str (fipp/pprint (get-in &env keys))))))

    ([keys print-lvl] (throw-ex-arg "got for path " (prn-str keys) ": \n"
                                    (binding [*print-level* print-lvl]
                                      (with-out-str (fipp/pprint (get-in &env keys)))))))


(defmacro task [& specs]
  (let [task-name (when (symbol? (first specs))
                    (first specs))
        [return & other-args :as args] ((if task-name second first) specs)
        body (nthrest specs (if task-name 2 1))]
    (assert-args
     (vector? args) "a vector for its bindings")
    `(fn ~@(when task-name [task-name]) [~return e#]
       (j/let [^:js ~(vec other-args) (j/get-in e# [:data :args])]
         ~@body))))

(defmacro go-task [bindings & body]
  "bindings => [worker-binding-form worker-port
                result-binding-form (task-name & args)]
  Yields a go block that dispatches the task to a worker retrieved from worker-port.
  Then, body is evaluated in a context where the worker is bound to worker-binding-form,
  and the result of the task is bound to result-binding-form.
  Returns a port which receives the value of the last body expression.
  The worker is retured to worker-port after the body has been evaluated."
  (assert-args
   (vector? bindings) "a vector for its bindings"
   (= 4 (count bindings)) "exactly 2 pairs for its bindings, the first for the worker and channel, the second for the task and its result.")
  (let [[worker-binding worker-port
         result-binding [task & args]] bindings]
    `(async/go
      (let [out-port# (async/chan 1)
            task-id# (core/random-uuid)
            ~worker-binding (async/<! ~worker-port)]
        (doto ~worker-binding
          (j/call :addEventListener
            "message"
            (fn handle-message# [event#]
              (let [data# (j/get event# :data)]
                (when (= task-id# (core/uuid (j/get data# :task-id)))
                  (j/call ~worker-binding :removeEventListener "message" handle-message#)
                  (if (= (j/get data# :type) "error")
                    (throw (ex-info "Worker error" data#))
                    (async/put! out-port# (j/get data# :value)))))))
          (j/call :postMessage
            (core/clj->js {:task ~(name task)
                           :task-id (str task-id#)
                           :args [~@args]})))
        (let [~result-binding (async/<! out-port#)
              val# (do ~@body)]
          (async/put! ~worker-port ~worker-binding)
          val#)))))

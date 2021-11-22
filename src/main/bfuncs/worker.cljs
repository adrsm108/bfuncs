(ns bfuncs.worker
  (:require [bfuncs.minimization :as bmin :refer [zhegalkin-polynomial min-sops min-poss]]
            [applied-science.js-interop :as j]
            [bfuncs.utils :refer [dbg echod maximum floor-log2]]
            ["/bfuncs/jsUtils" :refer [functionBytes, bytesToBigInt]])
  (:require-macros [bfuncs.worker-fns :refer [task]]))

(declare worker-id)

(def tasks
  {"function-bytes" (task [return [f-args f-body] arity]
                      (let [bytes (functionBytes (js/Function f-args f-body) arity)]
                        (return bytes [(j/get bytes :buffer)])))

   "minterms-bytes" (task [return [on-terms unspecified] arity]
                      (let [bytes (functionBytes (j/lit {:on on-terms
                                                         :unspecified unspecified})
                                                 arity)]
                        (return bytes [(j/get bytes :buffer)])))

   "test-task" (task [return x]
                 (return x))

   "assign-id" (task [_ id]
                 (def worker-id id)
                 (dbg "worker assigned id " id))

   "min-sops" (task [return vars bytes]
                (dbg "minsops bitbytes: " bytes)
                (return (min-sops vars bytes)))

   "min-poss" (task [return vars bytes]
                (dbg "minposs bitbytes: " bytes)
                (return (bmin/min-poss vars bytes)))

   "zhegalkin-polynomial" (task [return vars digit-string]
                            (return (zhegalkin-polynomial vars digit-string)))
   })

(defn return-fn [task-id]
  (fn
    ([message]
     (js/postMessage (clj->js {:task-id task-id :value message})))
    ([message transferrables]
     (js/postMessage (clj->js {:task-id task-id :value message})
                     (clj->js transferrables)))))

(defn dispatch [event]
  (dbg "worker dispatch event received by worker" worker-id)
  (dbg event)
  (let [task-name (j/get-in event [:data :task])
        task-id (j/get-in event [:data :task-id])]
    (try
      (if-some [t (get tasks task-name)]
        (t (return-fn task-id) event)
        (throw (js/Error. (str "Execution error: no such task as " task-name))))
      (catch js/Object e
        (dbg "Error in worker" worker-id)
        (js/postMessage #js {:type "error"
                             :name (j/get e :name)
                             :message (j/get e :message)
                             :error (j/call e :toString)
                             :task task-name
                             :task-id task-id
                             :worker-id worker-id})))))


(defn init []
  (dbg "worker created")
  (j/call js/self :addEventListener "message" dispatch)
  (dbg js/self))
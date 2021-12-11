(ns bfuncs.worker-fns
  (:require ;[bfuncs.utils :refer [echo echol]]
   [cljs.core.async :refer [chan put!]]
   [applied-science.js-interop :as j])
  (:require-macros [bfuncs.worker-fns]))

(def worker-array #js[])

(defn create-worker []
  (let [id (str (random-uuid))
        worker (doto (js/Worker. "./js/worker.js")
                 (j/call :postMessage
                   (j/lit {:task "assign-id"
                           :task-id 0
                           :args [id]}))
                 (j/assoc! :worker-id id))]
    (j/call worker-array :push worker)
    worker))

(defn create-worker-channel [n]
  (let [worker-channel (chan n)]
    (dotimes [_ n] (put! worker-channel (create-worker)))
    worker-channel))

(defn ^:dev/before-load destroy-workers! []
  (when-some [worker (j/call worker-array :pop)]
    (j/call worker :terminate)
    (recur)))


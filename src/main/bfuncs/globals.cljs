(ns bfuncs.globals
  (:require
   [bfuncs.utils :refer [echo]]
   [reagent-material-ui.core.icon-button :refer [icon-button]]
   [reagent-material-ui.core.snackbar :refer [snackbar]]
   [reagent-material-ui.icons.close-outlined :refer [close-outlined]]
   [reagent.core :as r]))

(def notification-queue (atom #queue []))
(def immediate-next-notification (atom nil))
(def current-notification (atom nil))
(def notification-exiting (atom nil))
(def notification-open (r/atom false))
(def open-drawer-state (r/atom false))

(defn- handle-notification-close
  [_event reason]
  (when (not= reason "clickaway")
    (reset! notification-open false)))

(defn- handle-notification-exited []
  (reset! notification-exiting false)
  (if-some [nn @immediate-next-notification]
    (do
      (reset! current-notification nn)
      (reset! immediate-next-notification nil)
      (reset! notification-open true))
    (if-let [nn (peek @notification-queue)]
      (do
        (reset! current-notification nn)
        (swap! notification-queue pop)
        (reset! notification-open true))
      (reset! current-notification nil))))

(def ^:private notification-close-button
  (r/as-element [icon-button {:aria-label "close"
                              :color      "inherit"
                              :class      "close"
                              :on-click   #(reset! notification-open false)}
                 [close-outlined]]))

(defn- build-snackbar
  [{:keys [message auto-hide-duration on-close closeable key class action children]
    :or   {auto-hide-duration 2000
           key                nil
           closeable          false}
    :as   props}]
  (let [handle-close (if on-close
                       (fn [event reason]
                         (on-close event reason notification-open))
                       handle-notification-close)]
    (into [snackbar (merge (dissoc props :closeable :children)
                           {:class              (r/class-names "global-notification" class)
                            :open               @notification-open
                            :key                key
                            :message            message
                            :action             (if closeable
                                                  (if action
                                                    (r/as-element [:<> action notification-close-button])
                                                    notification-close-button)
                                                  action)
                            :auto-hide-duration auto-hide-duration
                            :on-close           handle-close
                            :on-exit            #(reset! notification-exiting true)
                            :on-exited          handle-notification-exited})]
          children)))



(defn notifier
  [{:keys [class]}]
  (if-let [current-props @current-notification]
    (build-snackbar (if class
                      (update current-props :class vector class)
                      current-props))
    [snackbar {:key nil :open @notification-open :class class}]))

(defn notify!
  "Send a notification through the notifier component.
  The notification displays as [snackbar props children...].
  The following special props can be included:
  :immediate => if logical true, any open notifications are closed, and the given notification skips to
  the front of the queue.
  :closeable => whether the notification should include a close button
  :on-close => defines on-close handler for snackbar component taking parameters [event reason open-atom].
  The third argument is a reference to the atom controlling the open state of the notification.
  :auto-hide-duration => same as snackbar, but defaults to 2000. nil to disable auto-hide. "
  [props & children]
  (let [immediate (:immediate props false)
        props (merge (dissoc props :immediate)
                     {:key (js/Date.now)}
                     (when children {:children children}))
        open @notification-open
        exiting @notification-exiting]
    (if (or open exiting)
      (if immediate
        (do (reset! immediate-next-notification props)
            (when open (reset! notification-open false)))
        (swap! notification-queue conj props))
      (do (reset! current-notification props)
          (reset! notification-open true)))))
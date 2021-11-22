(ns bfuncs.typesetting-data)

(def costs
   {:uppercase 0.8779
    :lowercase 0.5681
    :digit 0.5495
    :uppercase-italic 0.7788
    :lowercase-italic 0.5105
    :digit-italic 0.5618
    :uppercase-script 0.6173
    :lowercase-script 0.4005
    :digit-script 0.3874
    :operator-script 0.5977
    :parentheses 0.4297})

(defmacro cost [key] (get costs key 0))

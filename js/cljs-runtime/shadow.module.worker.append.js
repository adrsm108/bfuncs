
shadow.cljs.devtools.client.env.module_loaded('worker');

try { bfuncs.worker.init(); } catch (e) { console.error("An error occurred when calling (bfuncs.worker/init)"); throw(e); };
SHADOW_ENV.setLoaded("bfuncs.worker.js");
SHADOW_ENV.setLoaded("shadow.module.worker.append.js");
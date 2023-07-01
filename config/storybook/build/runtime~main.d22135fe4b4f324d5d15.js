/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("runtime_main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("54348f6907625ad8d710")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "frontend:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		  var currentModuleData = {};
/******/ 		  var installedModules = __webpack_require__.c;
/******/ 		  var currentChildModule;
/******/ 		  var currentParents = [];
/******/ 		  var registeredStatusHandlers = [];
/******/ 		  var currentStatus = "idle";
/******/ 		  var blockingPromises;
/******/ 		  var currentUpdateApplyHandlers;
/******/ 		  var queuedInvalidatedModules;
/******/ 		  __webpack_require__.hmrD = currentModuleData;
/******/ 		  __webpack_require__.i.push(function(options) {
/******/ 		    var module2 = options.module;
/******/ 		    var require2 = createRequire(options.require, options.id);
/******/ 		    module2.hot = createModuleHotObject(options.id, module2);
/******/ 		    module2.parents = currentParents;
/******/ 		    module2.children = [];
/******/ 		    currentParents = [];
/******/ 		    options.require = require2;
/******/ 		  });
/******/ 		  __webpack_require__.hmrC = {};
/******/ 		  __webpack_require__.hmrI = {};
/******/ 		  function createRequire(require2, moduleId) {
/******/ 		    var me = installedModules[moduleId];
/******/ 		    if (!me)
/******/ 		      return require2;
/******/ 		    var fn = function(request) {
/******/ 		      if (me.hot.active) {
/******/ 		        if (installedModules[request]) {
/******/ 		          var parents = installedModules[request].parents;
/******/ 		          if (parents.indexOf(moduleId) === -1) {
/******/ 		            parents.push(moduleId);
/******/ 		          }
/******/ 		        } else {
/******/ 		          currentParents = [moduleId];
/******/ 		          currentChildModule = request;
/******/ 		        }
/******/ 		        if (me.children.indexOf(request) === -1) {
/******/ 		          me.children.push(request);
/******/ 		        }
/******/ 		      } else {
/******/ 		        console.warn(
/******/ 		          "[HMR] unexpected require(" + request + ") from disposed module " + moduleId
/******/ 		        );
/******/ 		        currentParents = [];
/******/ 		      }
/******/ 		      return require2(request);
/******/ 		    };
/******/ 		    var createPropertyDescriptor = function(name2) {
/******/ 		      return {
/******/ 		        configurable: true,
/******/ 		        enumerable: true,
/******/ 		        get: function() {
/******/ 		          return require2[name2];
/******/ 		        },
/******/ 		        set: function(value) {
/******/ 		          require2[name2] = value;
/******/ 		        }
/******/ 		      };
/******/ 		    };
/******/ 		    for (var name in require2) {
/******/ 		      if (Object.prototype.hasOwnProperty.call(require2, name) && name !== "e") {
/******/ 		        Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 		      }
/******/ 		    }
/******/ 		    fn.e = function(chunkId) {
/******/ 		      return trackBlockingPromise(require2.e(chunkId));
/******/ 		    };
/******/ 		    return fn;
/******/ 		  }
/******/ 		  function createModuleHotObject(moduleId, me) {
/******/ 		    var _main = currentChildModule !== moduleId;
/******/ 		    var hot = {
/******/ 		      // private stuff
/******/ 		      _acceptedDependencies: {},
/******/ 		      _acceptedErrorHandlers: {},
/******/ 		      _declinedDependencies: {},
/******/ 		      _selfAccepted: false,
/******/ 		      _selfDeclined: false,
/******/ 		      _selfInvalidated: false,
/******/ 		      _disposeHandlers: [],
/******/ 		      _main,
/******/ 		      _requireSelf: function() {
/******/ 		        currentParents = me.parents.slice();
/******/ 		        currentChildModule = _main ? void 0 : moduleId;
/******/ 		        __webpack_require__(moduleId);
/******/ 		      },
/******/ 		      // Module API
/******/ 		      active: true,
/******/ 		      accept: function(dep, callback, errorHandler) {
/******/ 		        if (dep === void 0)
/******/ 		          hot._selfAccepted = true;
/******/ 		        else if (typeof dep === "function")
/******/ 		          hot._selfAccepted = dep;
/******/ 		        else if (typeof dep === "object" && dep !== null) {
/******/ 		          for (var i = 0; i < dep.length; i++) {
/******/ 		            hot._acceptedDependencies[dep[i]] = callback || function() {
/******/ 		            };
/******/ 		            hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 		          }
/******/ 		        } else {
/******/ 		          hot._acceptedDependencies[dep] = callback || function() {
/******/ 		          };
/******/ 		          hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 		        }
/******/ 		      },
/******/ 		      decline: function(dep) {
/******/ 		        if (dep === void 0)
/******/ 		          hot._selfDeclined = true;
/******/ 		        else if (typeof dep === "object" && dep !== null)
/******/ 		          for (var i = 0; i < dep.length; i++)
/******/ 		            hot._declinedDependencies[dep[i]] = true;
/******/ 		        else
/******/ 		          hot._declinedDependencies[dep] = true;
/******/ 		      },
/******/ 		      dispose: function(callback) {
/******/ 		        hot._disposeHandlers.push(callback);
/******/ 		      },
/******/ 		      addDisposeHandler: function(callback) {
/******/ 		        hot._disposeHandlers.push(callback);
/******/ 		      },
/******/ 		      removeDisposeHandler: function(callback) {
/******/ 		        var idx = hot._disposeHandlers.indexOf(callback);
/******/ 		        if (idx >= 0)
/******/ 		          hot._disposeHandlers.splice(idx, 1);
/******/ 		      },
/******/ 		      invalidate: function() {
/******/ 		        this._selfInvalidated = true;
/******/ 		        switch (currentStatus) {
/******/ 		          case "idle":
/******/ 		            currentUpdateApplyHandlers = [];
/******/ 		            Object.keys(__webpack_require__.hmrI).forEach(function(key) {
/******/ 		              __webpack_require__.hmrI[key](
/******/ 		                moduleId,
/******/ 		                currentUpdateApplyHandlers
/******/ 		              );
/******/ 		            });
/******/ 		            setStatus("ready");
/******/ 		            break;
/******/ 		          case "ready":
/******/ 		            Object.keys(__webpack_require__.hmrI).forEach(function(key) {
/******/ 		              __webpack_require__.hmrI[key](
/******/ 		                moduleId,
/******/ 		                currentUpdateApplyHandlers
/******/ 		              );
/******/ 		            });
/******/ 		            break;
/******/ 		          case "prepare":
/******/ 		          case "check":
/******/ 		          case "dispose":
/******/ 		          case "apply":
/******/ 		            (queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 		              moduleId
/******/ 		            );
/******/ 		            break;
/******/ 		          default:
/******/ 		            break;
/******/ 		        }
/******/ 		      },
/******/ 		      // Management API
/******/ 		      check: hotCheck,
/******/ 		      apply: hotApply,
/******/ 		      status: function(l) {
/******/ 		        if (!l)
/******/ 		          return currentStatus;
/******/ 		        registeredStatusHandlers.push(l);
/******/ 		      },
/******/ 		      addStatusHandler: function(l) {
/******/ 		        registeredStatusHandlers.push(l);
/******/ 		      },
/******/ 		      removeStatusHandler: function(l) {
/******/ 		        var idx = registeredStatusHandlers.indexOf(l);
/******/ 		        if (idx >= 0)
/******/ 		          registeredStatusHandlers.splice(idx, 1);
/******/ 		      },
/******/ 		      //inherit from previous dispose call
/******/ 		      data: currentModuleData[moduleId]
/******/ 		    };
/******/ 		    currentChildModule = void 0;
/******/ 		    return hot;
/******/ 		  }
/******/ 		  function setStatus(newStatus) {
/******/ 		    currentStatus = newStatus;
/******/ 		    var results = [];
/******/ 		    for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 		      results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		    return Promise.all(results);
/******/ 		  }
/******/ 		  function trackBlockingPromise(promise) {
/******/ 		    switch (currentStatus) {
/******/ 		      case "ready":
/******/ 		        setStatus("prepare");
/******/ 		        blockingPromises.push(promise);
/******/ 		        waitForBlockingPromises(function() {
/******/ 		          return setStatus("ready");
/******/ 		        });
/******/ 		        return promise;
/******/ 		      case "prepare":
/******/ 		        blockingPromises.push(promise);
/******/ 		        return promise;
/******/ 		      default:
/******/ 		        return promise;
/******/ 		    }
/******/ 		  }
/******/ 		  function waitForBlockingPromises(fn) {
/******/ 		    if (blockingPromises.length === 0)
/******/ 		      return fn();
/******/ 		    var blocker = blockingPromises;
/******/ 		    blockingPromises = [];
/******/ 		    return Promise.all(blocker).then(function() {
/******/ 		      return waitForBlockingPromises(fn);
/******/ 		    });
/******/ 		  }
/******/ 		  function hotCheck(applyOnUpdate) {
/******/ 		    if (currentStatus !== "idle") {
/******/ 		      throw new Error("check() is only allowed in idle status");
/******/ 		    }
/******/ 		    return setStatus("check").then(__webpack_require__.hmrM).then(function(update) {
/******/ 		      if (!update) {
/******/ 		        return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 		          function() {
/******/ 		            return null;
/******/ 		          }
/******/ 		        );
/******/ 		      }
/******/ 		      return setStatus("prepare").then(function() {
/******/ 		        var updatedModules = [];
/******/ 		        blockingPromises = [];
/******/ 		        currentUpdateApplyHandlers = [];
/******/ 		        return Promise.all(
/******/ 		          Object.keys(__webpack_require__.hmrC).reduce(
/******/ 		            function(promises, key) {
/******/ 		              __webpack_require__.hmrC[key](
/******/ 		                update.c,
/******/ 		                update.r,
/******/ 		                update.m,
/******/ 		                promises,
/******/ 		                currentUpdateApplyHandlers,
/******/ 		                updatedModules
/******/ 		              );
/******/ 		              return promises;
/******/ 		            },
/******/ 		            []
/******/ 		          )
/******/ 		        ).then(function() {
/******/ 		          return waitForBlockingPromises(function() {
/******/ 		            if (applyOnUpdate) {
/******/ 		              return internalApply(applyOnUpdate);
/******/ 		            } else {
/******/ 		              return setStatus("ready").then(function() {
/******/ 		                return updatedModules;
/******/ 		              });
/******/ 		            }
/******/ 		          });
/******/ 		        });
/******/ 		      });
/******/ 		    });
/******/ 		  }
/******/ 		  function hotApply(options) {
/******/ 		    if (currentStatus !== "ready") {
/******/ 		      return Promise.resolve().then(function() {
/******/ 		        throw new Error("apply() is only allowed in ready status");
/******/ 		      });
/******/ 		    }
/******/ 		    return internalApply(options);
/******/ 		  }
/******/ 		  function internalApply(options) {
/******/ 		    options = options || {};
/******/ 		    applyInvalidatedModules();
/******/ 		    var results = currentUpdateApplyHandlers.map(function(handler) {
/******/ 		      return handler(options);
/******/ 		    });
/******/ 		    currentUpdateApplyHandlers = void 0;
/******/ 		    var errors = results.map(function(r) {
/******/ 		      return r.error;
/******/ 		    }).filter(Boolean);
/******/ 		    if (errors.length > 0) {
/******/ 		      return setStatus("abort").then(function() {
/******/ 		        throw errors[0];
/******/ 		      });
/******/ 		    }
/******/ 		    var disposePromise = setStatus("dispose");
/******/ 		    results.forEach(function(result) {
/******/ 		      if (result.dispose)
/******/ 		        result.dispose();
/******/ 		    });
/******/ 		    var applyPromise = setStatus("apply");
/******/ 		    var error;
/******/ 		    var reportError = function(err) {
/******/ 		      if (!error)
/******/ 		        error = err;
/******/ 		    };
/******/ 		    var outdatedModules = [];
/******/ 		    results.forEach(function(result) {
/******/ 		      if (result.apply) {
/******/ 		        var modules = result.apply(reportError);
/******/ 		        if (modules) {
/******/ 		          for (var i = 0; i < modules.length; i++) {
/******/ 		            outdatedModules.push(modules[i]);
/******/ 		          }
/******/ 		        }
/******/ 		      }
/******/ 		    });
/******/ 		    return Promise.all([disposePromise, applyPromise]).then(function() {
/******/ 		      if (error) {
/******/ 		        return setStatus("fail").then(function() {
/******/ 		          throw error;
/******/ 		        });
/******/ 		      }
/******/ 		      if (queuedInvalidatedModules) {
/******/ 		        return internalApply(options).then(function(list) {
/******/ 		          outdatedModules.forEach(function(moduleId) {
/******/ 		            if (list.indexOf(moduleId) < 0)
/******/ 		              list.push(moduleId);
/******/ 		          });
/******/ 		          return list;
/******/ 		        });
/******/ 		      }
/******/ 		      return setStatus("idle").then(function() {
/******/ 		        return outdatedModules;
/******/ 		      });
/******/ 		    });
/******/ 		  }
/******/ 		  function applyInvalidatedModules() {
/******/ 		    if (queuedInvalidatedModules) {
/******/ 		      if (!currentUpdateApplyHandlers)
/******/ 		        currentUpdateApplyHandlers = [];
/******/ 		      Object.keys(__webpack_require__.hmrI).forEach(function(key) {
/******/ 		        queuedInvalidatedModules.forEach(function(moduleId) {
/******/ 		          __webpack_require__.hmrI[key](
/******/ 		            moduleId,
/******/ 		            currentUpdateApplyHandlers
/******/ 		          );
/******/ 		        });
/******/ 		      });
/******/ 		      queuedInvalidatedModules = void 0;
/******/ 		      return true;
/******/ 		    }
/******/ 		  }
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"runtime~main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatefrontend"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		  var currentUpdateChunks;
/******/ 		  var currentUpdate;
/******/ 		  var currentUpdateRemovedChunks;
/******/ 		  var currentUpdateRuntime;
/******/ 		  function applyHandler(options) {
/******/ 		    if (__webpack_require__.f)
/******/ 		      delete __webpack_require__.f.jsonpHmr;
/******/ 		    currentUpdateChunks = void 0;
/******/ 		    function getAffectedModuleEffects(updateModuleId) {
/******/ 		      var outdatedModules2 = [updateModuleId];
/******/ 		      var outdatedDependencies2 = {};
/******/ 		      var queue = outdatedModules2.map(function(id) {
/******/ 		        return {
/******/ 		          chain: [id],
/******/ 		          id
/******/ 		        };
/******/ 		      });
/******/ 		      while (queue.length > 0) {
/******/ 		        var queueItem = queue.pop();
/******/ 		        var moduleId2 = queueItem.id;
/******/ 		        var chain = queueItem.chain;
/******/ 		        var module3 = __webpack_require__.c[moduleId2];
/******/ 		        if (!module3 || module3.hot._selfAccepted && !module3.hot._selfInvalidated)
/******/ 		          continue;
/******/ 		        if (module3.hot._selfDeclined) {
/******/ 		          return {
/******/ 		            type: "self-declined",
/******/ 		            chain,
/******/ 		            moduleId: moduleId2
/******/ 		          };
/******/ 		        }
/******/ 		        if (module3.hot._main) {
/******/ 		          return {
/******/ 		            type: "unaccepted",
/******/ 		            chain,
/******/ 		            moduleId: moduleId2
/******/ 		          };
/******/ 		        }
/******/ 		        for (var i = 0; i < module3.parents.length; i++) {
/******/ 		          var parentId = module3.parents[i];
/******/ 		          var parent = __webpack_require__.c[parentId];
/******/ 		          if (!parent)
/******/ 		            continue;
/******/ 		          if (parent.hot._declinedDependencies[moduleId2]) {
/******/ 		            return {
/******/ 		              type: "declined",
/******/ 		              chain: chain.concat([parentId]),
/******/ 		              moduleId: moduleId2,
/******/ 		              parentId
/******/ 		            };
/******/ 		          }
/******/ 		          if (outdatedModules2.indexOf(parentId) !== -1)
/******/ 		            continue;
/******/ 		          if (parent.hot._acceptedDependencies[moduleId2]) {
/******/ 		            if (!outdatedDependencies2[parentId])
/******/ 		              outdatedDependencies2[parentId] = [];
/******/ 		            addAllToSet(outdatedDependencies2[parentId], [moduleId2]);
/******/ 		            continue;
/******/ 		          }
/******/ 		          delete outdatedDependencies2[parentId];
/******/ 		          outdatedModules2.push(parentId);
/******/ 		          queue.push({
/******/ 		            chain: chain.concat([parentId]),
/******/ 		            id: parentId
/******/ 		          });
/******/ 		        }
/******/ 		      }
/******/ 		      return {
/******/ 		        type: "accepted",
/******/ 		        moduleId: updateModuleId,
/******/ 		        outdatedModules: outdatedModules2,
/******/ 		        outdatedDependencies: outdatedDependencies2
/******/ 		      };
/******/ 		    }
/******/ 		    function addAllToSet(a, b) {
/******/ 		      for (var i = 0; i < b.length; i++) {
/******/ 		        var item = b[i];
/******/ 		        if (a.indexOf(item) === -1)
/******/ 		          a.push(item);
/******/ 		      }
/******/ 		    }
/******/ 		    var outdatedDependencies = {};
/******/ 		    var outdatedModules = [];
/******/ 		    var appliedUpdate = {};
/******/ 		    var warnUnexpectedRequire = function warnUnexpectedRequire2(module3) {
/******/ 		      console.warn(
/******/ 		        "[HMR] unexpected require(" + module3.id + ") to disposed module"
/******/ 		      );
/******/ 		    };
/******/ 		    for (var moduleId in currentUpdate) {
/******/ 		      if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 		        var newModuleFactory = currentUpdate[moduleId];
/******/ 		        var result;
/******/ 		        if (newModuleFactory) {
/******/ 		          result = getAffectedModuleEffects(moduleId);
/******/ 		        } else {
/******/ 		          result = {
/******/ 		            type: "disposed",
/******/ 		            moduleId
/******/ 		          };
/******/ 		        }
/******/ 		        var abortError = false;
/******/ 		        var doApply = false;
/******/ 		        var doDispose = false;
/******/ 		        var chainInfo = "";
/******/ 		        if (result.chain) {
/******/ 		          chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 		        }
/******/ 		        switch (result.type) {
/******/ 		          case "self-declined":
/******/ 		            if (options.onDeclined)
/******/ 		              options.onDeclined(result);
/******/ 		            if (!options.ignoreDeclined)
/******/ 		              abortError = new Error(
/******/ 		                "Aborted because of self decline: " + result.moduleId + chainInfo
/******/ 		              );
/******/ 		            break;
/******/ 		          case "declined":
/******/ 		            if (options.onDeclined)
/******/ 		              options.onDeclined(result);
/******/ 		            if (!options.ignoreDeclined)
/******/ 		              abortError = new Error(
/******/ 		                "Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo
/******/ 		              );
/******/ 		            break;
/******/ 		          case "unaccepted":
/******/ 		            if (options.onUnaccepted)
/******/ 		              options.onUnaccepted(result);
/******/ 		            if (!options.ignoreUnaccepted)
/******/ 		              abortError = new Error(
/******/ 		                "Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 		              );
/******/ 		            break;
/******/ 		          case "accepted":
/******/ 		            if (options.onAccepted)
/******/ 		              options.onAccepted(result);
/******/ 		            doApply = true;
/******/ 		            break;
/******/ 		          case "disposed":
/******/ 		            if (options.onDisposed)
/******/ 		              options.onDisposed(result);
/******/ 		            doDispose = true;
/******/ 		            break;
/******/ 		          default:
/******/ 		            throw new Error("Unexception type " + result.type);
/******/ 		        }
/******/ 		        if (abortError) {
/******/ 		          return {
/******/ 		            error: abortError
/******/ 		          };
/******/ 		        }
/******/ 		        if (doApply) {
/******/ 		          appliedUpdate[moduleId] = newModuleFactory;
/******/ 		          addAllToSet(outdatedModules, result.outdatedModules);
/******/ 		          for (moduleId in result.outdatedDependencies) {
/******/ 		            if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 		              if (!outdatedDependencies[moduleId])
/******/ 		                outdatedDependencies[moduleId] = [];
/******/ 		              addAllToSet(
/******/ 		                outdatedDependencies[moduleId],
/******/ 		                result.outdatedDependencies[moduleId]
/******/ 		              );
/******/ 		            }
/******/ 		          }
/******/ 		        }
/******/ 		        if (doDispose) {
/******/ 		          addAllToSet(outdatedModules, [result.moduleId]);
/******/ 		          appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 		        }
/******/ 		      }
/******/ 		    }
/******/ 		    currentUpdate = void 0;
/******/ 		    var outdatedSelfAcceptedModules = [];
/******/ 		    for (var j = 0; j < outdatedModules.length; j++) {
/******/ 		      var outdatedModuleId = outdatedModules[j];
/******/ 		      var module2 = __webpack_require__.c[outdatedModuleId];
/******/ 		      if (module2 && (module2.hot._selfAccepted || module2.hot._main) && // removed self-accepted modules should not be required
/******/ 		      appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire && // when called invalidate self-accepting is not possible
/******/ 		      !module2.hot._selfInvalidated) {
/******/ 		        outdatedSelfAcceptedModules.push({
/******/ 		          module: outdatedModuleId,
/******/ 		          require: module2.hot._requireSelf,
/******/ 		          errorHandler: module2.hot._selfAccepted
/******/ 		        });
/******/ 		      }
/******/ 		    }
/******/ 		    var moduleOutdatedDependencies;
/******/ 		    return {
/******/ 		      dispose: function() {
/******/ 		        currentUpdateRemovedChunks.forEach(function(chunkId) {
/******/ 		          delete installedChunks[chunkId];
/******/ 		        });
/******/ 		        currentUpdateRemovedChunks = void 0;
/******/ 		        var idx;
/******/ 		        var queue = outdatedModules.slice();
/******/ 		        while (queue.length > 0) {
/******/ 		          var moduleId2 = queue.pop();
/******/ 		          var module3 = __webpack_require__.c[moduleId2];
/******/ 		          if (!module3)
/******/ 		            continue;
/******/ 		          var data = {};
/******/ 		          var disposeHandlers = module3.hot._disposeHandlers;
/******/ 		          for (j = 0; j < disposeHandlers.length; j++) {
/******/ 		            disposeHandlers[j].call(null, data);
/******/ 		          }
/******/ 		          __webpack_require__.hmrD[moduleId2] = data;
/******/ 		          module3.hot.active = false;
/******/ 		          delete __webpack_require__.c[moduleId2];
/******/ 		          delete outdatedDependencies[moduleId2];
/******/ 		          for (j = 0; j < module3.children.length; j++) {
/******/ 		            var child = __webpack_require__.c[module3.children[j]];
/******/ 		            if (!child)
/******/ 		              continue;
/******/ 		            idx = child.parents.indexOf(moduleId2);
/******/ 		            if (idx >= 0) {
/******/ 		              child.parents.splice(idx, 1);
/******/ 		            }
/******/ 		          }
/******/ 		        }
/******/ 		        var dependency;
/******/ 		        for (var outdatedModuleId2 in outdatedDependencies) {
/******/ 		          if (__webpack_require__.o(outdatedDependencies, outdatedModuleId2)) {
/******/ 		            module3 = __webpack_require__.c[outdatedModuleId2];
/******/ 		            if (module3) {
/******/ 		              moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId2];
/******/ 		              for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 		                dependency = moduleOutdatedDependencies[j];
/******/ 		                idx = module3.children.indexOf(dependency);
/******/ 		                if (idx >= 0)
/******/ 		                  module3.children.splice(idx, 1);
/******/ 		              }
/******/ 		            }
/******/ 		          }
/******/ 		        }
/******/ 		      },
/******/ 		      apply: function(reportError) {
/******/ 		        for (var updateModuleId in appliedUpdate) {
/******/ 		          if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 		            __webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 		          }
/******/ 		        }
/******/ 		        for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 		          currentUpdateRuntime[i](__webpack_require__);
/******/ 		        }
/******/ 		        for (var outdatedModuleId2 in outdatedDependencies) {
/******/ 		          if (__webpack_require__.o(outdatedDependencies, outdatedModuleId2)) {
/******/ 		            var module3 = __webpack_require__.c[outdatedModuleId2];
/******/ 		            if (module3) {
/******/ 		              moduleOutdatedDependencies = outdatedDependencies[outdatedModuleId2];
/******/ 		              var callbacks = [];
/******/ 		              var errorHandlers = [];
/******/ 		              var dependenciesForCallbacks = [];
/******/ 		              for (var j2 = 0; j2 < moduleOutdatedDependencies.length; j2++) {
/******/ 		                var dependency = moduleOutdatedDependencies[j2];
/******/ 		                var acceptCallback = module3.hot._acceptedDependencies[dependency];
/******/ 		                var errorHandler = module3.hot._acceptedErrorHandlers[dependency];
/******/ 		                if (acceptCallback) {
/******/ 		                  if (callbacks.indexOf(acceptCallback) !== -1)
/******/ 		                    continue;
/******/ 		                  callbacks.push(acceptCallback);
/******/ 		                  errorHandlers.push(errorHandler);
/******/ 		                  dependenciesForCallbacks.push(dependency);
/******/ 		                }
/******/ 		              }
/******/ 		              for (var k = 0; k < callbacks.length; k++) {
/******/ 		                try {
/******/ 		                  callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 		                } catch (err) {
/******/ 		                  if (typeof errorHandlers[k] === "function") {
/******/ 		                    try {
/******/ 		                      errorHandlers[k](err, {
/******/ 		                        moduleId: outdatedModuleId2,
/******/ 		                        dependencyId: dependenciesForCallbacks[k]
/******/ 		                      });
/******/ 		                    } catch (err2) {
/******/ 		                      if (options.onErrored) {
/******/ 		                        options.onErrored({
/******/ 		                          type: "accept-error-handler-errored",
/******/ 		                          moduleId: outdatedModuleId2,
/******/ 		                          dependencyId: dependenciesForCallbacks[k],
/******/ 		                          error: err2,
/******/ 		                          originalError: err
/******/ 		                        });
/******/ 		                      }
/******/ 		                      if (!options.ignoreErrored) {
/******/ 		                        reportError(err2);
/******/ 		                        reportError(err);
/******/ 		                      }
/******/ 		                    }
/******/ 		                  } else {
/******/ 		                    if (options.onErrored) {
/******/ 		                      options.onErrored({
/******/ 		                        type: "accept-errored",
/******/ 		                        moduleId: outdatedModuleId2,
/******/ 		                        dependencyId: dependenciesForCallbacks[k],
/******/ 		                        error: err
/******/ 		                      });
/******/ 		                    }
/******/ 		                    if (!options.ignoreErrored) {
/******/ 		                      reportError(err);
/******/ 		                    }
/******/ 		                  }
/******/ 		                }
/******/ 		              }
/******/ 		            }
/******/ 		          }
/******/ 		        }
/******/ 		        for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 		          var item = outdatedSelfAcceptedModules[o];
/******/ 		          var moduleId2 = item.module;
/******/ 		          try {
/******/ 		            item.require(moduleId2);
/******/ 		          } catch (err) {
/******/ 		            if (typeof item.errorHandler === "function") {
/******/ 		              try {
/******/ 		                item.errorHandler(err, {
/******/ 		                  moduleId: moduleId2,
/******/ 		                  module: __webpack_require__.c[moduleId2]
/******/ 		                });
/******/ 		              } catch (err2) {
/******/ 		                if (options.onErrored) {
/******/ 		                  options.onErrored({
/******/ 		                    type: "self-accept-error-handler-errored",
/******/ 		                    moduleId: moduleId2,
/******/ 		                    error: err2,
/******/ 		                    originalError: err
/******/ 		                  });
/******/ 		                }
/******/ 		                if (!options.ignoreErrored) {
/******/ 		                  reportError(err2);
/******/ 		                  reportError(err);
/******/ 		                }
/******/ 		              }
/******/ 		            } else {
/******/ 		              if (options.onErrored) {
/******/ 		                options.onErrored({
/******/ 		                  type: "self-accept-errored",
/******/ 		                  moduleId: moduleId2,
/******/ 		                  error: err
/******/ 		                });
/******/ 		              }
/******/ 		              if (!options.ignoreErrored) {
/******/ 		                reportError(err);
/******/ 		              }
/******/ 		            }
/******/ 		          }
/******/ 		        }
/******/ 		        return outdatedModules;
/******/ 		      }
/******/ 		    };
/******/ 		  }
/******/ 		  __webpack_require__.hmrI.jsonp = function(moduleId, applyHandlers) {
/******/ 		    if (!currentUpdate) {
/******/ 		      currentUpdate = {};
/******/ 		      currentUpdateRuntime = [];
/******/ 		      currentUpdateRemovedChunks = [];
/******/ 		      applyHandlers.push(applyHandler);
/******/ 		    }
/******/ 		    if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 		      currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 		    }
/******/ 		  };
/******/ 		  __webpack_require__.hmrC.jsonp = function(chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
/******/ 		    applyHandlers.push(applyHandler);
/******/ 		    currentUpdateChunks = {};
/******/ 		    currentUpdateRemovedChunks = removedChunks;
/******/ 		    currentUpdate = removedModules.reduce(function(obj, key) {
/******/ 		      obj[key] = false;
/******/ 		      return obj;
/******/ 		    }, {});
/******/ 		    currentUpdateRuntime = [];
/******/ 		    chunkIds.forEach(function(chunkId) {
/******/ 		      if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId] !== void 0) {
/******/ 		        promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 		        currentUpdateChunks[chunkId] = true;
/******/ 		      }
/******/ 		    });
/******/ 		    if (__webpack_require__.f) {
/******/ 		      __webpack_require__.f.jsonpHmr = function(chunkId, promises2) {
/******/ 		        if (currentUpdateChunks && !__webpack_require__.o(currentUpdateChunks, chunkId) && __webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId] !== void 0) {
/******/ 		          promises2.push(loadUpdateChunk(chunkId));
/******/ 		          currentUpdateChunks[chunkId] = true;
/******/ 		        }
/******/ 		      };
/******/ 		    }
/******/ 		  };
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVudGltZX5tYWluLmQyMjEzNWZlNGI0ZjMyNGQ1ZDE1LmpzIiwibWFwcGluZ3MiOiI7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBLHNCQUFzQjtVQUN0QixvREFBb0QsdUJBQXVCO1VBQzNFO1VBQ0E7VUFDQSxHQUFHO1VBQ0g7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N4Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOzs7OztXQ0FBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsdUJBQXVCLDRCQUE0QjtXQUNuRDtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIsb0JBQW9CO1dBQ3JDO1dBQ0EsbUdBQW1HLFlBQVk7V0FDL0c7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsbUVBQW1FLGlDQUFpQztXQUNwRztXQUNBO1dBQ0E7V0FDQTs7Ozs7V0N6Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsVUFBVTtXQUNWO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFFBQVE7V0FDUjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQjtXQUMvQixnQ0FBZ0M7V0FDaEMsK0JBQStCO1dBQy9CO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE9BQU87V0FDUDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsMEJBQTBCLGdCQUFnQjtXQUMxQztXQUNBO1dBQ0E7V0FDQTtXQUNBLFVBQVU7V0FDVjtXQUNBO1dBQ0E7V0FDQTtXQUNBLE9BQU87V0FDUDtXQUNBO1dBQ0E7V0FDQTtXQUNBLDBCQUEwQixnQkFBZ0I7V0FDMUM7V0FDQTtXQUNBO1dBQ0EsT0FBTztXQUNQO1dBQ0E7V0FDQSxPQUFPO1dBQ1A7V0FDQTtXQUNBLE9BQU87V0FDUDtXQUNBO1dBQ0E7V0FDQTtXQUNBLE9BQU87V0FDUDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGFBQWE7V0FDYjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsYUFBYTtXQUNiO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE9BQU87V0FDUDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE9BQU87V0FDUDtXQUNBO1dBQ0EsT0FBTztXQUNQO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsT0FBTztXQUNQO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLG9CQUFvQixxQ0FBcUM7V0FDekQ7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxTQUFTO1dBQ1Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxhQUFhO1dBQ2I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsY0FBYztXQUNkO1dBQ0E7V0FDQSxlQUFlO1dBQ2Y7V0FDQSxXQUFXO1dBQ1gsU0FBUztXQUNULE9BQU87V0FDUCxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE9BQU87V0FDUDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQSxPQUFPO1dBQ1A7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsMEJBQTBCLG9CQUFvQjtXQUM5QztXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxXQUFXO1dBQ1g7V0FDQSxTQUFTO1dBQ1Q7V0FDQTtXQUNBO1dBQ0EsT0FBTztXQUNQLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsU0FBUztXQUNULE9BQU87V0FDUDtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NqVkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdCQUFnQiw2QkFBNkI7V0FDN0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdCQUFnQiw4QkFBOEI7V0FDOUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLFVBQVU7V0FDVixpQkFBaUIsb0JBQW9CO1dBQ3JDO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGLGlCQUFpQixvQkFBb0I7V0FDckM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQSxHQUFHO1dBQ0gsRUFBRTtXQUNGOzs7OztXQ3ZGQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxPQUFPO1dBQ1A7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0JBQXdCLDRCQUE0QjtXQUNwRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFdBQVc7V0FDWDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNCQUFzQixjQUFjO1dBQ3BDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsVUFBVTtXQUNWO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxvQkFBb0IsNEJBQTRCO1dBQ2hEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNCQUFzQiw0QkFBNEI7V0FDbEQ7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0JBQXNCLDZCQUE2QjtXQUNuRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSwwQkFBMEIsdUNBQXVDO1dBQ2pFO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxPQUFPO1dBQ1A7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0JBQXdCLGlDQUFpQztXQUN6RDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLDhCQUE4QixzQkFBc0I7V0FDcEQ7V0FDQTtXQUNBLGtCQUFrQjtXQUNsQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsdUJBQXVCO1dBQ3ZCLHNCQUFzQjtXQUN0QjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlCQUF5QjtXQUN6QjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxvQkFBb0I7V0FDcEI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsdUJBQXVCO1dBQ3ZCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0JBQXdCLHdDQUF3QztXQUNoRTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFlBQVk7V0FDWjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCO1dBQ2pCLGdCQUFnQjtXQUNoQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxtQkFBbUI7V0FDbkI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsY0FBYztXQUNkO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUI7V0FDakI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUssSUFBSTtXQUNUO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0Esc0NBQXNDO1dBQ3RDO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7O1dBRUE7O1dBRUE7Ozs7O1VFcGNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IHVwZGF0ZSBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXQgdXBkYXRlIG1hbmlmZXN0IGZpbGVuYW1lIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9jc3MgbG9hZGluZyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChjYWNoZWRNb2R1bGUuZXJyb3IgIT09IHVuZGVmaW5lZCkgdGhyb3cgY2FjaGVkTW9kdWxlLmVycm9yO1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR0cnkge1xuXHRcdHZhciBleGVjT3B0aW9ucyA9IHsgaWQ6IG1vZHVsZUlkLCBtb2R1bGU6IG1vZHVsZSwgZmFjdG9yeTogX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0sIHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18gfTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0XHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG5cdFx0ZXhlY09wdGlvbnMuZmFjdG9yeS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBleGVjT3B0aW9ucy5yZXF1aXJlKTtcblx0fSBjYXRjaChlKSB7XG5cdFx0bW9kdWxlLmVycm9yID0gZTtcblx0XHR0aHJvdyBlO1xuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcblxuIiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYWxsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5odSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwicnVudGltZV9tYWluLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzb25cIik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTQzNDhmNjkwNzYyNWFkOGQ3MTBcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJmcm9udGVuZDpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHQ7XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIiAgdmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gIHZhciBpbnN0YWxsZWRNb2R1bGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jO1xuICB2YXIgY3VycmVudENoaWxkTW9kdWxlO1xuICB2YXIgY3VycmVudFBhcmVudHMgPSBbXTtcbiAgdmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xuICB2YXIgY3VycmVudFN0YXR1cyA9IFwiaWRsZVwiO1xuICB2YXIgYmxvY2tpbmdQcm9taXNlcztcbiAgdmFyIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzO1xuICB2YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuICBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckQgPSBjdXJyZW50TW9kdWxlRGF0YTtcbiAgX193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBtb2R1bGUyID0gb3B0aW9ucy5tb2R1bGU7XG4gICAgdmFyIHJlcXVpcmUyID0gY3JlYXRlUmVxdWlyZShvcHRpb25zLnJlcXVpcmUsIG9wdGlvbnMuaWQpO1xuICAgIG1vZHVsZTIuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZTIpO1xuICAgIG1vZHVsZTIucGFyZW50cyA9IGN1cnJlbnRQYXJlbnRzO1xuICAgIG1vZHVsZTIuY2hpbGRyZW4gPSBbXTtcbiAgICBjdXJyZW50UGFyZW50cyA9IFtdO1xuICAgIG9wdGlvbnMucmVxdWlyZSA9IHJlcXVpcmUyO1xuICB9KTtcbiAgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDID0ge307XG4gIF9fd2VicGFja19yZXF1aXJlX18uaG1ySSA9IHt9O1xuICBmdW5jdGlvbiBjcmVhdGVSZXF1aXJlKHJlcXVpcmUyLCBtb2R1bGVJZCkge1xuICAgIHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuICAgIGlmICghbWUpXG4gICAgICByZXR1cm4gcmVxdWlyZTI7XG4gICAgdmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgICAgaWYgKG1lLmhvdC5hY3RpdmUpIHtcbiAgICAgICAgaWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiAgICAgICAgICB2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcbiAgICAgICAgICBpZiAocGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiAgICAgICAgICBjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuICAgICAgICAgIG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlcXVlc3QgKyBcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgKyBtb2R1bGVJZFxuICAgICAgICApO1xuICAgICAgICBjdXJyZW50UGFyZW50cyA9IFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcXVpcmUyKHJlcXVlc3QpO1xuICAgIH07XG4gICAgdmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uKG5hbWUyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHJlcXVpcmUyW25hbWUyXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIHJlcXVpcmUyW25hbWUyXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gICAgZm9yICh2YXIgbmFtZSBpbiByZXF1aXJlMikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXF1aXJlMiwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IobmFtZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuICAgICAgcmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUyLmUoY2h1bmtJZCkpO1xuICAgIH07XG4gICAgcmV0dXJuIGZuO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZU1vZHVsZUhvdE9iamVjdChtb2R1bGVJZCwgbWUpIHtcbiAgICB2YXIgX21haW4gPSBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkO1xuICAgIHZhciBob3QgPSB7XG4gICAgICAvLyBwcml2YXRlIHN0dWZmXG4gICAgICBfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuICAgICAgX2FjY2VwdGVkRXJyb3JIYW5kbGVyczoge30sXG4gICAgICBfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuICAgICAgX3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gICAgICBfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiAgICAgIF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuICAgICAgX2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gICAgICBfbWFpbixcbiAgICAgIF9yZXF1aXJlU2VsZjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGN1cnJlbnRQYXJlbnRzID0gbWUucGFyZW50cy5zbGljZSgpO1xuICAgICAgICBjdXJyZW50Q2hpbGRNb2R1bGUgPSBfbWFpbiA/IHZvaWQgMCA6IG1vZHVsZUlkO1xuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiAgICAgIH0sXG4gICAgICAvLyBNb2R1bGUgQVBJXG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgICBhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2ssIGVycm9ySGFuZGxlcikge1xuICAgICAgICBpZiAoZGVwID09PSB2b2lkIDApXG4gICAgICAgICAgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIgJiYgZGVwICE9PSBudWxsKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcFtpXV0gPSBlcnJvckhhbmRsZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIH07XG4gICAgICAgICAgaG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwXSA9IGVycm9ySGFuZGxlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuICAgICAgICBpZiAoZGVwID09PSB2b2lkIDApXG4gICAgICAgICAgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuICAgICAgfSxcbiAgICAgIGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuICAgICAgfSxcbiAgICAgIGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICBob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICBpZiAoaWR4ID49IDApXG4gICAgICAgICAgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9LFxuICAgICAgaW52YWxpZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICAgIHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuICAgICAgICAgIGNhc2UgXCJpZGxlXCI6XG4gICAgICAgICAgICBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcbiAgICAgICAgICAgICAgICBtb2R1bGVJZCxcbiAgICAgICAgICAgICAgICBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJyZWFkeVwiOlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcbiAgICAgICAgICAgICAgICBtb2R1bGVJZCxcbiAgICAgICAgICAgICAgICBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwicHJlcGFyZVwiOlxuICAgICAgICAgIGNhc2UgXCJjaGVja1wiOlxuICAgICAgICAgIGNhc2UgXCJkaXNwb3NlXCI6XG4gICAgICAgICAgY2FzZSBcImFwcGx5XCI6XG4gICAgICAgICAgICAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuICAgICAgICAgICAgICBtb2R1bGVJZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIE1hbmFnZW1lbnQgQVBJXG4gICAgICBjaGVjazogaG90Q2hlY2ssXG4gICAgICBhcHBseTogaG90QXBwbHksXG4gICAgICBzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgaWYgKCFsKVxuICAgICAgICAgIHJldHVybiBjdXJyZW50U3RhdHVzO1xuICAgICAgICByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiAgICAgIH0sXG4gICAgICBhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gICAgICAgIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiAgICAgICAgdmFyIGlkeCA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuICAgICAgICBpZiAoaWR4ID49IDApXG4gICAgICAgICAgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuICAgICAgfSxcbiAgICAgIC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuICAgICAgZGF0YTogY3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gICAgfTtcbiAgICBjdXJyZW50Q2hpbGRNb2R1bGUgPSB2b2lkIDA7XG4gICAgcmV0dXJuIGhvdDtcbiAgfVxuICBmdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gICAgY3VycmVudFN0YXR1cyA9IG5ld1N0YXR1cztcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuICAgICAgcmVzdWx0c1tpXSA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpO1xuICB9XG4gIGZ1bmN0aW9uIHRyYWNrQmxvY2tpbmdQcm9taXNlKHByb21pc2UpIHtcbiAgICBzd2l0Y2ggKGN1cnJlbnRTdGF0dXMpIHtcbiAgICAgIGNhc2UgXCJyZWFkeVwiOlxuICAgICAgICBzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuICAgICAgICBibG9ja2luZ1Byb21pc2VzLnB1c2gocHJvbWlzZSk7XG4gICAgICAgIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBzZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgY2FzZSBcInByZXBhcmVcIjpcbiAgICAgICAgYmxvY2tpbmdQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmbikge1xuICAgIGlmIChibG9ja2luZ1Byb21pc2VzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiBmbigpO1xuICAgIHZhciBibG9ja2VyID0gYmxvY2tpbmdQcm9taXNlcztcbiAgICBibG9ja2luZ1Byb21pc2VzID0gW107XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGJsb2NrZXIpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcbiAgICBpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gc2V0U3RhdHVzKFwiY2hlY2tcIikudGhlbihfX3dlYnBhY2tfcmVxdWlyZV9fLmhtck0pLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gICAgICBpZiAoIXVwZGF0ZSkge1xuICAgICAgICByZXR1cm4gc2V0U3RhdHVzKGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIikudGhlbihcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXRTdGF0dXMoXCJwcmVwYXJlXCIpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuICAgICAgICBibG9ja2luZ1Byb21pc2VzID0gW107XG4gICAgICAgIGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgICAgICBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMpLnJlZHVjZShcbiAgICAgICAgICAgIGZ1bmN0aW9uKHByb21pc2VzLCBrZXkpIHtcbiAgICAgICAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDW2tleV0oXG4gICAgICAgICAgICAgICAgdXBkYXRlLmMsXG4gICAgICAgICAgICAgICAgdXBkYXRlLnIsXG4gICAgICAgICAgICAgICAgdXBkYXRlLm0sXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMsXG4gICAgICAgICAgICAgICAgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMsXG4gICAgICAgICAgICAgICAgdXBkYXRlZE1vZHVsZXNcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtdXG4gICAgICAgICAgKVxuICAgICAgICApLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGFwcGx5T25VcGRhdGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGludGVybmFsQXBwbHkoYXBwbHlPblVwZGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gc2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiAgICBpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBpbnRlcm5hbEFwcGx5KG9wdGlvbnMpO1xuICB9XG4gIGZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG4gICAgdmFyIHJlc3VsdHMgPSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycy5tYXAoZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgcmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG4gICAgfSk7XG4gICAgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSB2b2lkIDA7XG4gICAgdmFyIGVycm9ycyA9IHJlc3VsdHMubWFwKGZ1bmN0aW9uKHIpIHtcbiAgICAgIHJldHVybiByLmVycm9yO1xuICAgIH0pLmZpbHRlcihCb29sZWFuKTtcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBzZXRTdGF0dXMoXCJhYm9ydFwiKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICB0aHJvdyBlcnJvcnNbMF07XG4gICAgICB9KTtcbiAgICB9XG4gICAgdmFyIGRpc3Bvc2VQcm9taXNlID0gc2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICBpZiAocmVzdWx0LmRpc3Bvc2UpXG4gICAgICAgIHJlc3VsdC5kaXNwb3NlKCk7XG4gICAgfSk7XG4gICAgdmFyIGFwcGx5UHJvbWlzZSA9IHNldFN0YXR1cyhcImFwcGx5XCIpO1xuICAgIHZhciBlcnJvcjtcbiAgICB2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGlmICghZXJyb3IpXG4gICAgICAgIGVycm9yID0gZXJyO1xuICAgIH07XG4gICAgdmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuICAgIHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgIGlmIChyZXN1bHQuYXBwbHkpIHtcbiAgICAgICAgdmFyIG1vZHVsZXMgPSByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuICAgICAgICBpZiAobW9kdWxlcykge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb3V0ZGF0ZWRNb2R1bGVzLnB1c2gobW9kdWxlc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtkaXNwb3NlUHJvbWlzZSwgYXBwbHlQcm9taXNlXSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gc2V0U3RhdHVzKFwiZmFpbFwiKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbiAgICAgICAgcmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbihsaXN0KSB7XG4gICAgICAgICAgb3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcbiAgICAgICAgICAgIGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMClcbiAgICAgICAgICAgICAgbGlzdC5wdXNoKG1vZHVsZUlkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2V0U3RhdHVzKFwiaWRsZVwiKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG4gICAgaWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuICAgICAgaWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycylcbiAgICAgICAgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcbiAgICAgIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24obW9kdWxlSWQpIHtcbiAgICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcbiAgICAgICAgICAgIG1vZHVsZUlkLFxuICAgICAgICAgICAgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gdm9pZCAwO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG52YXIgY3JlYXRlU3R5bGVzaGVldCA9IChjaHVua0lkLCBmdWxsaHJlZiwgb2xkVGFnLCByZXNvbHZlLCByZWplY3QpID0+IHtcblx0dmFyIGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRsaW5rVGFnLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRsaW5rVGFnLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdHZhciBvbkxpbmtDb21wbGV0ZSA9IChldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcy5cblx0XHRsaW5rVGFnLm9uZXJyb3IgPSBsaW5rVGFnLm9ubG9hZCA9IG51bGw7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJykge1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0dmFyIHJlYWxIcmVmID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5ocmVmIHx8IGZ1bGxocmVmO1xuXHRcdFx0dmFyIGVyciA9IG5ldyBFcnJvcihcIkxvYWRpbmcgQ1NTIGNodW5rIFwiICsgY2h1bmtJZCArIFwiIGZhaWxlZC5cXG4oXCIgKyByZWFsSHJlZiArIFwiKVwiKTtcblx0XHRcdGVyci5jb2RlID0gXCJDU1NfQ0hVTktfTE9BRF9GQUlMRURcIjtcblx0XHRcdGVyci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0ZXJyLnJlcXVlc3QgPSByZWFsSHJlZjtcblx0XHRcdGlmIChsaW5rVGFnLnBhcmVudE5vZGUpIGxpbmtUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rVGFnKVxuXHRcdFx0cmVqZWN0KGVycik7XG5cdFx0fVxuXHR9XG5cdGxpbmtUYWcub25lcnJvciA9IGxpbmtUYWcub25sb2FkID0gb25MaW5rQ29tcGxldGU7XG5cdGxpbmtUYWcuaHJlZiA9IGZ1bGxocmVmO1xuXG5cdGlmIChvbGRUYWcpIHtcblx0XHRvbGRUYWcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobGlua1RhZywgb2xkVGFnLm5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtUYWcpO1xuXHR9XG5cdHJldHVybiBsaW5rVGFnO1xufTtcbnZhciBmaW5kU3R5bGVzaGVldCA9IChocmVmLCBmdWxsaHJlZikgPT4ge1xuXHR2YXIgZXhpc3RpbmdMaW5rVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nTGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGFnID0gZXhpc3RpbmdMaW5rVGFnc1tpXTtcblx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpIHx8IHRhZy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuXHRcdGlmKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gdGFnO1xuXHR9XG5cdHZhciBleGlzdGluZ1N0eWxlVGFncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3R5bGVcIik7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0YWcgPSBleGlzdGluZ1N0eWxlVGFnc1tpXTtcblx0XHR2YXIgZGF0YUhyZWYgPSB0YWcuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpO1xuXHRcdGlmKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikgcmV0dXJuIHRhZztcblx0fVxufTtcbnZhciBsb2FkU3R5bGVzaGVldCA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0dmFyIGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGKGNodW5rSWQpO1xuXHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG5cdFx0aWYoZmluZFN0eWxlc2hlZXQoaHJlZiwgZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuXHRcdGNyZWF0ZVN0eWxlc2hlZXQoY2h1bmtJZCwgZnVsbGhyZWYsIG51bGwsIHJlc29sdmUsIHJlamVjdCk7XG5cdH0pO1xufVxuLy8gbm8gY2h1bmsgbG9hZGluZ1xuXG52YXIgb2xkVGFncyA9IFtdO1xudmFyIG5ld1RhZ3MgPSBbXTtcbnZhciBhcHBseUhhbmRsZXIgPSAob3B0aW9ucykgPT4ge1xuXHRyZXR1cm4geyBkaXNwb3NlOiAoKSA9PiB7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG9sZFRhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBvbGRUYWcgPSBvbGRUYWdzW2ldO1xuXHRcdFx0aWYob2xkVGFnLnBhcmVudE5vZGUpIG9sZFRhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9sZFRhZyk7XG5cdFx0fVxuXHRcdG9sZFRhZ3MubGVuZ3RoID0gMDtcblx0fSwgYXBwbHk6ICgpID0+IHtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbmV3VGFncy5sZW5ndGg7IGkrKykgbmV3VGFnc1tpXS5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0XHRuZXdUYWdzLmxlbmd0aCA9IDA7XG5cdH0gfTtcbn1cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQy5taW5pQ3NzID0gKGNodW5rSWRzLCByZW1vdmVkQ2h1bmtzLCByZW1vdmVkTW9kdWxlcywgcHJvbWlzZXMsIGFwcGx5SGFuZGxlcnMsIHVwZGF0ZWRNb2R1bGVzTGlzdCkgPT4ge1xuXHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0Y2h1bmtJZHMuZm9yRWFjaCgoY2h1bmtJZCkgPT4ge1xuXHRcdHZhciBocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRihjaHVua0lkKTtcblx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuXHRcdHZhciBvbGRUYWcgPSBmaW5kU3R5bGVzaGVldChocmVmLCBmdWxsaHJlZik7XG5cdFx0aWYoIW9sZFRhZykgcmV0dXJuO1xuXHRcdHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dmFyIHRhZyA9IGNyZWF0ZVN0eWxlc2hlZXQoY2h1bmtJZCwgZnVsbGhyZWYsIG9sZFRhZywgKCkgPT4ge1xuXHRcdFx0XHR0YWcuYXMgPSBcInN0eWxlXCI7XG5cdFx0XHRcdHRhZy5yZWwgPSBcInByZWxvYWRcIjtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSwgcmVqZWN0KTtcblx0XHRcdG9sZFRhZ3MucHVzaChvbGRUYWcpO1xuXHRcdFx0bmV3VGFncy5wdXNoKHRhZyk7XG5cdFx0fSkpO1xuXHR9KTtcbn0iLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCB8fCB7XG5cdFwicnVudGltZX5tYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG52YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbnZhciB3YWl0aW5nVXBkYXRlUmVzb2x2ZXMgPSB7fTtcbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gcmVzb2x2ZTtcblx0XHQvLyBzdGFydCB1cGRhdGUgY2h1bmsgbG9hZGluZ1xuXHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpO1xuXHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHRcdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkXG5cdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBob3QgdXBkYXRlIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkKTtcblx0fSk7XG59XG5cbnNlbGZbXCJ3ZWJwYWNrSG90VXBkYXRlZnJvbnRlbmRcIl0gPSAoY2h1bmtJZCwgbW9yZU1vZHVsZXMsIHJ1bnRpbWUpID0+IHtcblx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdGlmKGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QpIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIGN1cnJlbnRVcGRhdGVSdW50aW1lLnB1c2gocnVudGltZSk7XG5cdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSgpO1xuXHRcdHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0fVxufTtcblxuICB2YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbiAgdmFyIGN1cnJlbnRVcGRhdGU7XG4gIHZhciBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcztcbiAgdmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuICBmdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuICAgIGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpXG4gICAgICBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yO1xuICAgIGN1cnJlbnRVcGRhdGVDaHVua3MgPSB2b2lkIDA7XG4gICAgZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKHVwZGF0ZU1vZHVsZUlkKSB7XG4gICAgICB2YXIgb3V0ZGF0ZWRNb2R1bGVzMiA9IFt1cGRhdGVNb2R1bGVJZF07XG4gICAgICB2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMyID0ge307XG4gICAgICB2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMyLm1hcChmdW5jdGlvbihpZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoYWluOiBbaWRdLFxuICAgICAgICAgIGlkXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBxdWV1ZUl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiAgICAgICAgdmFyIG1vZHVsZUlkMiA9IHF1ZXVlSXRlbS5pZDtcbiAgICAgICAgdmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuICAgICAgICB2YXIgbW9kdWxlMyA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZDJdO1xuICAgICAgICBpZiAoIW1vZHVsZTMgfHwgbW9kdWxlMy5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlMy5ob3QuX3NlbGZJbnZhbGlkYXRlZClcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgaWYgKG1vZHVsZTMuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gICAgICAgICAgICBjaGFpbixcbiAgICAgICAgICAgIG1vZHVsZUlkOiBtb2R1bGVJZDJcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2R1bGUzLmhvdC5fbWFpbikge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiAgICAgICAgICAgIGNoYWluLFxuICAgICAgICAgICAgbW9kdWxlSWQ6IG1vZHVsZUlkMlxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUzLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgcGFyZW50SWQgPSBtb2R1bGUzLnBhcmVudHNbaV07XG4gICAgICAgICAgdmFyIHBhcmVudCA9IF9fd2VicGFja19yZXF1aXJlX18uY1twYXJlbnRJZF07XG4gICAgICAgICAgaWYgKCFwYXJlbnQpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICBpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWQyXSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJkZWNsaW5lZFwiLFxuICAgICAgICAgICAgICBjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuICAgICAgICAgICAgICBtb2R1bGVJZDogbW9kdWxlSWQyLFxuICAgICAgICAgICAgICBwYXJlbnRJZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG91dGRhdGVkTW9kdWxlczIuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgaWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkMl0pIHtcbiAgICAgICAgICAgIGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXMyW3BhcmVudElkXSlcbiAgICAgICAgICAgICAgb3V0ZGF0ZWREZXBlbmRlbmNpZXMyW3BhcmVudElkXSA9IFtdO1xuICAgICAgICAgICAgYWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXMyW3BhcmVudElkXSwgW21vZHVsZUlkMl0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llczJbcGFyZW50SWRdO1xuICAgICAgICAgIG91dGRhdGVkTW9kdWxlczIucHVzaChwYXJlbnRJZCk7XG4gICAgICAgICAgcXVldWUucHVzaCh7XG4gICAgICAgICAgICBjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuICAgICAgICAgICAgaWQ6IHBhcmVudElkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwiYWNjZXB0ZWRcIixcbiAgICAgICAgbW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuICAgICAgICBvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlczIsXG4gICAgICAgIG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llczJcbiAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgaXRlbSA9IGJbaV07XG4gICAgICAgIGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKVxuICAgICAgICAgIGEucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gICAgdmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuICAgIHZhciBhcHBsaWVkVXBkYXRlID0ge307XG4gICAgdmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZTIobW9kdWxlMykge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZTMuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiAgICAgICk7XG4gICAgfTtcbiAgICBmb3IgKHZhciBtb2R1bGVJZCBpbiBjdXJyZW50VXBkYXRlKSB7XG4gICAgICBpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuICAgICAgICB2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICBpZiAobmV3TW9kdWxlRmFjdG9yeSkge1xuICAgICAgICAgIHJlc3VsdCA9IGdldEFmZmVjdGVkTW9kdWxlRWZmZWN0cyhtb2R1bGVJZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0ge1xuICAgICAgICAgICAgdHlwZTogXCJkaXNwb3NlZFwiLFxuICAgICAgICAgICAgbW9kdWxlSWRcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gICAgICAgIHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gICAgICAgIHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiAgICAgICAgdmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gICAgICAgIGlmIChyZXN1bHQuY2hhaW4pIHtcbiAgICAgICAgICBjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChyZXN1bHQudHlwZSkge1xuICAgICAgICAgIGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vbkRlY2xpbmVkKVxuICAgICAgICAgICAgICBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiAgICAgICAgICAgICAgYWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgY2hhaW5JbmZvXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiZGVjbGluZWRcIjpcbiAgICAgICAgICAgIGlmIChvcHRpb25zLm9uRGVjbGluZWQpXG4gICAgICAgICAgICAgIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuICAgICAgICAgICAgICBhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIgaW4gXCIgKyByZXN1bHQucGFyZW50SWQgKyBjaGFpbkluZm9cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpXG4gICAgICAgICAgICAgIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiAgICAgICAgICAgICAgYWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJhY2NlcHRlZFwiOlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub25BY2NlcHRlZClcbiAgICAgICAgICAgICAgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gICAgICAgICAgICBkb0FwcGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJkaXNwb3NlZFwiOlxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub25EaXNwb3NlZClcbiAgICAgICAgICAgICAgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gICAgICAgICAgICBkb0Rpc3Bvc2UgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFib3J0RXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXJyb3I6IGFib3J0RXJyb3JcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChkb0FwcGx5KSB7XG4gICAgICAgICAgYXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBuZXdNb2R1bGVGYWN0b3J5O1xuICAgICAgICAgIGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gICAgICAgICAgZm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiAgICAgICAgICAgIGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ocmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZCkpIHtcbiAgICAgICAgICAgICAgaWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gICAgICAgICAgICAgICAgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gICAgICAgICAgICAgIGFkZEFsbFRvU2V0KFxuICAgICAgICAgICAgICAgIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiAgICAgICAgICAgICAgICByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkb0Rpc3Bvc2UpIHtcbiAgICAgICAgICBhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiAgICAgICAgICBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjdXJyZW50VXBkYXRlID0gdm9pZCAwO1xuICAgIHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIG91dGRhdGVkTW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbal07XG4gICAgICB2YXIgbW9kdWxlMiA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcbiAgICAgIGlmIChtb2R1bGUyICYmIChtb2R1bGUyLmhvdC5fc2VsZkFjY2VwdGVkIHx8IG1vZHVsZTIuaG90Ll9tYWluKSAmJiAvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG4gICAgICBhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiYgLy8gd2hlbiBjYWxsZWQgaW52YWxpZGF0ZSBzZWxmLWFjY2VwdGluZyBpcyBub3QgcG9zc2libGVcbiAgICAgICFtb2R1bGUyLmhvdC5fc2VsZkludmFsaWRhdGVkKSB7XG4gICAgICAgIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiAgICAgICAgICBtb2R1bGU6IG91dGRhdGVkTW9kdWxlSWQsXG4gICAgICAgICAgcmVxdWlyZTogbW9kdWxlMi5ob3QuX3JlcXVpcmVTZWxmLFxuICAgICAgICAgIGVycm9ySGFuZGxlcjogbW9kdWxlMi5ob3QuX3NlbGZBY2NlcHRlZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuICAgIHJldHVybiB7XG4gICAgICBkaXNwb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gICAgICAgICAgZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiAgICAgICAgfSk7XG4gICAgICAgIGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdm9pZCAwO1xuICAgICAgICB2YXIgaWR4O1xuICAgICAgICB2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB2YXIgbW9kdWxlSWQyID0gcXVldWUucG9wKCk7XG4gICAgICAgICAgdmFyIG1vZHVsZTMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlSWQyXTtcbiAgICAgICAgICBpZiAoIW1vZHVsZTMpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICAgIHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUzLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGRpc3Bvc2VIYW5kbGVyc1tqXS5jYWxsKG51bGwsIGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckRbbW9kdWxlSWQyXSA9IGRhdGE7XG4gICAgICAgICAgbW9kdWxlMy5ob3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZDJdO1xuICAgICAgICAgIGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZDJdO1xuICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBtb2R1bGUzLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlMy5jaGlsZHJlbltqXV07XG4gICAgICAgICAgICBpZiAoIWNoaWxkKVxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZDIpO1xuICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICAgIGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBkZXBlbmRlbmN5O1xuICAgICAgICBmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkMiBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuICAgICAgICAgIGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQyKSkge1xuICAgICAgICAgICAgbW9kdWxlMyA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkMl07XG4gICAgICAgICAgICBpZiAobW9kdWxlMykge1xuICAgICAgICAgICAgICBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWQyXTtcbiAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuICAgICAgICAgICAgICAgIGlkeCA9IG1vZHVsZTMuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiAgICAgICAgICAgICAgICBpZiAoaWR4ID49IDApXG4gICAgICAgICAgICAgICAgICBtb2R1bGUzLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXBwbHk6IGZ1bmN0aW9uKHJlcG9ydEVycm9yKSB7XG4gICAgICAgIGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiAgICAgICAgICBpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGFwcGxpZWRVcGRhdGUsIHVwZGF0ZU1vZHVsZUlkKSkge1xuICAgICAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5tW3VwZGF0ZU1vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbdXBkYXRlTW9kdWxlSWRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRVcGRhdGVSdW50aW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZDIgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiAgICAgICAgICBpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkMikpIHtcbiAgICAgICAgICAgIHZhciBtb2R1bGUzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW291dGRhdGVkTW9kdWxlSWQyXTtcbiAgICAgICAgICAgIGlmIChtb2R1bGUzKSB7XG4gICAgICAgICAgICAgIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbb3V0ZGF0ZWRNb2R1bGVJZDJdO1xuICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gW107XG4gICAgICAgICAgICAgIHZhciBlcnJvckhhbmRsZXJzID0gW107XG4gICAgICAgICAgICAgIHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcbiAgICAgICAgICAgICAgZm9yICh2YXIgajIgPSAwOyBqMiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgajIrKykge1xuICAgICAgICAgICAgICAgIHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbajJdO1xuICAgICAgICAgICAgICAgIHZhciBhY2NlcHRDYWxsYmFjayA9IG1vZHVsZTMuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3JIYW5kbGVyID0gbW9kdWxlMy5ob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBlbmRlbmN5XTtcbiAgICAgICAgICAgICAgICBpZiAoYWNjZXB0Q2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3MuaW5kZXhPZihhY2NlcHRDYWxsYmFjaykgIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGFjY2VwdENhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgIGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzLnB1c2goZGVwZW5kZW5jeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgY2FsbGJhY2tzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyb3JIYW5kbGVyc1trXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyc1trXShlcnIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25FcnJvcmVkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyMik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbkVycm9yZWQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbb107XG4gICAgICAgICAgdmFyIG1vZHVsZUlkMiA9IGl0ZW0ubW9kdWxlO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpdGVtLnJlcXVpcmUobW9kdWxlSWQyKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGl0ZW0uZXJyb3JIYW5kbGVyKGVyciwge1xuICAgICAgICAgICAgICAgICAgbW9kdWxlSWQ6IG1vZHVsZUlkMixcbiAgICAgICAgICAgICAgICAgIG1vZHVsZTogX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkMl1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbkVycm9yZWQoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuICAgICAgICAgICAgICAgICAgICBtb2R1bGVJZDogbW9kdWxlSWQyLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyMixcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycjIpO1xuICAgICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMub25FcnJvcmVkKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuICAgICAgICAgICAgICAgICAgbW9kdWxlSWQ6IG1vZHVsZUlkMixcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dGRhdGVkTW9kdWxlcztcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIF9fd2VicGFja19yZXF1aXJlX18uaG1ySS5qc29ucCA9IGZ1bmN0aW9uKG1vZHVsZUlkLCBhcHBseUhhbmRsZXJzKSB7XG4gICAgaWYgKCFjdXJyZW50VXBkYXRlKSB7XG4gICAgICBjdXJyZW50VXBkYXRlID0ge307XG4gICAgICBjdXJyZW50VXBkYXRlUnVudGltZSA9IFtdO1xuICAgICAgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcbiAgICAgIGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuICAgIH1cbiAgICBpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcbiAgICAgIGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gX193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXTtcbiAgICB9XG4gIH07XG4gIF9fd2VicGFja19yZXF1aXJlX18uaG1yQy5qc29ucCA9IGZ1bmN0aW9uKGNodW5rSWRzLCByZW1vdmVkQ2h1bmtzLCByZW1vdmVkTW9kdWxlcywgcHJvbWlzZXMsIGFwcGx5SGFuZGxlcnMsIHVwZGF0ZWRNb2R1bGVzTGlzdCkge1xuICAgIGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuICAgIGN1cnJlbnRVcGRhdGVDaHVua3MgPSB7fTtcbiAgICBjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyA9IHJlbW92ZWRDaHVua3M7XG4gICAgY3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbihvYmosIGtleSkge1xuICAgICAgb2JqW2tleV0gPSBmYWxzZTtcbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSwge30pO1xuICAgIGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG4gICAgY2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbihjaHVua0lkKSB7XG4gICAgICBpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSB2b2lkIDApIHtcbiAgICAgICAgcHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG4gICAgICAgIGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIHtcbiAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtciA9IGZ1bmN0aW9uKGNodW5rSWQsIHByb21pc2VzMikge1xuICAgICAgICBpZiAoY3VycmVudFVwZGF0ZUNodW5rcyAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGVDaHVua3MsIGNodW5rSWQpICYmIF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgcHJvbWlzZXMyLnB1c2gobG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpKTtcbiAgICAgICAgICBjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0OiBuZWVkIGZldGNoIEFQSVwiKTtcblx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47IC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcblx0XHRpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1cGRhdGUgbWFuaWZlc3QgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIiLCIvLyBtb2R1bGUgY2FjaGUgYXJlIHVzZWQgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./events");
require("./fs");
var events_1 = require("../common/events");
var timers_1 = require("../common/timers");
var utils_1 = require("../common/utils");
var set = 'set';
var clear = 'clear';
Zone.__load_patch('node_util', function (global, Zone, api) {
    api.patchOnProperties = utils_1.patchOnProperties;
    api.patchMethod = utils_1.patchMethod;
    api.patchArguments = utils_1.patchArguments;
});
Zone.__load_patch('node_timers', function (global, Zone, api) {
    // Timers
    var globalUseTimeoutFromTimer = false;
    try {
        var timers = require('timers');
        var globalEqualTimersTimeout = global.setTimeout === timers.setTimeout;
        if (!globalEqualTimersTimeout && !utils_1.isMix) {
            // 1. if isMix, then we are in mix environment such as Electron
            // we should only patch timers.setTimeout because global.setTimeout
            // have been patched
            // 2. if global.setTimeout not equal timers.setTimeout, check
            // whether global.setTimeout use timers.setTimeout or not
            var originSetTimeout_1 = timers.setTimeout;
            timers.setTimeout = function () {
                globalUseTimeoutFromTimer = true;
                return originSetTimeout_1.apply(this, arguments);
            };
            var detectTimeout = global.setTimeout(function () { }, 100);
            clearTimeout(detectTimeout);
            timers.setTimeout = originSetTimeout_1;
        }
        timers_1.patchTimer(timers, set, clear, 'Timeout');
        timers_1.patchTimer(timers, set, clear, 'Interval');
        timers_1.patchTimer(timers, set, clear, 'Immediate');
    }
    catch (error) {
        // timers module not exists, for example, when we using nativescript
        // timers is not available
    }
    if (utils_1.isMix) {
        // if we are in mix environment, such as Electron,
        // the global.setTimeout has already been patched,
        // so we just patch timers.setTimeout
        return;
    }
    if (!globalUseTimeoutFromTimer) {
        // 1. global setTimeout equals timers setTimeout
        // 2. or global don't use timers setTimeout(maybe some other library patch setTimeout)
        // 3. or load timers module error happens, we should patch global setTimeout
        timers_1.patchTimer(global, set, clear, 'Timeout');
        timers_1.patchTimer(global, set, clear, 'Interval');
        timers_1.patchTimer(global, set, clear, 'Immediate');
    }
    else {
        // global use timers setTimeout, but not equals
        // this happenes when use nodejs v0.10.x, global setTimeout will
        // use a lazy load version of timers setTimeout
        // we should not double patch timer's setTimeout
        // so we only store the __symbol__ for consistency
        global[Zone.__symbol__('setTimeout')] = global.setTimeout;
        global[Zone.__symbol__('setInterval')] = global.setInterval;
        global[Zone.__symbol__('setImmediate')] = global.setImmediate;
    }
});
// patch process related methods
Zone.__load_patch('nextTick', function (global, Zone, api) {
    // patch nextTick as microTask
    utils_1.patchMicroTask(process, 'nextTick', function (self, args) {
        return {
            name: 'process.nextTick',
            args: args,
            callbackIndex: (args.length > 0 && typeof args[0] === 'function') ? 0 : -1,
            target: process
        };
    });
});
Zone.__load_patch('handleUnhandledPromiseRejection', function (global, Zone, api) {
    Zone[api.symbol('unhandledPromiseRejectionHandler')] =
        findProcessPromiseRejectionHandler('unhandledRejection');
    Zone[api.symbol('rejectionHandledHandler')] =
        findProcessPromiseRejectionHandler('rejectionHandled');
    // handle unhandled promise rejection
    function findProcessPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = events_1.findEventTasks(process, evtName);
            eventTasks.forEach(function (eventTask) {
                // process has added unhandledrejection event listener
                // trigger the event listener
                if (evtName === 'unhandledRejection') {
                    eventTask.invoke(e.rejection, e.promise);
                }
                else if (evtName === 'rejectionHandled') {
                    eventTask.invoke(e.promise);
                }
            });
        };
    }
});
// Crypto
Zone.__load_patch('crypto', function (global, Zone, api) {
    var crypto;
    try {
        crypto = require('crypto');
    }
    catch (err) {
    }
    // use the generic patchMacroTask to patch crypto
    if (crypto) {
        var methodNames = ['randomBytes', 'pbkdf2'];
        methodNames.forEach(function (name) {
            utils_1.patchMacroTask(crypto, name, function (self, args) {
                return {
                    name: 'crypto.' + name,
                    args: args,
                    callbackIndex: (args.length > 0 && typeof args[args.length - 1] === 'function') ?
                        args.length - 1 :
                        -1,
                    target: crypto
                };
            });
        });
    }
});
Zone.__load_patch('console', function (global, Zone, api) {
    var consoleMethods = ['dir', 'log', 'info', 'error', 'warn', 'assert', 'debug', 'timeEnd', 'trace'];
    consoleMethods.forEach(function (m) {
        var originalMethod = console[Zone.__symbol__(m)] = console[m];
        if (originalMethod) {
            console[m] = function () {
                var args = Array.prototype.slice.call(arguments);
                if (Zone.current === Zone.root) {
                    return originalMethod.apply(this, args);
                }
                else {
                    return Zone.root.run(originalMethod, this, args);
                }
            };
        }
    });
});
//# sourceMappingURL=node.js.map
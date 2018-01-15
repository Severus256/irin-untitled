/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("../common/events");
Zone.__load_patch('EventEmitter', function (global, Zone, api) {
    var callAndReturnFirstParam = function (fn) {
        return function (self, args) {
            fn(self, args);
            return self;
        };
    };
    // For EventEmitter
    var EE_ADD_LISTENER = 'addListener';
    var EE_PREPEND_LISTENER = 'prependListener';
    var EE_REMOVE_LISTENER = 'removeListener';
    var EE_REMOVE_ALL_LISTENER = 'removeAllListeners';
    var EE_LISTENERS = 'listeners';
    var EE_ON = 'on';
    var compareTaskCallbackVsDelegate = function (task, delegate) {
        if (task.callback === delegate || task.callback.listener === delegate) {
            // same callback, same capture, same event name, just return
            return true;
        }
        return false;
    };
    function patchEventEmitterMethods(obj) {
        var result = events_1.patchEventTarget(global, [obj], {
            useGlobalCallback: false,
            addEventListenerFnName: EE_ADD_LISTENER,
            removeEventListenerFnName: EE_REMOVE_LISTENER,
            prependEventListenerFnName: EE_PREPEND_LISTENER,
            removeAllFnName: EE_REMOVE_ALL_LISTENER,
            listenersFnName: EE_LISTENERS,
            checkDuplicate: false,
            returnTarget: true,
            compareTaskCallbackVsDelegate: compareTaskCallbackVsDelegate
        });
        if (result && result[0]) {
            obj[EE_ON] = obj[EE_ADD_LISTENER];
        }
    }
    // EventEmitter
    var events;
    try {
        events = require('events');
    }
    catch (err) {
    }
    if (events && events.EventEmitter) {
        patchEventEmitterMethods(events.EventEmitter.prototype);
    }
});
//# sourceMappingURL=events.js.map
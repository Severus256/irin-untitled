/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('mediaQuery', function (global, Zone, api) {
    if (!global['MediaQueryList']) {
        return;
    }
    api.patchEventTarget(global, [global['MediaQueryList'].prototype], { addEventListenerFnName: 'addListener', removeEventListenerFnName: 'removeListener' });
});
//# sourceMappingURL=webapis-media-query.js.map
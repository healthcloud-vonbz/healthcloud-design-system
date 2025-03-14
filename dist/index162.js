import { __exports as s } from "./index178.js";
import h from "react";
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l;
function A() {
  return l ? s : (l = 1, process.env.NODE_ENV !== "production" && function() {
    function d(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function S(e, t) {
      c || o.startTransition === void 0 || (c = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var n = t();
      if (!f) {
        var u = t();
        _(n, u) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), f = !0);
      }
      u = p({
        inst: { value: n, getSnapshot: t }
      });
      var r = u[0].inst, i = u[1];
      return L(
        function() {
          r.value = n, r.getSnapshot = t, a(r) && i({ inst: r });
        },
        [e, n, t]
      ), E(
        function() {
          return a(r) && i({ inst: r }), e(function() {
            a(r) && i({ inst: r });
          });
        },
        [e]
      ), y(n), n;
    }
    function a(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !_(e, n);
      } catch {
        return !0;
      }
    }
    function O(e, t) {
      return t();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = h, _ = typeof Object.is == "function" ? Object.is : d, p = o.useState, E = o.useEffect, L = o.useLayoutEffect, y = o.useDebugValue, c = !1, f = !1, v = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? O : S;
    s.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }(), s);
}
export {
  A as __require
};
//# sourceMappingURL=index162.js.map

import { __rest as k, __assign as r } from "./index179.js";
import * as a from "react";
import { fullWidthClassName as E, zeroRightClassName as I } from "./index185.js";
import { effectCar as Z } from "./index186.js";
import { useMergeRefs as W } from "./index187.js";
var o = function() {
}, m = a.forwardRef(function(e, d) {
  var l = a.useRef(null), n = a.useState({
    onScrollCapture: o,
    onWheelCapture: o,
    onTouchMoveCapture: o
  }), f = n[0], h = n[1], u = e.forwardProps, t = e.children, v = e.className, C = e.removeScrollBar, g = e.enabled, P = e.shards, R = e.sideCar, S = e.noIsolation, b = e.inert, w = e.allowPinchZoom, s = e.as, N = s === void 0 ? "div" : s, M = e.gapMode, _ = k(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), B = R, i = W([l, d]), c = r(r({}, _), f);
  return a.createElement(
    a.Fragment,
    null,
    g && a.createElement(B, { sideCar: Z, removeScrollBar: C, shards: P, noIsolation: S, inert: b, setCallbacks: h, allowPinchZoom: !!w, lockRef: l, gapMode: M }),
    u ? a.cloneElement(a.Children.only(t), r(r({}, c), { ref: i })) : a.createElement(N, r({}, c, { className: v, ref: i }), t)
  );
});
m.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
m.classNames = {
  fullWidth: E,
  zeroRight: I
};
export {
  m as RemoveScroll
};
//# sourceMappingURL=index180.js.map

import { constructFrom as o } from "./index36.js";
function u(e, t) {
  const n = s(t) ? new t(0) : o(t, 0);
  return n.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), n.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), n;
}
function s(e) {
  var t;
  return typeof e == "function" && ((t = e.prototype) == null ? void 0 : t.constructor) === e;
}
export {
  u as default,
  u as transpose
};
//# sourceMappingURL=index60.js.map

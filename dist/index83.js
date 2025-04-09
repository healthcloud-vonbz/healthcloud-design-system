import { normalizeDates as n } from "./index52.js";
function g(r, l, e) {
  const [t, a] = n(
    e == null ? void 0 : e.in,
    r,
    l
  );
  return t.getFullYear() === a.getFullYear() && t.getMonth() === a.getMonth();
}
export {
  g as default,
  g as isSameMonth
};
//# sourceMappingURL=index83.js.map

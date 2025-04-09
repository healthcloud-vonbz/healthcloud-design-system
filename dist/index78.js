import { toDate as a } from "./index45.js";
function f(r, e) {
  const t = a(r, e == null ? void 0 : e.in), l = t.getMonth();
  return t.setFullYear(t.getFullYear(), l + 1, 0), t.setHours(0, 0, 0, 0), a(t, e == null ? void 0 : e.in);
}
export {
  f as default,
  f as lastDayOfMonth
};
//# sourceMappingURL=index78.js.map

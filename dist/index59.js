import { toDate as n } from "./index45.js";
function l(r, e) {
  const t = n(r, e == null ? void 0 : e.in), a = t.getMonth();
  return t.setFullYear(t.getFullYear(), a + 1, 0), t.setHours(23, 59, 59, 999), t;
}
export {
  l as default,
  l as endOfMonth
};
//# sourceMappingURL=index59.js.map

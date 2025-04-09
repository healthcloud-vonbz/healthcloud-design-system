import { constructFrom as c } from "./index44.js";
import { toDate as s } from "./index45.js";
function m(a, t) {
  const e = s(a, t == null ? void 0 : t.in), n = e.getFullYear(), o = e.getMonth(), r = c(e, 0);
  return r.setFullYear(n, o + 1, 0), r.setHours(0, 0, 0, 0), r.getDate();
}
export {
  m as default,
  m as getDaysInMonth
};
//# sourceMappingURL=index66.js.map

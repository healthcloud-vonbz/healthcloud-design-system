import { constructFrom as m } from "./index44.js";
import { getDaysInMonth as u } from "./index66.js";
import { toDate as M } from "./index45.js";
function d(n, o, e) {
  const t = M(n, e == null ? void 0 : e.in), a = t.getFullYear(), s = t.getDate(), r = m(n, 0);
  r.setFullYear(a, o, 15), r.setHours(0, 0, 0, 0);
  const c = u(r);
  return t.setMonth(o, Math.min(s, c)), t;
}
export {
  d as default,
  d as setMonth
};
//# sourceMappingURL=index92.js.map

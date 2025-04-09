import { millisecondsInWeek as m } from "./index49.js";
import { startOfISOWeek as a } from "./index70.js";
import { startOfISOWeekYear as o } from "./index71.js";
import { toDate as d } from "./index45.js";
function k(t, e) {
  const r = d(t, e == null ? void 0 : e.in), f = +a(r) - +o(r);
  return Math.round(f / m) + 1;
}
export {
  k as default,
  k as getISOWeek
};
//# sourceMappingURL=index69.js.map

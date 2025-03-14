import { millisecondsInWeek as m } from "./index38.js";
import { startOfISOWeek as a } from "./index43.js";
import { startOfISOWeekYear as o } from "./index44.js";
import { toDate as d } from "./index37.js";
function k(t, e) {
  const r = d(t, e == null ? void 0 : e.in), f = +a(r) - +o(r);
  return Math.round(f / m) + 1;
}
export {
  k as default,
  k as getISOWeek
};
//# sourceMappingURL=index42.js.map

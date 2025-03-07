import { millisecondsInWeek as m } from "./index36.js";
import { startOfISOWeek as a } from "./index41.js";
import { startOfISOWeekYear as o } from "./index42.js";
import { toDate as d } from "./index35.js";
function k(t, e) {
  const r = d(t, e == null ? void 0 : e.in), f = +a(r) - +o(r);
  return Math.round(f / m) + 1;
}
export {
  k as default,
  k as getISOWeek
};
//# sourceMappingURL=index40.js.map

import { millisecondsInWeek as m } from "./index36.js";
import { startOfWeek as a } from "./index45.js";
import { startOfWeekYear as d } from "./index46.js";
import { toDate as c } from "./index35.js";
function l(t, e) {
  const r = c(t, e == null ? void 0 : e.in), f = +a(r, e) - +d(r, e);
  return Math.round(f / m) + 1;
}
export {
  l as default,
  l as getWeek
};
//# sourceMappingURL=index44.js.map

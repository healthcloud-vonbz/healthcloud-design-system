import { millisecondsInWeek as m } from "./index38.js";
import { startOfWeek as a } from "./index47.js";
import { startOfWeekYear as d } from "./index48.js";
import { toDate as c } from "./index37.js";
function l(t, e) {
  const r = c(t, e == null ? void 0 : e.in), f = +a(r, e) - +d(r, e);
  return Math.round(f / m) + 1;
}
export {
  l as default,
  l as getWeek
};
//# sourceMappingURL=index46.js.map

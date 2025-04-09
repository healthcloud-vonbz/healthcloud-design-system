import { millisecondsInWeek as m } from "./index49.js";
import { startOfWeek as a } from "./index56.js";
import { startOfWeekYear as d } from "./index75.js";
import { toDate as c } from "./index45.js";
function l(t, e) {
  const r = c(t, e == null ? void 0 : e.in), f = +a(r, e) - +d(r, e);
  return Math.round(f / m) + 1;
}
export {
  l as default,
  l as getWeek
};
//# sourceMappingURL=index74.js.map

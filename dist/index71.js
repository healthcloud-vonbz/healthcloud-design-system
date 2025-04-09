import { constructFrom as a } from "./index44.js";
import { getISOWeekYear as f } from "./index72.js";
import { startOfISOWeek as s } from "./index70.js";
function O(t, e) {
  const o = f(t, e), r = a(t, 0);
  return r.setFullYear(o, 0, 4), r.setHours(0, 0, 0, 0), s(r);
}
export {
  O as default,
  O as startOfISOWeekYear
};
//# sourceMappingURL=index71.js.map

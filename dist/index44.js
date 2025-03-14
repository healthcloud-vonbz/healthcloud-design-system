import { constructFrom as a } from "./index36.js";
import { getISOWeekYear as f } from "./index45.js";
import { startOfISOWeek as s } from "./index43.js";
function O(t, e) {
  const o = f(t, e), r = a(t, 0);
  return r.setFullYear(o, 0, 4), r.setHours(0, 0, 0, 0), s(r);
}
export {
  O as default,
  O as startOfISOWeekYear
};
//# sourceMappingURL=index44.js.map

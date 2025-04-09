import { differenceInCalendarDays as e } from "./index50.js";
import { startOfYear as t } from "./index65.js";
import { toDate as d } from "./index45.js";
function y(f, r) {
  const a = d(f, r == null ? void 0 : r.in);
  return e(a, t(a)) + 1;
}
export {
  y as default,
  y as getDayOfYear
};
//# sourceMappingURL=index64.js.map

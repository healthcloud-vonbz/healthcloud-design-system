import { differenceInCalendarWeeks as f } from "./index55.js";
import { lastDayOfMonth as a } from "./index78.js";
import { startOfMonth as m } from "./index79.js";
import { toDate as n } from "./index45.js";
function u(t, e) {
  const r = n(t, e == null ? void 0 : e.in);
  return f(
    a(r, e),
    m(r, e),
    e
  ) + 1;
}
export {
  u as default,
  u as getWeeksInMonth
};
//# sourceMappingURL=index77.js.map

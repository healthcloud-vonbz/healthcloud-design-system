import { getTimezoneOffsetInMilliseconds as a } from "./index51.js";
import { normalizeDates as o } from "./index52.js";
import { millisecondsInWeek as d } from "./index49.js";
import { startOfWeek as m } from "./index56.js";
function D(f, l, e) {
  const [n, i] = o(
    e == null ? void 0 : e.in,
    f,
    l
  ), r = m(n, e), t = m(i, e), s = +r - a(r), c = +t - a(t);
  return Math.round((s - c) / d);
}
export {
  D as default,
  D as differenceInCalendarWeeks
};
//# sourceMappingURL=index55.js.map

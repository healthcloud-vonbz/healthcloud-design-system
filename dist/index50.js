import { getTimezoneOffsetInMilliseconds as a } from "./index51.js";
import { normalizeDates as c } from "./index52.js";
import { millisecondsInDay as D } from "./index49.js";
import { startOfDay as m } from "./index53.js";
function p(n, i, e) {
  const [f, l] = c(
    e == null ? void 0 : e.in,
    n,
    i
  ), r = m(f), t = m(l), o = +r - a(r), s = +t - a(t);
  return Math.round((o - s) / D);
}
export {
  p as default,
  p as differenceInCalendarDays
};
//# sourceMappingURL=index50.js.map

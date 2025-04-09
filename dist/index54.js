import { normalizeDates as c } from "./index52.js";
function D(a, n, e) {
  const [t, r] = c(
    e == null ? void 0 : e.in,
    a,
    n
  ), f = t.getFullYear() - r.getFullYear(), l = t.getMonth() - r.getMonth();
  return f * 12 + l;
}
export {
  D as default,
  D as differenceInCalendarMonths
};
//# sourceMappingURL=index54.js.map

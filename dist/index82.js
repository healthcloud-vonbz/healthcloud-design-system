import { normalizeDates as d } from "./index52.js";
import { startOfDay as t } from "./index53.js";
function D(e, r, a) {
  const [f, m] = d(
    a == null ? void 0 : a.in,
    e,
    r
  );
  return +t(f) == +t(m);
}
export {
  D as default,
  D as isSameDay
};
//# sourceMappingURL=index82.js.map

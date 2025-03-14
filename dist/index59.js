import { getWeek as c } from "./index46.js";
import { toDate as t } from "./index37.js";
function D(a, f, e) {
  const r = t(a, e == null ? void 0 : e.in), m = c(r, e) - f;
  return r.setDate(r.getDate() - m * 7), t(r, e == null ? void 0 : e.in);
}
export {
  D as default,
  D as setWeek
};
//# sourceMappingURL=index59.js.map

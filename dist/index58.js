import { getISOWeek as m } from "./index42.js";
import { toDate as c } from "./index37.js";
function D(r, a, e) {
  const t = c(r, e == null ? void 0 : e.in), f = m(t, e) - a;
  return t.setDate(t.getDate() - f * 7), t;
}
export {
  D as default,
  D as setISOWeek
};
//# sourceMappingURL=index58.js.map

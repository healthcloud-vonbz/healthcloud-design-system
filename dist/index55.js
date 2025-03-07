import { addDays as c } from "./index33.js";
import { getISODay as d } from "./index39.js";
import { toDate as D } from "./index35.js";
function I(a, e, r) {
  const t = D(a, r == null ? void 0 : r.in), f = d(t, r), m = e - f;
  return c(t, m, r);
}
export {
  I as default,
  I as setISODay
};
//# sourceMappingURL=index55.js.map

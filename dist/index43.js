import { constructFrom as t } from "./index44.js";
import { toDate as c } from "./index45.js";
function N(f, a, r) {
  const e = c(f, r == null ? void 0 : r.in);
  return isNaN(a) ? t((r == null ? void 0 : r.in) || f, NaN) : (a && e.setDate(e.getDate() + a), e);
}
export {
  N as addDays,
  N as default
};
//# sourceMappingURL=index43.js.map

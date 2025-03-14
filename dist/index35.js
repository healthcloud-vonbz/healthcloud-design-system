import { constructFrom as t } from "./index36.js";
import { toDate as c } from "./index37.js";
function N(f, a, r) {
  const e = c(f, r == null ? void 0 : r.in);
  return isNaN(a) ? t((r == null ? void 0 : r.in) || f, NaN) : (a && e.setDate(e.getDate() + a), e);
}
export {
  N as addDays,
  N as default
};
//# sourceMappingURL=index35.js.map

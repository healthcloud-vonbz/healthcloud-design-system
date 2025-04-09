import { constructFrom as u } from "./index44.js";
import { toDate as f } from "./index45.js";
function N(e, a, r) {
  const t = f(e, r == null ? void 0 : r.in);
  return isNaN(+t) ? u(e, NaN) : (t.setFullYear(a), t);
}
export {
  N as default,
  N as setYear
};
//# sourceMappingURL=index94.js.map

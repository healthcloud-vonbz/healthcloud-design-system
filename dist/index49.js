import { getDefaultOptions as C } from "./index40.js";
import { constructFrom as Y } from "./index36.js";
import { startOfWeek as D } from "./index47.js";
import { toDate as F } from "./index37.js";
function H(t, e) {
  var u, k, m, W;
  const a = F(t, e == null ? void 0 : e.in), r = a.getFullYear(), c = C(), s = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((k = (u = e == null ? void 0 : e.locale) == null ? void 0 : u.options) == null ? void 0 : k.firstWeekContainsDate) ?? c.firstWeekContainsDate ?? ((W = (m = c.locale) == null ? void 0 : m.options) == null ? void 0 : W.firstWeekContainsDate) ?? 1, f = Y((e == null ? void 0 : e.in) || t, 0);
  f.setFullYear(r + 1, 0, s), f.setHours(0, 0, 0, 0);
  const O = D(f, e), l = Y((e == null ? void 0 : e.in) || t, 0);
  l.setFullYear(r, 0, s), l.setHours(0, 0, 0, 0);
  const n = D(l, e);
  return +a >= +O ? r + 1 : +a >= +n ? r : r - 1;
}
export {
  H as default,
  H as getWeekYear
};
//# sourceMappingURL=index49.js.map

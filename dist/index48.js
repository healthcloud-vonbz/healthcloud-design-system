import { getDefaultOptions as W } from "./index40.js";
import { constructFrom as n } from "./index36.js";
import { getWeekYear as u } from "./index49.js";
import { startOfWeek as D } from "./index47.js";
function g(r, e) {
  var f, s, c, k;
  const a = W(), l = (e == null ? void 0 : e.firstWeekContainsDate) ?? ((s = (f = e == null ? void 0 : e.locale) == null ? void 0 : f.options) == null ? void 0 : s.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((k = (c = a.locale) == null ? void 0 : c.options) == null ? void 0 : k.firstWeekContainsDate) ?? 1, m = u(r, e), t = n((e == null ? void 0 : e.in) || r, 0);
  return t.setFullYear(m, 0, l), t.setHours(0, 0, 0, 0), D(t, e);
}
export {
  g as default,
  g as startOfWeekYear
};
//# sourceMappingURL=index48.js.map

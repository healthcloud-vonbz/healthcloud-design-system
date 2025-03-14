import { getDefaultOptions as s } from "./index40.js";
import { addDays as w } from "./index35.js";
import { toDate as S } from "./index37.js";
function _(O, t, e) {
  var f, d, l, m;
  const a = s(), u = (e == null ? void 0 : e.weekStartsOn) ?? ((d = (f = e == null ? void 0 : e.locale) == null ? void 0 : f.options) == null ? void 0 : d.weekStartsOn) ?? a.weekStartsOn ?? ((m = (l = a.locale) == null ? void 0 : l.options) == null ? void 0 : m.weekStartsOn) ?? 0, c = S(O, e == null ? void 0 : e.in), n = c.getDay(), D = (t % 7 + 7) % 7, r = 7 - u, k = t < 0 || t > 6 ? t - (n + r) % 7 : (D + r) % 7 - (n + r) % 7;
  return w(c, k, e);
}
export {
  _ as default,
  _ as setDay
};
//# sourceMappingURL=index56.js.map

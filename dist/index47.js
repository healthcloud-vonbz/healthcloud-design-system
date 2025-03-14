import { getDefaultOptions as s } from "./index40.js";
import { toDate as w } from "./index37.js";
function m(u, e) {
  var c, O, l, k;
  const a = s(), r = (e == null ? void 0 : e.weekStartsOn) ?? ((O = (c = e == null ? void 0 : e.locale) == null ? void 0 : c.options) == null ? void 0 : O.weekStartsOn) ?? a.weekStartsOn ?? ((k = (l = a.locale) == null ? void 0 : l.options) == null ? void 0 : k.weekStartsOn) ?? 0, t = w(u, e == null ? void 0 : e.in), f = t.getDay(), d = (f < r ? 7 : 0) + f - r;
  return t.setDate(t.getDate() - d), t.setHours(0, 0, 0, 0), t;
}
export {
  m as default,
  m as startOfWeek
};
//# sourceMappingURL=index47.js.map

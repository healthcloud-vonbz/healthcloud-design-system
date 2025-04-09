import { getDefaultOptions as n } from "./index60.js";
import { toDate as w } from "./index45.js";
function m(k, e) {
  var c, O, l, d;
  const a = n(), r = (e == null ? void 0 : e.weekStartsOn) ?? ((O = (c = e == null ? void 0 : e.locale) == null ? void 0 : c.options) == null ? void 0 : O.weekStartsOn) ?? a.weekStartsOn ?? ((d = (l = a.locale) == null ? void 0 : l.options) == null ? void 0 : d.weekStartsOn) ?? 0, t = w(k, e == null ? void 0 : e.in), f = t.getDay(), u = (f < r ? -7 : 0) + 6 - (f - r);
  return t.setDate(t.getDate() + u), t.setHours(23, 59, 59, 999), t;
}
export {
  m as default,
  m as endOfWeek
};
//# sourceMappingURL=index58.js.map

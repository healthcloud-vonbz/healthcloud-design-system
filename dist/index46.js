import { constructFrom as h } from "./index44.js";
import { toDate as u } from "./index45.js";
function g(a, f, e) {
  const r = u(a, e == null ? void 0 : e.in);
  if (isNaN(f)) return h((e == null ? void 0 : e.in) || a, NaN);
  if (!f)
    return r;
  const c = r.getDate(), t = h((e == null ? void 0 : e.in) || a, r.getTime());
  t.setMonth(r.getMonth() + f + 1, 0);
  const n = t.getDate();
  return c >= n ? t : (r.setFullYear(
    t.getFullYear(),
    t.getMonth(),
    c
  ), r);
}
export {
  g as addMonths,
  g as default
};
//# sourceMappingURL=index46.js.map

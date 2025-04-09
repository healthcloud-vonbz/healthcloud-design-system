import { constructFrom as a } from "./index44.js";
import { toDate as m } from "./index45.js";
function n(l, e) {
  let t, r = e == null ? void 0 : e.in;
  return l.forEach((f) => {
    !r && typeof f == "object" && (r = a.bind(null, f));
    const c = m(f, r);
    (!t || t < c || isNaN(+c)) && (t = c);
  }), a(r, t || NaN);
}
export {
  n as default,
  n as max
};
//# sourceMappingURL=index85.js.map

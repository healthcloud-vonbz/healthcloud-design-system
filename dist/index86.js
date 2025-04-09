import { constructFrom as l } from "./index44.js";
import { toDate as n } from "./index45.js";
function a(m, e) {
  let t, r = e == null ? void 0 : e.in;
  return m.forEach((f) => {
    !r && typeof f == "object" && (r = l.bind(null, f));
    const c = n(f, r);
    (!t || t > c || isNaN(+c)) && (t = c);
  }), l(r, t || NaN);
}
export {
  a as default,
  a as min
};
//# sourceMappingURL=index86.js.map

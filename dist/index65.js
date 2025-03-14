import { clsx as O } from "./index128.js";
const m = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, y = O, j = (e, l) => (n) => {
  var r;
  if ((l == null ? void 0 : l.variants) == null) return y(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: d } = l, N = Object.keys(o).map((t) => {
    const a = n == null ? void 0 : n[t], u = d == null ? void 0 : d[t];
    if (a === null) return null;
    const i = m(a) || m(u);
    return o[t][i];
  }), v = n && Object.entries(n).reduce((t, a) => {
    let [u, i] = a;
    return i === void 0 || (t[u] = i), t;
  }, {}), V = l == null || (r = l.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((t, a) => {
    let { class: u, className: i, ...f } = a;
    return Object.entries(f).every((C) => {
      let [c, s] = C;
      return Array.isArray(s) ? s.includes({
        ...d,
        ...v
      }[c]) : {
        ...d,
        ...v
      }[c] === s;
    }) ? [
      ...t,
      u,
      i
    ] : t;
  }, []);
  return y(e, N, V, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
export {
  j as cva,
  y as cx
};
//# sourceMappingURL=index65.js.map

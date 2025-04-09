import { normalizeDates as u } from "./index52.js";
function f(a, r, e) {
  const [l, t] = u(
    e == null ? void 0 : e.in,
    a,
    r
  );
  return l.getFullYear() === t.getFullYear();
}
export {
  f as default,
  f as isSameYear
};
//# sourceMappingURL=index84.js.map

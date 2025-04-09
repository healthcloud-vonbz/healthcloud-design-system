import { constructFrom as e } from "./index44.js";
function m(n, ...o) {
  const r = e.bind(
    null,
    n || o.find((t) => typeof t == "object")
  );
  return o.map(r);
}
export {
  m as normalizeDates
};
//# sourceMappingURL=index52.js.map

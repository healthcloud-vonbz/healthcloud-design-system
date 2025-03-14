import * as l from "react";
import { useCallbackRef as f } from "./index165.js";
function R({
  prop: t,
  defaultProp: r,
  onChange: s = () => {
  }
}) {
  const [e, n] = v({ defaultProp: r, onChange: s }), o = t !== void 0, i = o ? t : e, u = f(s), d = l.useCallback(
    (c) => {
      if (o) {
        const a = typeof c == "function" ? c(t) : c;
        a !== t && u(a);
      } else
        n(c);
    },
    [o, t, n, u]
  );
  return [i, d];
}
function v({
  defaultProp: t,
  onChange: r
}) {
  const s = l.useState(t), [e] = s, n = l.useRef(e), o = f(r);
  return l.useEffect(() => {
    n.current !== e && (o(e), n.current = e);
  }, [e, n, o]), s;
}
export {
  R as useControllableState
};
//# sourceMappingURL=index118.js.map

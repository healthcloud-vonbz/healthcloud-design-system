import n from "react";
import { createContextScope as O } from "./index117.js";
import { useComposedRefs as S } from "./index182.js";
import { Slot as x } from "./index64.js";
import { jsx as d } from "react/jsx-runtime";
function h(s) {
  const f = s + "CollectionProvider", [A, N] = O(f), [_, m] = A(
    f,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), u = (c) => {
    const { scope: e, children: l } = c, o = n.useRef(null), t = n.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d(_, { scope: e, itemMap: t, collectionRef: o, children: l });
  };
  u.displayName = f;
  const a = s + "CollectionSlot", p = n.forwardRef(
    (c, e) => {
      const { scope: l, children: o } = c, t = m(a, l), r = S(e, t.collectionRef);
      return /* @__PURE__ */ d(x, { ref: r, children: o });
    }
  );
  p.displayName = a;
  const C = s + "CollectionItemSlot", R = "data-radix-collection-item", M = n.forwardRef(
    (c, e) => {
      const { scope: l, children: o, ...t } = c, r = n.useRef(null), I = S(e, r), i = m(C, l);
      return n.useEffect(() => (i.itemMap.set(r, { ref: r, ...t }), () => void i.itemMap.delete(r))), /* @__PURE__ */ d(x, { [R]: "", ref: I, children: o });
    }
  );
  M.displayName = C;
  function E(c) {
    const e = m(s + "CollectionConsumer", c);
    return n.useCallback(() => {
      const o = e.collectionRef.current;
      if (!o) return [];
      const t = Array.from(o.querySelectorAll(`[${R}]`));
      return Array.from(e.itemMap.values()).sort(
        (i, T) => t.indexOf(i.ref.current) - t.indexOf(T.ref.current)
      );
    }, [e.collectionRef, e.itemMap]);
  }
  return [
    { Provider: u, Slot: p, ItemSlot: M },
    E,
    N
  ];
}
export {
  h as createCollection
};
//# sourceMappingURL=index167.js.map

import * as s from "react";
import { composeEventHandlers as p } from "./index130.js";
import { createCollection as V } from "./index167.js";
import { useComposedRefs as j } from "./index131.js";
import { createContextScope as z } from "./index117.js";
import { useId as q } from "./index113.js";
import { Primitive as x } from "./index132.js";
import { useCallbackRef as J } from "./index165.js";
import { useControllableState as Q } from "./index118.js";
import { useDirection as W } from "./index134.js";
import { jsx as d } from "react/jsx-runtime";
var h = "rovingFocusGroup.onEntryFocus", X = { bubbles: !1, cancelable: !0 }, b = "RovingFocusGroup", [y, G, Z] = V(b), [$, Fe] = z(
  b,
  [Z]
), [ee, oe] = $(b), N = s.forwardRef(
  (e, r) => /* @__PURE__ */ d(y.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(y.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(te, { ...e, ref: r }) }) })
);
N.displayName = b;
var te = s.forwardRef((e, r) => {
  const {
    __scopeRovingFocusGroup: c,
    orientation: o,
    loop: F = !1,
    dir: g,
    currentTabStopId: R,
    defaultCurrentTabStopId: E,
    onCurrentTabStopIdChange: m,
    onEntryFocus: u,
    preventScrollOnEntryFocus: w = !1,
    ...C
  } = e, v = s.useRef(null), I = j(r, v), t = W(g), [f = null, T] = Q({
    prop: R,
    defaultProp: E,
    onChange: m
  }), [a, i] = s.useState(!1), S = J(u), k = G(c), A = s.useRef(!1), [L, D] = s.useState(0);
  return s.useEffect(() => {
    const n = v.current;
    if (n)
      return n.addEventListener(h, S), () => n.removeEventListener(h, S);
  }, [S]), /* @__PURE__ */ d(
    ee,
    {
      scope: c,
      orientation: o,
      dir: t,
      loop: F,
      currentTabStopId: f,
      onItemFocus: s.useCallback(
        (n) => T(n),
        [T]
      ),
      onItemShiftTab: s.useCallback(() => i(!0), []),
      onFocusableItemAdd: s.useCallback(
        () => D((n) => n + 1),
        []
      ),
      onFocusableItemRemove: s.useCallback(
        () => D((n) => n - 1),
        []
      ),
      children: /* @__PURE__ */ d(
        x.div,
        {
          tabIndex: a || L === 0 ? -1 : 0,
          "data-orientation": o,
          ...C,
          ref: I,
          style: { outline: "none", ...e.style },
          onMouseDown: p(e.onMouseDown, () => {
            A.current = !0;
          }),
          onFocus: p(e.onFocus, (n) => {
            const U = !A.current;
            if (n.target === n.currentTarget && U && !a) {
              const P = new CustomEvent(h, X);
              if (n.currentTarget.dispatchEvent(P), !P.defaultPrevented) {
                const _ = k().filter((l) => l.focusable), B = _.find((l) => l.active), Y = _.find((l) => l.id === f), H = [B, Y, ..._].filter(
                  Boolean
                ).map((l) => l.ref.current);
                M(H, w);
              }
            }
            A.current = !1;
          }),
          onBlur: p(e.onBlur, () => i(!1))
        }
      )
    }
  );
}), O = "RovingFocusGroupItem", K = s.forwardRef(
  (e, r) => {
    const {
      __scopeRovingFocusGroup: c,
      focusable: o = !0,
      active: F = !1,
      tabStopId: g,
      ...R
    } = e, E = q(), m = g || E, u = oe(O, c), w = u.currentTabStopId === m, C = G(c), { onFocusableItemAdd: v, onFocusableItemRemove: I } = u;
    return s.useEffect(() => {
      if (o)
        return v(), () => I();
    }, [o, v, I]), /* @__PURE__ */ d(
      y.ItemSlot,
      {
        scope: c,
        id: m,
        focusable: o,
        active: F,
        children: /* @__PURE__ */ d(
          x.span,
          {
            tabIndex: w ? 0 : -1,
            "data-orientation": u.orientation,
            ...R,
            ref: r,
            onMouseDown: p(e.onMouseDown, (t) => {
              o ? u.onItemFocus(m) : t.preventDefault();
            }),
            onFocus: p(e.onFocus, () => u.onItemFocus(m)),
            onKeyDown: p(e.onKeyDown, (t) => {
              if (t.key === "Tab" && t.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (t.target !== t.currentTarget) return;
              const f = se(t, u.orientation, u.dir);
              if (f !== void 0) {
                if (t.metaKey || t.ctrlKey || t.altKey || t.shiftKey) return;
                t.preventDefault();
                let a = C().filter((i) => i.focusable).map((i) => i.ref.current);
                if (f === "last") a.reverse();
                else if (f === "prev" || f === "next") {
                  f === "prev" && a.reverse();
                  const i = a.indexOf(t.currentTarget);
                  a = u.loop ? ce(a, i + 1) : a.slice(i + 1);
                }
                setTimeout(() => M(a));
              }
            })
          }
        )
      }
    );
  }
);
K.displayName = O;
var re = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ne(e, r) {
  return r !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function se(e, r, c) {
  const o = ne(e.key, c);
  if (!(r === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(r === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return re[o];
}
function M(e, r = !1) {
  const c = document.activeElement;
  for (const o of e)
    if (o === c || (o.focus({ preventScroll: r }), document.activeElement !== c)) return;
}
function ce(e, r) {
  return e.map((c, o) => e[(r + o) % e.length]);
}
var ge = N, Re = K;
export {
  Re as Item,
  ge as Root,
  N as RovingFocusGroup,
  K as RovingFocusGroupItem,
  Fe as createRovingFocusGroupScope
};
//# sourceMappingURL=index133.js.map

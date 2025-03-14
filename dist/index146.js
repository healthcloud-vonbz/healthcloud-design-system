import * as s from "react";
import { useFloating as xe, offset as Pe, shift as ye, flip as Ae, size as ve, arrow as Ce, hide as be, limitShift as Se } from "./index168.js";
import { Root as Oe } from "./index169.js";
import { useComposedRefs as j } from "./index143.js";
import { createContextScope as Re } from "./index170.js";
import { Primitive as z } from "./index110.js";
import { useCallbackRef as Ee } from "./index165.js";
import { useLayoutEffect as T } from "./index164.js";
import { useSize as Ne } from "./index135.js";
import { jsx as f } from "react/jsx-runtime";
import { autoUpdate as _e } from "./index171.js";
var N = "Popper", [L, Ue] = Re(N), [$e, Z] = L(N), U = (e) => {
  const { __scopePopper: i, children: n } = e, [t, a] = s.useState(null);
  return /* @__PURE__ */ f($e, { scope: i, anchor: t, onAnchorChange: a, children: n });
};
U.displayName = N;
var q = "PopperAnchor", G = s.forwardRef(
  (e, i) => {
    const { __scopePopper: n, virtualRef: t, ...a } = e, r = Z(q, n), o = s.useRef(null), w = j(i, o);
    return s.useEffect(() => {
      r.onAnchorChange((t == null ? void 0 : t.current) || o.current);
    }), t ? null : /* @__PURE__ */ f(z.div, { ...a, ref: w });
  }
);
G.displayName = q;
var _ = "PopperContent", [He, We] = L(_), J = s.forwardRef(
  (e, i) => {
    var Y, M, X, D, F, k;
    const {
      __scopePopper: n,
      side: t = "bottom",
      sideOffset: a = 0,
      align: r = "center",
      alignOffset: o = 0,
      arrowPadding: w = 0,
      avoidCollisions: p = !0,
      collisionBoundary: c = [],
      collisionPadding: x = 0,
      sticky: m = "partial",
      hideWhenDetached: y = !1,
      updatePositionStrategy: A = "optimized",
      onPlaced: l,
      ...d
    } = e, v = Z(_, n), [h, C] = s.useState(null), ee = j(i, (P) => C(P)), [E, te] = s.useState(null), g = Ne(E), re = (g == null ? void 0 : g.width) ?? 0, $ = (g == null ? void 0 : g.height) ?? 0, oe = t + (r !== "center" ? "-" + r : ""), ne = typeof x == "number" ? x : { top: 0, right: 0, bottom: 0, left: 0, ...x }, H = Array.isArray(c) ? c : [c], ae = H.length > 0, b = {
      padding: ne,
      boundary: H.filter(Ye),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: ae
    }, { refs: ie, floatingStyles: W, placement: se, isPositioned: S, middlewareData: u } = xe({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: oe,
      whileElementsMounted: (...P) => _e(...P, {
        animationFrame: A === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        Pe({ mainAxis: a + $, alignmentAxis: o }),
        p && ye({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? Se() : void 0,
          ...b
        }),
        p && Ae({ ...b }),
        ve({
          ...b,
          apply: ({ elements: P, rects: B, availableWidth: he, availableHeight: ge }) => {
            const { width: ue, height: we } = B.reference, R = P.floating.style;
            R.setProperty("--radix-popper-available-width", `${he}px`), R.setProperty("--radix-popper-available-height", `${ge}px`), R.setProperty("--radix-popper-anchor-width", `${ue}px`), R.setProperty("--radix-popper-anchor-height", `${we}px`);
          }
        }),
        E && Ce({ element: E, padding: w }),
        Me({ arrowWidth: re, arrowHeight: $ }),
        y && be({ strategy: "referenceHidden", ...b })
      ]
    }), [I, pe] = V(se), O = Ee(l);
    T(() => {
      S && (O == null || O());
    }, [S, O]);
    const ce = (Y = u.arrow) == null ? void 0 : Y.x, de = (M = u.arrow) == null ? void 0 : M.y, le = ((X = u.arrow) == null ? void 0 : X.centerOffset) !== 0, [fe, me] = s.useState();
    return T(() => {
      h && me(window.getComputedStyle(h).zIndex);
    }, [h]), /* @__PURE__ */ f(
      "div",
      {
        ref: ie.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...W,
          transform: S ? W.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: fe,
          "--radix-popper-transform-origin": [
            (D = u.transformOrigin) == null ? void 0 : D.x,
            (F = u.transformOrigin) == null ? void 0 : F.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((k = u.hide) == null ? void 0 : k.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ f(
          He,
          {
            scope: n,
            placedSide: I,
            onArrowChange: te,
            arrowX: ce,
            arrowY: de,
            shouldHideArrow: le,
            children: /* @__PURE__ */ f(
              z.div,
              {
                "data-side": I,
                "data-align": pe,
                ...d,
                ref: ee,
                style: {
                  ...d.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: S ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
J.displayName = _;
var K = "PopperArrow", Ie = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Q = s.forwardRef(function(i, n) {
  const { __scopePopper: t, ...a } = i, r = We(K, t), o = Ie[r.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ f(
      "span",
      {
        ref: r.onArrowChange,
        style: {
          position: "absolute",
          left: r.arrowX,
          top: r.arrowY,
          [o]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[r.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[r.placedSide],
          visibility: r.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ f(
          Oe,
          {
            ...a,
            ref: n,
            style: {
              ...a.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Q.displayName = K;
function Ye(e) {
  return e !== null;
}
var Me = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(i) {
    var v, h, C;
    const { placement: n, rects: t, middlewareData: a } = i, o = ((v = a.arrow) == null ? void 0 : v.centerOffset) !== 0, w = o ? 0 : e.arrowWidth, p = o ? 0 : e.arrowHeight, [c, x] = V(n), m = { start: "0%", center: "50%", end: "100%" }[x], y = (((h = a.arrow) == null ? void 0 : h.x) ?? 0) + w / 2, A = (((C = a.arrow) == null ? void 0 : C.y) ?? 0) + p / 2;
    let l = "", d = "";
    return c === "bottom" ? (l = o ? m : `${y}px`, d = `${-p}px`) : c === "top" ? (l = o ? m : `${y}px`, d = `${t.floating.height + p}px`) : c === "right" ? (l = `${-p}px`, d = o ? m : `${A}px`) : c === "left" && (l = `${t.floating.width + p}px`, d = o ? m : `${A}px`), { data: { x: l, y: d } };
  }
});
function V(e) {
  const [i, n = "center"] = e.split("-");
  return [i, n];
}
var qe = U, Ge = G, Je = J, Ke = Q;
export {
  Ge as Anchor,
  Ke as Arrow,
  Je as Content,
  U as Popper,
  G as PopperAnchor,
  Q as PopperArrow,
  J as PopperContent,
  qe as Root,
  Ue as createPopperScope
};
//# sourceMappingURL=index146.js.map

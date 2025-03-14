import * as i from "react";
import { composeEventHandlers as P } from "./index142.js";
import { useComposedRefs as O } from "./index143.js";
import { createContextScope as L } from "./index117.js";
import { DismissableLayer as G } from "./index144.js";
import { useFocusGuards as H } from "./index124.js";
import { FocusScope as K } from "./index145.js";
import { useId as $ } from "./index113.js";
import { createPopperScope as _, Anchor as x, Content as j, Arrow as U, Root as V } from "./index146.js";
import { Portal as W } from "./index147.js";
import { Presence as w } from "./index148.js";
import { Primitive as E } from "./index110.js";
import { Slot as Z } from "./index149.js";
import { useControllableState as q } from "./index118.js";
import { hideOthers as z } from "./index126.js";
import B from "./index150.js";
import { jsx as p } from "react/jsx-runtime";
var R = "Popover", [b, Ae] = L(R, [
  _
]), m = _(), [J, f] = b(R), F = (e) => {
  const {
    __scopePopover: n,
    children: t,
    open: a,
    defaultOpen: o,
    onOpenChange: r,
    modal: s = !1
  } = e, c = m(n), u = i.useRef(null), [l, g] = i.useState(!1), [h = !1, d] = q({
    prop: a,
    defaultProp: o,
    onChange: r
  });
  return /* @__PURE__ */ p(V, { ...c, children: /* @__PURE__ */ p(
    J,
    {
      scope: n,
      contentId: $(),
      triggerRef: u,
      open: h,
      onOpenChange: d,
      onOpenToggle: i.useCallback(() => d((C) => !C), [d]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: i.useCallback(() => g(!0), []),
      onCustomAnchorRemove: i.useCallback(() => g(!1), []),
      modal: s,
      children: t
    }
  ) });
};
F.displayName = R;
var N = "PopoverAnchor", Q = i.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...a } = e, o = f(N, t), r = m(t), { onCustomAnchorAdd: s, onCustomAnchorRemove: c } = o;
    return i.useEffect(() => (s(), () => c()), [s, c]), /* @__PURE__ */ p(x, { ...r, ...a, ref: n });
  }
);
Q.displayName = N;
var y = "PopoverTrigger", S = i.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...a } = e, o = f(y, t), r = m(t), s = O(n, o.triggerRef), c = /* @__PURE__ */ p(
      E.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": T(o.open),
        ...a,
        ref: s,
        onClick: P(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? c : /* @__PURE__ */ p(x, { asChild: !0, ...r, children: c });
  }
);
S.displayName = y;
var A = "PopoverPortal", [X, Y] = b(A, {
  forceMount: void 0
}), D = (e) => {
  const { __scopePopover: n, forceMount: t, children: a, container: o } = e, r = f(A, n);
  return /* @__PURE__ */ p(X, { scope: n, forceMount: t, children: /* @__PURE__ */ p(w, { present: t || r.open, children: /* @__PURE__ */ p(W, { asChild: !0, container: o, children: a }) }) });
};
D.displayName = A;
var v = "PopoverContent", M = i.forwardRef(
  (e, n) => {
    const t = Y(v, e.__scopePopover), { forceMount: a = t.forceMount, ...o } = e, r = f(v, e.__scopePopover);
    return /* @__PURE__ */ p(w, { present: a || r.open, children: r.modal ? /* @__PURE__ */ p(ee, { ...o, ref: n }) : /* @__PURE__ */ p(oe, { ...o, ref: n }) });
  }
);
M.displayName = v;
var ee = i.forwardRef(
  (e, n) => {
    const t = f(v, e.__scopePopover), a = i.useRef(null), o = O(n, a), r = i.useRef(!1);
    return i.useEffect(() => {
      const s = a.current;
      if (s) return z(s);
    }, []), /* @__PURE__ */ p(B, { as: Z, allowPinchZoom: !0, children: /* @__PURE__ */ p(
      k,
      {
        ...e,
        ref: o,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: P(e.onCloseAutoFocus, (s) => {
          var c;
          s.preventDefault(), r.current || (c = t.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: P(
          e.onPointerDownOutside,
          (s) => {
            const c = s.detail.originalEvent, u = c.button === 0 && c.ctrlKey === !0, l = c.button === 2 || u;
            r.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: P(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), oe = i.forwardRef(
  (e, n) => {
    const t = f(v, e.__scopePopover), a = i.useRef(!1), o = i.useRef(!1);
    return /* @__PURE__ */ p(
      k,
      {
        ...e,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (r) => {
          var s, c;
          (s = e.onCloseAutoFocus) == null || s.call(e, r), r.defaultPrevented || (a.current || (c = t.triggerRef.current) == null || c.focus(), r.preventDefault()), a.current = !1, o.current = !1;
        },
        onInteractOutside: (r) => {
          var u, l;
          (u = e.onInteractOutside) == null || u.call(e, r), r.defaultPrevented || (a.current = !0, r.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = r.target;
          ((l = t.triggerRef.current) == null ? void 0 : l.contains(s)) && r.preventDefault(), r.detail.originalEvent.type === "focusin" && o.current && r.preventDefault();
        }
      }
    );
  }
), k = i.forwardRef(
  (e, n) => {
    const {
      __scopePopover: t,
      trapFocus: a,
      onOpenAutoFocus: o,
      onCloseAutoFocus: r,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: c,
      onPointerDownOutside: u,
      onFocusOutside: l,
      onInteractOutside: g,
      ...h
    } = e, d = f(v, t), C = m(t);
    return H(), /* @__PURE__ */ p(
      K,
      {
        asChild: !0,
        loop: !0,
        trapped: a,
        onMountAutoFocus: o,
        onUnmountAutoFocus: r,
        children: /* @__PURE__ */ p(
          G,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: g,
            onEscapeKeyDown: c,
            onPointerDownOutside: u,
            onFocusOutside: l,
            onDismiss: () => d.onOpenChange(!1),
            children: /* @__PURE__ */ p(
              j,
              {
                "data-state": T(d.open),
                role: "dialog",
                id: d.contentId,
                ...C,
                ...h,
                ref: n,
                style: {
                  ...h.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), I = "PopoverClose", re = i.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...a } = e, o = f(I, t);
    return /* @__PURE__ */ p(
      E.button,
      {
        type: "button",
        ...a,
        ref: n,
        onClick: P(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
re.displayName = I;
var te = "PopoverArrow", ne = i.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...a } = e, o = m(t);
    return /* @__PURE__ */ p(U, { ...o, ...a, ref: n });
  }
);
ne.displayName = te;
function T(e) {
  return e ? "open" : "closed";
}
var Oe = F, _e = S, xe = D, we = M;
export {
  we as Content,
  F as Popover,
  Q as PopoverAnchor,
  ne as PopoverArrow,
  re as PopoverClose,
  M as PopoverContent,
  D as PopoverPortal,
  S as PopoverTrigger,
  xe as Portal,
  Oe as Root,
  _e as Trigger,
  Ae as createPopoverScope
};
//# sourceMappingURL=index68.js.map

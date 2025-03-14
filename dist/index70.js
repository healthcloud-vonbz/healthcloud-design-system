import * as s from "react";
import { composeEventHandlers as p } from "./index115.js";
import { useComposedRefs as R } from "./index116.js";
import { createContextScope as H, createContext as V } from "./index117.js";
import { useId as C } from "./index113.js";
import { useControllableState as q } from "./index118.js";
import { DismissableLayer as K } from "./index119.js";
import { FocusScope as U } from "./index120.js";
import { Portal as Y } from "./index121.js";
import { Presence as _ } from "./index122.js";
import { Primitive as m } from "./index123.js";
import { useFocusGuards as Z } from "./index124.js";
import z from "./index125.js";
import { hideOthers as J } from "./index126.js";
import { Slot as Q } from "./index64.js";
import { jsx as i, jsxs as y, Fragment as I } from "react/jsx-runtime";
var h = "Dialog", [O, Ne] = H(h), [X, u] = O(h), x = (e) => {
  const {
    __scopeDialog: o,
    children: n,
    open: a,
    defaultOpen: r,
    onOpenChange: t,
    modal: c = !0
  } = e, l = s.useRef(null), d = s.useRef(null), [g = !1, v] = q({
    prop: a,
    defaultProp: r,
    onChange: t
  });
  return /* @__PURE__ */ i(
    X,
    {
      scope: o,
      triggerRef: l,
      contentRef: d,
      contentId: C(),
      titleId: C(),
      descriptionId: C(),
      open: g,
      onOpenChange: v,
      onOpenToggle: s.useCallback(() => v((j) => !j), [v]),
      modal: c,
      children: n
    }
  );
};
x.displayName = h;
var A = "DialogTrigger", ee = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: n, ...a } = e, r = u(A, n), t = R(o, r.triggerRef);
    return /* @__PURE__ */ i(
      m.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": r.open,
        "aria-controls": r.contentId,
        "data-state": P(r.open),
        ...a,
        ref: t,
        onClick: p(e.onClick, r.onOpenToggle)
      }
    );
  }
);
ee.displayName = A;
var E = "DialogPortal", [te, T] = O(E, {
  forceMount: void 0
}), b = (e) => {
  const { __scopeDialog: o, forceMount: n, children: a, container: r } = e, t = u(E, o);
  return /* @__PURE__ */ i(te, { scope: o, forceMount: n, children: s.Children.map(a, (c) => /* @__PURE__ */ i(_, { present: n || t.open, children: /* @__PURE__ */ i(Y, { asChild: !0, container: r, children: c }) })) });
};
b.displayName = E;
var D = "DialogOverlay", M = s.forwardRef(
  (e, o) => {
    const n = T(D, e.__scopeDialog), { forceMount: a = n.forceMount, ...r } = e, t = u(D, e.__scopeDialog);
    return t.modal ? /* @__PURE__ */ i(_, { present: a || t.open, children: /* @__PURE__ */ i(oe, { ...r, ref: o }) }) : null;
  }
);
M.displayName = D;
var oe = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: n, ...a } = e, r = u(D, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ i(z, { as: Q, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ i(
        m.div,
        {
          "data-state": P(r.open),
          ...a,
          ref: o,
          style: { pointerEvents: "auto", ...a.style }
        }
      ) })
    );
  }
), f = "DialogContent", w = s.forwardRef(
  (e, o) => {
    const n = T(f, e.__scopeDialog), { forceMount: a = n.forceMount, ...r } = e, t = u(f, e.__scopeDialog);
    return /* @__PURE__ */ i(_, { present: a || t.open, children: t.modal ? /* @__PURE__ */ i(re, { ...r, ref: o }) : /* @__PURE__ */ i(ne, { ...r, ref: o }) });
  }
);
w.displayName = f;
var re = s.forwardRef(
  (e, o) => {
    const n = u(f, e.__scopeDialog), a = s.useRef(null), r = R(o, n.contentRef, a);
    return s.useEffect(() => {
      const t = a.current;
      if (t) return J(t);
    }, []), /* @__PURE__ */ i(
      F,
      {
        ...e,
        ref: r,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: p(e.onCloseAutoFocus, (t) => {
          var c;
          t.preventDefault(), (c = n.triggerRef.current) == null || c.focus();
        }),
        onPointerDownOutside: p(e.onPointerDownOutside, (t) => {
          const c = t.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0;
          (c.button === 2 || l) && t.preventDefault();
        }),
        onFocusOutside: p(
          e.onFocusOutside,
          (t) => t.preventDefault()
        )
      }
    );
  }
), ne = s.forwardRef(
  (e, o) => {
    const n = u(f, e.__scopeDialog), a = s.useRef(!1), r = s.useRef(!1);
    return /* @__PURE__ */ i(
      F,
      {
        ...e,
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (t) => {
          var c, l;
          (c = e.onCloseAutoFocus) == null || c.call(e, t), t.defaultPrevented || (a.current || (l = n.triggerRef.current) == null || l.focus(), t.preventDefault()), a.current = !1, r.current = !1;
        },
        onInteractOutside: (t) => {
          var d, g;
          (d = e.onInteractOutside) == null || d.call(e, t), t.defaultPrevented || (a.current = !0, t.detail.originalEvent.type === "pointerdown" && (r.current = !0));
          const c = t.target;
          ((g = n.triggerRef.current) == null ? void 0 : g.contains(c)) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && r.current && t.preventDefault();
        }
      }
    );
  }
), F = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: n, trapFocus: a, onOpenAutoFocus: r, onCloseAutoFocus: t, ...c } = e, l = u(f, n), d = s.useRef(null), g = R(o, d);
    return Z(), /* @__PURE__ */ y(I, { children: [
      /* @__PURE__ */ i(
        U,
        {
          asChild: !0,
          loop: !0,
          trapped: a,
          onMountAutoFocus: r,
          onUnmountAutoFocus: t,
          children: /* @__PURE__ */ i(
            K,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": P(l.open),
              ...c,
              ref: g,
              onDismiss: () => l.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ y(I, { children: [
        /* @__PURE__ */ i(ae, { titleId: l.titleId }),
        /* @__PURE__ */ i(se, { contentRef: d, descriptionId: l.descriptionId })
      ] })
    ] });
  }
), N = "DialogTitle", S = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: n, ...a } = e, r = u(N, n);
    return /* @__PURE__ */ i(m.h2, { id: r.titleId, ...a, ref: o });
  }
);
S.displayName = N;
var W = "DialogDescription", k = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: n, ...a } = e, r = u(W, n);
    return /* @__PURE__ */ i(m.p, { id: r.descriptionId, ...a, ref: o });
  }
);
k.displayName = W;
var G = "DialogClose", L = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: n, ...a } = e, r = u(G, n);
    return /* @__PURE__ */ i(
      m.button,
      {
        type: "button",
        ...a,
        ref: o,
        onClick: p(e.onClick, () => r.onOpenChange(!1))
      }
    );
  }
);
L.displayName = G;
function P(e) {
  return e ? "open" : "closed";
}
var $ = "DialogTitleWarning", [Pe, B] = V($, {
  contentName: f,
  titleName: N,
  docsSlug: "dialog"
}), ae = ({ titleId: e }) => {
  const o = B($), n = `\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;
  return s.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, ie = "DialogDescriptionWarning", se = ({ contentRef: e, descriptionId: o }) => {
  const a = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${B(ie).contentName}}.`;
  return s.useEffect(() => {
    var t;
    const r = (t = e.current) == null ? void 0 : t.getAttribute("aria-describedby");
    o && r && (document.getElementById(o) || console.warn(a));
  }, [a, e, o]), null;
}, ye = x, Ie = b, Oe = M, xe = w, Ae = S, Te = k, be = L;
export {
  be as Close,
  xe as Content,
  Te as Description,
  x as Dialog,
  L as DialogClose,
  w as DialogContent,
  k as DialogDescription,
  M as DialogOverlay,
  b as DialogPortal,
  S as DialogTitle,
  ee as DialogTrigger,
  Oe as Overlay,
  Ie as Portal,
  ye as Root,
  Ae as Title,
  Pe as WarningProvider,
  Ne as createDialogScope
};
//# sourceMappingURL=index70.js.map

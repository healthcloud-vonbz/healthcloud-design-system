import * as s from "react";
import { composeEventHandlers as p } from "./index142.js";
import { useComposedRefs as R } from "./index143.js";
import { createContextScope as V, createContext as q } from "./index117.js";
import { useId as C } from "./index113.js";
import { useControllableState as K } from "./index118.js";
import { DismissableLayer as U } from "./index144.js";
import { FocusScope as Y } from "./index145.js";
import { Portal as Z } from "./index147.js";
import { Presence as _ } from "./index148.js";
import { Primitive as m } from "./index110.js";
import { useFocusGuards as z } from "./index124.js";
import J from "./index150.js";
import { hideOthers as Q } from "./index126.js";
import { Slot as X } from "./index176.js";
import { jsx as i, jsxs as y, Fragment as I } from "react/jsx-runtime";
var h = "Dialog", [O, Ne] = V(h), [ee, u] = O(h), x = (e) => {
  const {
    __scopeDialog: o,
    children: n,
    open: a,
    defaultOpen: r,
    onOpenChange: t,
    modal: c = !0
  } = e, l = s.useRef(null), d = s.useRef(null), [g = !1, v] = K({
    prop: a,
    defaultProp: r,
    onChange: t
  });
  return /* @__PURE__ */ i(
    ee,
    {
      scope: o,
      triggerRef: l,
      contentRef: d,
      contentId: C(),
      titleId: C(),
      descriptionId: C(),
      open: g,
      onOpenChange: v,
      onOpenToggle: s.useCallback(() => v((H) => !H), [v]),
      modal: c,
      children: n
    }
  );
};
x.displayName = h;
var A = "DialogTrigger", T = s.forwardRef(
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
T.displayName = A;
var E = "DialogPortal", [te, b] = O(E, {
  forceMount: void 0
}), M = (e) => {
  const { __scopeDialog: o, forceMount: n, children: a, container: r } = e, t = u(E, o);
  return /* @__PURE__ */ i(te, { scope: o, forceMount: n, children: s.Children.map(a, (c) => /* @__PURE__ */ i(_, { present: n || t.open, children: /* @__PURE__ */ i(Z, { asChild: !0, container: r, children: c }) })) });
};
M.displayName = E;
var D = "DialogOverlay", w = s.forwardRef(
  (e, o) => {
    const n = b(D, e.__scopeDialog), { forceMount: a = n.forceMount, ...r } = e, t = u(D, e.__scopeDialog);
    return t.modal ? /* @__PURE__ */ i(_, { present: a || t.open, children: /* @__PURE__ */ i(oe, { ...r, ref: o }) }) : null;
  }
);
w.displayName = D;
var oe = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: n, ...a } = e, r = u(D, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ i(J, { as: X, allowPinchZoom: !0, shards: [r.contentRef], children: /* @__PURE__ */ i(
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
), f = "DialogContent", F = s.forwardRef(
  (e, o) => {
    const n = b(f, e.__scopeDialog), { forceMount: a = n.forceMount, ...r } = e, t = u(f, e.__scopeDialog);
    return /* @__PURE__ */ i(_, { present: a || t.open, children: t.modal ? /* @__PURE__ */ i(re, { ...r, ref: o }) : /* @__PURE__ */ i(ne, { ...r, ref: o }) });
  }
);
F.displayName = f;
var re = s.forwardRef(
  (e, o) => {
    const n = u(f, e.__scopeDialog), a = s.useRef(null), r = R(o, n.contentRef, a);
    return s.useEffect(() => {
      const t = a.current;
      if (t) return Q(t);
    }, []), /* @__PURE__ */ i(
      S,
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
      S,
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
), S = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: n, trapFocus: a, onOpenAutoFocus: r, onCloseAutoFocus: t, ...c } = e, l = u(f, n), d = s.useRef(null), g = R(o, d);
    return z(), /* @__PURE__ */ y(I, { children: [
      /* @__PURE__ */ i(
        Y,
        {
          asChild: !0,
          loop: !0,
          trapped: a,
          onMountAutoFocus: r,
          onUnmountAutoFocus: t,
          children: /* @__PURE__ */ i(
            U,
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
), N = "DialogTitle", W = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: n, ...a } = e, r = u(N, n);
    return /* @__PURE__ */ i(m.h2, { id: r.titleId, ...a, ref: o });
  }
);
W.displayName = N;
var k = "DialogDescription", G = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: n, ...a } = e, r = u(k, n);
    return /* @__PURE__ */ i(m.p, { id: r.descriptionId, ...a, ref: o });
  }
);
G.displayName = k;
var L = "DialogClose", $ = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: n, ...a } = e, r = u(L, n);
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
$.displayName = L;
function P(e) {
  return e ? "open" : "closed";
}
var B = "DialogTitleWarning", [Pe, j] = q(B, {
  contentName: f,
  titleName: N,
  docsSlug: "dialog"
}), ae = ({ titleId: e }) => {
  const o = j(B), n = `\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;
  return s.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, ie = "DialogDescriptionWarning", se = ({ contentRef: e, descriptionId: o }) => {
  const a = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${j(ie).contentName}}.`;
  return s.useEffect(() => {
    var t;
    const r = (t = e.current) == null ? void 0 : t.getAttribute("aria-describedby");
    o && r && (document.getElementById(o) || console.warn(a));
  }, [a, e, o]), null;
}, ye = x, Ie = T, Oe = M, xe = w, Ae = F, Te = W, be = G, Me = $;
export {
  Me as Close,
  Ae as Content,
  be as Description,
  x as Dialog,
  $ as DialogClose,
  F as DialogContent,
  G as DialogDescription,
  w as DialogOverlay,
  M as DialogPortal,
  W as DialogTitle,
  T as DialogTrigger,
  xe as Overlay,
  Oe as Portal,
  ye as Root,
  Te as Title,
  Ie as Trigger,
  Pe as WarningProvider,
  Ne as createDialogScope
};
//# sourceMappingURL=index141.js.map

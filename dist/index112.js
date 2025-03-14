import * as s from "react";
import { composeEventHandlers as p } from "./index142.js";
import { useComposedRefs as R } from "./index143.js";
import { createContextScope as $, createContext as B } from "./index117.js";
import { useId as C } from "./index113.js";
import { useControllableState as j } from "./index118.js";
import { DismissableLayer as H } from "./index144.js";
import { FocusScope as V } from "./index145.js";
import { Portal as q } from "./index147.js";
import { Presence as _ } from "./index148.js";
import { Primitive as m } from "./index110.js";
import { useFocusGuards as K } from "./index124.js";
import U from "./index150.js";
import { hideOthers as Y } from "./index126.js";
import { Slot as Z } from "./index163.js";
import { jsx as i, jsxs as y, Fragment as I } from "react/jsx-runtime";
var h = "Dialog", [O, Ne] = $(h), [z, u] = O(h), x = (e) => {
  const {
    __scopeDialog: o,
    children: r,
    open: a,
    defaultOpen: n,
    onOpenChange: t,
    modal: c = !0
  } = e, l = s.useRef(null), d = s.useRef(null), [g = !1, v] = j({
    prop: a,
    defaultProp: n,
    onChange: t
  });
  return /* @__PURE__ */ i(
    z,
    {
      scope: o,
      triggerRef: l,
      contentRef: d,
      contentId: C(),
      titleId: C(),
      descriptionId: C(),
      open: g,
      onOpenChange: v,
      onOpenToggle: s.useCallback(() => v((L) => !L), [v]),
      modal: c,
      children: r
    }
  );
};
x.displayName = h;
var A = "DialogTrigger", J = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: r, ...a } = e, n = u(A, r), t = R(o, n.triggerRef);
    return /* @__PURE__ */ i(
      m.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": n.open,
        "aria-controls": n.contentId,
        "data-state": P(n.open),
        ...a,
        ref: t,
        onClick: p(e.onClick, n.onOpenToggle)
      }
    );
  }
);
J.displayName = A;
var E = "DialogPortal", [Q, b] = O(E, {
  forceMount: void 0
}), T = (e) => {
  const { __scopeDialog: o, forceMount: r, children: a, container: n } = e, t = u(E, o);
  return /* @__PURE__ */ i(Q, { scope: o, forceMount: r, children: s.Children.map(a, (c) => /* @__PURE__ */ i(_, { present: r || t.open, children: /* @__PURE__ */ i(q, { asChild: !0, container: n, children: c }) })) });
};
T.displayName = E;
var D = "DialogOverlay", M = s.forwardRef(
  (e, o) => {
    const r = b(D, e.__scopeDialog), { forceMount: a = r.forceMount, ...n } = e, t = u(D, e.__scopeDialog);
    return t.modal ? /* @__PURE__ */ i(_, { present: a || t.open, children: /* @__PURE__ */ i(X, { ...n, ref: o }) }) : null;
  }
);
M.displayName = D;
var X = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: r, ...a } = e, n = u(D, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ i(U, { as: Z, allowPinchZoom: !0, shards: [n.contentRef], children: /* @__PURE__ */ i(
        m.div,
        {
          "data-state": P(n.open),
          ...a,
          ref: o,
          style: { pointerEvents: "auto", ...a.style }
        }
      ) })
    );
  }
), f = "DialogContent", w = s.forwardRef(
  (e, o) => {
    const r = b(f, e.__scopeDialog), { forceMount: a = r.forceMount, ...n } = e, t = u(f, e.__scopeDialog);
    return /* @__PURE__ */ i(_, { present: a || t.open, children: t.modal ? /* @__PURE__ */ i(ee, { ...n, ref: o }) : /* @__PURE__ */ i(te, { ...n, ref: o }) });
  }
);
w.displayName = f;
var ee = s.forwardRef(
  (e, o) => {
    const r = u(f, e.__scopeDialog), a = s.useRef(null), n = R(o, r.contentRef, a);
    return s.useEffect(() => {
      const t = a.current;
      if (t) return Y(t);
    }, []), /* @__PURE__ */ i(
      F,
      {
        ...e,
        ref: n,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: p(e.onCloseAutoFocus, (t) => {
          var c;
          t.preventDefault(), (c = r.triggerRef.current) == null || c.focus();
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
), te = s.forwardRef(
  (e, o) => {
    const r = u(f, e.__scopeDialog), a = s.useRef(!1), n = s.useRef(!1);
    return /* @__PURE__ */ i(
      F,
      {
        ...e,
        ref: o,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (t) => {
          var c, l;
          (c = e.onCloseAutoFocus) == null || c.call(e, t), t.defaultPrevented || (a.current || (l = r.triggerRef.current) == null || l.focus(), t.preventDefault()), a.current = !1, n.current = !1;
        },
        onInteractOutside: (t) => {
          var d, g;
          (d = e.onInteractOutside) == null || d.call(e, t), t.defaultPrevented || (a.current = !0, t.detail.originalEvent.type === "pointerdown" && (n.current = !0));
          const c = t.target;
          ((g = r.triggerRef.current) == null ? void 0 : g.contains(c)) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && n.current && t.preventDefault();
        }
      }
    );
  }
), F = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: r, trapFocus: a, onOpenAutoFocus: n, onCloseAutoFocus: t, ...c } = e, l = u(f, r), d = s.useRef(null), g = R(o, d);
    return K(), /* @__PURE__ */ y(I, { children: [
      /* @__PURE__ */ i(
        V,
        {
          asChild: !0,
          loop: !0,
          trapped: a,
          onMountAutoFocus: n,
          onUnmountAutoFocus: t,
          children: /* @__PURE__ */ i(
            H,
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
), N = "DialogTitle", oe = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: r, ...a } = e, n = u(N, r);
    return /* @__PURE__ */ i(m.h2, { id: n.titleId, ...a, ref: o });
  }
);
oe.displayName = N;
var S = "DialogDescription", ne = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: r, ...a } = e, n = u(S, r);
    return /* @__PURE__ */ i(m.p, { id: n.descriptionId, ...a, ref: o });
  }
);
ne.displayName = S;
var W = "DialogClose", re = s.forwardRef(
  (e, o) => {
    const { __scopeDialog: r, ...a } = e, n = u(W, r);
    return /* @__PURE__ */ i(
      m.button,
      {
        type: "button",
        ...a,
        ref: o,
        onClick: p(e.onClick, () => n.onOpenChange(!1))
      }
    );
  }
);
re.displayName = W;
function P(e) {
  return e ? "open" : "closed";
}
var k = "DialogTitleWarning", [Pe, G] = B(k, {
  contentName: f,
  titleName: N,
  docsSlug: "dialog"
}), ae = ({ titleId: e }) => {
  const o = G(k), r = `\`${o.contentName}\` requires a \`${o.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o.docsSlug}`;
  return s.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, ie = "DialogDescriptionWarning", se = ({ contentRef: e, descriptionId: o }) => {
  const a = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${G(ie).contentName}}.`;
  return s.useEffect(() => {
    var t;
    const n = (t = e.current) == null ? void 0 : t.getAttribute("aria-describedby");
    o && n && (document.getElementById(o) || console.warn(a));
  }, [a, e, o]), null;
}, ye = x, Ie = T, Oe = M, xe = w;
export {
  xe as Content,
  x as Dialog,
  re as DialogClose,
  w as DialogContent,
  ne as DialogDescription,
  M as DialogOverlay,
  T as DialogPortal,
  oe as DialogTitle,
  J as DialogTrigger,
  Oe as Overlay,
  Ie as Portal,
  ye as Root,
  Pe as WarningProvider,
  Ne as createDialogScope
};
//# sourceMappingURL=index112.js.map

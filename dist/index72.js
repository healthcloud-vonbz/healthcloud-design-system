import * as s from "react";
import { composeEventHandlers as y } from "./index130.js";
import { useComposedRefs as P } from "./index131.js";
import { createContextScope as w } from "./index117.js";
import { Primitive as k } from "./index132.js";
import { createRovingFocusGroupScope as E, Root as L, Item as q } from "./index133.js";
import { useControllableState as K } from "./index118.js";
import { useDirection as V } from "./index134.js";
import { useSize as T } from "./index135.js";
import { usePrevious as j } from "./index136.js";
import { Presence as U } from "./index137.js";
import { jsxs as z, jsx as p } from "react/jsx-runtime";
var C = "Radio", [B, G] = w(C), [H, W] = B(C), S = s.forwardRef(
  (t, c) => {
    const {
      __scopeRadio: e,
      name: n,
      checked: o = !1,
      required: r,
      disabled: a,
      value: l = "on",
      onCheck: d,
      form: f,
      ...R
    } = t, [u, m] = s.useState(null), i = P(c, (b) => m(b)), v = s.useRef(!1), h = u ? f || !!u.closest("form") : !0;
    return /* @__PURE__ */ z(H, { scope: e, checked: o, disabled: a, children: [
      /* @__PURE__ */ p(
        k.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": A(o),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...R,
          ref: i,
          onClick: y(t.onClick, (b) => {
            o || d == null || d(), h && (v.current = b.isPropagationStopped(), v.current || b.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ p(
        X,
        {
          control: u,
          bubbles: !v.current,
          name: n,
          value: l,
          checked: o,
          required: r,
          disabled: a,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
S.displayName = C;
var g = "RadioIndicator", _ = s.forwardRef(
  (t, c) => {
    const { __scopeRadio: e, forceMount: n, ...o } = t, r = W(g, e);
    return /* @__PURE__ */ p(U, { present: n || r.checked, children: /* @__PURE__ */ p(
      k.span,
      {
        "data-state": A(r.checked),
        "data-disabled": r.disabled ? "" : void 0,
        ...o,
        ref: c
      }
    ) });
  }
);
_.displayName = g;
var X = (t) => {
  const { control: c, checked: e, bubbles: n = !0, ...o } = t, r = s.useRef(null), a = j(e), l = T(c);
  return s.useEffect(() => {
    const d = r.current, f = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(f, "checked").set;
    if (a !== e && u) {
      const m = new Event("click", { bubbles: n });
      u.call(d, e), d.dispatchEvent(m);
    }
  }, [a, e, n]), /* @__PURE__ */ p(
    "input",
    {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: e,
      ...o,
      tabIndex: -1,
      ref: r,
      style: {
        ...t.style,
        ...l,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0
      }
    }
  );
};
function A(t) {
  return t ? "checked" : "unchecked";
}
var Y = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], I = "RadioGroup", [J, pe] = w(I, [
  E,
  G
]), N = E(), x = G(), [Q, Z] = J(I), D = s.forwardRef(
  (t, c) => {
    const {
      __scopeRadioGroup: e,
      name: n,
      defaultValue: o,
      value: r,
      required: a = !1,
      disabled: l = !1,
      orientation: d,
      dir: f,
      loop: R = !0,
      onValueChange: u,
      ...m
    } = t, i = N(e), v = V(f), [h, b] = K({
      prop: r,
      defaultProp: o,
      onChange: u
    });
    return /* @__PURE__ */ p(
      Q,
      {
        scope: e,
        name: n,
        required: a,
        disabled: l,
        value: h,
        onValueChange: b,
        children: /* @__PURE__ */ p(
          L,
          {
            asChild: !0,
            ...i,
            orientation: d,
            dir: v,
            loop: R,
            children: /* @__PURE__ */ p(
              k.div,
              {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": d,
                "data-disabled": l ? "" : void 0,
                dir: v,
                ...m,
                ref: c
              }
            )
          }
        )
      }
    );
  }
);
D.displayName = I;
var M = "RadioGroupItem", O = s.forwardRef(
  (t, c) => {
    const { __scopeRadioGroup: e, disabled: n, ...o } = t, r = Z(M, e), a = r.disabled || n, l = N(e), d = x(e), f = s.useRef(null), R = P(c, f), u = r.value === o.value, m = s.useRef(!1);
    return s.useEffect(() => {
      const i = (h) => {
        Y.includes(h.key) && (m.current = !0);
      }, v = () => m.current = !1;
      return document.addEventListener("keydown", i), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", i), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ p(
      q,
      {
        asChild: !0,
        ...l,
        focusable: !a,
        active: u,
        children: /* @__PURE__ */ p(
          S,
          {
            disabled: a,
            required: r.required,
            checked: u,
            ...d,
            ...o,
            name: r.name,
            ref: R,
            onCheck: () => r.onValueChange(o.value),
            onKeyDown: y((i) => {
              i.key === "Enter" && i.preventDefault();
            }),
            onFocus: y(o.onFocus, () => {
              var i;
              m.current && ((i = f.current) == null || i.click());
            })
          }
        )
      }
    );
  }
);
O.displayName = M;
var $ = "RadioGroupIndicator", F = s.forwardRef(
  (t, c) => {
    const { __scopeRadioGroup: e, ...n } = t, o = x(e);
    return /* @__PURE__ */ p(_, { ...o, ...n, ref: c });
  }
);
F.displayName = $;
var le = D, fe = O, me = F;
export {
  me as Indicator,
  fe as Item,
  D as RadioGroup,
  F as RadioGroupIndicator,
  O as RadioGroupItem,
  le as Root,
  pe as createRadioGroupScope
};
//# sourceMappingURL=index72.js.map

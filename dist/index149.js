import * as l from "react";
import { composeRefs as u } from "./index143.js";
import { jsx as c, Fragment as d } from "react/jsx-runtime";
var m = l.forwardRef((e, n) => {
  const { children: r, ...t } = e, o = l.Children.toArray(r), i = o.find(y);
  if (i) {
    const s = i.props.children, a = o.map((p) => p === i ? l.Children.count(s) > 1 ? l.Children.only(null) : l.isValidElement(s) ? s.props.children : null : p);
    return /* @__PURE__ */ c(f, { ...t, ref: n, children: l.isValidElement(s) ? l.cloneElement(s, void 0, a) : null });
  }
  return /* @__PURE__ */ c(f, { ...t, ref: n, children: r });
});
m.displayName = "Slot";
var f = l.forwardRef((e, n) => {
  const { children: r, ...t } = e;
  if (l.isValidElement(r)) {
    const o = C(r);
    return l.cloneElement(r, {
      ...h(t, r.props),
      // @ts-ignore
      ref: n ? u(n, o) : o
    });
  }
  return l.Children.count(r) > 1 ? l.Children.only(null) : null;
});
f.displayName = "SlotClone";
var g = ({ children: e }) => /* @__PURE__ */ c(d, { children: e });
function y(e) {
  return l.isValidElement(e) && e.type === g;
}
function h(e, n) {
  const r = { ...n };
  for (const t in n) {
    const o = e[t], i = n[t];
    /^on[A-Z]/.test(t) ? o && i ? r[t] = (...a) => {
      i(...a), o(...a);
    } : o && (r[t] = o) : t === "style" ? r[t] = { ...o, ...i } : t === "className" && (r[t] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function C(e) {
  var t, o;
  let n = (t = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : t.get, r = n && "isReactWarning" in n && n.isReactWarning;
  return r ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
export {
  m as Slot,
  g as Slottable
};
//# sourceMappingURL=index149.js.map

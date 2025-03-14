import * as l from "react";
import { composeRefs as u } from "./index129.js";
import { jsx as c, Fragment as d } from "react/jsx-runtime";
var m = l.forwardRef((r, n) => {
  const { children: e, ...t } = r, o = l.Children.toArray(e), i = o.find(y);
  if (i) {
    const s = i.props.children, a = o.map((p) => p === i ? l.Children.count(s) > 1 ? l.Children.only(null) : l.isValidElement(s) ? s.props.children : null : p);
    return /* @__PURE__ */ c(f, { ...t, ref: n, children: l.isValidElement(s) ? l.cloneElement(s, void 0, a) : null });
  }
  return /* @__PURE__ */ c(f, { ...t, ref: n, children: e });
});
m.displayName = "Slot";
var f = l.forwardRef((r, n) => {
  const { children: e, ...t } = r;
  if (l.isValidElement(e)) {
    const o = C(e), i = h(t, e.props);
    return e.type !== l.Fragment && (i.ref = n ? u(n, o) : o), l.cloneElement(e, i);
  }
  return l.Children.count(e) > 1 ? l.Children.only(null) : null;
});
f.displayName = "SlotClone";
var g = ({ children: r }) => /* @__PURE__ */ c(d, { children: r });
function y(r) {
  return l.isValidElement(r) && r.type === g;
}
function h(r, n) {
  const e = { ...n };
  for (const t in n) {
    const o = r[t], i = n[t];
    /^on[A-Z]/.test(t) ? o && i ? e[t] = (...a) => {
      i(...a), o(...a);
    } : o && (e[t] = o) : t === "style" ? e[t] = { ...o, ...i } : t === "className" && (e[t] = [o, i].filter(Boolean).join(" "));
  }
  return { ...r, ...e };
}
function C(r) {
  var t, o;
  let n = (t = Object.getOwnPropertyDescriptor(r.props, "ref")) == null ? void 0 : t.get, e = n && "isReactWarning" in n && n.isReactWarning;
  return e ? r.ref : (n = (o = Object.getOwnPropertyDescriptor(r, "ref")) == null ? void 0 : o.get, e = n && "isReactWarning" in n && n.isReactWarning, e ? r.props.ref : r.props.ref || r.ref);
}
export {
  m as Slot,
  g as Slottable
};
//# sourceMappingURL=index64.js.map

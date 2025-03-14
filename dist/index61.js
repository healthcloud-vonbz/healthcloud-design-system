import * as m from "react";
import { createContextScope as $ } from "./index109.js";
import { Primitive as c } from "./index110.js";
import { jsx as l } from "react/jsx-runtime";
var u = "Progress", d = 100, [h, C] = $(u), [R, _] = h(u), f = m.forwardRef(
  (r, e) => {
    const {
      __scopeProgress: i,
      value: o = null,
      max: a,
      getValueLabel: N = E,
      ...b
    } = r;
    (a || a === 0) && !v(a) && console.error(M(`${a}`, "Progress"));
    const t = v(a) ? a : d;
    o !== null && !p(o, t) && console.error(V(`${o}`, "Progress"));
    const s = p(o, t) ? o : null, I = n(s) ? N(s, t) : void 0;
    return /* @__PURE__ */ l(R, { scope: i, value: s, max: t, children: /* @__PURE__ */ l(
      c.div,
      {
        "aria-valuemax": t,
        "aria-valuemin": 0,
        "aria-valuenow": n(s) ? s : void 0,
        "aria-valuetext": I,
        role: "progressbar",
        "data-state": x(s, t),
        "data-value": s ?? void 0,
        "data-max": t,
        ...b,
        ref: e
      }
    ) });
  }
);
f.displayName = u;
var g = "ProgressIndicator", P = m.forwardRef(
  (r, e) => {
    const { __scopeProgress: i, ...o } = r, a = _(g, i);
    return /* @__PURE__ */ l(
      c.div,
      {
        "data-state": x(a.value, a.max),
        "data-value": a.value ?? void 0,
        "data-max": a.max,
        ...o,
        ref: e
      }
    );
  }
);
P.displayName = g;
function E(r, e) {
  return `${Math.round(r / e * 100)}%`;
}
function x(r, e) {
  return r == null ? "indeterminate" : r === e ? "complete" : "loading";
}
function n(r) {
  return typeof r == "number";
}
function v(r) {
  return n(r) && !isNaN(r) && r > 0;
}
function p(r, e) {
  return n(r) && !isNaN(r) && r <= e && r >= 0;
}
function M(r, e) {
  return `Invalid prop \`max\` of value \`${r}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${d}\`.`;
}
function V(r, e) {
  return `Invalid prop \`value\` of value \`${r}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${d} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var D = f, L = P;
export {
  L as Indicator,
  f as Progress,
  P as ProgressIndicator,
  D as Root,
  C as createProgressScope
};
//# sourceMappingURL=index61.js.map

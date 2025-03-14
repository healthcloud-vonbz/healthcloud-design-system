import * as s from "react";
import * as f from "react-dom";
import { Slot as p } from "./index64.js";
import { jsx as u } from "react/jsx-runtime";
var c = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], v = c.reduce((r, i) => {
  const t = s.forwardRef((o, e) => {
    const { asChild: m, ...a } = o, n = m ? p : i;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ u(n, { ...a, ref: e });
  });
  return t.displayName = `Primitive.${i}`, { ...r, [i]: t };
}, {});
function h(r, i) {
  r && f.flushSync(() => r.dispatchEvent(i));
}
export {
  v as Primitive,
  h as dispatchDiscreteCustomEvent
};
//# sourceMappingURL=index123.js.map

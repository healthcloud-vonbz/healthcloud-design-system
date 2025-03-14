import * as f from "react";
import "react-dom";
import { Slot as n } from "./index64.js";
import { jsx as s } from "react/jsx-runtime";
var d = [
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
], c = d.reduce((o, r) => {
  const i = f.forwardRef((t, e) => {
    const { asChild: m, ...a } = t, p = m ? n : r;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ s(p, { ...a, ref: e });
  });
  return i.displayName = `Primitive.${r}`, { ...o, [r]: i };
}, {});
export {
  c as Primitive
};
//# sourceMappingURL=index127.js.map

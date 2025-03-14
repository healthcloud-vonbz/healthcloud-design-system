import { jsx as o, jsxs as e } from "react/jsx-runtime";
import { Dialog as t, DialogContent as n, DialogHeader as m, DialogTitle as c, DialogDescription as d } from "./index33.js";
function x({
  open: a,
  onOpenChange: i,
  title: l,
  children: r
}) {
  return /* @__PURE__ */ o(t, { open: a, onOpenChange: i, children: /* @__PURE__ */ e(n, { className: "rounded-md mx-auto max-w-lg max-h-[95vh] p-6 overflow-y-auto", children: [
    /* @__PURE__ */ e(m, { children: [
      /* @__PURE__ */ o(c, { className: "text-center", children: l }),
      /* @__PURE__ */ o(d, {})
    ] }),
    r
  ] }) });
}
export {
  x as DialogModal
};
//# sourceMappingURL=index8.js.map

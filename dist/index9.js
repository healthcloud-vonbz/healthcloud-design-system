import { jsx as r, jsxs as n } from "react/jsx-runtime";
import { Drawer as d, DrawerContent as l, DrawerHeader as m, DrawerTitle as t, DrawerDescription as c } from "./index34.js";
function w({
  open: e,
  onOpenChange: o,
  title: a,
  children: i
}) {
  return /* @__PURE__ */ r(d, { open: e, onOpenChange: o, children: /* @__PURE__ */ n(l, { className: "rounded-md mx-2 max-h-[80%] p-0", children: [
    /* @__PURE__ */ r(m, { children: /* @__PURE__ */ r(t, { children: a }) }),
    /* @__PURE__ */ r(c, {}),
    /* @__PURE__ */ r("div", { className: "overflow-y-auto px-4 mb-10", children: i })
  ] }) });
}
export {
  w as MobileModal
};
//# sourceMappingURL=index9.js.map

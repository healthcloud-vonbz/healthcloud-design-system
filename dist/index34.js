import { jsx as o, jsxs as l } from "react/jsx-runtime";
import * as i from "react";
import { Drawer as a } from "./index69.js";
import { cn as s } from "./index29.js";
const n = ({
  shouldScaleBackground: e = !0,
  ...r
}) => /* @__PURE__ */ o(
  a.Root,
  {
    shouldScaleBackground: e,
    ...r
  }
);
n.displayName = "Drawer";
const c = a.Portal, d = i.forwardRef(({ className: e, ...r }, t) => /* @__PURE__ */ o(
  a.Overlay,
  {
    ref: t,
    className: s("fixed inset-0 z-50 bg-black/80", e),
    ...r
  }
));
d.displayName = a.Overlay.displayName;
const p = i.forwardRef(({ className: e, children: r, ...t }, m) => /* @__PURE__ */ l(c, { children: [
  /* @__PURE__ */ o(d, {}),
  /* @__PURE__ */ l(
    a.Content,
    {
      ref: m,
      className: s(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        e
      ),
      ...t,
      children: [
        /* @__PURE__ */ o("div", { className: "mx-auto mt-4 h-[6px] w-[130px] rounded-full bg-[#C4C4C4]" }),
        r
      ]
    }
  )
] }));
p.displayName = "DrawerContent";
const f = ({
  className: e,
  ...r
}) => /* @__PURE__ */ o(
  "div",
  {
    className: s("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...r
  }
);
f.displayName = "DrawerHeader";
const w = i.forwardRef(({ className: e, ...r }, t) => /* @__PURE__ */ o(
  a.Title,
  {
    ref: t,
    className: s(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...r
  }
));
w.displayName = a.Title.displayName;
const x = i.forwardRef(({ className: e, ...r }, t) => /* @__PURE__ */ o(
  a.Description,
  {
    ref: t,
    className: s("text-sm text-muted-foreground", e),
    ...r
  }
));
x.displayName = a.Description.displayName;
export {
  n as Drawer,
  p as DrawerContent,
  x as DrawerDescription,
  f as DrawerHeader,
  d as DrawerOverlay,
  c as DrawerPortal,
  w as DrawerTitle
};
//# sourceMappingURL=index34.js.map

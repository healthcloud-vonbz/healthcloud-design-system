import { jsx as o, jsxs as d } from "react/jsx-runtime";
import * as s from "react";
import { Overlay as i, Content as l, Close as p, Title as r, Description as c, Portal as g } from "./index48.js";
import { Cross2Icon as u } from "./index22.js";
import { cn as n } from "./index11.js";
const y = g, m = s.forwardRef(({ className: a, ...t }, e) => /* @__PURE__ */ o(
  i,
  {
    ref: e,
    className: n(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      a
    ),
    ...t
  }
));
m.displayName = i.displayName;
const N = s.forwardRef(({ className: a, children: t, ...e }, f) => /* @__PURE__ */ d(y, { children: [
  /* @__PURE__ */ o(m, {}),
  /* @__PURE__ */ d(
    l,
    {
      ref: f,
      className: n(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        a
      ),
      ...e,
      children: [
        t,
        /* @__PURE__ */ d(p, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ o(u, { className: "h-4 w-4" }),
          /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
N.displayName = l.displayName;
const x = s.forwardRef(({ className: a, ...t }, e) => /* @__PURE__ */ o(
  r,
  {
    ref: e,
    className: n(
      "text-lg font-semibold leading-none tracking-tight",
      a
    ),
    ...t
  }
));
x.displayName = r.displayName;
const b = s.forwardRef(({ className: a, ...t }, e) => /* @__PURE__ */ o(
  c,
  {
    ref: e,
    className: n("text-sm text-muted-foreground", a),
    ...t
  }
));
b.displayName = c.displayName;
export {
  N as DialogContent,
  b as DialogDescription,
  m as DialogOverlay,
  y as DialogPortal,
  x as DialogTitle
};
//# sourceMappingURL=index24.js.map

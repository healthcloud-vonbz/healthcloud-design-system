import { jsx as o, jsxs as d } from "react/jsx-runtime";
import * as n from "react";
import { Overlay as i, Content as l, Close as f, Title as r, Description as c, Root as g, Portal as u } from "./index70.js";
import { Cross2Icon as y } from "./index66.js";
import { cn as s } from "./index29.js";
const k = g, N = u, m = n.forwardRef(({ className: a, ...t }, e) => /* @__PURE__ */ o(
  i,
  {
    ref: e,
    className: s(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      a
    ),
    ...t
  }
));
m.displayName = i.displayName;
const x = n.forwardRef(({ className: a, children: t, ...e }, p) => /* @__PURE__ */ d(N, { children: [
  /* @__PURE__ */ o(m, {}),
  /* @__PURE__ */ d(
    l,
    {
      ref: p,
      className: s(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        a
      ),
      ...e,
      children: [
        t,
        /* @__PURE__ */ d(f, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground bg-transparent p-0", children: [
          /* @__PURE__ */ o(y, { className: "h-4 w-4" }),
          /* @__PURE__ */ o("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
x.displayName = l.displayName;
const b = ({
  className: a,
  ...t
}) => /* @__PURE__ */ o(
  "div",
  {
    className: s(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      a
    ),
    ...t
  }
);
b.displayName = "DialogHeader";
const D = n.forwardRef(({ className: a, ...t }, e) => /* @__PURE__ */ o(
  r,
  {
    ref: e,
    className: s(
      "text-lg font-semibold leading-none tracking-tight",
      a
    ),
    ...t
  }
));
D.displayName = r.displayName;
const h = n.forwardRef(({ className: a, ...t }, e) => /* @__PURE__ */ o(
  c,
  {
    ref: e,
    className: s("text-sm text-muted-foreground", a),
    ...t
  }
));
h.displayName = c.displayName;
export {
  k as Dialog,
  x as DialogContent,
  h as DialogDescription,
  b as DialogHeader,
  m as DialogOverlay,
  N as DialogPortal,
  D as DialogTitle
};
//# sourceMappingURL=index33.js.map

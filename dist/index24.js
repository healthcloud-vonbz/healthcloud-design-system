import { jsx as o } from "react/jsx-runtime";
import * as n from "react";
import { Portal as s, Content as t, Root as m, Trigger as p } from "./index68.js";
import { cn as f } from "./index29.js";
const v = m, b = p, l = n.forwardRef(({ className: e, align: a = "center", sideOffset: d = 4, ...r }, i) => /* @__PURE__ */ o(s, { children: /* @__PURE__ */ o(
  t,
  {
    ref: i,
    align: a,
    sideOffset: d,
    className: f(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
) }));
l.displayName = t.displayName;
export {
  v as Popover,
  l as PopoverContent,
  b as PopoverTrigger
};
//# sourceMappingURL=index24.js.map

import { jsx as n } from "react/jsx-runtime";
import * as a from "react";
import { Slot as d } from "./index64.js";
import { cva as l } from "./index65.js";
import { cn as m } from "./index29.js";
const h = l(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-ds_health-primary font-semibold text-primary-foreground hover:bg-ds_health-hover-primary",
        destructive: "bg-destructive font-semibold text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-ds_health-primary font-semibold text-ds_health-primary bg-background hover:bg-accent hover:text-ds_health-hover-primary",
        secondary: "bg-secondary font-semibold text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-ds_health-hover-primary font-semibold text-bg-ds_health-primary",
        link: "text-ds_health-primary underline-offset-4 hover:underline font-semibold",
        black: "text-black hover:text-ds_health-hover-primary font-semibold"
      },
      size: {
        default: "h-10 px-4 py-2",
        md: "h-[46px] px-16 text-base",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), f = a.forwardRef(
  ({ className: e, variant: t, size: r, asChild: o = !1, ...i }, s) => /* @__PURE__ */ n(
    o ? d : "button",
    {
      className: m(h({ variant: t, size: r, className: e })),
      ref: s,
      ...i
    }
  )
);
f.displayName = "Button";
export {
  f as Button,
  h as buttonVariants
};
//# sourceMappingURL=index22.js.map

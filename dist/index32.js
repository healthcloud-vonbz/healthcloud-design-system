import { jsx as e } from "react/jsx-runtime";
import * as s from "react";
import { Root as t, Item as i, Indicator as c } from "./index72.js";
import { cn as d } from "./index29.js";
import n from "./index28.js";
const m = s.forwardRef(({ className: r, ...o }, a) => /* @__PURE__ */ e(
  t,
  {
    className: d("grid gap-2", r),
    ...o,
    ref: a
  }
));
m.displayName = t.displayName;
const l = s.forwardRef(({ className: r, ...o }, a) => /* @__PURE__ */ e(
  i,
  {
    ref: a,
    className: d(
      "data-[state=checked]:bg-ds_health-secondary aspect-square h-4 w-4 rounded-sm border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-none p-0 bg-transparent",
      r
    ),
    ...o,
    children: /* @__PURE__ */ e(c, { className: "flex items-center justify-center rounded-sm", children: /* @__PURE__ */ e(n, { color: "white", className: "h-4 w-4" }) })
  }
));
l.displayName = i.displayName;
export {
  m as RadioGroup,
  l as RadioGroupItem
};
//# sourceMappingURL=index32.js.map

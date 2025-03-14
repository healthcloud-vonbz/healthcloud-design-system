import { jsx as r } from "react/jsx-runtime";
import * as t from "react";
import { Root as a, Indicator as m } from "./index61.js";
import { cn as i } from "./index29.js";
const f = t.forwardRef(({ className: o, value: l, ...e }, s) => /* @__PURE__ */ r(
  a,
  {
    ref: s,
    className: i(
      "relative h-4 w-full overflow-hidden bg-secondary",
      o
    ),
    ...e,
    children: /* @__PURE__ */ r(
      m,
      {
        className: "h-full w-full flex-1 bg-ds_health-primary transition-all",
        style: { transform: `translateX(-${100 - (l || 0)}%)` }
      }
    )
  }
));
f.displayName = a.displayName;
export {
  f as Progress
};
//# sourceMappingURL=index21.js.map

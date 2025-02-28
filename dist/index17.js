import { jsx as r } from "react/jsx-runtime";
import * as s from "react";
import { Root as a, Indicator as m } from "./index26.js";
import { cn as i } from "./index11.js";
const f = s.forwardRef(({ className: o, value: l, ...e }, t) => /* @__PURE__ */ r(
  a,
  {
    ref: t,
    className: i(
      "relative h-4 w-full overflow-hidden bg-secondary",
      o
    ),
    ...e,
    children: /* @__PURE__ */ r(
      m,
      {
        className: "h-full w-full flex-1 bg-health-primary transition-all",
        style: { transform: `translateX(-${100 - (l || 0)}%)` }
      }
    )
  }
));
f.displayName = a.displayName;
export {
  f as Progress
};
//# sourceMappingURL=index17.js.map

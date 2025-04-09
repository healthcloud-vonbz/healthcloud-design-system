import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { useState as m } from "react";
import { cn as f } from "./index34.js";
import { locales as d } from "./index19.js";
import { Button as c } from "./index27.js";
import { Calendar as p } from "./index38.js";
import { Popover as u, PopoverTrigger as h, PopoverContent as C } from "./index29.js";
import y from "./index39.js";
import { formatDate as g } from "./index40.js";
const x = /* @__PURE__ */ new Date();
function M({ date: o, setDate: a, locale: l = "pt-BR" }) {
  const [i, r] = m(!1), s = (t) => {
    a(t), r(!1);
  };
  return /* @__PURE__ */ n(u, { open: i, onOpenChange: r, children: [
    /* @__PURE__ */ e(h, { asChild: !0, children: /* @__PURE__ */ n(
      c,
      {
        variant: "input",
        className: f(
          "w-full text-left font-normal flex justify-between items-center",
          !o && "text-muted-foreground"
        ),
        onClick: () => r((t) => !t),
        children: [
          o ? g(o, "dd/MM/yyyy") : /* @__PURE__ */ e("span", { children: "Selecionar data" }),
          /* @__PURE__ */ e(y, {})
        ]
      }
    ) }),
    /* @__PURE__ */ e(C, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ e(
      p,
      {
        mode: "single",
        selected: o,
        onSelect: s,
        locale: d[l],
        initialFocus: !0,
        modifiers: { today: x },
        modifiersClassNames: {
          today: "border border-blue-300 rounded-full"
        }
      }
    ) })
  ] });
}
export {
  M as InputDate
};
//# sourceMappingURL=index8.js.map

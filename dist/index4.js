import { jsxs as a, jsx as e } from "react/jsx-runtime";
import * as h from "react";
import { cn as f } from "./index11.js";
import { Button as u } from "./index12.js";
import { Command as C, CommandInput as x, CommandList as b, CommandEmpty as v, CommandGroup as N, CommandItem as w } from "./index13.js";
import { Popover as y, PopoverTrigger as g, PopoverContent as j } from "./index14.js";
import P from "./index15.js";
import S from "./index16.js";
function L({
  value: r,
  onChange: c,
  options: m,
  placeholder: s,
  withoutSearch: p,
  disabled: d = !1
}) {
  var t;
  const [n, l] = h.useState(!1);
  return /* @__PURE__ */ a(y, { open: n, onOpenChange: l, children: [
    /* @__PURE__ */ e(g, { asChild: !0, children: /* @__PURE__ */ a(
      u,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": n,
        className: "w-full justify-between border text-black min-w-[40px] border-input overflow-hidden",
        disabled: d,
        children: [
          r ? (t = m.find((o) => o.value === r)) == null ? void 0 : t.label : /* @__PURE__ */ e("p", { className: "text-health-text-muted font-normal", children: s || "Selecione uma opção..." }),
          /* @__PURE__ */ e(P, { className: "opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ e(j, { className: "w-full p-0", align: "start", children: /* @__PURE__ */ a(C, { className: "min-w-[400px]", children: [
      p ? null : /* @__PURE__ */ e(x, { placeholder: "Buscar...", className: "h-9" }),
      /* @__PURE__ */ a(b, { children: [
        /* @__PURE__ */ e(v, { children: "Nenhuma opção encontrada." }),
        /* @__PURE__ */ e(N, { children: m.map((o) => /* @__PURE__ */ a(
          w,
          {
            value: o.value,
            onSelect: (i) => {
              c(i === r ? "" : i), l(!1);
            },
            children: [
              o.label,
              /* @__PURE__ */ e(
                S,
                {
                  className: f(
                    "ml-auto",
                    r === o.value ? "opacity-100" : "opacity-0"
                  )
                }
              )
            ]
          },
          o.value
        )) })
      ] })
    ] }) })
  ] });
}
export {
  L as Combobox
};
//# sourceMappingURL=index4.js.map

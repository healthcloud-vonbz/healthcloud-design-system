import { jsxs as r, jsx as e } from "react/jsx-runtime";
import * as u from "react";
import { Button as f } from "./index22.js";
import { Command as x, CommandInput as v, CommandList as C, CommandEmpty as w, CommandGroup as b, CommandItem as N } from "./index23.js";
import { Popover as g, PopoverTrigger as S, PopoverContent as j } from "./index24.js";
import y from "./index25.js";
import z from "./index26.js";
import P from "./index27.js";
import k from "./index28.js";
function U({
  selectedValue: o,
  onChange: s,
  options: l,
  placeholder: c,
  withoutSearch: p,
  disabled: d = !1,
  iconType: n = "arrow"
}) {
  var i;
  const [m, t] = u.useState(!1);
  return /* @__PURE__ */ r(g, { open: m, onOpenChange: t, children: [
    /* @__PURE__ */ e(S, { asChild: !0, children: /* @__PURE__ */ r(
      f,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": m,
        className: "w-full justify-between border h-10 text-black min-w-[40px] border-input overflow-hidden px-2",
        disabled: d,
        children: [
          o ? (i = l.find((a) => a.value === o)) == null ? void 0 : i.label : /* @__PURE__ */ e("p", { className: "text-ds_health-text-muted font-normal", children: c || "Selecione uma opção..." }),
          n === "arrow" && (m ? /* @__PURE__ */ e(z, { size: 14, className: "opacity-50 min-w-[14px]" }) : /* @__PURE__ */ e(y, { size: 14 })),
          n === "search" && /* @__PURE__ */ e(P, { size: 14, className: "opacity-50 min-w-[14px]" })
        ]
      }
    ) }),
    /* @__PURE__ */ e(j, { className: "w-full p-0", align: "start", children: /* @__PURE__ */ r(x, { className: "min-w-[400px]", children: [
      p ? null : /* @__PURE__ */ e(v, { placeholder: "Buscar...", className: "h-9" }),
      /* @__PURE__ */ r(C, { children: [
        /* @__PURE__ */ e(w, { children: "Nenhuma opção encontrada." }),
        /* @__PURE__ */ e(b, { children: l.map((a) => /* @__PURE__ */ r(
          N,
          {
            value: a.value,
            onSelect: (h) => {
              h === a.value && s(a), t(!1);
            },
            children: [
              a.label,
              o === a.value && /* @__PURE__ */ e(k, { className: "ml-auto" })
            ]
          },
          a.value
        )) })
      ] })
    ] }) })
  ] });
}
export {
  U as Combobox
};
//# sourceMappingURL=index5.js.map

import { jsxs as a, jsx as e } from "react/jsx-runtime";
import * as h from "react";
import { Button as u } from "./index24.js";
import { Command as f, CommandInput as x, CommandList as C, CommandEmpty as b, CommandGroup as v, CommandItem as w } from "./index25.js";
import { Popover as N, PopoverTrigger as g, PopoverContent as j } from "./index26.js";
import y from "./index27.js";
import P from "./index28.js";
function D({
  value: m,
  onChange: s,
  options: r,
  placeholder: c,
  withoutSearch: d,
  disabled: p = !1
}) {
  var t;
  const [n, l] = h.useState(!1);
  return /* @__PURE__ */ a(N, { open: n, onOpenChange: l, children: [
    /* @__PURE__ */ e(g, { asChild: !0, children: /* @__PURE__ */ a(
      u,
      {
        variant: "outline",
        role: "combobox",
        "aria-expanded": n,
        className: "w-full justify-between border h-10 text-black min-w-[40px] border-input overflow-hidden px-2",
        disabled: p,
        children: [
          m ? (t = r.find((o) => o.value === m)) == null ? void 0 : t.label : /* @__PURE__ */ e("p", { className: "text-ds_health-text-muted font-normal", children: c || "Selecione uma opção..." }),
          /* @__PURE__ */ e(y, { size: 14, className: "opacity-50 min-w-[14px]" })
        ]
      }
    ) }),
    /* @__PURE__ */ e(j, { className: "w-full p-0", align: "start", children: /* @__PURE__ */ a(f, { className: "min-w-[400px]", children: [
      d ? null : /* @__PURE__ */ e(x, { placeholder: "Buscar...", className: "h-9" }),
      /* @__PURE__ */ a(C, { children: [
        /* @__PURE__ */ e(b, { children: "Nenhuma opção encontrada." }),
        /* @__PURE__ */ e(v, { children: r.map((o) => /* @__PURE__ */ a(
          w,
          {
            value: o.value,
            onSelect: (i) => {
              s(i === m ? "" : i), l(!1);
            },
            children: [
              o.label,
              m === o.value && /* @__PURE__ */ e(P, { className: "ml-auto" })
            ]
          },
          o.value
        )) })
      ] })
    ] }) })
  ] });
}
export {
  D as Combobox
};
//# sourceMappingURL=index5.js.map

import { jsx as e, jsxs as a } from "react/jsx-runtime";
import { useState as i, useEffect as f, useMemo as v } from "react";
import { cn as x } from "./index34.js";
import { Button as b } from "./index27.js";
import { Command as g, CommandInput as N, CommandEmpty as w, CommandList as y, CommandGroup as C, CommandItem as j } from "./index28.js";
import { Popover as P, PopoverTrigger as k, PopoverContent as M } from "./index29.js";
import S from "./index30.js";
import E from "./index33.js";
function T({
  options: l,
  placeholder: d,
  onSelectValue: n,
  selectedValues: m = []
}) {
  const [t, p] = i(!1), [s, c] = i(!1);
  f(() => {
    c(!0);
  }, []);
  const h = (r) => {
    m.some((o) => o.value === r) ? n(
      m.filter((o) => o.value !== r)
    ) : n([
      ...m,
      { value: r, label: r }
    ]);
  }, u = v(() => m.map((r) => r.label), [m]);
  return s ? /* @__PURE__ */ e("div", { className: "w-full", children: /* @__PURE__ */ a(P, { open: t, onOpenChange: p, children: [
    /* @__PURE__ */ e(k, { asChild: !0, children: /* @__PURE__ */ a(
      b,
      {
        variant: "input",
        role: "combobox",
        "aria-expanded": t,
        className: "w-full justify-between h-auto min-h-[2.5rem] px-3 py-2",
        children: [
          m.length === 0 ? /* @__PURE__ */ e("span", { className: "text-muted-foreground font-normal", children: d }) : /* @__PURE__ */ e("div", { className: "flex flex-wrap gap-1", children: u.map((r) => /* @__PURE__ */ e(
            "div",
            {
              className: "border bg-black font-medium rounded-full text-white py-[2px] px-2",
              children: r
            },
            r
          )) }),
          /* @__PURE__ */ e(S, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
        ]
      }
    ) }),
    /* @__PURE__ */ e(
      M,
      {
        align: "start",
        className: "w-[var(--radix-popover-trigger-width)] p-0",
        children: /* @__PURE__ */ a(g, { children: [
          /* @__PURE__ */ e(N, { placeholder: "Pesquisar" }),
          /* @__PURE__ */ e(w, { children: "Nenhum item encontrado." }),
          /* @__PURE__ */ e(y, { children: /* @__PURE__ */ e(C, { children: l.map((r) => /* @__PURE__ */ a(
            j,
            {
              value: r.label,
              onSelect: () => h(r.value),
              children: [
                /* @__PURE__ */ e(
                  "div",
                  {
                    className: x(
                      "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                      m.some((o) => o.value === r.value) ? "bg-ds_health-primary border-ds_health-primary text-primary-foreground" : "opacity-50"
                    ),
                    children: m.some((o) => o.value === r.value) && /* @__PURE__ */ e(E, { className: "h-3 w-3" })
                  }
                ),
                /* @__PURE__ */ e("p", { className: "font-medium", children: r.label })
              ]
            },
            r.value
          )) }) })
        ] })
      }
    )
  ] }) }) : null;
}
export {
  T as MultiSelect
};
//# sourceMappingURL=index9.js.map

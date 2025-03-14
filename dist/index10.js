import { jsx as o } from "react/jsx-runtime";
import { DialogModal as l } from "./index8.js";
import { DocumentsForm as c } from "./index63.js";
function f({
  open: r,
  onOpenChange: i,
  onSubmit: t,
  selectedValue: m
}) {
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    l,
    {
      open: r,
      onOpenChange: i,
      title: "Selecione o documento",
      children: /* @__PURE__ */ o(
        c,
        {
          onSubmit: (e) => {
            t(e), i(!1);
          },
          selectedValue: m
        }
      )
    }
  ) });
}
export {
  f as DocumentsDialog
};
//# sourceMappingURL=index10.js.map

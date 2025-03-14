import { jsx as t } from "react/jsx-runtime";
import { MobileModal as l } from "./index9.js";
import { DocumentsForm as c } from "./index63.js";
function s({
  open: e,
  onOpenChange: o,
  onSubmit: m,
  selectedValue: r
}) {
  return /* @__PURE__ */ t(
    l,
    {
      open: e,
      onOpenChange: o,
      title: "Selecione o Documento",
      children: /* @__PURE__ */ t(
        c,
        {
          onSubmit: (i) => {
            m(i), o(!1);
          },
          selectedValue: r
        }
      )
    }
  );
}
export {
  s as DocumentsMobileModal
};
//# sourceMappingURL=index11.js.map

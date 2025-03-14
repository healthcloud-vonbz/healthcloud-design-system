import { jsx as o, jsxs as r } from "react/jsx-runtime";
import { Mask as g } from "./index17.js";
import { useForm as x } from "./index138.js";
import { Button as F } from "./index22.js";
import { Form as b, FormField as c, FormItem as s, FormControl as i, FormMessage as d } from "./index139.js";
import { brazilianDocuments as u } from "./index140.js";
import { RadioGroup as v } from "./index7.js";
import { Input as C } from "./index6.js";
function y({ onSubmit: p, selectedValue: f }) {
  const m = x({
    defaultValues: f
  }), t = m.watch("documentType"), n = u.find(
    (e) => e.document_name === t
  ), l = new g({ mask: n == null ? void 0 : n.mask }), h = (e) => {
    p(e);
  };
  return /* @__PURE__ */ o(b, { ...m, children: /* @__PURE__ */ r(
    "form",
    {
      onSubmit: m.handleSubmit(h),
      className: "flex flex-col gap-8",
      children: [
        /* @__PURE__ */ o(
          c,
          {
            control: m.control,
            name: "documentType",
            render: ({ field: e }) => /* @__PURE__ */ r(s, { className: "flex flex-col gap-4", children: [
              /* @__PURE__ */ o(i, { className: "relative", children: /* @__PURE__ */ o(
                v,
                {
                  value: e.value,
                  options: u.map((a) => ({
                    value: a.document_name,
                    label: a.document_name
                  })),
                  onChange: (a) => {
                    e.onChange(a), m.setValue("documentValue", "");
                  }
                }
              ) }),
              /* @__PURE__ */ o(d, {})
            ] })
          }
        ),
        t && n && /* @__PURE__ */ o(
          c,
          {
            control: m.control,
            name: "documentValue",
            rules: {
              required: "Campo é obrigatório",
              validate: (e) => l.completed(e) || "O campo não está completo."
            },
            render: ({ field: e }) => /* @__PURE__ */ r(s, { className: "flex flex-col", children: [
              /* @__PURE__ */ o(i, { className: "bg-white", children: /* @__PURE__ */ o(
                C,
                {
                  ...e,
                  onChange: (a) => {
                    e.onChange(l.masked(a.target.value));
                  },
                  placeholder: `${n.document_name}`
                }
              ) }),
              /* @__PURE__ */ o(d, {})
            ] })
          }
        ),
        /* @__PURE__ */ o(F, { disabled: !m.formState.isValid, children: "Selecionar" })
      ]
    }
  ) });
}
export {
  y as DocumentsForm
};
//# sourceMappingURL=index63.js.map

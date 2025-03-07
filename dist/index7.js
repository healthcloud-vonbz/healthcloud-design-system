import { jsx as a, jsxs as s } from "react/jsx-runtime";
import { clsx as u } from "./index30.js";
import { Label as c } from "./index31.js";
import { RadioGroup as i, RadioGroupItem as d } from "./index32.js";
function n({
  onChange: r,
  value: l,
  options: m,
  className: o
}) {
  return /* @__PURE__ */ a(
    i,
    {
      onValueChange: r,
      value: l,
      className: u("flex flex-col gap-4", o),
      children: m.map((e) => /* @__PURE__ */ s("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ a(d, { value: e.value, id: e.value }),
        /* @__PURE__ */ a(c, { className: "cursor-pointer", htmlFor: e.value, children: e.label })
      ] }, e.value))
    }
  );
}
export {
  n as RadioGroup
};
//# sourceMappingURL=index7.js.map

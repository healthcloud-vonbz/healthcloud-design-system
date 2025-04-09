import { isValid as e } from "./index21.js";
import { parse as a } from "./index22.js";
import { isAfter as i } from "./index23.js";
function s(r) {
  const t = a(r, "dd/MM/yyyy", /* @__PURE__ */ new Date());
  return e(t);
}
function y(r) {
  const t = a(r, "dd/MM/yyyy", /* @__PURE__ */ new Date());
  return e(t) && !i(t, /* @__PURE__ */ new Date());
}
export {
  y as isValidBirthday,
  s as isValidBrazilianDate
};
//# sourceMappingURL=index18.js.map

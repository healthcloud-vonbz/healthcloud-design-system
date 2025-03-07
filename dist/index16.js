import { parse as e } from "./index18.js";
import { isValid as a } from "./index19.js";
import { isAfter as i } from "./index20.js";
function s(r) {
  const t = e(r, "dd/MM/yyyy", /* @__PURE__ */ new Date());
  return a(t);
}
function y(r) {
  const t = e(r, "dd/MM/yyyy", /* @__PURE__ */ new Date());
  return a(t) && !i(t, /* @__PURE__ */ new Date());
}
export {
  y as isValidBirthday,
  s as isValidBrazilianDate
};
//# sourceMappingURL=index16.js.map

import { isDate as r } from "./index50.js";
import { toDate as t } from "./index37.js";
function f(o) {
  return !(!r(o) && typeof o != "number" || isNaN(+t(o)));
}
export {
  f as default,
  f as isValid
};
//# sourceMappingURL=index19.js.map

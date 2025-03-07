import { isDate as r } from "./index48.js";
import { toDate as t } from "./index35.js";
function f(o) {
  return !(!r(o) && typeof o != "number" || isNaN(+t(o)));
}
export {
  f as default,
  f as isValid
};
//# sourceMappingURL=index19.js.map

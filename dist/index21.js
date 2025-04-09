import { isDate as r } from "./index81.js";
import { toDate as t } from "./index45.js";
function f(o) {
  return !(!r(o) && typeof o != "number" || isNaN(+t(o)));
}
export {
  f as default,
  f as isValid
};
//# sourceMappingURL=index21.js.map

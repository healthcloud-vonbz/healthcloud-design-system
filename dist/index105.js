import { forwardRef as s, createElement as c } from "react";
import { mergeClasses as n, toKebabCase as f } from "./index106.js";
import l from "./index107.js";
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u = (e, r) => {
  const o = s(
    ({ className: t, ...a }, m) => c(l, {
      ref: m,
      iconNode: r,
      className: n(`lucide-${f(e)}`, t),
      ...a
    })
  );
  return o.displayName = `${e}`, o;
};
export {
  u as default
};
//# sourceMappingURL=index105.js.map

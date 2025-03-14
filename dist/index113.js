import * as e from "react";
import { useLayoutEffect as a } from "./index164.js";
var s = e.useId || (() => {
}), i = 0;
function d(o) {
  const [t, r] = e.useState(s());
  return a(() => {
    r((u) => u ?? String(i++));
  }, [o]), t ? `radix-${t}` : "";
}
export {
  d as useId
};
//# sourceMappingURL=index113.js.map

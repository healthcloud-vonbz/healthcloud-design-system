import * as r from "react";
import { useCallbackRef as s } from "./index165.js";
function p(n, e = globalThis == null ? void 0 : globalThis.document) {
  const t = s(n);
  r.useEffect(() => {
    const o = (a) => {
      a.key === "Escape" && t(a);
    };
    return e.addEventListener("keydown", o, { capture: !0 }), () => e.removeEventListener("keydown", o, { capture: !0 });
  }, [t, e]);
}
export {
  p as useEscapeKeydown
};
//# sourceMappingURL=index166.js.map

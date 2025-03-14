import { useState as r, useEffect as o } from "react";
function i(t) {
  const [s, n] = r(!1);
  return o(() => {
    const e = window.matchMedia(t);
    n(e.matches);
    const a = (c) => n(c.matches);
    return e.addEventListener("change", a), () => e.removeEventListener("change", a);
  }, [t]), s;
}
export {
  i as useMediaQuery
};
//# sourceMappingURL=index13.js.map

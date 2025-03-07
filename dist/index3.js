import { jsx as e, jsxs as n } from "react/jsx-runtime";
import { useState as i, useEffect as o } from "react";
import { Progress as l } from "./index21.js";
function x() {
  const [a, s] = i(0);
  return o(() => {
    const r = setInterval(() => {
      s((t) => t >= 100 ? 0 : t + 20);
    }, 800);
    return () => clearInterval(r);
  }, []), /* @__PURE__ */ e("div", { className: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", children: /* @__PURE__ */ e("div", { className: "fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]", children: /* @__PURE__ */ n("div", { className: "max-w-xl mx-auto p-4 space-y-2 w-[200px] sm:w-[300px]", children: [
    /* @__PURE__ */ e("p", { className: "font-semibold text-sm sm:text-base text-center w-full text-white", children: "Aguarde um instante..." }),
    /* @__PURE__ */ e(l, { value: a, className: "h-1 sm:h-[6px]" })
  ] }) }) });
}
export {
  x as LoadingProgress
};
//# sourceMappingURL=index3.js.map

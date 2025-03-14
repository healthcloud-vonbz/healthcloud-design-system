import { useState as g, useMemo as f, useCallback as r } from "react";
function v(o) {
  const [e, n] = g(0), c = f(
    () => e < o,
    [e, o]
  ), s = f(() => e > 0, [e]), p = r(
    (t) => {
      n((a) => {
        const u = typeof t == "function" ? t(a) : t;
        if (u < 0 || u > o)
          throw new Error("Step out of range");
        return u;
      });
    },
    [o]
  ), S = r(() => {
    c && n((t) => t + 1);
  }, [c]), i = r(() => {
    s && n((t) => t - 1);
  }, [s]), T = r(() => {
    n(0);
  }, []);
  return [
    e,
    {
      goToNextStep: S,
      goToPrevStep: i,
      canGoToNextStep: c,
      canGoToPrevStep: s,
      setStep: p,
      reset: T
    }
  ];
}
export {
  v as useStep
};
//# sourceMappingURL=index12.js.map

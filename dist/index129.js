import "react";
function i(n, o) {
  if (typeof n == "function")
    return n(o);
  n != null && (n.current = o);
}
function f(...n) {
  return (o) => {
    let u = !1;
    const c = n.map((t) => {
      const e = i(t, o);
      return !u && typeof e == "function" && (u = !0), e;
    });
    if (u)
      return () => {
        for (let t = 0; t < c.length; t++) {
          const e = c[t];
          typeof e == "function" ? e() : i(n[t], null);
        }
      };
  };
}
export {
  f as composeRefs
};
//# sourceMappingURL=index129.js.map

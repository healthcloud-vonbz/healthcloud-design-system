import * as r from "react";
var t = 0;
function a() {
  r.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? n()), document.body.insertAdjacentElement("beforeend", e[1] ?? n()), t++, () => {
      t === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((o) => o.remove()), t--;
    };
  }, []);
}
function n() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
export {
  a as useFocusGuards
};
//# sourceMappingURL=index124.js.map

import { getNonce as o } from "./index214.js";
function r() {
  if (!document)
    return null;
  var t = document.createElement("style");
  t.type = "text/css";
  var e = o();
  return e && t.setAttribute("nonce", e), t;
}
function l(t, e) {
  t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e));
}
function a(t) {
  var e = document.head || document.getElementsByTagName("head")[0];
  e.appendChild(t);
}
var c = function() {
  var t = 0, e = null;
  return {
    add: function(n) {
      t == 0 && (e = r()) && (l(e, n), a(e)), t++;
    },
    remove: function() {
      t--, !t && e && (e.parentNode && e.parentNode.removeChild(e), e = null);
    }
  };
};
export {
  c as stylesheetSingleton
};
//# sourceMappingURL=index218.js.map

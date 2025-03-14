var p = function(e) {
  return e.tagName === "TEXTAREA";
}, w = function(e, r) {
  if (!(e instanceof Element))
    return !1;
  var o = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    o[r] !== "hidden" && // contains scroll inside self
    !(o.overflowY === o.overflowX && !p(e) && o[r] === "visible")
  );
}, y = function(e) {
  return w(e, "overflowY");
}, H = function(e) {
  return w(e, "overflowX");
}, R = function(e, r) {
  var o = r.ownerDocument, t = r;
  do {
    typeof ShadowRoot < "u" && t instanceof ShadowRoot && (t = t.host);
    var a = g(e, t);
    if (a) {
      var n = b(e, t), i = n[1], l = n[2];
      if (i > l)
        return !0;
    }
    t = t.parentNode;
  } while (t && t !== o.body);
  return !1;
}, B = function(e) {
  var r = e.scrollTop, o = e.scrollHeight, t = e.clientHeight;
  return [
    r,
    o,
    t
  ];
}, V = function(e) {
  var r = e.scrollLeft, o = e.scrollWidth, t = e.clientWidth;
  return [
    r,
    o,
    t
  ];
}, g = function(e, r) {
  return e === "v" ? y(r) : H(r);
}, b = function(e, r) {
  return e === "v" ? B(r) : V(r);
}, D = function(e, r) {
  return e === "h" && r === "rtl" ? -1 : 1;
}, W = function(e, r, o, t, a) {
  var n = D(e, window.getComputedStyle(r).direction), i = n * t, l = o.target, f = r.contains(l), c = !1, d = i > 0, s = 0, h = 0;
  do {
    var u = b(e, l), v = u[0], m = u[1], C = u[2], S = m - C - n * v;
    (v || S) && g(e, l) && (s += S, h += v), l instanceof ShadowRoot ? l = l.host : l = l.parentNode;
  } while (
    // portaled content
    !f && l !== document.body || // self content
    f && (r.contains(l) || r === l)
  );
  return (d && (Math.abs(s) < 1 || !a) || !d && (Math.abs(h) < 1 || !a)) && (c = !0), c;
};
export {
  W as handleScroll,
  R as locationCouldBeScrolled
};
//# sourceMappingURL=index207.js.map

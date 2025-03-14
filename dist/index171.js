import { offset as et, shift as it, flip as nt, size as ot, hide as st, computePosition as rt, arrow as ct, limitShift as lt } from "./index195.js";
import { createCoords as R, rectToClientRect as Y, round as D, floor as z, max as E, min as S } from "./index196.js";
import { getOverflowAncestors as V, isElement as y, getWindow as L, getFrameElement as U, getComputedStyle as x, getDocumentElement as b, isHTMLElement as C, isWebKit as j, isTopLayer as M, getNodeName as _, isOverflowElement as k, getNodeScroll as N, getParentNode as W, isLastTraversableNode as A, isTableElement as ft, isContainingBlock as G, getContainingBlock as ut } from "./index197.js";
function J(t) {
  const e = x(t);
  let i = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const o = C(t), c = o ? t.offsetWidth : i, s = o ? t.offsetHeight : n, r = D(i) !== c || D(n) !== s;
  return r && (i = c, n = s), {
    width: i,
    height: n,
    $: r
  };
}
function q(t) {
  return y(t) ? t : t.contextElement;
}
function F(t) {
  const e = q(t);
  if (!C(e))
    return R(1);
  const i = e.getBoundingClientRect(), {
    width: n,
    height: o,
    $: c
  } = J(e);
  let s = (c ? D(i.width) : i.width) / n, r = (c ? D(i.height) : i.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!r || !Number.isFinite(r)) && (r = 1), {
    x: s,
    y: r
  };
}
const ht = /* @__PURE__ */ R(0);
function Q(t) {
  const e = L(t);
  return !j() || !e.visualViewport ? ht : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function at(t, e, i) {
  return e === void 0 && (e = !1), !i || e && i !== L(t) ? !1 : e;
}
function T(t, e, i, n) {
  e === void 0 && (e = !1), i === void 0 && (i = !1);
  const o = t.getBoundingClientRect(), c = q(t);
  let s = R(1);
  e && (n ? y(n) && (s = F(n)) : s = F(t));
  const r = at(c, i, n) ? Q(c) : R(0);
  let f = (o.left + r.x) / s.x, l = (o.top + r.y) / s.y, u = o.width / s.x, a = o.height / s.y;
  if (c) {
    const p = L(c), h = n && y(n) ? L(n) : n;
    let v = p, d = U(v);
    for (; d && n && h !== v; ) {
      const m = F(d), g = d.getBoundingClientRect(), w = x(d), O = g.left + (d.clientLeft + parseFloat(w.paddingLeft)) * m.x, B = g.top + (d.clientTop + parseFloat(w.paddingTop)) * m.y;
      f *= m.x, l *= m.y, u *= m.x, a *= m.y, f += O, l += B, v = L(d), d = U(v);
    }
  }
  return Y({
    width: u,
    height: a,
    x: f,
    y: l
  });
}
function dt(t) {
  let {
    elements: e,
    rect: i,
    offsetParent: n,
    strategy: o
  } = t;
  const c = o === "fixed", s = b(n), r = e ? M(e.floating) : !1;
  if (n === s || r && c)
    return i;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = R(1);
  const u = R(0), a = C(n);
  if ((a || !a && !c) && ((_(n) !== "body" || k(s)) && (f = N(n)), C(n))) {
    const p = T(n);
    l = F(n), u.x = p.x + n.clientLeft, u.y = p.y + n.clientTop;
  }
  return {
    width: i.width * l.x,
    height: i.height * l.y,
    x: i.x * l.x - f.scrollLeft * l.x + u.x,
    y: i.y * l.y - f.scrollTop * l.y + u.y
  };
}
function gt(t) {
  return Array.from(t.getClientRects());
}
function $(t, e) {
  const i = N(t).scrollLeft;
  return e ? e.left + i : T(b(t)).left + i;
}
function pt(t) {
  const e = b(t), i = N(t), n = t.ownerDocument.body, o = E(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), c = E(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -i.scrollLeft + $(t);
  const r = -i.scrollTop;
  return x(n).direction === "rtl" && (s += E(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: c,
    x: s,
    y: r
  };
}
function mt(t, e) {
  const i = L(t), n = b(t), o = i.visualViewport;
  let c = n.clientWidth, s = n.clientHeight, r = 0, f = 0;
  if (o) {
    c = o.width, s = o.height;
    const l = j();
    (!l || l && e === "fixed") && (r = o.offsetLeft, f = o.offsetTop);
  }
  return {
    width: c,
    height: s,
    x: r,
    y: f
  };
}
function wt(t, e) {
  const i = T(t, !0, e === "fixed"), n = i.top + t.clientTop, o = i.left + t.clientLeft, c = C(t) ? F(t) : R(1), s = t.clientWidth * c.x, r = t.clientHeight * c.y, f = o * c.x, l = n * c.y;
  return {
    width: s,
    height: r,
    x: f,
    y: l
  };
}
function X(t, e, i) {
  let n;
  if (e === "viewport")
    n = mt(t, i);
  else if (e === "document")
    n = pt(b(t));
  else if (y(e))
    n = wt(e, i);
  else {
    const o = Q(t);
    n = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return Y(n);
}
function Z(t, e) {
  const i = W(t);
  return i === e || !y(i) || A(i) ? !1 : x(i).position === "fixed" || Z(i, e);
}
function vt(t, e) {
  const i = e.get(t);
  if (i)
    return i;
  let n = V(t, [], !1).filter((r) => y(r) && _(r) !== "body"), o = null;
  const c = x(t).position === "fixed";
  let s = c ? W(t) : t;
  for (; y(s) && !A(s); ) {
    const r = x(s), f = G(s);
    !f && r.position === "fixed" && (o = null), (c ? !f && !o : !f && r.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || k(s) && !f && Z(t, s)) ? n = n.filter((u) => u !== s) : o = r, s = W(s);
  }
  return e.set(t, n), n;
}
function yt(t) {
  let {
    element: e,
    boundary: i,
    rootBoundary: n,
    strategy: o
  } = t;
  const s = [...i === "clippingAncestors" ? M(e) ? [] : vt(e, this._c) : [].concat(i), n], r = s[0], f = s.reduce((l, u) => {
    const a = X(e, u, o);
    return l.top = E(a.top, l.top), l.right = S(a.right, l.right), l.bottom = S(a.bottom, l.bottom), l.left = E(a.left, l.left), l;
  }, X(e, r, o));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function xt(t) {
  const {
    width: e,
    height: i
  } = J(t);
  return {
    width: e,
    height: i
  };
}
function bt(t, e, i) {
  const n = C(e), o = b(e), c = i === "fixed", s = T(t, !0, c, e);
  let r = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = R(0);
  if (n || !n && !c)
    if ((_(e) !== "body" || k(o)) && (r = N(e)), n) {
      const h = T(e, !0, c, e);
      f.x = h.x + e.clientLeft, f.y = h.y + e.clientTop;
    } else o && (f.x = $(o));
  let l = 0, u = 0;
  if (o && !n && !c) {
    const h = o.getBoundingClientRect();
    u = h.top + r.scrollTop, l = h.left + r.scrollLeft - // RTL <body> scrollbar.
    $(o, h);
  }
  const a = s.left + r.scrollLeft - f.x - l, p = s.top + r.scrollTop - f.y - u;
  return {
    x: a,
    y: p,
    width: s.width,
    height: s.height
  };
}
function I(t) {
  return x(t).position === "static";
}
function K(t, e) {
  if (!C(t) || x(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let i = t.offsetParent;
  return b(t) === i && (i = i.ownerDocument.body), i;
}
function tt(t, e) {
  const i = L(t);
  if (M(t))
    return i;
  if (!C(t)) {
    let o = W(t);
    for (; o && !A(o); ) {
      if (y(o) && !I(o))
        return o;
      o = W(o);
    }
    return i;
  }
  let n = K(t, e);
  for (; n && ft(n) && I(n); )
    n = K(n, e);
  return n && A(n) && I(n) && !G(n) ? i : n || ut(t) || i;
}
const Rt = async function(t) {
  const e = this.getOffsetParent || tt, i = this.getDimensions, n = await i(t.floating);
  return {
    reference: bt(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Ct(t) {
  return x(t).direction === "rtl";
}
const Ot = {
  convertOffsetParentRelativeRectToViewportRelativeRect: dt,
  getDocumentElement: b,
  getClippingRect: yt,
  getOffsetParent: tt,
  getElementRects: Rt,
  getClientRects: gt,
  getDimensions: xt,
  getScale: F,
  isElement: y,
  isRTL: Ct
};
function Lt(t, e) {
  let i = null, n;
  const o = b(t);
  function c() {
    var r;
    clearTimeout(n), (r = i) == null || r.disconnect(), i = null;
  }
  function s(r, f) {
    r === void 0 && (r = !1), f === void 0 && (f = 1), c();
    const {
      left: l,
      top: u,
      width: a,
      height: p
    } = t.getBoundingClientRect();
    if (r || e(), !a || !p)
      return;
    const h = z(u), v = z(o.clientWidth - (l + a)), d = z(o.clientHeight - (u + p)), m = z(l), w = {
      rootMargin: -h + "px " + -v + "px " + -d + "px " + -m + "px",
      threshold: E(0, S(1, f)) || 1
    };
    let O = !0;
    function B(P) {
      const H = P[0].intersectionRatio;
      if (H !== f) {
        if (!O)
          return s();
        H ? s(!1, H) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      O = !1;
    }
    try {
      i = new IntersectionObserver(B, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      i = new IntersectionObserver(B, w);
    }
    i.observe(t);
  }
  return s(!0), c;
}
function Wt(t, e, i, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: c = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: r = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = n, l = q(t), u = o || c ? [...l ? V(l) : [], ...V(e)] : [];
  u.forEach((g) => {
    o && g.addEventListener("scroll", i, {
      passive: !0
    }), c && g.addEventListener("resize", i);
  });
  const a = l && r ? Lt(l, i) : null;
  let p = -1, h = null;
  s && (h = new ResizeObserver((g) => {
    let [w] = g;
    w && w.target === l && h && (h.unobserve(e), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var O;
      (O = h) == null || O.observe(e);
    })), i();
  }), l && !f && h.observe(l), h.observe(e));
  let v, d = f ? T(t) : null;
  f && m();
  function m() {
    const g = T(t);
    d && (g.x !== d.x || g.y !== d.y || g.width !== d.width || g.height !== d.height) && i(), d = g, v = requestAnimationFrame(m);
  }
  return i(), () => {
    var g;
    u.forEach((w) => {
      o && w.removeEventListener("scroll", i), c && w.removeEventListener("resize", i);
    }), a == null || a(), (g = h) == null || g.disconnect(), h = null, f && cancelAnimationFrame(v);
  };
}
const Bt = et, zt = it, Dt = nt, At = ot, Nt = st, Ht = ct, It = lt, St = (t, e, i) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: Ot,
    ...i
  }, c = {
    ...o.platform,
    _c: n
  };
  return rt(t, e, {
    ...o,
    platform: c
  });
};
export {
  Ht as arrow,
  Wt as autoUpdate,
  St as computePosition,
  Dt as flip,
  V as getOverflowAncestors,
  Nt as hide,
  It as limitShift,
  Bt as offset,
  Ot as platform,
  zt as shift,
  At as size
};
//# sourceMappingURL=index171.js.map

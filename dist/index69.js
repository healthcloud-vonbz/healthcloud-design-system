import { Overlay as we, Content as he, Trigger as ge, Close as ve, Title as ye, Description as be, Root as Se, Portal as Re } from "./index141.js";
import * as Te from "react";
import r, { useMemo as Ee, useLayoutEffect as De, useEffect as Oe } from "react";
function xe(t) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
  e.type = "text/css", n.appendChild(e), e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
const Wt = r.createContext({
  drawerRef: {
    current: null
  },
  overlayRef: {
    current: null
  },
  onPress: () => {
  },
  onRelease: () => {
  },
  onDrag: () => {
  },
  onNestedDrag: () => {
  },
  onNestedOpenChange: () => {
  },
  onNestedRelease: () => {
  },
  openProp: void 0,
  dismissible: !1,
  isOpen: !1,
  isDragging: !1,
  keyboardIsOpen: {
    current: !1
  },
  snapPointsOffset: null,
  snapPoints: null,
  handleOnly: !1,
  modal: !1,
  shouldFade: !1,
  activeSnapPoint: null,
  onOpenChange: () => {
  },
  setActiveSnapPoint: () => {
  },
  closeDrawer: () => {
  },
  direction: "bottom",
  shouldAnimate: {
    current: !0
  },
  shouldScaleBackground: !1,
  setBackgroundColorOnScale: !0,
  noBodyStyles: !1,
  container: null,
  autoFocus: !1
}), rt = () => {
  const t = r.useContext(Wt);
  if (!t)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return t;
};
xe(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function Ce() {
  const t = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(t) && /Mobile/.test(t) || // Android Firefox
  /FxiOS/.test(t));
}
function $e() {
  return xt(/^Mac/);
}
function Ae() {
  return xt(/^iPhone/);
}
function kt() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Me() {
  return xt(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $e() && navigator.maxTouchPoints > 1;
}
function zt() {
  return Ae() || Me();
}
function xt(t) {
  return typeof window < "u" && window.navigator != null ? t.test(window.navigator.platform) : void 0;
}
const Pe = 24, Ie = typeof window < "u" ? De : Oe;
function Bt(...t) {
  return (...n) => {
    for (let e of t)
      typeof e == "function" && e(...n);
  };
}
const St = typeof document < "u" && window.visualViewport;
function Ut(t) {
  let n = window.getComputedStyle(t);
  return /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
}
function Vt(t) {
  for (Ut(t) && (t = t.parentElement); t && !Ut(t); )
    t = t.parentElement;
  return t || document.scrollingElement || document.documentElement;
}
const Ne = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let pt = 0, Rt;
function _e(t = {}) {
  let { isDisabled: n } = t;
  Ie(() => {
    if (!n)
      return pt++, pt === 1 && zt() && (Rt = He()), () => {
        pt--, pt === 0 && (Rt == null || Rt());
      };
  }, [
    n
  ]);
}
function He() {
  let t, n = 0, e = (m) => {
    t = Vt(m.target), !(t === document.documentElement && t === document.body) && (n = m.changedTouches[0].pageY);
  }, o = (m) => {
    if (!t || t === document.documentElement || t === document.body) {
      m.preventDefault();
      return;
    }
    let p = m.changedTouches[0].pageY, B = t.scrollTop, L = t.scrollHeight - t.clientHeight;
    L !== 0 && ((B <= 0 && p > n || B >= L && p < n) && m.preventDefault(), n = p);
  }, i = (m) => {
    let p = m.target;
    Dt(p) && p !== document.activeElement && (m.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(() => {
      p.style.transform = "";
    }));
  }, a = (m) => {
    let p = m.target;
    Dt(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      p.style.transform = "", St && (St.height < window.innerHeight ? requestAnimationFrame(() => {
        Ft(p);
      }) : St.addEventListener("resize", () => Ft(p), {
        once: !0
      }));
    }));
  }, g = () => {
    window.scrollTo(0, 0);
  }, u = window.pageXOffset, b = window.pageYOffset, E = Bt(Le(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let h = Bt(ut(document, "touchstart", e, {
    passive: !1,
    capture: !0
  }), ut(document, "touchmove", o, {
    passive: !1,
    capture: !0
  }), ut(document, "touchend", i, {
    passive: !1,
    capture: !0
  }), ut(document, "focus", a, !0), ut(window, "scroll", g));
  return () => {
    E(), h(), window.scrollTo(u, b);
  };
}
function Le(t, n, e) {
  let o = t.style[n];
  return t.style[n] = e, () => {
    t.style[n] = o;
  };
}
function ut(t, n, e, o) {
  return t.addEventListener(n, e, o), () => {
    t.removeEventListener(n, e, o);
  };
}
function Ft(t) {
  let n = document.scrollingElement || document.documentElement;
  for (; t && t !== n; ) {
    let e = Vt(t);
    if (e !== document.documentElement && e !== document.body && e !== t) {
      let o = e.getBoundingClientRect().top, i = t.getBoundingClientRect().top, a = t.getBoundingClientRect().bottom;
      const g = e.getBoundingClientRect().bottom + Pe;
      a > g && (e.scrollTop += i - o);
    }
    t = e.parentElement;
  }
}
function Dt(t) {
  return t instanceof HTMLInputElement && !Ne.has(t.type) || t instanceof HTMLTextAreaElement || t instanceof HTMLElement && t.isContentEditable;
}
function ke(t, n) {
  typeof t == "function" ? t(n) : t != null && (t.current = n);
}
function Be(...t) {
  return (n) => t.forEach((e) => ke(e, n));
}
function Yt(...t) {
  return Te.useCallback(Be(...t), t);
}
const jt = /* @__PURE__ */ new WeakMap();
function $(t, n, e = !1) {
  if (!t || !(t instanceof HTMLElement)) return;
  let o = {};
  Object.entries(n).forEach(([i, a]) => {
    if (i.startsWith("--")) {
      t.style.setProperty(i, a);
      return;
    }
    o[i] = t.style[i], t.style[i] = a;
  }), !e && jt.set(t, o);
}
function Ue(t, n) {
  if (!t || !(t instanceof HTMLElement)) return;
  let e = jt.get(t);
  e && (t.style[n] = e[n]);
}
const C = (t) => {
  switch (t) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return t;
  }
};
function wt(t, n) {
  if (!t)
    return null;
  const e = window.getComputedStyle(t), o = (
    // @ts-ignore
    e.transform || e.webkitTransform || e.mozTransform
  );
  let i = o.match(/^matrix3d\((.+)\)$/);
  return i ? parseFloat(i[1].split(", ")[C(n) ? 13 : 12]) : (i = o.match(/^matrix\((.+)\)$/), i ? parseFloat(i[1].split(", ")[C(n) ? 5 : 4]) : null);
}
function Fe(t) {
  return 8 * (Math.log(t + 1) - 2);
}
function Tt(t, n) {
  if (!t) return () => {
  };
  const e = t.style.cssText;
  return Object.assign(t.style, n), () => {
    t.style.cssText = e;
  };
}
function We(...t) {
  return (...n) => {
    for (const e of t)
      typeof e == "function" && e(...n);
  };
}
const O = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, qt = 0.4, ze = 0.25, Ve = 100, Xt = 8, Z = 16, Ot = 26, Et = "vaul-dragging";
function Kt(t) {
  const n = r.useRef(t);
  return r.useEffect(() => {
    n.current = t;
  }), r.useMemo(() => (...e) => n.current == null ? void 0 : n.current.call(n, ...e), []);
}
function Ye({ defaultProp: t, onChange: n }) {
  const e = r.useState(t), [o] = e, i = r.useRef(o), a = Kt(n);
  return r.useEffect(() => {
    i.current !== o && (a(o), i.current = o);
  }, [
    o,
    i,
    a
  ]), e;
}
function Gt({ prop: t, defaultProp: n, onChange: e = () => {
} }) {
  const [o, i] = Ye({
    defaultProp: n,
    onChange: e
  }), a = t !== void 0, g = a ? t : o, u = Kt(e), b = r.useCallback((E) => {
    if (a) {
      const m = typeof E == "function" ? E(t) : E;
      m !== t && u(m);
    } else
      i(E);
  }, [
    a,
    t,
    i,
    u
  ]);
  return [
    g,
    b
  ];
}
function je({ activeSnapPointProp: t, setActiveSnapPointProp: n, snapPoints: e, drawerRef: o, overlayRef: i, fadeFromIndex: a, onSnapPointChange: g, direction: u = "bottom", container: b, snapToSequentialPoint: E }) {
  const [h, m] = Gt({
    prop: t,
    defaultProp: e == null ? void 0 : e[0],
    onChange: n
  }), [p, B] = r.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  r.useEffect(() => {
    function c() {
      B({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", c), () => window.removeEventListener("resize", c);
  }, []);
  const L = r.useMemo(() => h === (e == null ? void 0 : e[e.length - 1]) || null, [
    e,
    h
  ]), D = r.useMemo(() => {
    var c;
    return (c = e == null ? void 0 : e.findIndex((S) => S === h)) != null ? c : null;
  }, [
    e,
    h
  ]), U = e && e.length > 0 && (a || a === 0) && !Number.isNaN(a) && e[a] === h || !e, w = r.useMemo(() => {
    const c = b ? {
      width: b.getBoundingClientRect().width,
      height: b.getBoundingClientRect().height
    } : typeof window < "u" ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
    var S;
    return (S = e == null ? void 0 : e.map((y) => {
      const N = typeof y == "string";
      let P = 0;
      if (N && (P = parseInt(y, 10)), C(u)) {
        const s = N ? P : p ? y * c.height : 0;
        return p ? u === "bottom" ? c.height - s : -c.height + s : s;
      }
      const W = N ? P : p ? y * c.width : 0;
      return p ? u === "right" ? c.width - W : -c.width + W : W;
    })) != null ? S : [];
  }, [
    e,
    p,
    b
  ]), M = r.useMemo(() => D !== null ? w == null ? void 0 : w[D] : null, [
    w,
    D
  ]), A = r.useCallback((c) => {
    var S;
    const y = (S = w == null ? void 0 : w.findIndex((N) => N === c)) != null ? S : null;
    g(y), $(o.current, {
      transition: `transform ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
      transform: C(u) ? `translate3d(0, ${c}px, 0)` : `translate3d(${c}px, 0, 0)`
    }), w && y !== w.length - 1 && a !== void 0 && y !== a && y < a ? $(i.current, {
      transition: `opacity ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
      opacity: "0"
    }) : $(i.current, {
      transition: `opacity ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
      opacity: "1"
    }), m(e == null ? void 0 : e[Math.max(y, 0)]);
  }, [
    o.current,
    e,
    w,
    a,
    i,
    m
  ]);
  r.useEffect(() => {
    if (h || t) {
      var c;
      const S = (c = e == null ? void 0 : e.findIndex((y) => y === t || y === h)) != null ? c : -1;
      w && S !== -1 && typeof w[S] == "number" && A(w[S]);
    }
  }, [
    h,
    t,
    e,
    w,
    A
  ]);
  function d({ draggedDistance: c, closeDrawer: S, velocity: y, dismissible: N }) {
    if (a === void 0) return;
    const P = u === "bottom" || u === "right" ? (M ?? 0) - c : (M ?? 0) + c, W = D === a - 1, s = D === 0, F = c > 0;
    if (W && $(i.current, {
      transition: `opacity ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`
    }), !E && y > 2 && !F) {
      N ? S() : A(w[0]);
      return;
    }
    if (!E && y > 2 && F && w && e) {
      A(w[e.length - 1]);
      return;
    }
    const _ = w == null ? void 0 : w.reduce((I, q) => typeof I != "number" || typeof q != "number" ? I : Math.abs(q - P) < Math.abs(I - P) ? q : I), z = C(u) ? window.innerHeight : window.innerWidth;
    if (y > qt && Math.abs(c) < z * 0.4) {
      const I = F ? 1 : -1;
      if (I > 0 && L && e) {
        A(w[e.length - 1]);
        return;
      }
      if (s && I < 0 && N && S(), D === null) return;
      A(w[D + I]);
      return;
    }
    A(_);
  }
  function Y({ draggedDistance: c }) {
    if (M === null) return;
    const S = u === "bottom" || u === "right" ? M - c : M + c;
    (u === "bottom" || u === "right") && S < w[w.length - 1] || (u === "top" || u === "left") && S > w[w.length - 1] || $(o.current, {
      transform: C(u) ? `translate3d(0, ${S}px, 0)` : `translate3d(${S}px, 0, 0)`
    });
  }
  function J(c, S) {
    if (!e || typeof D != "number" || !w || a === void 0) return null;
    const y = D === a - 1;
    if (D >= a && S)
      return 0;
    if (y && !S) return 1;
    if (!U && !y) return null;
    const P = y ? D + 1 : D - 1, W = y ? w[P] - w[P - 1] : w[P + 1] - w[P], s = c / Math.abs(W);
    return y ? 1 - s : s;
  }
  return {
    isLastSnapPoint: L,
    activeSnapPoint: h,
    shouldFade: U,
    getPercentageDragged: J,
    setActiveSnapPoint: m,
    activeSnapPointIndex: D,
    onRelease: d,
    onDrag: Y,
    snapPointsOffset: w
  };
}
const qe = () => () => {
};
function Xe() {
  const { direction: t, isOpen: n, shouldScaleBackground: e, setBackgroundColorOnScale: o, noBodyStyles: i } = rt(), a = r.useRef(null), g = Ee(() => document.body.style.backgroundColor, []);
  function u() {
    return (window.innerWidth - Ot) / window.innerWidth;
  }
  r.useEffect(() => {
    if (n && e) {
      a.current && clearTimeout(a.current);
      const b = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!b) return;
      We(o && !i ? Tt(document.body, {
        background: "black"
      }) : qe, Tt(b, {
        transformOrigin: C(t) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${O.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${O.EASE.join(",")})`
      }));
      const E = Tt(b, {
        borderRadius: `${Xt}px`,
        overflow: "hidden",
        ...C(t) ? {
          transform: `scale(${u()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${u()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        E(), a.current = window.setTimeout(() => {
          g ? document.body.style.background = g : document.body.style.removeProperty("background");
        }, O.DURATION * 1e3);
      };
    }
  }, [
    n,
    e,
    g
  ]);
}
let ct = null;
function Ke({ isOpen: t, modal: n, nested: e, hasBeenOpened: o, preventScrollRestoration: i, noBodyStyles: a }) {
  const [g, u] = r.useState(() => typeof window < "u" ? window.location.href : ""), b = r.useRef(0), E = r.useCallback(() => {
    if (kt() && ct === null && t && !a) {
      ct = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: m, innerHeight: p } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-b.current}px`,
        left: `${-m}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const B = p - window.innerHeight;
        B && b.current >= p && (document.body.style.top = `${-(b.current + B)}px`);
      }), 300);
    }
  }, [
    t
  ]), h = r.useCallback(() => {
    if (kt() && ct !== null && !a) {
      const m = -parseInt(document.body.style.top, 10), p = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, ct), window.requestAnimationFrame(() => {
        if (i && g !== window.location.href) {
          u(window.location.href);
          return;
        }
        window.scrollTo(p, m);
      }), ct = null;
    }
  }, [
    g
  ]);
  return r.useEffect(() => {
    function m() {
      b.current = window.scrollY;
    }
    return m(), window.addEventListener("scroll", m), () => {
      window.removeEventListener("scroll", m);
    };
  }, []), r.useEffect(() => {
    if (n)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || h();
      };
  }, [
    n,
    h
  ]), r.useEffect(() => {
    e || !o || (t ? (!window.matchMedia("(display-mode: standalone)").matches && E(), n || window.setTimeout(() => {
      h();
    }, 500)) : h());
  }, [
    t,
    o,
    g,
    n,
    e,
    E,
    h
  ]), {
    restorePositionSetting: h
  };
}
function Jt({ open: t, onOpenChange: n, children: e, onDrag: o, onRelease: i, snapPoints: a, shouldScaleBackground: g = !1, setBackgroundColorOnScale: u = !0, closeThreshold: b = ze, scrollLockTimeout: E = Ve, dismissible: h = !0, handleOnly: m = !1, fadeFromIndex: p = a && a.length - 1, activeSnapPoint: B, setActiveSnapPoint: L, fixed: D, modal: U = !0, onClose: w, nested: M, noBodyStyles: A = !1, direction: d = "bottom", defaultOpen: Y = !1, disablePreventScroll: J = !0, snapToSequentialPoint: c = !1, preventScrollRestoration: S = !1, repositionInputs: y = !0, onAnimationEnd: N, container: P, autoFocus: W = !1 }) {
  var s, F;
  const [_ = !1, z] = Gt({
    defaultProp: Y,
    prop: t,
    onChange: (l) => {
      n == null || n(l), !l && !M && le(), setTimeout(() => {
        N == null || N(l);
      }, O.DURATION * 1e3), l && !U && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), l || (document.body.style.pointerEvents = "auto");
    }
  }), [I, q] = r.useState(!1), [X, at] = r.useState(!1), [ee, Ct] = r.useState(!1), tt = r.useRef(null), dt = r.useRef(null), ht = r.useRef(null), gt = r.useRef(null), ot = r.useRef(null), it = r.useRef(!1), vt = r.useRef(null), yt = r.useRef(0), et = r.useRef(!1), $t = r.useRef(!Y), At = r.useRef(0), f = r.useRef(null), Mt = r.useRef(((s = f.current) == null ? void 0 : s.getBoundingClientRect().height) || 0), Pt = r.useRef(((F = f.current) == null ? void 0 : F.getBoundingClientRect().width) || 0), bt = r.useRef(0), ne = r.useCallback((l) => {
    a && l === lt.length - 1 && (dt.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: re, activeSnapPointIndex: nt, setActiveSnapPoint: It, onRelease: ae, snapPointsOffset: lt, onDrag: oe, shouldFade: Nt, getPercentageDragged: ie } = je({
    snapPoints: a,
    activeSnapPointProp: B,
    setActiveSnapPointProp: L,
    drawerRef: f,
    fadeFromIndex: p,
    overlayRef: tt,
    onSnapPointChange: ne,
    direction: d,
    container: P,
    snapToSequentialPoint: c
  });
  _e({
    isDisabled: !_ || X || !U || ee || !I || !y || !J
  });
  const { restorePositionSetting: le } = Ke({
    isOpen: _,
    modal: U,
    nested: M ?? !1,
    hasBeenOpened: I,
    preventScrollRestoration: S,
    noBodyStyles: A
  });
  function ft() {
    return (window.innerWidth - Ot) / window.innerWidth;
  }
  function se(l) {
    var R, T;
    !h && !a || f.current && !f.current.contains(l.target) || (Mt.current = ((R = f.current) == null ? void 0 : R.getBoundingClientRect().height) || 0, Pt.current = ((T = f.current) == null ? void 0 : T.getBoundingClientRect().width) || 0, at(!0), ht.current = /* @__PURE__ */ new Date(), zt() && window.addEventListener("touchend", () => it.current = !1, {
      once: !0
    }), l.target.setPointerCapture(l.pointerId), yt.current = C(d) ? l.pageY : l.pageX);
  }
  function _t(l, R) {
    var T;
    let v = l;
    const x = (T = window.getSelection()) == null ? void 0 : T.toString(), k = f.current ? wt(f.current, d) : null, H = /* @__PURE__ */ new Date();
    if (v.tagName === "SELECT" || v.hasAttribute("data-vaul-no-drag") || v.closest("[data-vaul-no-drag]"))
      return !1;
    if (d === "right" || d === "left")
      return !0;
    if (dt.current && H.getTime() - dt.current.getTime() < 500)
      return !1;
    if (k !== null && (d === "bottom" ? k > 0 : k < 0))
      return !0;
    if (x && x.length > 0)
      return !1;
    if (ot.current && H.getTime() - ot.current.getTime() < E && k === 0 || R)
      return ot.current = H, !1;
    for (; v; ) {
      if (v.scrollHeight > v.clientHeight) {
        if (v.scrollTop !== 0)
          return ot.current = /* @__PURE__ */ new Date(), !1;
        if (v.getAttribute("role") === "dialog")
          return !0;
      }
      v = v.parentNode;
    }
    return !0;
  }
  function ue(l) {
    if (f.current && X) {
      const R = d === "bottom" || d === "right" ? 1 : -1, T = (yt.current - (C(d) ? l.pageY : l.pageX)) * R, v = T > 0, x = a && !h && !v;
      if (x && nt === 0) return;
      const k = Math.abs(T), H = document.querySelector("[data-vaul-drawer-wrapper]"), K = d === "bottom" || d === "top" ? Mt.current : Pt.current;
      let V = k / K;
      const Q = ie(k, v);
      if (Q !== null && (V = Q), x && V >= 1 || !it.current && !_t(l.target, v)) return;
      if (f.current.classList.add(Et), it.current = !0, $(f.current, {
        transition: "none"
      }), $(tt.current, {
        transition: "none"
      }), a && oe({
        draggedDistance: T
      }), v && !a) {
        const j = Fe(T), mt = Math.min(j * -1, 0) * R;
        $(f.current, {
          transform: C(d) ? `translate3d(0, ${mt}px, 0)` : `translate3d(${mt}px, 0, 0)`
        });
        return;
      }
      const G = 1 - V;
      if ((Nt || p && nt === p - 1) && (o == null || o(l, V), $(tt.current, {
        opacity: `${G}`,
        transition: "none"
      }, !0)), H && tt.current && g) {
        const j = Math.min(ft() + V * (1 - ft()), 1), mt = 8 - V * 8, Lt = Math.max(0, 14 - V * 14);
        $(H, {
          borderRadius: `${mt}px`,
          transform: C(d) ? `scale(${j}) translate3d(0, ${Lt}px, 0)` : `scale(${j}) translate3d(${Lt}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!a) {
        const j = k * R;
        $(f.current, {
          transform: C(d) ? `translate3d(0, ${j}px, 0)` : `translate3d(${j}px, 0, 0)`
        });
      }
    }
  }
  r.useEffect(() => {
    window.requestAnimationFrame(() => {
      $t.current = !0;
    });
  }, []), r.useEffect(() => {
    var l;
    function R() {
      if (!f.current || !y) return;
      const T = document.activeElement;
      if (Dt(T) || et.current) {
        var v;
        const x = ((v = window.visualViewport) == null ? void 0 : v.height) || 0, k = window.innerHeight;
        let H = k - x;
        const K = f.current.getBoundingClientRect().height || 0, V = K > k * 0.8;
        bt.current || (bt.current = K);
        const Q = f.current.getBoundingClientRect().top;
        if (Math.abs(At.current - H) > 60 && (et.current = !et.current), a && a.length > 0 && lt && nt) {
          const G = lt[nt] || 0;
          H += G;
        }
        if (At.current = H, K > x || et.current) {
          const G = f.current.getBoundingClientRect().height;
          let j = G;
          G > x && (j = x - (V ? Q : Ot)), D ? f.current.style.height = `${G - Math.max(H, 0)}px` : f.current.style.height = `${Math.max(j, x - Q)}px`;
        } else Ce() || (f.current.style.height = `${bt.current}px`);
        a && a.length > 0 && !et.current ? f.current.style.bottom = "0px" : f.current.style.bottom = `${Math.max(H, 0)}px`;
      }
    }
    return (l = window.visualViewport) == null || l.addEventListener("resize", R), () => {
      var T;
      return (T = window.visualViewport) == null ? void 0 : T.removeEventListener("resize", R);
    };
  }, [
    nt,
    a,
    lt
  ]);
  function st(l) {
    ce(), w == null || w(), l || z(!1), setTimeout(() => {
      a && It(a[0]);
    }, O.DURATION * 1e3);
  }
  function Ht() {
    if (!f.current) return;
    const l = document.querySelector("[data-vaul-drawer-wrapper]"), R = wt(f.current, d);
    $(f.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`
    }), $(tt.current, {
      transition: `opacity ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
      opacity: "1"
    }), g && R && R > 0 && _ && $(l, {
      borderRadius: `${Xt}px`,
      overflow: "hidden",
      ...C(d) ? {
        transform: `scale(${ft()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${ft()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${O.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${O.EASE.join(",")})`
    }, !0);
  }
  function ce() {
    !X || !f.current || (f.current.classList.remove(Et), it.current = !1, at(!1), gt.current = /* @__PURE__ */ new Date());
  }
  function de(l) {
    if (!X || !f.current) return;
    f.current.classList.remove(Et), it.current = !1, at(!1), gt.current = /* @__PURE__ */ new Date();
    const R = wt(f.current, d);
    if (!l || !_t(l.target, !1) || !R || Number.isNaN(R) || ht.current === null) return;
    const T = gt.current.getTime() - ht.current.getTime(), v = yt.current - (C(d) ? l.pageY : l.pageX), x = Math.abs(v) / T;
    if (x > 0.05 && (Ct(!0), setTimeout(() => {
      Ct(!1);
    }, 200)), a) {
      ae({
        draggedDistance: v * (d === "bottom" || d === "right" ? 1 : -1),
        closeDrawer: st,
        velocity: x,
        dismissible: h
      }), i == null || i(l, !0);
      return;
    }
    if (d === "bottom" || d === "right" ? v > 0 : v < 0) {
      Ht(), i == null || i(l, !0);
      return;
    }
    if (x > qt) {
      st(), i == null || i(l, !1);
      return;
    }
    var k;
    const H = Math.min((k = f.current.getBoundingClientRect().height) != null ? k : 0, window.innerHeight);
    var K;
    const V = Math.min((K = f.current.getBoundingClientRect().width) != null ? K : 0, window.innerWidth), Q = d === "left" || d === "right";
    if (Math.abs(R) >= (Q ? V : H) * b) {
      st(), i == null || i(l, !1);
      return;
    }
    i == null || i(l, !0), Ht();
  }
  r.useEffect(() => (_ && ($(document.documentElement, {
    scrollBehavior: "auto"
  }), dt.current = /* @__PURE__ */ new Date()), () => {
    Ue(document.documentElement, "scrollBehavior");
  }), [
    _
  ]);
  function fe(l) {
    const R = l ? (window.innerWidth - Z) / window.innerWidth : 1, T = l ? -Z : 0;
    vt.current && window.clearTimeout(vt.current), $(f.current, {
      transition: `transform ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
      transform: C(d) ? `scale(${R}) translate3d(0, ${T}px, 0)` : `scale(${R}) translate3d(${T}px, 0, 0)`
    }), !l && f.current && (vt.current = setTimeout(() => {
      const v = wt(f.current, d);
      $(f.current, {
        transition: "none",
        transform: C(d) ? `translate3d(0, ${v}px, 0)` : `translate3d(${v}px, 0, 0)`
      });
    }, 500));
  }
  function me(l, R) {
    if (R < 0) return;
    const T = (window.innerWidth - Z) / window.innerWidth, v = T + R * (1 - T), x = -Z + R * Z;
    $(f.current, {
      transform: C(d) ? `scale(${v}) translate3d(0, ${x}px, 0)` : `scale(${v}) translate3d(${x}px, 0, 0)`,
      transition: "none"
    });
  }
  function pe(l, R) {
    const T = C(d) ? window.innerHeight : window.innerWidth, v = R ? (T - Z) / T : 1, x = R ? -Z : 0;
    R && $(f.current, {
      transition: `transform ${O.DURATION}s cubic-bezier(${O.EASE.join(",")})`,
      transform: C(d) ? `scale(${v}) translate3d(0, ${x}px, 0)` : `scale(${v}) translate3d(${x}px, 0, 0)`
    });
  }
  return r.useEffect(() => {
    U || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    U
  ]), /* @__PURE__ */ r.createElement(Se, {
    defaultOpen: Y,
    onOpenChange: (l) => {
      !h && !l || (l ? q(!0) : st(!0), z(l));
    },
    open: _
  }, /* @__PURE__ */ r.createElement(Wt.Provider, {
    value: {
      activeSnapPoint: re,
      snapPoints: a,
      setActiveSnapPoint: It,
      drawerRef: f,
      overlayRef: tt,
      onOpenChange: n,
      onPress: se,
      onRelease: de,
      onDrag: ue,
      dismissible: h,
      shouldAnimate: $t,
      handleOnly: m,
      isOpen: _,
      isDragging: X,
      shouldFade: Nt,
      closeDrawer: st,
      onNestedDrag: me,
      onNestedOpenChange: fe,
      onNestedRelease: pe,
      keyboardIsOpen: et,
      modal: U,
      snapPointsOffset: lt,
      activeSnapPointIndex: nt,
      direction: d,
      shouldScaleBackground: g,
      setBackgroundColorOnScale: u,
      noBodyStyles: A,
      container: P,
      autoFocus: W
    }
  }, e));
}
const Qt = /* @__PURE__ */ r.forwardRef(function({ ...t }, n) {
  const { overlayRef: e, snapPoints: o, onRelease: i, shouldFade: a, isOpen: g, modal: u, shouldAnimate: b } = rt(), E = Yt(n, e), h = o && o.length > 0;
  if (!u)
    return null;
  const m = r.useCallback((p) => i(p), [
    i
  ]);
  return /* @__PURE__ */ r.createElement(we, {
    onMouseUp: m,
    ref: E,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": g && h ? "true" : "false",
    "data-vaul-snap-points-overlay": g && a ? "true" : "false",
    "data-vaul-animate": b != null && b.current ? "true" : "false",
    ...t
  });
});
Qt.displayName = "Drawer.Overlay";
const Zt = /* @__PURE__ */ r.forwardRef(function({ onPointerDownOutside: t, style: n, onOpenAutoFocus: e, ...o }, i) {
  const { drawerRef: a, onPress: g, onRelease: u, onDrag: b, keyboardIsOpen: E, snapPointsOffset: h, activeSnapPointIndex: m, modal: p, isOpen: B, direction: L, snapPoints: D, container: U, handleOnly: w, shouldAnimate: M, autoFocus: A } = rt(), [d, Y] = r.useState(!1), J = Yt(i, a), c = r.useRef(null), S = r.useRef(null), y = r.useRef(!1), N = D && D.length > 0;
  Xe();
  const P = (s, F, _ = 0) => {
    if (y.current) return !0;
    const z = Math.abs(s.y), I = Math.abs(s.x), q = I > z, X = [
      "bottom",
      "right"
    ].includes(F) ? 1 : -1;
    if (F === "left" || F === "right") {
      if (!(s.x * X < 0) && I >= 0 && I <= _)
        return q;
    } else if (!(s.y * X < 0) && z >= 0 && z <= _)
      return !q;
    return y.current = !0, !0;
  };
  r.useEffect(() => {
    N && window.requestAnimationFrame(() => {
      Y(!0);
    });
  }, []);
  function W(s) {
    c.current = null, y.current = !1, u(s);
  }
  return /* @__PURE__ */ r.createElement(he, {
    "data-vaul-drawer-direction": L,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": d ? "true" : "false",
    "data-vaul-snap-points": B && N ? "true" : "false",
    "data-vaul-custom-container": U ? "true" : "false",
    "data-vaul-animate": M != null && M.current ? "true" : "false",
    ...o,
    ref: J,
    style: h && h.length > 0 ? {
      "--snap-point-height": `${h[m ?? 0]}px`,
      ...n
    } : n,
    onPointerDown: (s) => {
      w || (o.onPointerDown == null || o.onPointerDown.call(o, s), c.current = {
        x: s.pageX,
        y: s.pageY
      }, g(s));
    },
    onOpenAutoFocus: (s) => {
      e == null || e(s), A || s.preventDefault();
    },
    onPointerDownOutside: (s) => {
      if (t == null || t(s), !p || s.defaultPrevented) {
        s.preventDefault();
        return;
      }
      E.current && (E.current = !1);
    },
    onFocusOutside: (s) => {
      if (!p) {
        s.preventDefault();
        return;
      }
    },
    onPointerMove: (s) => {
      if (S.current = s, w || (o.onPointerMove == null || o.onPointerMove.call(o, s), !c.current)) return;
      const F = s.pageY - c.current.y, _ = s.pageX - c.current.x, z = s.pointerType === "touch" ? 10 : 2;
      P({
        x: _,
        y: F
      }, L, z) ? b(s) : (Math.abs(_) > z || Math.abs(F) > z) && (c.current = null);
    },
    onPointerUp: (s) => {
      o.onPointerUp == null || o.onPointerUp.call(o, s), c.current = null, y.current = !1, u(s);
    },
    onPointerOut: (s) => {
      o.onPointerOut == null || o.onPointerOut.call(o, s), W(S.current);
    },
    onContextMenu: (s) => {
      o.onContextMenu == null || o.onContextMenu.call(o, s), S.current && W(S.current);
    }
  });
});
Zt.displayName = "Drawer.Content";
const Ge = 250, Je = 120, te = /* @__PURE__ */ r.forwardRef(function({ preventCycle: t = !1, children: n, ...e }, o) {
  const { closeDrawer: i, isDragging: a, snapPoints: g, activeSnapPoint: u, setActiveSnapPoint: b, dismissible: E, handleOnly: h, isOpen: m, onPress: p, onDrag: B } = rt(), L = r.useRef(null), D = r.useRef(!1);
  function U() {
    if (D.current) {
      A();
      return;
    }
    window.setTimeout(() => {
      w();
    }, Je);
  }
  function w() {
    if (a || t || D.current) {
      A();
      return;
    }
    if (A(), !g || g.length === 0) {
      E || i();
      return;
    }
    if (u === g[g.length - 1] && E) {
      i();
      return;
    }
    const Y = g.findIndex((c) => c === u);
    if (Y === -1) return;
    const J = g[Y + 1];
    b(J);
  }
  function M() {
    L.current = window.setTimeout(() => {
      D.current = !0;
    }, Ge);
  }
  function A() {
    L.current && window.clearTimeout(L.current), D.current = !1;
  }
  return /* @__PURE__ */ r.createElement("div", {
    onClick: U,
    onPointerCancel: A,
    onPointerDown: (d) => {
      h && p(d), M();
    },
    onPointerMove: (d) => {
      h && B(d);
    },
    // onPointerUp is already handled by the content component
    ref: o,
    "data-vaul-drawer-visible": m ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...e
  }, /* @__PURE__ */ r.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, n));
});
te.displayName = "Drawer.Handle";
function Qe({ onDrag: t, onOpenChange: n, open: e, ...o }) {
  const { onNestedDrag: i, onNestedOpenChange: a, onNestedRelease: g } = rt();
  if (!i)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return /* @__PURE__ */ r.createElement(Jt, {
    nested: !0,
    open: e,
    onClose: () => {
      a(!1);
    },
    onDrag: (u, b) => {
      i(u, b), t == null || t(u, b);
    },
    onOpenChange: (u) => {
      u && a(u), n == null || n(u);
    },
    onRelease: g,
    ...o
  });
}
function Ze(t) {
  const n = rt(), { container: e = n.container, ...o } = t;
  return /* @__PURE__ */ r.createElement(Re, {
    container: e,
    ...o
  });
}
const nn = {
  Root: Jt,
  NestedRoot: Qe,
  Content: Zt,
  Overlay: Qt,
  Trigger: ge,
  Portal: Ze,
  Handle: te,
  Close: ve,
  Title: ye,
  Description: be
};
export {
  Zt as Content,
  nn as Drawer,
  te as Handle,
  Qe as NestedRoot,
  Qt as Overlay,
  Ze as Portal,
  Jt as Root
};
//# sourceMappingURL=index69.js.map

import * as a from "react";
import { useComposedRefs as E } from "./index116.js";
import { useLayoutEffect as A } from "./index164.js";
function T(n, e) {
  return a.useReducer((r, t) => e[r][t] ?? r, n);
}
var R = (n) => {
  const { present: e, children: r } = n, t = v(e), i = typeof r == "function" ? r({ present: t.isPresent }) : a.Children.only(r), c = E(t.ref, P(i));
  return typeof r == "function" || t.isPresent ? a.cloneElement(i, { ref: c }) : null;
};
R.displayName = "Presence";
function v(n) {
  const [e, r] = a.useState(), t = a.useRef({}), i = a.useRef(n), c = a.useRef("none"), p = n ? "mounted" : "unmounted", [N, s] = T(p, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return a.useEffect(() => {
    const o = l(t.current);
    c.current = N === "mounted" ? o : "none";
  }, [N]), A(() => {
    const o = t.current, m = i.current;
    if (m !== n) {
      const f = c.current, u = l(o);
      n ? s("MOUNT") : u === "none" || (o == null ? void 0 : o.display) === "none" ? s("UNMOUNT") : s(m && f !== u ? "ANIMATION_OUT" : "UNMOUNT"), i.current = n;
    }
  }, [n, s]), A(() => {
    if (e) {
      let o;
      const m = e.ownerDocument.defaultView ?? window, d = (u) => {
        const g = l(t.current).includes(u.animationName);
        if (u.target === e && g && (s("ANIMATION_END"), !i.current)) {
          const O = e.style.animationFillMode;
          e.style.animationFillMode = "forwards", o = m.setTimeout(() => {
            e.style.animationFillMode === "forwards" && (e.style.animationFillMode = O);
          });
        }
      }, f = (u) => {
        u.target === e && (c.current = l(t.current));
      };
      return e.addEventListener("animationstart", f), e.addEventListener("animationcancel", d), e.addEventListener("animationend", d), () => {
        m.clearTimeout(o), e.removeEventListener("animationstart", f), e.removeEventListener("animationcancel", d), e.removeEventListener("animationend", d);
      };
    } else
      s("ANIMATION_END");
  }, [e, s]), {
    isPresent: ["mounted", "unmountSuspended"].includes(N),
    ref: a.useCallback((o) => {
      o && (t.current = getComputedStyle(o)), r(o);
    }, [])
  };
}
function l(n) {
  return (n == null ? void 0 : n.animationName) || "none";
}
function P(n) {
  var t, i;
  let e = (t = Object.getOwnPropertyDescriptor(n.props, "ref")) == null ? void 0 : t.get, r = e && "isReactWarning" in e && e.isReactWarning;
  return r ? n.ref : (e = (i = Object.getOwnPropertyDescriptor(n, "ref")) == null ? void 0 : i.get, r = e && "isReactWarning" in e && e.isReactWarning, r ? n.props.ref : n.props.ref || n.ref);
}
export {
  R as Presence
};
//# sourceMappingURL=index122.js.map

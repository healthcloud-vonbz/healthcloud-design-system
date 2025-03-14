import { a as pe } from "./index111.js";
import { Root as ge, Portal as he, Overlay as be, Content as Ee } from "./index112.js";
import * as n from "react";
import { Primitive as C } from "./index110.js";
import { useId as $ } from "./index113.js";
import { s as ye } from "./index114.js";
var K = '[cmdk-group=""]', Q = '[cmdk-group-items=""]', Se = '[cmdk-group-heading=""]', Y = '[cmdk-item=""]', oe = `${Y}:not([aria-disabled="true"])`, X = "cmdk-item-select", M = "data-value", we = (r, l, t) => pe(r, l, t), ce = n.createContext(void 0), q = () => n.useContext(ce), de = n.createContext(void 0), Z = () => n.useContext(de), se = n.createContext(void 0), fe = n.forwardRef((r, l) => {
  let t = D(() => {
    var e, u;
    return { search: "", value: (u = (e = r.value) != null ? e : r.defaultValue) != null ? u : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), v = D(() => /* @__PURE__ */ new Set()), i = D(() => /* @__PURE__ */ new Map()), d = D(() => /* @__PURE__ */ new Map()), s = D(() => /* @__PURE__ */ new Set()), f = me(r), { label: g, children: b, value: c, onValueChange: S, filter: k, shouldFilter: w, loop: O, disablePointerSelection: H = !1, vimBindings: R = !0, ...j } = r, _ = $(), ee = $(), te = $(), x = n.useRef(null), h = Fe();
  A(() => {
    if (c !== void 0) {
      let e = c.trim();
      t.current.value = e, E.emit();
    }
  }, [c]), A(() => {
    h(6, ne);
  }, []);
  let E = n.useMemo(() => ({ subscribe: (e) => (s.current.add(e), () => s.current.delete(e)), snapshot: () => t.current, setState: (e, u, o) => {
    var a, m, p;
    if (!Object.is(t.current[e], u)) {
      if (t.current[e] = u, e === "search") W(), B(), h(1, G);
      else if (e === "value" && (o || h(5, ne), ((a = f.current) == null ? void 0 : a.value) !== void 0)) {
        let y = u ?? "";
        (p = (m = f.current).onValueChange) == null || p.call(m, y);
        return;
      }
      E.emit();
    }
  }, emit: () => {
    s.current.forEach((e) => e());
  } }), []), U = n.useMemo(() => ({ value: (e, u, o) => {
    var a;
    u !== ((a = d.current.get(e)) == null ? void 0 : a.value) && (d.current.set(e, { value: u, keywords: o }), t.current.filtered.items.set(e, re(u, o)), h(2, () => {
      B(), E.emit();
    }));
  }, item: (e, u) => (v.current.add(e), u && (i.current.has(u) ? i.current.get(u).add(e) : i.current.set(u, /* @__PURE__ */ new Set([e]))), h(3, () => {
    W(), B(), t.current.value || G(), E.emit();
  }), () => {
    d.current.delete(e), v.current.delete(e), t.current.filtered.items.delete(e);
    let o = F();
    h(4, () => {
      W(), (o == null ? void 0 : o.getAttribute("id")) === e && G(), E.emit();
    });
  }), group: (e) => (i.current.has(e) || i.current.set(e, /* @__PURE__ */ new Set()), () => {
    d.current.delete(e), i.current.delete(e);
  }), filter: () => f.current.shouldFilter, label: g || r["aria-label"], getDisablePointerSelection: () => f.current.disablePointerSelection, listId: _, inputId: te, labelId: ee, listInnerRef: x }), []);
  function re(e, u) {
    var o, a;
    let m = (a = (o = f.current) == null ? void 0 : o.filter) != null ? a : we;
    return e ? m(e, t.current.search, u) : 0;
  }
  function B() {
    if (!t.current.search || f.current.shouldFilter === !1) return;
    let e = t.current.filtered.items, u = [];
    t.current.filtered.groups.forEach((a) => {
      let m = i.current.get(a), p = 0;
      m.forEach((y) => {
        let I = e.get(y);
        p = Math.max(I, p);
      }), u.push([a, p]);
    });
    let o = x.current;
    V().sort((a, m) => {
      var p, y;
      let I = a.getAttribute("id"), N = m.getAttribute("id");
      return ((p = e.get(N)) != null ? p : 0) - ((y = e.get(I)) != null ? y : 0);
    }).forEach((a) => {
      let m = a.closest(Q);
      m ? m.appendChild(a.parentElement === m ? a : a.closest(`${Q} > *`)) : o.appendChild(a.parentElement === o ? a : a.closest(`${Q} > *`));
    }), u.sort((a, m) => m[1] - a[1]).forEach((a) => {
      var m;
      let p = (m = x.current) == null ? void 0 : m.querySelector(`${K}[${M}="${encodeURIComponent(a[0])}"]`);
      p == null || p.parentElement.appendChild(p);
    });
  }
  function G() {
    let e = V().find((o) => o.getAttribute("aria-disabled") !== "true"), u = e == null ? void 0 : e.getAttribute(M);
    E.setState("value", u || void 0);
  }
  function W() {
    var e, u, o, a;
    if (!t.current.search || f.current.shouldFilter === !1) {
      t.current.filtered.count = v.current.size;
      return;
    }
    t.current.filtered.groups = /* @__PURE__ */ new Set();
    let m = 0;
    for (let p of v.current) {
      let y = (u = (e = d.current.get(p)) == null ? void 0 : e.value) != null ? u : "", I = (a = (o = d.current.get(p)) == null ? void 0 : o.keywords) != null ? a : [], N = re(y, I);
      t.current.filtered.items.set(p, N), N > 0 && m++;
    }
    for (let [p, y] of i.current) for (let I of y) if (t.current.filtered.items.get(I) > 0) {
      t.current.filtered.groups.add(p);
      break;
    }
    t.current.filtered.count = m;
  }
  function ne() {
    var e, u, o;
    let a = F();
    a && (((e = a.parentElement) == null ? void 0 : e.firstChild) === a && ((o = (u = a.closest(K)) == null ? void 0 : u.querySelector(Se)) == null || o.scrollIntoView({ block: "nearest" })), a.scrollIntoView({ block: "nearest" }));
  }
  function F() {
    var e;
    return (e = x.current) == null ? void 0 : e.querySelector(`${Y}[aria-selected="true"]`);
  }
  function V() {
    var e;
    return Array.from(((e = x.current) == null ? void 0 : e.querySelectorAll(oe)) || []);
  }
  function T(e) {
    let u = V()[e];
    u && E.setState("value", u.getAttribute(M));
  }
  function J(e) {
    var u;
    let o = F(), a = V(), m = a.findIndex((y) => y === o), p = a[m + e];
    (u = f.current) != null && u.loop && (p = m + e < 0 ? a[a.length - 1] : m + e === a.length ? a[0] : a[m + e]), p && E.setState("value", p.getAttribute(M));
  }
  function le(e) {
    let u = F(), o = u == null ? void 0 : u.closest(K), a;
    for (; o && !a; ) o = e > 0 ? De(o, K) : $e(o, K), a = o == null ? void 0 : o.querySelector(oe);
    a ? E.setState("value", a.getAttribute(M)) : J(e);
  }
  let ae = () => T(V().length - 1), ue = (e) => {
    e.preventDefault(), e.metaKey ? ae() : e.altKey ? le(1) : J(1);
  }, ie = (e) => {
    e.preventDefault(), e.metaKey ? T(0) : e.altKey ? le(-1) : J(-1);
  };
  return n.createElement(C.div, { ref: l, tabIndex: -1, ...j, "cmdk-root": "", onKeyDown: (e) => {
    var u;
    if ((u = j.onKeyDown) == null || u.call(j, e), !e.defaultPrevented) switch (e.key) {
      case "n":
      case "j": {
        R && e.ctrlKey && ue(e);
        break;
      }
      case "ArrowDown": {
        ue(e);
        break;
      }
      case "p":
      case "k": {
        R && e.ctrlKey && ie(e);
        break;
      }
      case "ArrowUp": {
        ie(e);
        break;
      }
      case "Home": {
        e.preventDefault(), T(0);
        break;
      }
      case "End": {
        e.preventDefault(), ae();
        break;
      }
      case "Enter":
        if (!e.nativeEvent.isComposing && e.keyCode !== 229) {
          e.preventDefault();
          let o = F();
          if (o) {
            let a = new Event(X);
            o.dispatchEvent(a);
          }
        }
    }
  } }, n.createElement("label", { "cmdk-label": "", htmlFor: U.inputId, id: U.labelId, style: Ke }, g), z(r, (e) => n.createElement(de.Provider, { value: E }, n.createElement(ce.Provider, { value: U }, e))));
}), Ce = n.forwardRef((r, l) => {
  var t, v;
  let i = $(), d = n.useRef(null), s = n.useContext(se), f = q(), g = me(r), b = (v = (t = g.current) == null ? void 0 : t.forceMount) != null ? v : s == null ? void 0 : s.forceMount;
  A(() => {
    if (!b) return f.item(i, s == null ? void 0 : s.id);
  }, [b]);
  let c = ve(i, d, [r.value, r.children, d], r.keywords), S = Z(), k = P((h) => h.value && h.value === c.current), w = P((h) => b || f.filter() === !1 ? !0 : h.search ? h.filtered.items.get(i) > 0 : !0);
  n.useEffect(() => {
    let h = d.current;
    if (!(!h || r.disabled)) return h.addEventListener(X, O), () => h.removeEventListener(X, O);
  }, [w, r.onSelect, r.disabled]);
  function O() {
    var h, E;
    H(), (E = (h = g.current).onSelect) == null || E.call(h, c.current);
  }
  function H() {
    S.setState("value", c.current, !0);
  }
  if (!w) return null;
  let { disabled: R, value: j, onSelect: _, forceMount: ee, keywords: te, ...x } = r;
  return n.createElement(C.div, { ref: L([d, l]), ...x, id: i, "cmdk-item": "", role: "option", "aria-disabled": !!R, "aria-selected": !!k, "data-disabled": !!R, "data-selected": !!k, onPointerMove: R || f.getDisablePointerSelection() ? void 0 : H, onClick: R ? void 0 : O }, r.children);
}), ke = n.forwardRef((r, l) => {
  let { heading: t, children: v, forceMount: i, ...d } = r, s = $(), f = n.useRef(null), g = n.useRef(null), b = $(), c = q(), S = P((w) => i || c.filter() === !1 ? !0 : w.search ? w.filtered.groups.has(s) : !0);
  A(() => c.group(s), []), ve(s, f, [r.value, r.heading, g]);
  let k = n.useMemo(() => ({ id: s, forceMount: i }), [i]);
  return n.createElement(C.div, { ref: L([f, l]), ...d, "cmdk-group": "", role: "presentation", hidden: S ? void 0 : !0 }, t && n.createElement("div", { ref: g, "cmdk-group-heading": "", "aria-hidden": !0, id: b }, t), z(r, (w) => n.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": t ? b : void 0 }, n.createElement(se.Provider, { value: k }, w))));
}), Re = n.forwardRef((r, l) => {
  let { alwaysRender: t, ...v } = r, i = n.useRef(null), d = P((s) => !s.search);
  return !t && !d ? null : n.createElement(C.div, { ref: L([i, l]), ...v, "cmdk-separator": "", role: "separator" });
}), xe = n.forwardRef((r, l) => {
  let { onValueChange: t, ...v } = r, i = r.value != null, d = Z(), s = P((c) => c.search), f = P((c) => c.value), g = q(), b = n.useMemo(() => {
    var c;
    let S = (c = g.listInnerRef.current) == null ? void 0 : c.querySelector(`${Y}[${M}="${encodeURIComponent(f)}"]`);
    return S == null ? void 0 : S.getAttribute("id");
  }, []);
  return n.useEffect(() => {
    r.value != null && d.setState("search", r.value);
  }, [r.value]), n.createElement(C.input, { ref: l, ...v, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": g.listId, "aria-labelledby": g.labelId, "aria-activedescendant": b, id: g.inputId, type: "text", value: i ? r.value : s, onChange: (c) => {
    i || d.setState("search", c.target.value), t == null || t(c.target.value);
  } });
}), Ie = n.forwardRef((r, l) => {
  let { children: t, label: v = "Suggestions", ...i } = r, d = n.useRef(null), s = n.useRef(null), f = q();
  return n.useEffect(() => {
    if (s.current && d.current) {
      let g = s.current, b = d.current, c, S = new ResizeObserver(() => {
        c = requestAnimationFrame(() => {
          let k = g.offsetHeight;
          b.style.setProperty("--cmdk-list-height", k.toFixed(1) + "px");
        });
      });
      return S.observe(g), () => {
        cancelAnimationFrame(c), S.unobserve(g);
      };
    }
  }, []), n.createElement(C.div, { ref: L([d, l]), ...i, "cmdk-list": "", role: "listbox", "aria-label": v, id: f.listId }, z(r, (g) => n.createElement("div", { ref: L([s, f.listInnerRef]), "cmdk-list-sizer": "" }, g)));
}), Me = n.forwardRef((r, l) => {
  let { open: t, onOpenChange: v, overlayClassName: i, contentClassName: d, container: s, ...f } = r;
  return n.createElement(ge, { open: t, onOpenChange: v }, n.createElement(he, { container: s }, n.createElement(be, { "cmdk-overlay": "", className: i }), n.createElement(Ee, { "aria-label": r.label, "cmdk-dialog": "", className: d }, n.createElement(fe, { ref: l, ...f }))));
}), Ae = n.forwardRef((r, l) => P((t) => t.filtered.count === 0) ? n.createElement(C.div, { ref: l, ...r, "cmdk-empty": "", role: "presentation" }) : null), Pe = n.forwardRef((r, l) => {
  let { progress: t, children: v, label: i = "Loading...", ...d } = r;
  return n.createElement(C.div, { ref: l, ...d, "cmdk-loading": "", role: "progressbar", "aria-valuenow": t, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": i }, z(r, (s) => n.createElement("div", { "aria-hidden": !0 }, s)));
}), ze = Object.assign(fe, { List: Ie, Item: Ce, Input: xe, Group: ke, Separator: Re, Dialog: Me, Empty: Ae, Loading: Pe });
function De(r, l) {
  let t = r.nextElementSibling;
  for (; t; ) {
    if (t.matches(l)) return t;
    t = t.nextElementSibling;
  }
}
function $e(r, l) {
  let t = r.previousElementSibling;
  for (; t; ) {
    if (t.matches(l)) return t;
    t = t.previousElementSibling;
  }
}
function me(r) {
  let l = n.useRef(r);
  return A(() => {
    l.current = r;
  }), l;
}
var A = typeof window > "u" ? n.useEffect : n.useLayoutEffect;
function D(r) {
  let l = n.useRef();
  return l.current === void 0 && (l.current = r()), l;
}
function L(r) {
  return (l) => {
    r.forEach((t) => {
      typeof t == "function" ? t(l) : t != null && (t.current = l);
    });
  };
}
function P(r) {
  let l = Z(), t = () => r(l.snapshot());
  return ye.useSyncExternalStore(l.subscribe, t, t);
}
function ve(r, l, t, v = []) {
  let i = n.useRef(), d = q();
  return A(() => {
    var s;
    let f = (() => {
      var b;
      for (let c of t) {
        if (typeof c == "string") return c.trim();
        if (typeof c == "object" && "current" in c) return c.current ? (b = c.current.textContent) == null ? void 0 : b.trim() : i.current;
      }
    })(), g = v.map((b) => b.trim());
    d.value(r, f, g), (s = l.current) == null || s.setAttribute(M, f), i.current = f;
  }), i;
}
var Fe = () => {
  let [r, l] = n.useState(), t = D(() => /* @__PURE__ */ new Map());
  return A(() => {
    t.current.forEach((v) => v()), t.current = /* @__PURE__ */ new Map();
  }, [r]), (v, i) => {
    t.current.set(v, i), l({});
  };
};
function Ve(r) {
  let l = r.type;
  return typeof l == "function" ? l(r.props) : "render" in l ? l.render(r.props) : r;
}
function z({ asChild: r, children: l }, t) {
  return r && n.isValidElement(l) ? n.cloneElement(Ve(l), { ref: l.ref }, t(l.props.children)) : t(l);
}
var Ke = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
export {
  ze as Command,
  Me as CommandDialog,
  Ae as CommandEmpty,
  ke as CommandGroup,
  xe as CommandInput,
  Ce as CommandItem,
  Ie as CommandList,
  Pe as CommandLoading,
  fe as CommandRoot,
  Re as CommandSeparator,
  we as defaultFilter,
  P as useCommandState
};
//# sourceMappingURL=index67.js.map

import x from "react";
var ye = (e) => e.type === "checkbox", re = (e) => e instanceof Date, B = (e) => e == null;
const tt = (e) => typeof e == "object";
var S = (e) => !B(e) && !Array.isArray(e) && tt(e) && !re(e), rt = (e) => S(e) && e.target ? ye(e.target) ? e.target.checked : e.target.value : e, xt = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, st = (e, s) => e.has(xt(s)), wt = (e) => {
  const s = e.constructor && e.constructor.prototype;
  return S(s) && s.hasOwnProperty("isPrototypeOf");
}, pe = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function N(e) {
  let s;
  const t = Array.isArray(e), a = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    s = new Date(e);
  else if (e instanceof Set)
    s = new Set(e);
  else if (!(pe && (e instanceof Blob || a)) && (t || S(e)))
    if (s = t ? [] : {}, !t && !wt(e))
      s = e;
    else
      for (const u in e)
        e.hasOwnProperty(u) && (s[u] = N(e[u]));
  else
    return e;
  return s;
}
var Ae = (e) => Array.isArray(e) ? e.filter(Boolean) : [], D = (e) => e === void 0, d = (e, s, t) => {
  if (!s || !S(e))
    return t;
  const a = Ae(s.split(/[,[\].]+?/)).reduce((u, l) => B(u) ? u : u[l], e);
  return D(a) || a === e ? D(e[s]) ? t : e[s] : a;
}, j = (e) => typeof e == "boolean", Te = (e) => /^\w*$/.test(e), it = (e) => Ae(e.replace(/["|']|\]/g, "").split(/\.|\[/)), w = (e, s, t) => {
  let a = -1;
  const u = Te(s) ? [s] : it(s), l = u.length, c = l - 1;
  for (; ++a < l; ) {
    const g = u[a];
    let V = t;
    if (a !== c) {
      const E = e[g];
      V = S(E) || Array.isArray(E) ? E : isNaN(+u[a + 1]) ? {} : [];
    }
    if (g === "__proto__" || g === "constructor" || g === "prototype")
      return;
    e[g] = V, e = e[g];
  }
  return e;
};
const _e = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, $ = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Q = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, at = x.createContext(null), Le = () => x.useContext(at), Ht = (e) => {
  const { children: s, ...t } = e;
  return x.createElement(at.Provider, { value: t }, s);
};
var ut = (e, s, t, a = !0) => {
  const u = {
    defaultValues: s._defaultValues
  };
  for (const l in e)
    Object.defineProperty(u, l, {
      get: () => {
        const c = l;
        return s._proxyFormState[c] !== $.all && (s._proxyFormState[c] = !a || $.all), t && (t[c] = !0), e[c];
      }
    });
  return u;
}, P = (e) => S(e) && !Object.keys(e).length, nt = (e, s, t, a) => {
  t(e);
  const { name: u, ...l } = e;
  return P(l) || Object.keys(l).length >= Object.keys(s).length || Object.keys(l).find((c) => s[c] === (!a || $.all));
}, de = (e) => Array.isArray(e) ? e : [e], lt = (e, s, t) => !e || !s || e === s || de(e).some((a) => a && (t ? a === s : a.startsWith(s) || s.startsWith(a)));
function Oe(e) {
  const s = x.useRef(e);
  s.current = e, x.useEffect(() => {
    const t = !e.disabled && s.current.subject && s.current.subject.subscribe({
      next: s.current.next
    });
    return () => {
      t && t.unsubscribe();
    };
  }, [e.disabled]);
}
function Dt(e) {
  const s = Le(), { control: t = s.control, disabled: a, name: u, exact: l } = e || {}, [c, g] = x.useState(t._formState), V = x.useRef(!0), E = x.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), F = x.useRef(u);
  return F.current = u, Oe({
    disabled: a,
    next: (v) => V.current && lt(F.current, v.name, l) && nt(v, E.current, t._updateFormState) && g({
      ...t._formState,
      ...v
    }),
    subject: t._subjects.state
  }), x.useEffect(() => (V.current = !0, E.current.isValid && t._updateValid(!0), () => {
    V.current = !1;
  }), [t]), x.useMemo(() => ut(c, t, E.current, !1), [c, t]);
}
var G = (e) => typeof e == "string", ot = (e, s, t, a, u) => G(e) ? (a && s.watch.add(e), d(t, e, u)) : Array.isArray(e) ? e.map((l) => (a && s.watch.add(l), d(t, l))) : (a && (s.watchAll = !0), t);
function St(e) {
  const s = Le(), { control: t = s.control, name: a, defaultValue: u, disabled: l, exact: c } = e || {}, g = x.useRef(a);
  g.current = a, Oe({
    disabled: l,
    subject: t._subjects.values,
    next: (F) => {
      lt(g.current, F.name, c) && E(N(ot(g.current, t._names, F.values || t._formValues, !1, u)));
    }
  });
  const [V, E] = x.useState(t._getWatch(a, u));
  return x.useEffect(() => t._removeUnmounted()), V;
}
function Et(e) {
  const s = Le(), { name: t, disabled: a, control: u = s.control, shouldUnregister: l } = e, c = st(u._names.array, t), g = St({
    control: u,
    name: t,
    defaultValue: d(u._formValues, t, d(u._defaultValues, t, e.defaultValue)),
    exact: !0
  }), V = Dt({
    control: u,
    name: t,
    exact: !0
  }), E = x.useRef(u.register(t, {
    ...e.rules,
    value: g,
    ...j(e.disabled) ? { disabled: e.disabled } : {}
  })), F = x.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!d(V.errors, t)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!d(V.dirtyFields, t)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!d(V.touchedFields, t)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!d(V.validatingFields, t)
    },
    error: {
      enumerable: !0,
      get: () => d(V.errors, t)
    }
  }), [V, t]), v = x.useMemo(() => ({
    name: t,
    value: g,
    ...j(a) || V.disabled ? { disabled: V.disabled || a } : {},
    onChange: (O) => E.current.onChange({
      target: {
        value: rt(O),
        name: t
      },
      type: _e.CHANGE
    }),
    onBlur: () => E.current.onBlur({
      target: {
        value: d(u._formValues, t),
        name: t
      },
      type: _e.BLUR
    }),
    ref: (O) => {
      const K = d(u._fields, t);
      K && O && (K._f.ref = {
        focus: () => O.focus(),
        select: () => O.select(),
        setCustomValidity: (U) => O.setCustomValidity(U),
        reportValidity: () => O.reportValidity()
      });
    }
  }), [
    t,
    u._formValues,
    a,
    V.disabled,
    g,
    u._fields
  ]);
  return x.useEffect(() => {
    const O = u._options.shouldUnregister || l, K = (U, M) => {
      const I = d(u._fields, U);
      I && I._f && (I._f.mount = M);
    };
    if (K(t, !0), O) {
      const U = N(d(u._options.defaultValues, t));
      w(u._defaultValues, t, U), D(d(u._formValues, t)) && w(u._formValues, t, U);
    }
    return !c && u.register(t), () => {
      (c ? O && !u._state.action : O) ? u.unregister(t) : K(t, !1);
    };
  }, [t, u, c, l]), x.useEffect(() => {
    u._updateDisabledField({
      disabled: a,
      fields: u._fields,
      name: t
    });
  }, [a, t, u]), x.useMemo(() => ({
    field: v,
    formState: V,
    fieldState: F
  }), [v, V, F]);
}
const $t = (e) => e.render(Et(e));
var kt = (e, s, t, a, u) => s ? {
  ...t[e],
  types: {
    ...t[e] && t[e].types ? t[e].types : {},
    [a]: u || !0
  }
} : {}, Ke = (e) => ({
  isOnSubmit: !e || e === $.onSubmit,
  isOnBlur: e === $.onBlur,
  isOnChange: e === $.onChange,
  isOnAll: e === $.all,
  isOnTouch: e === $.onTouched
}), ze = (e, s, t) => !t && (s.watchAll || s.watch.has(e) || [...s.watch].some((a) => e.startsWith(a) && /^\.\w+/.test(e.slice(a.length))));
const ce = (e, s, t, a) => {
  for (const u of t || Object.keys(e)) {
    const l = d(e, u);
    if (l) {
      const { _f: c, ...g } = l;
      if (c) {
        if (c.refs && c.refs[0] && s(c.refs[0], u) && !a)
          return !0;
        if (c.ref && s(c.ref, c.name) && !a)
          return !0;
        if (ce(g, s))
          break;
      } else if (S(g) && ce(g, s))
        break;
    }
  }
};
var Ct = (e, s, t) => {
  const a = de(d(e, t));
  return w(a, "root", s[t]), w(e, t, a), e;
}, Ue = (e) => e.type === "file", z = (e) => typeof e == "function", be = (e) => {
  if (!pe)
    return !1;
  const s = e ? e.ownerDocument : 0;
  return e instanceof (s && s.defaultView ? s.defaultView.HTMLElement : HTMLElement);
}, ve = (e) => G(e), Re = (e) => e.type === "radio", Ve = (e) => e instanceof RegExp;
const Ge = {
  value: !1,
  isValid: !1
}, Ye = { value: !0, isValid: !0 };
var ft = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const s = e.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: s, isValid: !!s.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !D(e[0].attributes.value) ? D(e[0].value) || e[0].value === "" ? Ye : { value: e[0].value, isValid: !0 } : Ye
    ) : Ge;
  }
  return Ge;
};
const Je = {
  isValid: !1,
  value: null
};
var dt = (e) => Array.isArray(e) ? e.reduce((s, t) => t && t.checked && !t.disabled ? {
  isValid: !0,
  value: t.value
} : s, Je) : Je;
function Qe(e, s, t = "validate") {
  if (ve(e) || Array.isArray(e) && e.every(ve) || j(e) && !e)
    return {
      type: t,
      message: ve(e) ? e : "",
      ref: s
    };
}
var ae = (e) => S(e) && !Ve(e) ? e : {
  value: e,
  message: ""
}, Xe = async (e, s, t, a, u, l) => {
  const { ref: c, refs: g, required: V, maxLength: E, minLength: F, min: v, max: O, pattern: K, validate: U, name: M, valueAsNumber: I, mount: X } = e._f, A = d(t, M);
  if (!X || s.has(M))
    return {};
  const Y = g ? g[0] : c, J = (b) => {
    u && Y.reportValidity && (Y.setCustomValidity(j(b) ? "" : b || ""), Y.reportValidity());
  }, k = {}, se = Re(c), ge = ye(c), te = se || ge, ie = (I || Ue(c)) && D(c.value) && D(A) || be(c) && c.value === "" || A === "" || Array.isArray(A) && !A.length, q = kt.bind(null, M, a, k), he = (b, m, C, R = Q.maxLength, H = Q.minLength) => {
    const W = b ? m : C;
    k[M] = {
      type: b ? R : H,
      message: W,
      ref: c,
      ...q(b ? R : H, W)
    };
  };
  if (l ? !Array.isArray(A) || !A.length : V && (!te && (ie || B(A)) || j(A) && !A || ge && !ft(g).isValid || se && !dt(g).isValid)) {
    const { value: b, message: m } = ve(V) ? { value: !!V, message: V } : ae(V);
    if (b && (k[M] = {
      type: Q.required,
      message: m,
      ref: Y,
      ...q(Q.required, m)
    }, !a))
      return J(m), k;
  }
  if (!ie && (!B(v) || !B(O))) {
    let b, m;
    const C = ae(O), R = ae(v);
    if (!B(A) && !isNaN(A)) {
      const H = c.valueAsNumber || A && +A;
      B(C.value) || (b = H > C.value), B(R.value) || (m = H < R.value);
    } else {
      const H = c.valueAsDate || new Date(A), W = (le) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + le), ue = c.type == "time", ne = c.type == "week";
      G(C.value) && A && (b = ue ? W(A) > W(C.value) : ne ? A > C.value : H > new Date(C.value)), G(R.value) && A && (m = ue ? W(A) < W(R.value) : ne ? A < R.value : H < new Date(R.value));
    }
    if ((b || m) && (he(!!b, C.message, R.message, Q.max, Q.min), !a))
      return J(k[M].message), k;
  }
  if ((E || F) && !ie && (G(A) || l && Array.isArray(A))) {
    const b = ae(E), m = ae(F), C = !B(b.value) && A.length > +b.value, R = !B(m.value) && A.length < +m.value;
    if ((C || R) && (he(C, b.message, m.message), !a))
      return J(k[M].message), k;
  }
  if (K && !ie && G(A)) {
    const { value: b, message: m } = ae(K);
    if (Ve(b) && !A.match(b) && (k[M] = {
      type: Q.pattern,
      message: m,
      ref: c,
      ...q(Q.pattern, m)
    }, !a))
      return J(m), k;
  }
  if (U) {
    if (z(U)) {
      const b = await U(A, t), m = Qe(b, Y);
      if (m && (k[M] = {
        ...m,
        ...q(Q.validate, m.message)
      }, !a))
        return J(m.message), k;
    } else if (S(U)) {
      let b = {};
      for (const m in U) {
        if (!P(b) && !a)
          break;
        const C = Qe(await U[m](A, t), Y, m);
        C && (b = {
          ...C,
          ...q(m, C.message)
        }, J(C.message), a && (k[M] = b));
      }
      if (!P(b) && (k[M] = {
        ref: Y,
        ...b
      }, !a))
        return k;
    }
  }
  return J(!0), k;
};
function pt(e, s) {
  const t = s.slice(0, -1).length;
  let a = 0;
  for (; a < t; )
    e = D(e) ? a++ : e[s[a++]];
  return e;
}
function Tt(e) {
  for (const s in e)
    if (e.hasOwnProperty(s) && !D(e[s]))
      return !1;
  return !0;
}
function p(e, s) {
  const t = Array.isArray(s) ? s : Te(s) ? [s] : it(s), a = t.length === 1 ? e : pt(e, t), u = t.length - 1, l = t[u];
  return a && delete a[l], u !== 0 && (S(a) && P(a) || Array.isArray(a) && Tt(a)) && p(e, t.slice(0, -1)), e;
}
var Se = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (u) => {
      for (const l of e)
        l.next && l.next(u);
    },
    subscribe: (u) => (e.push(u), {
      unsubscribe: () => {
        e = e.filter((l) => l !== u);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, Ce = (e) => B(e) || !tt(e);
function ee(e, s) {
  if (Ce(e) || Ce(s))
    return e === s;
  if (re(e) && re(s))
    return e.getTime() === s.getTime();
  const t = Object.keys(e), a = Object.keys(s);
  if (t.length !== a.length)
    return !1;
  for (const u of t) {
    const l = e[u];
    if (!a.includes(u))
      return !1;
    if (u !== "ref") {
      const c = s[u];
      if (re(l) && re(c) || S(l) && S(c) || Array.isArray(l) && Array.isArray(c) ? !ee(l, c) : l !== c)
        return !1;
    }
  }
  return !0;
}
var ct = (e) => e.type === "select-multiple", Lt = (e) => Re(e) || ye(e), Ee = (e) => be(e) && e.isConnected, yt = (e) => {
  for (const s in e)
    if (z(e[s]))
      return !0;
  return !1;
};
function Fe(e, s = {}) {
  const t = Array.isArray(e);
  if (S(e) || t)
    for (const a in e)
      Array.isArray(e[a]) || S(e[a]) && !yt(e[a]) ? (s[a] = Array.isArray(e[a]) ? [] : {}, Fe(e[a], s[a])) : B(e[a]) || (s[a] = !0);
  return s;
}
function gt(e, s, t) {
  const a = Array.isArray(e);
  if (S(e) || a)
    for (const u in e)
      Array.isArray(e[u]) || S(e[u]) && !yt(e[u]) ? D(s) || Ce(t[u]) ? t[u] = Array.isArray(e[u]) ? Fe(e[u], []) : { ...Fe(e[u]) } : gt(e[u], B(s) ? {} : s[u], t[u]) : t[u] = !ee(e[u], s[u]);
  return t;
}
var oe = (e, s) => gt(e, s, Fe(s)), ht = (e, { valueAsNumber: s, valueAsDate: t, setValueAs: a }) => D(e) ? e : s ? e === "" ? NaN : e && +e : t && G(e) ? new Date(e) : a ? a(e) : e;
function ke(e) {
  const s = e.ref;
  return Ue(s) ? s.files : Re(s) ? dt(e.refs).value : ct(s) ? [...s.selectedOptions].map(({ value: t }) => t) : ye(s) ? ft(e.refs).value : ht(D(s.value) ? e.ref.value : s.value, e);
}
var Ot = (e, s, t, a) => {
  const u = {};
  for (const l of e) {
    const c = d(s, l);
    c && w(u, l, c._f);
  }
  return {
    criteriaMode: t,
    names: [...e],
    fields: u,
    shouldUseNativeValidation: a
  };
}, fe = (e) => D(e) ? e : Ve(e) ? e.source : S(e) ? Ve(e.value) ? e.value.source : e.value : e;
const Ze = "AsyncFunction";
var Ut = (e) => !!e && !!e.validate && !!(z(e.validate) && e.validate.constructor.name === Ze || S(e.validate) && Object.values(e.validate).find((s) => s.constructor.name === Ze)), Rt = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function et(e, s, t) {
  const a = d(e, t);
  if (a || Te(t))
    return {
      error: a,
      name: t
    };
  const u = t.split(".");
  for (; u.length; ) {
    const l = u.join("."), c = d(s, l), g = d(e, l);
    if (c && !Array.isArray(c) && t !== l)
      return { name: t };
    if (g && g.type)
      return {
        name: l,
        error: g
      };
    u.pop();
  }
  return {
    name: t
  };
}
var Mt = (e, s, t, a, u) => u.isOnAll ? !1 : !t && u.isOnTouch ? !(s || e) : (t ? a.isOnBlur : u.isOnBlur) ? !e : (t ? a.isOnChange : u.isOnChange) ? e : !0, Bt = (e, s) => !Ae(d(e, s)).length && p(e, s);
const Nt = {
  mode: $.onSubmit,
  reValidateMode: $.onChange,
  shouldFocusError: !0
};
function Pt(e = {}) {
  let s = {
    ...Nt,
    ...e
  }, t = {
    submitCount: 0,
    isDirty: !1,
    isLoading: z(s.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: s.errors || {},
    disabled: s.disabled || !1
  }, a = {}, u = S(s.defaultValues) || S(s.values) ? N(s.defaultValues || s.values) || {} : {}, l = s.shouldUnregister ? {} : N(u), c = {
    action: !1,
    mount: !1,
    watch: !1
  }, g = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, V, E = 0;
  const F = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, v = {
    values: Se(),
    array: Se(),
    state: Se()
  }, O = Ke(s.mode), K = Ke(s.reValidateMode), U = s.criteriaMode === $.all, M = (r) => (i) => {
    clearTimeout(E), E = setTimeout(r, i);
  }, I = async (r) => {
    if (!s.disabled && (F.isValid || r)) {
      const i = s.resolver ? P((await te()).errors) : await q(a, !0);
      i !== t.isValid && v.state.next({
        isValid: i
      });
    }
  }, X = (r, i) => {
    !s.disabled && (F.isValidating || F.validatingFields) && ((r || Array.from(g.mount)).forEach((n) => {
      n && (i ? w(t.validatingFields, n, i) : p(t.validatingFields, n));
    }), v.state.next({
      validatingFields: t.validatingFields,
      isValidating: !P(t.validatingFields)
    }));
  }, A = (r, i = [], n, y, f = !0, o = !0) => {
    if (y && n && !s.disabled) {
      if (c.action = !0, o && Array.isArray(d(a, r))) {
        const h = n(d(a, r), y.argA, y.argB);
        f && w(a, r, h);
      }
      if (o && Array.isArray(d(t.errors, r))) {
        const h = n(d(t.errors, r), y.argA, y.argB);
        f && w(t.errors, r, h), Bt(t.errors, r);
      }
      if (F.touchedFields && o && Array.isArray(d(t.touchedFields, r))) {
        const h = n(d(t.touchedFields, r), y.argA, y.argB);
        f && w(t.touchedFields, r, h);
      }
      F.dirtyFields && (t.dirtyFields = oe(u, l)), v.state.next({
        name: r,
        isDirty: b(r, i),
        dirtyFields: t.dirtyFields,
        errors: t.errors,
        isValid: t.isValid
      });
    } else
      w(l, r, i);
  }, Y = (r, i) => {
    w(t.errors, r, i), v.state.next({
      errors: t.errors
    });
  }, J = (r) => {
    t.errors = r, v.state.next({
      errors: t.errors,
      isValid: !1
    });
  }, k = (r, i, n, y) => {
    const f = d(a, r);
    if (f) {
      const o = d(l, r, D(n) ? d(u, r) : n);
      D(o) || y && y.defaultChecked || i ? w(l, r, i ? o : ke(f._f)) : R(r, o), c.mount && I();
    }
  }, se = (r, i, n, y, f) => {
    let o = !1, h = !1;
    const _ = {
      name: r
    };
    if (!s.disabled) {
      const T = !!(d(a, r) && d(a, r)._f && d(a, r)._f.disabled);
      if (!n || y) {
        F.isDirty && (h = t.isDirty, t.isDirty = _.isDirty = b(), o = h !== _.isDirty);
        const L = T || ee(d(u, r), i);
        h = !!(!T && d(t.dirtyFields, r)), L || T ? p(t.dirtyFields, r) : w(t.dirtyFields, r, !0), _.dirtyFields = t.dirtyFields, o = o || F.dirtyFields && h !== !L;
      }
      if (n) {
        const L = d(t.touchedFields, r);
        L || (w(t.touchedFields, r, n), _.touchedFields = t.touchedFields, o = o || F.touchedFields && L !== n);
      }
      o && f && v.state.next(_);
    }
    return o ? _ : {};
  }, ge = (r, i, n, y) => {
    const f = d(t.errors, r), o = F.isValid && j(i) && t.isValid !== i;
    if (s.delayError && n ? (V = M(() => Y(r, n)), V(s.delayError)) : (clearTimeout(E), V = null, n ? w(t.errors, r, n) : p(t.errors, r)), (n ? !ee(f, n) : f) || !P(y) || o) {
      const h = {
        ...y,
        ...o && j(i) ? { isValid: i } : {},
        errors: t.errors,
        name: r
      };
      t = {
        ...t,
        ...h
      }, v.state.next(h);
    }
  }, te = async (r) => {
    X(r, !0);
    const i = await s.resolver(l, s.context, Ot(r || g.mount, a, s.criteriaMode, s.shouldUseNativeValidation));
    return X(r), i;
  }, ie = async (r) => {
    const { errors: i } = await te(r);
    if (r)
      for (const n of r) {
        const y = d(i, n);
        y ? w(t.errors, n, y) : p(t.errors, n);
      }
    else
      t.errors = i;
    return i;
  }, q = async (r, i, n = {
    valid: !0
  }) => {
    for (const y in r) {
      const f = r[y];
      if (f) {
        const { _f: o, ...h } = f;
        if (o) {
          const _ = g.array.has(o.name), T = f._f && Ut(f._f);
          T && F.validatingFields && X([y], !0);
          const L = await Xe(f, g.disabled, l, U, s.shouldUseNativeValidation && !i, _);
          if (T && F.validatingFields && X([y]), L[o.name] && (n.valid = !1, i))
            break;
          !i && (d(L, o.name) ? _ ? Ct(t.errors, L, o.name) : w(t.errors, o.name, L[o.name]) : p(t.errors, o.name));
        }
        !P(h) && await q(h, i, n);
      }
    }
    return n.valid;
  }, he = () => {
    for (const r of g.unMount) {
      const i = d(a, r);
      i && (i._f.refs ? i._f.refs.every((n) => !Ee(n)) : !Ee(i._f.ref)) && me(r);
    }
    g.unMount = /* @__PURE__ */ new Set();
  }, b = (r, i) => !s.disabled && (r && i && w(l, r, i), !ee(Me(), u)), m = (r, i, n) => ot(r, g, {
    ...c.mount ? l : D(i) ? u : G(r) ? { [r]: i } : i
  }, n, i), C = (r) => Ae(d(c.mount ? l : u, r, s.shouldUnregister ? d(u, r, []) : [])), R = (r, i, n = {}) => {
    const y = d(a, r);
    let f = i;
    if (y) {
      const o = y._f;
      o && (!o.disabled && w(l, r, ht(i, o)), f = be(o.ref) && B(i) ? "" : i, ct(o.ref) ? [...o.ref.options].forEach((h) => h.selected = f.includes(h.value)) : o.refs ? ye(o.ref) ? o.refs.length > 1 ? o.refs.forEach((h) => (!h.defaultChecked || !h.disabled) && (h.checked = Array.isArray(f) ? !!f.find((_) => _ === h.value) : f === h.value)) : o.refs[0] && (o.refs[0].checked = !!f) : o.refs.forEach((h) => h.checked = h.value === f) : Ue(o.ref) ? o.ref.value = "" : (o.ref.value = f, o.ref.type || v.values.next({
        name: r,
        values: { ...l }
      })));
    }
    (n.shouldDirty || n.shouldTouch) && se(r, f, n.shouldTouch, n.shouldDirty, !0), n.shouldValidate && le(r);
  }, H = (r, i, n) => {
    for (const y in i) {
      const f = i[y], o = `${r}.${y}`, h = d(a, o);
      (g.array.has(r) || S(f) || h && !h._f) && !re(f) ? H(o, f, n) : R(o, f, n);
    }
  }, W = (r, i, n = {}) => {
    const y = d(a, r), f = g.array.has(r), o = N(i);
    w(l, r, o), f ? (v.array.next({
      name: r,
      values: { ...l }
    }), (F.isDirty || F.dirtyFields) && n.shouldDirty && v.state.next({
      name: r,
      dirtyFields: oe(u, l),
      isDirty: b(r, o)
    })) : y && !y._f && !B(o) ? H(r, o, n) : R(r, o, n), ze(r, g) && v.state.next({ ...t }), v.values.next({
      name: c.mount ? r : void 0,
      values: { ...l }
    });
  }, ue = async (r) => {
    c.mount = !0;
    const i = r.target;
    let n = i.name, y = !0;
    const f = d(a, n), o = () => i.type ? ke(f._f) : rt(r), h = (_) => {
      y = Number.isNaN(_) || re(_) && isNaN(_.getTime()) || ee(_, d(l, n, _));
    };
    if (f) {
      let _, T;
      const L = o(), Z = r.type === _e.BLUR || r.type === _e.FOCUS_OUT, Ft = !Rt(f._f) && !s.resolver && !d(t.errors, n) && !f._f.deps || Mt(Z, d(t.touchedFields, n), t.isSubmitted, K, O), we = ze(n, g, Z);
      w(l, n, L), Z ? (f._f.onBlur && f._f.onBlur(r), V && V(0)) : f._f.onChange && f._f.onChange(r);
      const De = se(n, L, Z, !1), At = !P(De) || we;
      if (!Z && v.values.next({
        name: n,
        type: r.type,
        values: { ...l }
      }), Ft)
        return F.isValid && (s.mode === "onBlur" && Z ? I() : Z || I()), At && v.state.next({ name: n, ...we ? {} : De });
      if (!Z && we && v.state.next({ ...t }), s.resolver) {
        const { errors: He } = await te([n]);
        if (h(L), y) {
          const mt = et(t.errors, a, n), $e = et(He, a, mt.name || n);
          _ = $e.error, n = $e.name, T = P(He);
        }
      } else
        X([n], !0), _ = (await Xe(f, g.disabled, l, U, s.shouldUseNativeValidation))[n], X([n]), h(L), y && (_ ? T = !1 : F.isValid && (T = await q(a, !0)));
      y && (f._f.deps && le(f._f.deps), ge(n, T, _, De));
    }
  }, ne = (r, i) => {
    if (d(t.errors, i) && r.focus)
      return r.focus(), 1;
  }, le = async (r, i = {}) => {
    let n, y;
    const f = de(r);
    if (s.resolver) {
      const o = await ie(D(r) ? r : f);
      n = P(o), y = r ? !f.some((h) => d(o, h)) : n;
    } else r ? (y = (await Promise.all(f.map(async (o) => {
      const h = d(a, o);
      return await q(h && h._f ? { [o]: h } : h);
    }))).every(Boolean), !(!y && !t.isValid) && I()) : y = n = await q(a);
    return v.state.next({
      ...!G(r) || F.isValid && n !== t.isValid ? {} : { name: r },
      ...s.resolver || !r ? { isValid: n } : {},
      errors: t.errors
    }), i.shouldFocus && !y && ce(a, ne, r ? f : g.mount), y;
  }, Me = (r) => {
    const i = {
      ...c.mount ? l : u
    };
    return D(r) ? i : G(r) ? d(i, r) : r.map((n) => d(i, n));
  }, Be = (r, i) => ({
    invalid: !!d((i || t).errors, r),
    isDirty: !!d((i || t).dirtyFields, r),
    error: d((i || t).errors, r),
    isValidating: !!d(t.validatingFields, r),
    isTouched: !!d((i || t).touchedFields, r)
  }), vt = (r) => {
    r && de(r).forEach((i) => p(t.errors, i)), v.state.next({
      errors: r ? t.errors : {}
    });
  }, Ne = (r, i, n) => {
    const y = (d(a, r, { _f: {} })._f || {}).ref, f = d(t.errors, r) || {}, { ref: o, message: h, type: _, ...T } = f;
    w(t.errors, r, {
      ...T,
      ...i,
      ref: y
    }), v.state.next({
      name: r,
      errors: t.errors,
      isValid: !1
    }), n && n.shouldFocus && y && y.focus && y.focus();
  }, _t = (r, i) => z(r) ? v.values.subscribe({
    next: (n) => r(m(void 0, i), n)
  }) : m(r, i, !0), me = (r, i = {}) => {
    for (const n of r ? de(r) : g.mount)
      g.mount.delete(n), g.array.delete(n), i.keepValue || (p(a, n), p(l, n)), !i.keepError && p(t.errors, n), !i.keepDirty && p(t.dirtyFields, n), !i.keepTouched && p(t.touchedFields, n), !i.keepIsValidating && p(t.validatingFields, n), !s.shouldUnregister && !i.keepDefaultValue && p(u, n);
    v.values.next({
      values: { ...l }
    }), v.state.next({
      ...t,
      ...i.keepDirty ? { isDirty: b() } : {}
    }), !i.keepIsValid && I();
  }, Pe = ({ disabled: r, name: i, field: n, fields: y }) => {
    (j(r) && c.mount || r || g.disabled.has(i)) && (r ? g.disabled.add(i) : g.disabled.delete(i), se(i, ke(n ? n._f : d(y, i)._f), !1, !1, !0));
  }, xe = (r, i = {}) => {
    let n = d(a, r);
    const y = j(i.disabled) || j(s.disabled);
    return w(a, r, {
      ...n || {},
      _f: {
        ...n && n._f ? n._f : { ref: { name: r } },
        name: r,
        mount: !0,
        ...i
      }
    }), g.mount.add(r), n ? Pe({
      field: n,
      disabled: j(i.disabled) ? i.disabled : s.disabled,
      name: r
    }) : k(r, !0, i.value), {
      ...y ? { disabled: i.disabled || s.disabled } : {},
      ...s.progressive ? {
        required: !!i.required,
        min: fe(i.min),
        max: fe(i.max),
        minLength: fe(i.minLength),
        maxLength: fe(i.maxLength),
        pattern: fe(i.pattern)
      } : {},
      name: r,
      onChange: ue,
      onBlur: ue,
      ref: (f) => {
        if (f) {
          xe(r, i), n = d(a, r);
          const o = D(f.value) && f.querySelectorAll && f.querySelectorAll("input,select,textarea")[0] || f, h = Lt(o), _ = n._f.refs || [];
          if (h ? _.find((T) => T === o) : o === n._f.ref)
            return;
          w(a, r, {
            _f: {
              ...n._f,
              ...h ? {
                refs: [
                  ..._.filter(Ee),
                  o,
                  ...Array.isArray(d(u, r)) ? [{}] : []
                ],
                ref: { type: o.type, name: r }
              } : { ref: o }
            }
          }), k(r, !1, void 0, o);
        } else
          n = d(a, r, {}), n._f && (n._f.mount = !1), (s.shouldUnregister || i.shouldUnregister) && !(st(g.array, r) && c.action) && g.unMount.add(r);
      }
    };
  }, Ie = () => s.shouldFocusError && ce(a, ne, g.mount), bt = (r) => {
    j(r) && (v.state.next({ disabled: r }), ce(a, (i, n) => {
      const y = d(a, n);
      y && (i.disabled = y._f.disabled || r, Array.isArray(y._f.refs) && y._f.refs.forEach((f) => {
        f.disabled = y._f.disabled || r;
      }));
    }, 0, !1));
  }, qe = (r, i) => async (n) => {
    let y;
    n && (n.preventDefault && n.preventDefault(), n.persist && n.persist());
    let f = N(l);
    if (g.disabled.size)
      for (const o of g.disabled)
        w(f, o, void 0);
    if (v.state.next({
      isSubmitting: !0
    }), s.resolver) {
      const { errors: o, values: h } = await te();
      t.errors = o, f = h;
    } else
      await q(a);
    if (p(t.errors, "root"), P(t.errors)) {
      v.state.next({
        errors: {}
      });
      try {
        await r(f, n);
      } catch (o) {
        y = o;
      }
    } else
      i && await i({ ...t.errors }, n), Ie(), setTimeout(Ie);
    if (v.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: P(t.errors) && !y,
      submitCount: t.submitCount + 1,
      errors: t.errors
    }), y)
      throw y;
  }, Vt = (r, i = {}) => {
    d(a, r) && (D(i.defaultValue) ? W(r, N(d(u, r))) : (W(r, i.defaultValue), w(u, r, N(i.defaultValue))), i.keepTouched || p(t.touchedFields, r), i.keepDirty || (p(t.dirtyFields, r), t.isDirty = i.defaultValue ? b(r, N(d(u, r))) : b()), i.keepError || (p(t.errors, r), F.isValid && I()), v.state.next({ ...t }));
  }, We = (r, i = {}) => {
    const n = r ? N(r) : u, y = N(n), f = P(r), o = f ? u : y;
    if (i.keepDefaultValues || (u = n), !i.keepValues) {
      if (i.keepDirtyValues) {
        const h = /* @__PURE__ */ new Set([
          ...g.mount,
          ...Object.keys(oe(u, l))
        ]);
        for (const _ of Array.from(h))
          d(t.dirtyFields, _) ? w(o, _, d(l, _)) : W(_, d(o, _));
      } else {
        if (pe && D(r))
          for (const h of g.mount) {
            const _ = d(a, h);
            if (_ && _._f) {
              const T = Array.isArray(_._f.refs) ? _._f.refs[0] : _._f.ref;
              if (be(T)) {
                const L = T.closest("form");
                if (L) {
                  L.reset();
                  break;
                }
              }
            }
          }
        a = {};
      }
      l = s.shouldUnregister ? i.keepDefaultValues ? N(u) : {} : N(o), v.array.next({
        values: { ...o }
      }), v.values.next({
        values: { ...o }
      });
    }
    g = {
      mount: i.keepDirtyValues ? g.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, c.mount = !F.isValid || !!i.keepIsValid || !!i.keepDirtyValues, c.watch = !!s.shouldUnregister, v.state.next({
      submitCount: i.keepSubmitCount ? t.submitCount : 0,
      isDirty: f ? !1 : i.keepDirty ? t.isDirty : !!(i.keepDefaultValues && !ee(r, u)),
      isSubmitted: i.keepIsSubmitted ? t.isSubmitted : !1,
      dirtyFields: f ? {} : i.keepDirtyValues ? i.keepDefaultValues && l ? oe(u, l) : t.dirtyFields : i.keepDefaultValues && r ? oe(u, r) : i.keepDirty ? t.dirtyFields : {},
      touchedFields: i.keepTouched ? t.touchedFields : {},
      errors: i.keepErrors ? t.errors : {},
      isSubmitSuccessful: i.keepIsSubmitSuccessful ? t.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, je = (r, i) => We(z(r) ? r(l) : r, i);
  return {
    control: {
      register: xe,
      unregister: me,
      getFieldState: Be,
      handleSubmit: qe,
      setError: Ne,
      _executeSchema: te,
      _getWatch: m,
      _getDirty: b,
      _updateValid: I,
      _removeUnmounted: he,
      _updateFieldArray: A,
      _updateDisabledField: Pe,
      _getFieldArray: C,
      _reset: We,
      _resetDefaultValues: () => z(s.defaultValues) && s.defaultValues().then((r) => {
        je(r, s.resetOptions), v.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (r) => {
        t = {
          ...t,
          ...r
        };
      },
      _disableForm: bt,
      _subjects: v,
      _proxyFormState: F,
      _setErrors: J,
      get _fields() {
        return a;
      },
      get _formValues() {
        return l;
      },
      get _state() {
        return c;
      },
      set _state(r) {
        c = r;
      },
      get _defaultValues() {
        return u;
      },
      get _names() {
        return g;
      },
      set _names(r) {
        g = r;
      },
      get _formState() {
        return t;
      },
      set _formState(r) {
        t = r;
      },
      get _options() {
        return s;
      },
      set _options(r) {
        s = {
          ...s,
          ...r
        };
      }
    },
    trigger: le,
    register: xe,
    handleSubmit: qe,
    watch: _t,
    setValue: W,
    getValues: Me,
    reset: je,
    resetField: Vt,
    clearErrors: vt,
    unregister: me,
    setError: Ne,
    setFocus: (r, i = {}) => {
      const n = d(a, r), y = n && n._f;
      if (y) {
        const f = y.refs ? y.refs[0] : y.ref;
        f.focus && (f.focus(), i.shouldSelect && z(f.select) && f.select());
      }
    },
    getFieldState: Be
  };
}
function Kt(e = {}) {
  const s = x.useRef(void 0), t = x.useRef(void 0), [a, u] = x.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: z(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: z(e.defaultValues) ? void 0 : e.defaultValues
  });
  s.current || (s.current = {
    ...Pt(e),
    formState: a
  });
  const l = s.current.control;
  return l._options = e, Oe({
    subject: l._subjects.state,
    next: (c) => {
      nt(c, l._proxyFormState, l._updateFormState, !0) && u({ ...l._formState });
    }
  }), x.useEffect(() => l._disableForm(e.disabled), [l, e.disabled]), x.useEffect(() => {
    if (l._proxyFormState.isDirty) {
      const c = l._getDirty();
      c !== a.isDirty && l._subjects.state.next({
        isDirty: c
      });
    }
  }, [l, a.isDirty]), x.useEffect(() => {
    e.values && !ee(e.values, t.current) ? (l._reset(e.values, l._options.resetOptions), t.current = e.values, u((c) => ({ ...c }))) : l._resetDefaultValues();
  }, [e.values, l]), x.useEffect(() => {
    e.errors && l._setErrors(e.errors);
  }, [e.errors, l]), x.useEffect(() => {
    l._state.mount || (l._updateValid(), l._state.mount = !0), l._state.watch && (l._state.watch = !1, l._subjects.state.next({ ...l._formState })), l._removeUnmounted();
  }), x.useEffect(() => {
    e.shouldUnregister && l._subjects.values.next({
      values: l._getWatch()
    });
  }, [e.shouldUnregister, l]), s.current.formState = ut(a, l), s.current;
}
export {
  $t as Controller,
  Ht as FormProvider,
  kt as appendErrors,
  d as get,
  w as set,
  Et as useController,
  Kt as useForm,
  Le as useFormContext,
  Dt as useFormState,
  St as useWatch
};
//# sourceMappingURL=index138.js.map

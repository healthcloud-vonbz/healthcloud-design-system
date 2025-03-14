var F = Object.defineProperty, N = (a, e, t) => e in a ? F(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t, R = (a, e, t) => N(a, typeof e != "symbol" ? e + "" : e, t);
const M = {
  "#": { pattern: /[0-9]/ },
  "@": { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[a-zA-Z0-9]/ }
}, E = (a, e, t) => a.replaceAll(e, "").replace(t, ".").replace("..", ".").replace(/[^.\d]/g, ""), S = (a, e, t) => {
  var n;
  return new Intl.NumberFormat(((n = t.number) == null ? void 0 : n.locale) ?? "en", {
    minimumFractionDigits: a,
    maximumFractionDigits: e,
    roundingMode: "trunc"
  });
}, j = (a, e = !0, t) => {
  var n, i, l, v;
  const m = ((n = t.number) == null ? void 0 : n.unsigned) !== !0 && a.startsWith("-") ? "-" : "", c = ((i = t.number) == null ? void 0 : i.fraction) ?? 0;
  let r = S(0, c, t);
  const k = r.formatToParts(1000.12), g = ((l = k.find((s) => s.type === "group")) == null ? void 0 : l.value) ?? " ", A = ((v = k.find((s) => s.type === "decimal")) == null ? void 0 : v.value) ?? ".", d = E(a, g, A);
  if (Number.isNaN(parseFloat(d))) return m;
  const p = d.split(".");
  if (p[1] != null && p[1].length >= 1) {
    const s = p[1].length <= c ? p[1].length : c;
    r = S(s, c, t);
  }
  let h = r.format(parseFloat(d));
  return e ? c > 0 && d.endsWith(".") && !d.slice(0, -1).includes(".") && (h += A) : h = E(h, g, A), m + h;
};
class w {
  constructor(e = {}) {
    R(this, "opts", {}), R(this, "memo", /* @__PURE__ */ new Map());
    const t = { ...e };
    if (t.tokens != null) {
      t.tokens = t.tokensReplace ? { ...t.tokens } : { ...M, ...t.tokens };
      for (const n of Object.values(t.tokens))
        typeof n.pattern == "string" && (n.pattern = new RegExp(n.pattern));
    } else
      t.tokens = M;
    Array.isArray(t.mask) && (t.mask.length > 1 ? t.mask = [...t.mask].sort((n, i) => n.length - i.length) : t.mask = t.mask[0] ?? ""), t.mask === "" && (t.mask = null), this.opts = t;
  }
  masked(e) {
    return this.process(String(e), this.findMask(String(e)));
  }
  unmasked(e) {
    return this.process(String(e), this.findMask(String(e)), !1);
  }
  isEager() {
    return this.opts.eager === !0;
  }
  isReversed() {
    return this.opts.reversed === !0;
  }
  completed(e) {
    const t = this.findMask(String(e));
    if (this.opts.mask == null || t == null) return !1;
    const n = this.process(String(e), t).length;
    return typeof this.opts.mask == "string" ? n >= this.opts.mask.length : n >= t.length;
  }
  findMask(e) {
    const t = this.opts.mask;
    if (t == null)
      return null;
    if (typeof t == "string")
      return t;
    if (typeof t == "function")
      return t(e);
    const n = this.process(e, t.slice(-1).pop() ?? "", !1);
    return t.find((i) => this.process(e, i, !1).length >= n.length) ?? "";
  }
  escapeMask(e) {
    const t = [], n = [];
    return e.split("").forEach((i, l) => {
      i === "!" && e[l - 1] !== "!" ? n.push(l - n.length) : t.push(i);
    }), { mask: t.join(""), escaped: n };
  }
  process(e, t, n = !0) {
    if (this.opts.number != null) return j(e, n, this.opts);
    if (t == null) return e;
    const i = `v=${e},mr=${t},m=${n ? 1 : 0}`;
    if (this.memo.has(i)) return this.memo.get(i);
    const { mask: l, escaped: v } = this.escapeMask(t), m = [], c = this.opts.tokens != null ? this.opts.tokens : {}, r = this.isReversed() ? -1 : 1, k = this.isReversed() ? "unshift" : "push", g = this.isReversed() ? 0 : l.length - 1, A = this.isReversed() ? () => s > -1 && o > -1 : () => s < l.length && o < e.length, d = (f) => !this.isReversed() && f <= g || this.isReversed() && f >= g;
    let p, h = -1, s = this.isReversed() ? l.length - 1 : 0, o = this.isReversed() ? e.length - 1 : 0, y = !1;
    for (; A(); ) {
      const f = l.charAt(s), u = c[f], b = (u == null ? void 0 : u.transform) != null ? u.transform(e.charAt(o)) : e.charAt(o);
      if (!v.includes(s) && u != null ? (b.match(u.pattern) != null ? (m[k](b), u.repeated ? (h === -1 ? h = s : s === g && s !== h && (s = h - r), g === h && (s -= r)) : u.multiple && (y = !0, s -= r), s += r) : u.multiple ? y && (s += r, o -= r, y = !1) : b === p ? p = void 0 : u.optional && (s += r, o -= r), o += r) : (n && !this.isEager() && m[k](f), b === f && !this.isEager() ? o += r : p = f, this.isEager() || (s += r)), this.isEager())
        for (; d(s) && (c[l.charAt(s)] == null || v.includes(s)); ) {
          if (n) {
            if (m[k](l.charAt(s)), e.charAt(o) === l.charAt(s)) {
              s += r, o += r;
              continue;
            }
          } else l.charAt(s) === e.charAt(o) && (o += r);
          s += r;
        }
    }
    return this.memo.set(i, m.join("")), this.memo.get(i);
  }
}
export {
  w as Mask,
  M as tokens
};
//# sourceMappingURL=index17.js.map

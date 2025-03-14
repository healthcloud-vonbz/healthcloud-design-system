import { longFormatters as R } from "./index51.js";
import { isProtectedWeekYearToken as F, warnOrThrowProtectedError as x, isProtectedDayOfYearToken as $ } from "./index52.js";
import { constructFrom as A } from "./index36.js";
import { getDefaultOptions as W } from "./index39.js";
import { toDate as N } from "./index37.js";
import { DateTimezoneSetter as L } from "./index53.js";
import { parsers as Y } from "./index54.js";
import { enUS as j } from "./index55.js";
const q = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, v = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, z = /^'([^]*?)'?$/, Q = /''/g, H = /\S/, I = /[a-zA-Z]/;
function _(n, c, f, o) {
  var k, w, T, d;
  const a = () => A(f, NaN), i = W(), l = i.locale ?? j, P = i.firstWeekContainsDate ?? ((w = (k = i.locale) == null ? void 0 : k.options) == null ? void 0 : w.firstWeekContainsDate) ?? 1, b = i.weekStartsOn ?? ((d = (T = i.locale) == null ? void 0 : T.options) == null ? void 0 : d.weekStartsOn) ?? 0, m = {
    firstWeekContainsDate: P,
    weekStartsOn: b,
    locale: l
  }, p = [new L(o == null ? void 0 : o.in, f)], D = c.match(v).map((t) => {
    const e = t[0];
    if (e in R) {
      const r = R[e];
      return r(t, l.formatLong);
    }
    return t;
  }).join("").match(q), u = [];
  for (let t of D) {
    F(t) && x(t, c, n), $(t) && x(t, c, n);
    const e = t[0], r = Y[e];
    if (r) {
      const { incompatibleTokens: y } = r;
      if (Array.isArray(y)) {
        const E = u.find(
          (O) => y.includes(O.token) || O.token === e
        );
        if (E)
          throw new RangeError(
            `The format string mustn't contain \`${E.fullToken}\` and \`${t}\` at the same time`
          );
      } else if (r.incompatibleTokens === "*" && u.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${t}\` and any other token at the same time`
        );
      u.push({ token: e, fullToken: t });
      const g = r.run(
        n,
        t,
        l.match,
        m
      );
      if (!g)
        return a();
      p.push(g.setter), n = g.rest;
    } else {
      if (e.match(I))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + e + "`"
        );
      if (t === "''" ? t = "'" : e === "'" && (t = K(t)), n.indexOf(t) === 0)
        n = n.slice(t.length);
      else
        return a();
    }
  }
  if (n.length > 0 && H.test(n))
    return a();
  const C = p.map((t) => t.priority).sort((t, e) => e - t).filter((t, e, r) => r.indexOf(t) === e).map(
    (t) => p.filter((e) => e.priority === t).sort((e, r) => r.subPriority - e.subPriority)
  ).map((t) => t[0]);
  let s = N(f, o == null ? void 0 : o.in);
  if (isNaN(+s)) return a();
  const h = {};
  for (const t of C) {
    if (!t.validate(s, m))
      return a();
    const e = t.set(s, h, m);
    Array.isArray(e) ? (s = e[0], Object.assign(h, e[1])) : s = e;
  }
  return s;
}
function K(n) {
  return n.match(z)[1].replace(Q, "'");
}
export {
  _ as default,
  R as longFormatters,
  _ as parse,
  Y as parsers
};
//# sourceMappingURL=index18.js.map

var l = Object.defineProperty;
var n = (t, e, r) => e in t ? l(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var o = (t, e, r) => n(t, typeof e != "symbol" ? e + "" : e, r);
import { Parser as p } from "./index156.js";
import { mapValue as c, parseNDigits as m } from "./index157.js";
class h extends p {
  constructor() {
    super(...arguments);
    o(this, "priority", 30);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(r, s) {
    const a = (i) => Math.trunc(i * Math.pow(10, -s.length + 3));
    return c(m(s.length, r), a);
  }
  set(r, s, a) {
    return r.setMilliseconds(a), r;
  }
}
export {
  h as FractionOfSecondParser
};
//# sourceMappingURL=index100.js.map

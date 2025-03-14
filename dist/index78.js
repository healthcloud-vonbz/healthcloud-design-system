var p = Object.defineProperty;
var a = (s, e, r) => e in s ? p(s, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[e] = r;
var i = (s, e, r) => a(s, typeof e != "symbol" ? e + "" : e, r);
import { Parser as l } from "./index156.js";
import { parseNDigitsSigned as o } from "./index157.js";
class c extends l {
  constructor() {
    super(...arguments);
    i(this, "priority", 130);
    i(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(r, t) {
    return t === "u" ? o(4, r) : o(t.length, r);
  }
  set(r, t, n) {
    return r.setFullYear(n, 0, 1), r.setHours(0, 0, 0, 0), r;
  }
}
export {
  c as ExtendedYearParser
};
//# sourceMappingURL=index78.js.map

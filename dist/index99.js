var a = Object.defineProperty;
var i = (s, e, r) => e in s ? a(s, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[e] = r;
var o = (s, e, r) => i(s, typeof e != "symbol" ? e + "" : e, r);
import { numericPatterns as c } from "./index158.js";
import { Parser as m } from "./index156.js";
import { parseNDigits as p, parseNumericPattern as u } from "./index157.js";
class N extends m {
  constructor() {
    super(...arguments);
    o(this, "priority", 50);
    o(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(r, t, n) {
    switch (t) {
      case "s":
        return u(c.second, r);
      case "so":
        return n.ordinalNumber(r, { unit: "second" });
      default:
        return p(t.length, r);
    }
  }
  validate(r, t) {
    return t >= 0 && t <= 59;
  }
  set(r, t, n) {
    return r.setSeconds(n, 0), r;
  }
}
export {
  N as SecondParser
};
//# sourceMappingURL=index99.js.map

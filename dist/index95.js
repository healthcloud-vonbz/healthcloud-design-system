var i = Object.defineProperty;
var u = (t, e, r) => e in t ? i(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var a = (t, e, r) => u(t, typeof e != "symbol" ? e + "" : e, r);
import { numericPatterns as n } from "./index158.js";
import { Parser as m } from "./index156.js";
import { parseNDigits as p, parseNumericPattern as c } from "./index157.js";
class P extends m {
  constructor() {
    super(...arguments);
    a(this, "priority", 70);
    a(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(r, s, o) {
    switch (s) {
      case "H":
        return c(n.hour23h, r);
      case "Ho":
        return o.ordinalNumber(r, { unit: "hour" });
      default:
        return p(s.length, r);
    }
  }
  validate(r, s) {
    return s >= 0 && s <= 23;
  }
  set(r, s, o) {
    return r.setHours(o, 0, 0, 0), r;
  }
}
export {
  P as Hour0to23Parser
};
//# sourceMappingURL=index95.js.map

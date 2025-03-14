var m = Object.defineProperty;
var a = (t, e, r) => e in t ? m(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var n = (t, e, r) => a(t, typeof e != "symbol" ? e + "" : e, r);
import { numericPatterns as u } from "./index158.js";
import { Parser as o } from "./index156.js";
import { parseNDigits as p, parseNumericPattern as c } from "./index157.js";
class b extends o {
  constructor() {
    super(...arguments);
    n(this, "priority", 60);
    n(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(r, s, i) {
    switch (s) {
      case "m":
        return c(u.minute, r);
      case "mo":
        return i.ordinalNumber(r, { unit: "minute" });
      default:
        return p(s.length, r);
    }
  }
  validate(r, s) {
    return s >= 0 && s <= 59;
  }
  set(r, s, i) {
    return r.setMinutes(i, 0, 0), r;
  }
}
export {
  b as MinuteParser
};
//# sourceMappingURL=index98.js.map

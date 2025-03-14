var n = Object.defineProperty;
var o = (t, e, r) => e in t ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var i = (t, e, r) => o(t, typeof e != "symbol" ? e + "" : e, r);
import { numericPatterns as p } from "./index158.js";
import { Parser as c } from "./index156.js";
import { parseNDigits as u, parseNumericPattern as m, isLeapYearIndex as f } from "./index157.js";
class L extends c {
  constructor() {
    super(...arguments);
    i(this, "priority", 90);
    i(this, "subpriority", 1);
    i(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, s, a) {
    switch (s) {
      case "D":
      case "DD":
        return m(p.dayOfYear, r);
      case "Do":
        return a.ordinalNumber(r, { unit: "date" });
      default:
        return u(s.length, r);
    }
  }
  validate(r, s) {
    const a = r.getFullYear();
    return f(a) ? s >= 1 && s <= 366 : s >= 1 && s <= 365;
  }
  set(r, s, a) {
    return r.setMonth(0, a), r.setHours(0, 0, 0, 0), r;
  }
}
export {
  L as DayOfYearParser
};
//# sourceMappingURL=index86.js.map

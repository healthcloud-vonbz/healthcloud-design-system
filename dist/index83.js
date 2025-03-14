var o = Object.defineProperty;
var n = (t, e, r) => e in t ? o(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var i = (t, e, r) => n(t, typeof e != "symbol" ? e + "" : e, r);
import { setWeek as p } from "./index59.js";
import { startOfWeek as u } from "./index47.js";
import { numericPatterns as c } from "./index158.js";
import { Parser as f } from "./index156.js";
import { parseNDigits as l, parseNumericPattern as k } from "./index157.js";
class h extends f {
  constructor() {
    super(...arguments);
    i(this, "priority", 100);
    i(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(r, s, a) {
    switch (s) {
      case "w":
        return k(c.week, r);
      case "wo":
        return a.ordinalNumber(r, { unit: "week" });
      default:
        return l(s.length, r);
    }
  }
  validate(r, s) {
    return s >= 1 && s <= 53;
  }
  set(r, s, a, m) {
    return u(p(r, a, m), m);
  }
}
export {
  h as LocalWeekParser
};
//# sourceMappingURL=index83.js.map

var c = Object.defineProperty;
var m = (s, e, r) => e in s ? c(s, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : s[e] = r;
var o = (s, e, r) => m(s, typeof e != "symbol" ? e + "" : e, r);
import { numericPatterns as p } from "./index158.js";
import { Parser as u } from "./index156.js";
import { parseNDigits as l, parseNumericPattern as N, isLeapYearIndex as Y } from "./index157.js";
const _ = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], f = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class A extends u {
  constructor() {
    super(...arguments);
    o(this, "priority", 90);
    o(this, "subPriority", 1);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, t, n) {
    switch (t) {
      case "d":
        return N(p.date, r);
      case "do":
        return n.ordinalNumber(r, { unit: "date" });
      default:
        return l(t.length, r);
    }
  }
  validate(r, t) {
    const n = r.getFullYear(), a = Y(n), i = r.getMonth();
    return a ? t >= 1 && t <= f[i] : t >= 1 && t <= _[i];
  }
  set(r, t, n) {
    return r.setDate(n), r.setHours(0, 0, 0, 0), r;
  }
}
export {
  A as DateParser
};
//# sourceMappingURL=index85.js.map

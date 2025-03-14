var M = Object.defineProperty;
var u = (e, o, t) => o in e ? M(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var i = (e, o, t) => u(e, typeof o != "symbol" ? o + "" : o, t);
import { numericPatterns as c } from "./index158.js";
import { Parser as w } from "./index156.js";
import { mapValue as a, parseNDigits as f, parseNumericPattern as h } from "./index157.js";
class d extends w {
  constructor() {
    super(...arguments);
    i(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    i(this, "priority", 110);
  }
  parse(t, n, r) {
    const s = (m) => m - 1;
    switch (n) {
      case "M":
        return a(
          h(c.month, t),
          s
        );
      case "MM":
        return a(f(2, t), s);
      case "Mo":
        return a(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          s
        );
      case "MMM":
        return r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return r.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(t, { width: "wide", context: "formatting" }) || r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, n) {
    return n >= 0 && n <= 11;
  }
  set(t, n, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
}
export {
  d as MonthParser
};
//# sourceMappingURL=index81.js.map

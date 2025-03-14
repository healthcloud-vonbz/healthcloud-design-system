var L = Object.defineProperty;
var u = (o, n, e) => n in o ? L(o, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[n] = e;
var a = (o, n, e) => u(o, typeof n != "symbol" ? n + "" : n, e);
import { numericPatterns as c } from "./index158.js";
import { Parser as m } from "./index156.js";
import { mapValue as i, parseNDigits as w, parseNumericPattern as d } from "./index157.js";
class f extends m {
  constructor() {
    super(...arguments);
    a(this, "priority", 110);
    a(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
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
  parse(e, r, t) {
    const s = (l) => l - 1;
    switch (r) {
      case "L":
        return i(
          d(c.month, e),
          s
        );
      case "LL":
        return i(w(2, e), s);
      case "Lo":
        return i(
          t.ordinalNumber(e, {
            unit: "month"
          }),
          s
        );
      case "LLL":
        return t.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || t.month(e, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return t.month(e, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return t.month(e, { width: "wide", context: "standalone" }) || t.month(e, {
          width: "abbreviated",
          context: "standalone"
        }) || t.month(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, r) {
    return r >= 0 && r <= 11;
  }
  set(e, r, t) {
    return e.setMonth(t, 1), e.setHours(0, 0, 0, 0), e;
  }
}
export {
  f as StandAloneMonthParser
};
//# sourceMappingURL=index82.js.map

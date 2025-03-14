var s = Object.defineProperty;
var q = (a, t, r) => t in a ? s(a, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[t] = r;
var o = (a, t, r) => q(a, typeof t != "symbol" ? t + "" : t, r);
import { Parser as u } from "./index156.js";
import { parseNDigits as i } from "./index157.js";
class c extends u {
  constructor() {
    super(...arguments);
    o(this, "priority", 120);
    o(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, n, e) {
    switch (n) {
      case "q":
      case "qq":
        return i(n.length, r);
      case "qo":
        return e.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return e.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        }) || e.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return e.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return e.quarter(r, {
          width: "wide",
          context: "standalone"
        }) || e.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        }) || e.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(r, n) {
    return n >= 1 && n <= 4;
  }
  set(r, n, e) {
    return r.setMonth((e - 1) * 3, 1), r.setHours(0, 0, 0, 0), r;
  }
}
export {
  c as StandAloneQuarterParser
};
//# sourceMappingURL=index80.js.map

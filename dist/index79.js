var n = Object.defineProperty;
var s = (o, e, r) => e in o ? n(o, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[e] = r;
var i = (o, e, r) => s(o, typeof e != "symbol" ? e + "" : e, r);
import { Parser as u } from "./index156.js";
import { parseNDigits as Q } from "./index157.js";
class q extends u {
  constructor() {
    super(...arguments);
    i(this, "priority", 120);
    i(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
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
  parse(r, a, t) {
    switch (a) {
      case "Q":
      case "QQ":
        return Q(a.length, r);
      case "Qo":
        return t.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return t.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        }) || t.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return t.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return t.quarter(r, {
          width: "wide",
          context: "formatting"
        }) || t.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        }) || t.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(r, a) {
    return a >= 1 && a <= 4;
  }
  set(r, a, t) {
    return r.setMonth((t - 1) * 3, 1), r.setHours(0, 0, 0, 0), r;
  }
}
export {
  q as QuarterParser
};
//# sourceMappingURL=index79.js.map

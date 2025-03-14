var d = Object.defineProperty;
var n = (t, o, r) => o in t ? d(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r;
var i = (t, o, r) => n(t, typeof o != "symbol" ? o + "" : o, r);
import { Parser as s } from "./index156.js";
import { dayPeriodEnumToHours as B } from "./index157.js";
class c extends s {
  constructor() {
    super(...arguments);
    i(this, "priority", 80);
    i(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(r, a, e) {
    switch (a) {
      case "B":
      case "BB":
      case "BBB":
        return e.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || e.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return e.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return e.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        }) || e.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || e.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(r, a, e) {
    return r.setHours(B(e), 0, 0, 0), r;
  }
}
export {
  c as DayPeriodParser
};
//# sourceMappingURL=index93.js.map

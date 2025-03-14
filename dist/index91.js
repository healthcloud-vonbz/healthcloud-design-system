var d = Object.defineProperty;
var n = (e, a, r) => a in e ? d(e, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[a] = r;
var t = (e, a, r) => n(e, typeof a != "symbol" ? a + "" : a, r);
import { Parser as s } from "./index156.js";
import { dayPeriodEnumToHours as w } from "./index157.js";
class u extends s {
  constructor() {
    super(...arguments);
    t(this, "priority", 80);
    t(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(r, i, o) {
    switch (i) {
      case "a":
      case "aa":
      case "aaa":
        return o.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return o.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return o.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        }) || o.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(r, i, o) {
    return r.setHours(w(o), 0, 0, 0), r;
  }
}
export {
  u as AMPMParser
};
//# sourceMappingURL=index91.js.map

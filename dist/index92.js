var b = Object.defineProperty;
var d = (t, o, r) => o in t ? b(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r;
var i = (t, o, r) => d(t, typeof o != "symbol" ? o + "" : o, r);
import { Parser as n } from "./index156.js";
import { dayPeriodEnumToHours as s } from "./index157.js";
class c extends n {
  constructor() {
    super(...arguments);
    i(this, "priority", 80);
    i(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(r, a, e) {
    switch (a) {
      case "b":
      case "bb":
      case "bbb":
        return e.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }) || e.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return e.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
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
    return r.setHours(s(e), 0, 0, 0), r;
  }
}
export {
  c as AMPMMidnightParser
};
//# sourceMappingURL=index92.js.map

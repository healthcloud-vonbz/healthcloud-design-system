var s = Object.defineProperty;
var E = (e, o, t) => o in e ? s(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var n = (e, o, t) => E(e, typeof o != "symbol" ? o + "" : o, t);
import { setDay as w } from "./index56.js";
import { Parser as d } from "./index156.js";
class c extends d {
  constructor() {
    super(...arguments);
    n(this, "priority", 90);
    n(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 6;
  }
  set(t, a, r, i) {
    return t = w(t, r, i), t.setHours(0, 0, 0, 0), t;
  }
}
export {
  c as DayParser
};
//# sourceMappingURL=index87.js.map

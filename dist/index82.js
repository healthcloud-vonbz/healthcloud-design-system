var o = Object.defineProperty;
var m = (t, r, e) => r in t ? o(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var i = (t, r, e) => m(t, typeof r != "symbol" ? r + "" : r, e);
import { setISOWeek as n } from "./index56.js";
import { startOfISOWeek as p } from "./index41.js";
import { numericPatterns as u } from "./index156.js";
import { Parser as c } from "./index154.js";
import { parseNDigits as f, parseNumericPattern as l } from "./index155.js";
class N extends c {
  constructor() {
    super(...arguments);
    i(this, "priority", 100);
    i(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, s, a) {
    switch (s) {
      case "I":
        return l(u.week, e);
      case "Io":
        return a.ordinalNumber(e, { unit: "week" });
      default:
        return f(s.length, e);
    }
  }
  validate(e, s) {
    return s >= 1 && s <= 53;
  }
  set(e, s, a) {
    return p(n(e, a));
  }
}
export {
  N as ISOWeekParser
};
//# sourceMappingURL=index82.js.map

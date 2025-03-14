var f = Object.defineProperty;
var p = (t, e, r) => e in t ? f(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var i = (t, e, r) => p(t, typeof e != "symbol" ? e + "" : e, r);
import { startOfISOWeek as n } from "./index43.js";
import { constructFrom as u } from "./index36.js";
import { Parser as c } from "./index156.js";
import { parseNDigitsSigned as a } from "./index157.js";
class W extends c {
  constructor() {
    super(...arguments);
    i(this, "priority", 130);
    i(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
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
  parse(r, s) {
    return s === "R" ? a(4, r) : a(s.length, r);
  }
  set(r, s, m) {
    const o = u(r, 0);
    return o.setFullYear(m, 0, 4), o.setHours(0, 0, 0, 0), n(o);
  }
}
export {
  W as ISOWeekYearParser
};
//# sourceMappingURL=index77.js.map

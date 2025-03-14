var u = Object.defineProperty;
var n = (e, s, r) => s in e ? u(e, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[s] = r;
var i = (e, s, r) => n(e, typeof s != "symbol" ? s + "" : s, r);
import { numericPatterns as m } from "./index158.js";
import { Parser as a } from "./index156.js";
import { parseNDigits as p, parseNumericPattern as c } from "./index157.js";
class N extends a {
  constructor() {
    super(...arguments);
    i(this, "priority", 70);
    i(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(r, t, o) {
    switch (t) {
      case "K":
        return c(m.hour11h, r);
      case "Ko":
        return o.ordinalNumber(r, { unit: "hour" });
      default:
        return p(t.length, r);
    }
  }
  validate(r, t) {
    return t >= 0 && t <= 11;
  }
  set(r, t, o) {
    return r.getHours() >= 12 && o < 12 ? r.setHours(o + 12, 0, 0, 0) : r.setHours(o, 0, 0, 0), r;
  }
}
export {
  N as Hour0To11Parser
};
//# sourceMappingURL=index96.js.map

var n = Object.defineProperty;
var m = (e, s, r) => s in e ? n(e, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[s] = r;
var i = (e, s, r) => m(e, typeof s != "symbol" ? s + "" : s, r);
import { numericPatterns as p } from "./index158.js";
import { Parser as c } from "./index156.js";
import { parseNDigits as a, parseNumericPattern as f } from "./index157.js";
class N extends c {
  constructor() {
    super(...arguments);
    i(this, "priority", 70);
    i(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(r, t, o) {
    switch (t) {
      case "h":
        return f(p.hour12h, r);
      case "ho":
        return o.ordinalNumber(r, { unit: "hour" });
      default:
        return a(t.length, r);
    }
  }
  validate(r, t) {
    return t >= 1 && t <= 12;
  }
  set(r, t, o) {
    const u = r.getHours() >= 12;
    return u && o < 12 ? r.setHours(o + 12, 0, 0, 0) : !u && o === 12 ? r.setHours(0, 0, 0, 0) : r.setHours(o, 0, 0, 0), r;
  }
}
export {
  N as Hour1to12Parser
};
//# sourceMappingURL=index94.js.map

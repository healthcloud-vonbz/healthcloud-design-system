var n = Object.defineProperty;
var u = (t, e, r) => e in t ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var i = (t, e, r) => u(t, typeof e != "symbol" ? e + "" : e, r);
import { numericPatterns as m } from "./index158.js";
import { Parser as p } from "./index156.js";
import { parseNDigits as c, parseNumericPattern as h } from "./index157.js";
class H extends p {
  constructor() {
    super(...arguments);
    i(this, "priority", 70);
    i(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(r, s, o) {
    switch (s) {
      case "k":
        return h(m.hour24h, r);
      case "ko":
        return o.ordinalNumber(r, { unit: "hour" });
      default:
        return c(s.length, r);
    }
  }
  validate(r, s) {
    return s >= 1 && s <= 24;
  }
  set(r, s, o) {
    const a = o <= 24 ? o % 24 : o;
    return r.setHours(a, 0, 0, 0), r;
  }
}
export {
  H as Hour1To24Parser
};
//# sourceMappingURL=index97.js.map

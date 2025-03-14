var c = Object.defineProperty;
var X = (t, r, e) => r in t ? c(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var n = (t, r, e) => X(t, typeof r != "symbol" ? r + "" : r, e);
import { constructFrom as a } from "./index36.js";
import { getTimezoneOffsetInMilliseconds as p } from "./index73.js";
import { timezonePatterns as s } from "./index158.js";
import { Parser as u } from "./index156.js";
import { parseTimezonePattern as o } from "./index157.js";
class z extends u {
  constructor() {
    super(...arguments);
    n(this, "priority", 10);
    n(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(e, i) {
    switch (i) {
      case "X":
        return o(
          s.basicOptionalMinutes,
          e
        );
      case "XX":
        return o(s.basic, e);
      case "XXXX":
        return o(
          s.basicOptionalSeconds,
          e
        );
      case "XXXXX":
        return o(
          s.extendedOptionalSeconds,
          e
        );
      case "XXX":
      default:
        return o(s.extended, e);
    }
  }
  set(e, i, m) {
    return i.timestampIsSet ? e : a(
      e,
      e.getTime() - p(e) - m
    );
  }
}
export {
  z as ISOTimezoneWithZParser
};
//# sourceMappingURL=index101.js.map

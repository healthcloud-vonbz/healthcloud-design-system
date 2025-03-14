var x = Object.defineProperty;
var c = (s, r, e) => r in s ? x(s, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[r] = e;
var i = (s, r, e) => c(s, typeof r != "symbol" ? r + "" : r, e);
import { constructFrom as a } from "./index36.js";
import { getTimezoneOffsetInMilliseconds as p } from "./index73.js";
import { timezonePatterns as t } from "./index158.js";
import { Parser as u } from "./index156.js";
import { parseTimezonePattern as o } from "./index157.js";
class P extends u {
  constructor() {
    super(...arguments);
    i(this, "priority", 10);
    i(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(e, n) {
    switch (n) {
      case "x":
        return o(
          t.basicOptionalMinutes,
          e
        );
      case "xx":
        return o(t.basic, e);
      case "xxxx":
        return o(
          t.basicOptionalSeconds,
          e
        );
      case "xxxxx":
        return o(
          t.extendedOptionalSeconds,
          e
        );
      case "xxx":
      default:
        return o(t.extended, e);
    }
  }
  set(e, n, m) {
    return n.timestampIsSet ? e : a(
      e,
      e.getTime() - p(e) - m
    );
  }
}
export {
  P as ISOTimezoneParser
};
//# sourceMappingURL=index102.js.map

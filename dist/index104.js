var o = Object.defineProperty;
var m = (t, r, e) => r in t ? o(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var s = (t, r, e) => m(t, typeof r != "symbol" ? r + "" : r, e);
import { constructFrom as p } from "./index36.js";
import { Parser as a } from "./index156.js";
import { parseAnyDigitsSigned as n } from "./index157.js";
class g extends a {
  constructor() {
    super(...arguments);
    s(this, "priority", 20);
    s(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return n(e);
  }
  set(e, c, i) {
    return [p(e, i), { timestampIsSet: !0 }];
  }
}
export {
  g as TimestampMillisecondsParser
};
//# sourceMappingURL=index104.js.map

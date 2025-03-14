var i = Object.defineProperty;
var m = (t, r, e) => r in t ? i(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var s = (t, r, e) => m(t, typeof r != "symbol" ? r + "" : r, e);
import { constructFrom as p } from "./index36.js";
import { Parser as a } from "./index156.js";
import { parseAnyDigitsSigned as n } from "./index157.js";
class l extends a {
  constructor() {
    super(...arguments);
    s(this, "priority", 40);
    s(this, "incompatibleTokens", "*");
  }
  parse(e) {
    return n(e);
  }
  set(e, c, o) {
    return [p(e, o * 1e3), { timestampIsSet: !0 }];
  }
}
export {
  l as TimestampSecondsParser
};
//# sourceMappingURL=index103.js.map

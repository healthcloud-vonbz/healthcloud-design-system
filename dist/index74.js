var i = Object.defineProperty;
var o = (G, s, r) => s in G ? i(G, s, { enumerable: !0, configurable: !0, writable: !0, value: r }) : G[s] = r;
var w = (G, s, r) => o(G, typeof s != "symbol" ? s + "" : s, r);
import { Parser as u } from "./index156.js";
class n extends u {
  constructor() {
    super(...arguments);
    w(this, "priority", 140);
    w(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(r, a, e) {
    switch (a) {
      case "G":
      case "GG":
      case "GGG":
        return e.era(r, { width: "abbreviated" }) || e.era(r, { width: "narrow" });
      case "GGGGG":
        return e.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return e.era(r, { width: "wide" }) || e.era(r, { width: "abbreviated" }) || e.era(r, { width: "narrow" });
    }
  }
  set(r, a, e) {
    return a.era = e, r.setFullYear(e, 0, 1), r.setHours(0, 0, 0, 0), r;
  }
}
export {
  n as EraParser
};
//# sourceMappingURL=index74.js.map

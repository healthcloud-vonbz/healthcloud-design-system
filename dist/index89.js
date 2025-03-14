var i = Object.defineProperty;
var y = (n, a, e) => a in n ? i(n, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[a] = e;
var s = (n, a, e) => y(n, typeof a != "symbol" ? a + "" : a, e);
import { setDay as u } from "./index56.js";
import { Parser as x } from "./index156.js";
import { mapValue as l, parseNDigits as p } from "./index157.js";
class k extends x {
  constructor() {
    super(...arguments);
    s(this, "priority", 90);
    s(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(e, t, o, r) {
    const c = (d) => {
      const w = Math.floor((d - 1) / 7) * 7;
      return (d + r.weekStartsOn + 6) % 7 + w;
    };
    switch (t) {
      case "c":
      case "cc":
        return l(p(t.length, e), c);
      case "co":
        return l(
          o.ordinalNumber(e, {
            unit: "day"
          }),
          c
        );
      case "ccc":
        return o.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || o.day(e, { width: "short", context: "standalone" }) || o.day(e, { width: "narrow", context: "standalone" });
      case "ccccc":
        return o.day(e, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return o.day(e, { width: "short", context: "standalone" }) || o.day(e, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return o.day(e, { width: "wide", context: "standalone" }) || o.day(e, {
          width: "abbreviated",
          context: "standalone"
        }) || o.day(e, { width: "short", context: "standalone" }) || o.day(e, { width: "narrow", context: "standalone" });
    }
  }
  validate(e, t) {
    return t >= 0 && t <= 6;
  }
  set(e, t, o, r) {
    return e = u(e, o, r), e.setHours(0, 0, 0, 0), e;
  }
}
export {
  k as StandAloneLocalDayParser
};
//# sourceMappingURL=index89.js.map

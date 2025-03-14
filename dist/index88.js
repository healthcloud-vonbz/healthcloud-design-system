var y = Object.defineProperty;
var c = (o, r, e) => r in o ? y(o, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[r] = e;
var s = (o, r, e) => c(o, typeof r != "symbol" ? r + "" : r, e);
import { setDay as u } from "./index56.js";
import { Parser as l } from "./index156.js";
import { mapValue as d, parseNDigits as x } from "./index157.js";
class D extends l {
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
      "c",
      "t",
      "T"
    ]);
  }
  parse(e, a, t, n) {
    const i = (w) => {
      const f = Math.floor((w - 1) / 7) * 7;
      return (w + n.weekStartsOn + 6) % 7 + f;
    };
    switch (a) {
      case "e":
      case "ee":
        return d(x(a.length, e), i);
      case "eo":
        return d(
          t.ordinalNumber(e, {
            unit: "day"
          }),
          i
        );
      case "eee":
        return t.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || t.day(e, { width: "short", context: "formatting" }) || t.day(e, { width: "narrow", context: "formatting" });
      case "eeeee":
        return t.day(e, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return t.day(e, { width: "short", context: "formatting" }) || t.day(e, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return t.day(e, { width: "wide", context: "formatting" }) || t.day(e, {
          width: "abbreviated",
          context: "formatting"
        }) || t.day(e, { width: "short", context: "formatting" }) || t.day(e, { width: "narrow", context: "formatting" });
    }
  }
  validate(e, a) {
    return a >= 0 && a <= 6;
  }
  set(e, a, t, n) {
    return e = u(e, t, n), e.setHours(0, 0, 0, 0), e;
  }
}
export {
  D as LocalDayParser
};
//# sourceMappingURL=index88.js.map

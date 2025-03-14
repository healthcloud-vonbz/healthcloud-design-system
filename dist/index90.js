var d = Object.defineProperty;
var f = (o, t, r) => t in o ? d(o, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[t] = r;
var s = (o, t, r) => f(o, typeof t != "symbol" ? t + "" : t, r);
import { setISODay as u } from "./index57.js";
import { Parser as y } from "./index156.js";
import { mapValue as n, parseNDigits as c } from "./index157.js";
class b extends y {
  constructor() {
    super(...arguments);
    s(this, "priority", 90);
    s(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(r, e, i) {
    const a = (w) => w === 0 ? 7 : w;
    switch (e) {
      case "i":
      case "ii":
        return c(e.length, r);
      case "io":
        return i.ordinalNumber(r, { unit: "day" });
      case "iii":
        return n(
          i.day(r, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(r, {
            width: "short",
            context: "formatting"
          }) || i.day(r, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiiii":
        return n(
          i.day(r, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiiiii":
        return n(
          i.day(r, {
            width: "short",
            context: "formatting"
          }) || i.day(r, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiii":
      default:
        return n(
          i.day(r, {
            width: "wide",
            context: "formatting"
          }) || i.day(r, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(r, {
            width: "short",
            context: "formatting"
          }) || i.day(r, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
    }
  }
  validate(r, e) {
    return e >= 1 && e <= 7;
  }
  set(r, e, i) {
    return r = u(r, i), r.setHours(0, 0, 0, 0), r;
  }
}
export {
  b as ISODayParser
};
//# sourceMappingURL=index90.js.map

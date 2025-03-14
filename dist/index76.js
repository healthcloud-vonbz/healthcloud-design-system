var D = Object.defineProperty;
var f = (t, i, r) => i in t ? D(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r;
var n = (t, i, r) => f(t, typeof i != "symbol" ? i + "" : i, r);
import { getWeekYear as y } from "./index49.js";
import { startOfWeek as m } from "./index47.js";
import { Parser as T } from "./index156.js";
import { mapValue as Y, parseNDigits as u, normalizeTwoDigitYear as p } from "./index157.js";
class C extends T {
  constructor() {
    super(...arguments);
    n(this, "priority", 130);
    n(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(r, e, s) {
    const a = (o) => ({
      year: o,
      isTwoDigitYear: e === "YY"
    });
    switch (e) {
      case "Y":
        return Y(u(4, r), a);
      case "Yo":
        return Y(
          s.ordinalNumber(r, {
            unit: "year"
          }),
          a
        );
      default:
        return Y(u(e.length, r), a);
    }
  }
  validate(r, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(r, e, s, a) {
    const o = y(r, a);
    if (s.isTwoDigitYear) {
      const l = p(
        s.year,
        o
      );
      return r.setFullYear(
        l,
        0,
        a.firstWeekContainsDate
      ), r.setHours(0, 0, 0, 0), m(r, a);
    }
    const c = !("era" in e) || e.era === 1 ? s.year : 1 - s.year;
    return r.setFullYear(c, 0, a.firstWeekContainsDate), r.setHours(0, 0, 0, 0), m(r, a);
  }
}
export {
  C as LocalWeekYearParser
};
//# sourceMappingURL=index76.js.map

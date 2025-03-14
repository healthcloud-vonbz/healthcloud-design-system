var y = Object.defineProperty;
var Y = (a, i, r) => i in a ? y(a, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : a[i] = r;
var n = (a, i, r) => Y(a, typeof i != "symbol" ? i + "" : i, r);
import { Parser as m } from "./index156.js";
import { mapValue as u, parseNDigits as l, normalizeTwoDigitYear as p } from "./index157.js";
class g extends m {
  constructor() {
    super(...arguments);
    n(this, "priority", 130);
    n(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(r, e, s) {
    const t = (o) => ({
      year: o,
      isTwoDigitYear: e === "yy"
    });
    switch (e) {
      case "y":
        return u(l(4, r), t);
      case "yo":
        return u(
          s.ordinalNumber(r, {
            unit: "year"
          }),
          t
        );
      default:
        return u(l(e.length, r), t);
    }
  }
  validate(r, e) {
    return e.isTwoDigitYear || e.year > 0;
  }
  set(r, e, s) {
    const t = r.getFullYear();
    if (s.isTwoDigitYear) {
      const c = p(
        s.year,
        t
      );
      return r.setFullYear(c, 0, 1), r.setHours(0, 0, 0, 0), r;
    }
    const o = !("era" in e) || e.era === 1 ? s.year : 1 - s.year;
    return r.setFullYear(o, 0, 1), r.setHours(0, 0, 0, 0), r;
  }
}
export {
  g as YearParser
};
//# sourceMappingURL=index75.js.map

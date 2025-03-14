import { millisecondsInHour as l, millisecondsInMinute as m, millisecondsInSecond as f } from "./index38.js";
import { numericPatterns as r } from "./index158.js";
function p(e, n) {
  return e && {
    value: n(e.value),
    rest: e.rest
  };
}
function t(e, n) {
  const s = n.match(e);
  return s ? {
    value: parseInt(s[0], 10),
    rest: n.slice(s[0].length)
  } : null;
}
function d(e, n) {
  const s = n.match(e);
  if (!s)
    return null;
  if (s[0] === "Z")
    return {
      value: 0,
      rest: n.slice(1)
    };
  const u = s[1] === "+" ? 1 : -1, i = s[2] ? parseInt(s[2], 10) : 0, c = s[3] ? parseInt(s[3], 10) : 0, o = s[5] ? parseInt(s[5], 10) : 0;
  return {
    value: u * (i * l + c * m + o * f),
    rest: n.slice(s[0].length)
  };
}
function D(e) {
  return t(r.anyDigitsSigned, e);
}
function I(e, n) {
  switch (e) {
    case 1:
      return t(r.singleDigit, n);
    case 2:
      return t(r.twoDigits, n);
    case 3:
      return t(r.threeDigits, n);
    case 4:
      return t(r.fourDigits, n);
    default:
      return t(new RegExp("^\\d{1," + e + "}"), n);
  }
}
function v(e, n) {
  switch (e) {
    case 1:
      return t(r.singleDigitSigned, n);
    case 2:
      return t(r.twoDigitsSigned, n);
    case 3:
      return t(r.threeDigitsSigned, n);
    case 4:
      return t(r.fourDigitsSigned, n);
    default:
      return t(new RegExp("^-?\\d{1," + e + "}"), n);
  }
}
function w(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function E(e, n) {
  const s = n > 0, u = s ? n : 1 - n;
  let i;
  if (u <= 50)
    i = e || 100;
  else {
    const c = u + 50, o = Math.trunc(c / 100) * 100, a = e >= c % 100;
    i = e + o - (a ? 100 : 0);
  }
  return s ? i : 1 - i;
}
function P(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
export {
  w as dayPeriodEnumToHours,
  P as isLeapYearIndex,
  p as mapValue,
  E as normalizeTwoDigitYear,
  D as parseAnyDigitsSigned,
  I as parseNDigits,
  v as parseNDigitsSigned,
  t as parseNumericPattern,
  d as parseTimezonePattern
};
//# sourceMappingURL=index157.js.map

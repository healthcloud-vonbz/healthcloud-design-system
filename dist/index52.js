const r = /^D+$/, s = /^Y+$/, a = ["D", "DD", "YY", "YYYY"];
function i(e) {
  return r.test(e);
}
function f(e) {
  return s.test(e);
}
function d(e, o, n) {
  const t = c(e, o, n);
  if (console.warn(t), a.includes(e)) throw new RangeError(t);
}
function c(e, o, n) {
  const t = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${o}\`) for formatting ${t} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
export {
  i as isProtectedDayOfYearToken,
  f as isProtectedWeekYearToken,
  d as warnOrThrowProtectedError
};
//# sourceMappingURL=index52.js.map

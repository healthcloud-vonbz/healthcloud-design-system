function e(t) {
  return t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
export {
  e as default,
  e as isDate
};
//# sourceMappingURL=index50.js.map

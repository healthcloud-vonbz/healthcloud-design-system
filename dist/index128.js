function o(r) {
  var f, n, t = "";
  if (typeof r == "string" || typeof r == "number") t += r;
  else if (typeof r == "object") if (Array.isArray(r)) for (f = 0; f < r.length; f++) r[f] && (n = o(r[f])) && (t && (t += " "), t += n);
  else for (f in r) r[f] && (t && (t += " "), t += f);
  return t;
}
function a() {
  for (var r, f, n = 0, t = ""; n < arguments.length; ) (r = arguments[n++]) && (f = o(r)) && (t && (t += " "), t += f);
  return t;
}
export {
  a as clsx,
  a as default
};
//# sourceMappingURL=index128.js.map

function h(e) {
  return (a, t) => {
    const c = t != null && t.context ? String(t.context) : "standalone";
    let l;
    if (c === "formatting" && e.formattingValues) {
      const d = e.defaultFormattingWidth || e.defaultWidth, u = t != null && t.width ? String(t.width) : d;
      l = e.formattingValues[u] || e.formattingValues[d];
    } else {
      const d = e.defaultWidth, u = t != null && t.width ? String(t.width) : e.defaultWidth;
      l = e.values[u] || e.values[d];
    }
    const f = e.argumentCallback ? e.argumentCallback(a) : a;
    return l[f];
  };
}
export {
  h as buildLocalizeFn
};
//# sourceMappingURL=index173.js.map

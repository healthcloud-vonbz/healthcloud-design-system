const P = ["top", "right", "bottom", "left"], l = Math.min, m = Math.max, M = Math.round, O = Math.floor, S = (t) => ({
  x: t,
  y: t
}), p = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, a = {
  start: "end",
  end: "start"
};
function w(t, n, e) {
  return m(t, l(n, e));
}
function j(t, n) {
  return typeof t == "function" ? t(n) : t;
}
function u(t) {
  return t.split("-")[0];
}
function g(t) {
  return t.split("-")[1];
}
function h(t) {
  return t === "x" ? "y" : "x";
}
function b(t) {
  return t === "y" ? "height" : "width";
}
function x(t) {
  return ["top", "bottom"].includes(u(t)) ? "y" : "x";
}
function d(t) {
  return h(x(t));
}
function C(t, n, e) {
  e === void 0 && (e = !1);
  const r = g(t), o = d(t), i = b(o);
  let c = o === "x" ? r === (e ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return n.reference[i] > n.floating[i] && (c = f(c)), [c, f(c)];
}
function L(t) {
  const n = f(t);
  return [s(t), n, s(n)];
}
function s(t) {
  return t.replace(/start|end/g, (n) => a[n]);
}
function A(t, n, e) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], c = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return e ? n ? o : r : n ? r : o;
    case "left":
    case "right":
      return n ? i : c;
    default:
      return [];
  }
}
function E(t, n, e, r) {
  const o = g(t);
  let i = A(u(t), e === "start", r);
  return o && (i = i.map((c) => c + "-" + o), n && (i = i.concat(i.map(s)))), i;
}
function f(t) {
  return t.replace(/left|right|bottom|top/g, (n) => p[n]);
}
function y(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function R(t) {
  return typeof t != "number" ? y(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function T(t) {
  const {
    x: n,
    y: e,
    width: r,
    height: o
  } = t;
  return {
    width: r,
    height: o,
    top: e,
    left: n,
    right: n + r,
    bottom: e + o,
    x: n,
    y: e
  };
}
export {
  w as clamp,
  S as createCoords,
  j as evaluate,
  y as expandPaddingObject,
  O as floor,
  g as getAlignment,
  d as getAlignmentAxis,
  C as getAlignmentSides,
  b as getAxisLength,
  L as getExpandedPlacements,
  s as getOppositeAlignmentPlacement,
  h as getOppositeAxis,
  E as getOppositeAxisPlacements,
  f as getOppositePlacement,
  R as getPaddingObject,
  u as getSide,
  x as getSideAxis,
  m as max,
  l as min,
  T as rectToClientRect,
  M as round,
  P as sides
};
//# sourceMappingURL=index196.js.map

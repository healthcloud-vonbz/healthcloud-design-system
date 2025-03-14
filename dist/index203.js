import { __assign as d } from "./index179.js";
function l(r) {
  return r;
}
function h(r, t) {
  t === void 0 && (t = l);
  var e = [], o = !1, c = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return e.length ? e[e.length - 1] : r;
    },
    useMedium: function(u) {
      var n = t(u, o);
      return e.push(n), function() {
        e = e.filter(function(i) {
          return i !== n;
        });
      };
    },
    assignSyncMedium: function(u) {
      for (o = !0; e.length; ) {
        var n = e;
        e = [], n.forEach(u);
      }
      e = {
        push: function(i) {
          return u(i);
        },
        filter: function() {
          return e;
        }
      };
    },
    assignMedium: function(u) {
      o = !0;
      var n = [];
      if (e.length) {
        var i = e;
        e = [], i.forEach(u), n = e;
      }
      var s = function() {
        var f = n;
        n = [], f.forEach(u);
      }, a = function() {
        return Promise.resolve().then(s);
      };
      a(), e = {
        push: function(f) {
          n.push(f), a();
        },
        filter: function(f) {
          return n = n.filter(f), e;
        }
      };
    }
  };
  return c;
}
function v(r) {
  r === void 0 && (r = {});
  var t = h(null);
  return t.options = d({ async: !0, ssr: !1 }, r), t;
}
export {
  v as createSidecarMedium
};
//# sourceMappingURL=index203.js.map

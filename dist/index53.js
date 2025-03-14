var l = Object.defineProperty;
var c = (r, e, t) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var i = (r, e, t) => c(r, typeof e != "symbol" ? e + "" : e, t);
import { constructFrom as a } from "./index36.js";
import { transpose as h } from "./index60.js";
const p = 10;
class n {
  constructor() {
    i(this, "subPriority", 0);
  }
  validate(e, t) {
    return !0;
  }
}
class I extends n {
  constructor(e, t, s, o, u) {
    super(), this.value = e, this.validateValue = t, this.setValue = s, this.priority = o, u && (this.subPriority = u);
  }
  validate(e, t) {
    return this.validateValue(e, this.value, t);
  }
  set(e, t, s) {
    return this.setValue(e, t, this.value, s);
  }
}
class V extends n {
  constructor(t, s) {
    super();
    i(this, "priority", p);
    i(this, "subPriority", -1);
    this.context = t || ((o) => a(s, o));
  }
  set(t, s) {
    return s.timestampIsSet ? t : a(t, h(t, this.context));
  }
}
export {
  V as DateTimezoneSetter,
  n as Setter,
  I as ValueSetter
};
//# sourceMappingURL=index53.js.map

import { ValueSetter as u } from "./index53.js";
class n {
  run(r, e, s, i) {
    const t = this.parse(r, e, s, i);
    return t ? {
      setter: new u(
        t.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: t.rest
    } : null;
  }
  validate(r, e, s) {
    return !0;
  }
}
export {
  n as Parser
};
//# sourceMappingURL=index156.js.map

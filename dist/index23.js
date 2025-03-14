import { jsx as r, jsxs as s } from "react/jsx-runtime";
import * as d from "react";
import { MagnifyingGlassIcon as n } from "./index66.js";
import { Command as e } from "./index67.js";
import { cn as m } from "./index29.js";
import "./index33.js";
const p = d.forwardRef(({ className: a, ...o }, t) => /* @__PURE__ */ r(
  e,
  {
    ref: t,
    className: m(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      a
    ),
    ...o
  }
));
p.displayName = e.displayName;
const l = d.forwardRef(({ className: a, ...o }, t) => /* @__PURE__ */ s("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ r(n, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ r(
    e.Input,
    {
      ref: t,
      className: m(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        a
      ),
      ...o
    }
  )
] }));
l.displayName = e.Input.displayName;
const i = d.forwardRef(({ className: a, ...o }, t) => /* @__PURE__ */ r(
  e.List,
  {
    ref: t,
    className: m("max-h-[300px] overflow-y-auto overflow-x-hidden", a),
    ...o
  }
));
i.displayName = e.List.displayName;
const c = d.forwardRef((a, o) => /* @__PURE__ */ r(
  e.Empty,
  {
    ref: o,
    className: "py-6 text-center text-sm",
    ...a
  }
));
c.displayName = e.Empty.displayName;
const f = d.forwardRef(({ className: a, ...o }, t) => /* @__PURE__ */ r(
  e.Group,
  {
    ref: t,
    className: m(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      a
    ),
    ...o
  }
));
f.displayName = e.Group.displayName;
const u = d.forwardRef(({ className: a, ...o }, t) => /* @__PURE__ */ r(
  e.Separator,
  {
    ref: t,
    className: m("-mx-1 h-px bg-border", a),
    ...o
  }
));
u.displayName = e.Separator.displayName;
const x = d.forwardRef(({ className: a, ...o }, t) => /* @__PURE__ */ r(
  e.Item,
  {
    ref: t,
    className: m(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      a
    ),
    ...o
  }
));
x.displayName = e.Item.displayName;
export {
  p as Command,
  c as CommandEmpty,
  f as CommandGroup,
  l as CommandInput,
  x as CommandItem,
  i as CommandList,
  u as CommandSeparator
};
//# sourceMappingURL=index23.js.map

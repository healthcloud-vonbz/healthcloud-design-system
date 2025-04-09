import { jsx as r } from "react/jsx-runtime";
import { ChevronLeftIcon as c, ChevronRightIcon as i } from "./index113.js";
import { DayPicker as m } from "./index114.js";
import { cn as e } from "./index34.js";
import { buttonVariants as d } from "./index27.js";
function u({
  className: o,
  classNames: s,
  showOutsideDays: l = !0,
  ...n
}) {
  return /* @__PURE__ */ r(
    m,
    {
      showOutsideDays: l,
      className: e("p-3", o),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: e(
          d({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: e(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          n.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md" : "[&:has([aria-selected])]:rounded-md"
        ),
        day: e(
          d({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100 bg-transparent"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "!bg-ds_health-primary text-primary-foreground !outline-none focus:!outline-none",
        day_outside: "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...s
      },
      components: {
        IconLeft: ({ className: a, ...t }) => /* @__PURE__ */ r(c, { className: e("h-4 w-4", a), ...t }),
        IconRight: ({ className: a, ...t }) => /* @__PURE__ */ r(i, { className: e("h-4 w-4", a), ...t })
      },
      ...n
    }
  );
}
u.displayName = "Calendar";
export {
  u as Calendar
};
//# sourceMappingURL=index38.js.map

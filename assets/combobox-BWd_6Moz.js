import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as a}from"./index-C2WH5l5l.js";import"./index-Wp2u197Z.js";function o(l){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"combobox",children:"Combobox"}),`
`,e.jsx(n.p,{children:"The Combobox component combines an input with a dropdown menu, allowing users to filter and select from a list of options."}),`
`,e.jsx(n.h2,{id:"features",children:"Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Autocomplete functionality"}),`
`,e.jsx(n.li,{children:"Keyboard navigation support"}),`
`,e.jsx(n.li,{children:"Customizable dropdown appearance"}),`
`,e.jsx(n.li,{children:"Accessible by default"}),`
`,e.jsx(n.li,{children:"Filterable options"}),`
`]}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Combobox } from 'health-cloud-design-system';
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useState } from "react";
import { Combobox } from "health-cloud-design-system";

const frameworks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "Solid" },
];

export function ComboboxDemo() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <Combobox
      options={frameworks}
      value={selectedValue}
      onChange={(value: string) => setSelectedValue(value)}
    />
  );
}
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"basic-combobox",children:"Basic Combobox"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { useState } from "react";
import { Combobox } from "health-cloud-design-system";

const frameworks = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "Solid" },
];

export function ComboboxDemo() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <Combobox
      options={frameworks}
      value={selectedValue}
      onChange={(value: string) => setSelectedValue(value)}
    />
  );
}
`})})]})}function i(l={}){const{wrapper:n}={...a(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(o,{...l})}):o(l)}export{i as default};

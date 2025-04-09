import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{r as m}from"./index-Wp2u197Z.js";import{B as D}from"./index-X01uzHCX.js";import{C as z,a as A,b as E,d as I,c as P,e as T,f as B}from"./command-ByIUIcPl.js";import{P as O,a as L,b as R}from"./popover-BLQCcckb.js";import{c as N}from"./index-DTkbQ6HV.js";import{C as U}from"./check-DBIdT9Bo.js";import"./index-9aUIr4gJ.js";import"./utils-jAU0Cazi.js";import"./index-Di7QxmPg.js";import"./react-icons.esm-iaGqq73B.js";import"./Combination-CQrm5vnM.js";import"./index-NijHtZJS.js";import"./index-DA8gG4lw.js";import"./dialog-J9Ab1Qdn.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=N("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=N("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);function l({selectedValue:a,onChange:t,options:s,placeholder:o,withoutSearch:_,disabled:q=!1,iconType:h="arrow"}){var b;const[d,v]=m.useState(!1);return e.jsxs(O,{open:d,onOpenChange:v,children:[e.jsx(L,{asChild:!0,children:e.jsxs(D,{variant:"outline",role:"combobox","aria-expanded":d,className:"w-full justify-between border h-10 text-black min-w-[40px] border-input overflow-hidden px-2",disabled:q,children:[a?(b=s.find(r=>r.value===a))==null?void 0:b.label:e.jsx("p",{className:"text-ds_health-text-muted font-normal",children:o||"Selecione uma opção..."}),h==="arrow"&&(d?e.jsx(W,{size:14,className:"opacity-50 min-w-[14px]"}):e.jsx(z,{size:14})),h==="search"&&e.jsx(F,{size:14,className:"opacity-50 min-w-[14px]"})]})}),e.jsx(R,{className:"w-full p-0",align:"start",children:e.jsxs(A,{className:"min-w-[400px]",children:[_?null:e.jsx(E,{placeholder:"Buscar...",className:"h-9"}),e.jsxs(I,{children:[e.jsx(P,{children:"Nenhuma opção encontrada."}),e.jsx(T,{children:s.map(r=>e.jsxs(B,{value:r.value,onSelect:k=>{t(a===k?{value:"",label:""}:r),v(!1)},children:[r.label,a===r.value&&e.jsx(U,{className:"ml-auto"})]},r.value))})]})]})})]})}try{l.displayName="Combobox",l.__docgenInfo={description:"",displayName:"Combobox",props:{selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(selectedValue: { value: string; label: string; }) => void"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ value: string; label: string; }[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},withoutSearch:{defaultValue:null,description:"",name:"withoutSearch",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},iconType:{defaultValue:{value:"arrow"},description:"",name:"iconType",required:!1,type:{name:'"search" | "arrow"'}}}}}catch{}const i=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"}],p={options:i,onChange:a=>console.log(a)},oe={title:"Components/Form/Combobox",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{selectedValue:{control:"select",options:i},onChange:{action:"onChange"},disabled:{control:"boolean"},withoutSearch:{control:"boolean"},placeholder:{control:"text"},iconType:{control:"select",options:["arrow","search"]}},args:p},n={render:a=>{const[t,s]=m.useState("");return e.jsx("div",{className:"w-96",children:e.jsx(l,{...a,selectedValue:t,onChange:o=>s(o.value)})})},args:{options:i}},c={args:{...p,withoutSearch:!0},render:a=>{const[t,s]=m.useState("");return e.jsx("div",{className:"w-96",children:e.jsx(l,{...a,selectedValue:t,onChange:o=>s(o.value)})})}},u={args:{...p,selectedValue:"react",disabled:!0,options:i.filter(a=>a.value==="react"||a.value==="svelte")}};var g,x,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div className="w-96">
        <Combobox {...args} selectedValue={value} onChange={selectedValue => setValue(selectedValue.value)} />
      </div>;
  },
  args: {
    options
  }
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var C,V,j;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    withoutSearch: true
  },
  render: args => {
    const [value, setValue] = useState('');
    return <div className="w-96">
        <Combobox {...args} selectedValue={value} onChange={selectedValue => setValue(selectedValue.value)} />
      </div>;
  }
}`,...(j=(V=c.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var w,y,S;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    selectedValue: 'react',
    disabled: true,
    options: options.filter(opt => opt.value === 'react' || opt.value === 'svelte')
  }
}`,...(S=(y=u.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const le=["Default","WithoutSearch","Disabled"];export{n as Default,u as Disabled,c as WithoutSearch,le as __namedExportsOrder,oe as default};

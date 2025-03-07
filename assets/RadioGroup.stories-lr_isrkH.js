import{j as o}from"./jsx-runtime-CQsLhzk5.js";import{R as n,b as c}from"./constant-BzauSrY0.js";import"./index-Wp2u197Z.js";import"./utils-jAU0Cazi.js";import"./label-iTyObV1l.js";import"./index-DA8gG4lw.js";import"./index-9aUIr4gJ.js";import"./index-BPKZZaUH.js";import"./index-DZ6Fm6o8.js";const h={title:"Components/Form/RadioGroup",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:"select",options:["CPF","RG","CNH","Passaporte"]},onChange:{action:"onChange"}}},e={render:m=>o.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[o.jsx("p",{className:"mb-4 font-bold",children:"Escolha seu documento"}),o.jsx(n,{...m,options:c.map(a=>({value:a.document_name,label:a.document_name}))})]})};var s,t,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <div className="grid w-full max-w-sm items-center gap-1.5">
      <p className="mb-4 font-bold">Escolha seu documento</p>
      <RadioGroup {...args} options={brazilianDocuments.map(doc => ({
      value: doc.document_name,
      label: doc.document_name
    }))} />
    </div>
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,h as default};

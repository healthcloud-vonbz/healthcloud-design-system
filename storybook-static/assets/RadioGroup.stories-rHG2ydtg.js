import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{R as n,b as c}from"./constant-DrMsBLUd.js";import"./index-Wp2u197Z.js";import"./utils-jAU0Cazi.js";import"./label-iTyObV1l.js";import"./index-DA8gG4lw.js";import"./index-9aUIr4gJ.js";import"./index-Di7QxmPg.js";import"./index-DTkbQ6HV.js";import"./check-DBIdT9Bo.js";const v={title:"Components/Form/RadioGroup",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:"select",options:["CPF","RG","CNH","Passaporte"]},onChange:{action:"onChange"}}},o={render:m=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx("p",{className:"mb-4 font-bold",children:"Escolha seu documento"}),e.jsx(n,{...m,options:c.map(a=>({value:a.document_name,label:a.document_name}))})]})};var t,s,r;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <div className="grid w-full max-w-sm items-center gap-1.5">
      <p className="mb-4 font-bold">Escolha seu documento</p>
      <RadioGroup {...args} options={brazilianDocuments.map(doc => ({
      value: doc.document_name,
      label: doc.document_name
    }))} />
    </div>
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const R=["Default"];export{o as Default,R as __namedExportsOrder,v as default};

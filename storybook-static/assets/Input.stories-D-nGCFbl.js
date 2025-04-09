import{j as t}from"./jsx-runtime-CQsLhzk5.js";import{L as x}from"./label-iTyObV1l.js";import{I as u}from"./index-CdxupODD.js";import"./index-Wp2u197Z.js";import"./index-DA8gG4lw.js";import"./index-9aUIr4gJ.js";import"./utils-jAU0Cazi.js";const w={title:"Components/Form/Input",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","search","tel","url"],defaultValue:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},className:{control:"text"}}},e={args:{placeholder:"Enter text..."}},a={render:g=>t.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[t.jsx(x,{htmlFor:"email",children:"Email"}),t.jsx(u,{id:"email",type:"email",placeholder:"Email",...g})]})},r={args:{placeholder:"Disabled input",disabled:!0}};var s,o,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var m,i,n;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Email" {...args} />
    </div>
}`,...(n=(i=a.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    disabled: true
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const y=["Default","WithLabel","Disabled"];export{e as Default,r as Disabled,a as WithLabel,y as __namedExportsOrder,w as default};

import{j as o}from"./jsx-runtime-CQsLhzk5.js";import{r as h}from"./index-Wp2u197Z.js";import{c as y}from"./utils-BGeKnM1B.js";const e=h.forwardRef(({className:r,type:f,...g},x)=>o.jsx("input",{type:f,className:y("flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-10",r),ref:x,...g}));e.displayName="Input";try{e.displayName="Input",e.__docgenInfo={description:"",displayName:"Input",props:{}}}catch{}const I={title:"Components/Form/Input",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","search","tel","url"],defaultValue:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},className:{control:"text"}}},a={args:{placeholder:"Enter text..."}},t={render:r=>o.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[o.jsx("label",{htmlFor:"email",children:"Email"}),o.jsx(e,{id:"email",type:"email",placeholder:"Email",...r})]})},s={args:{placeholder:"Disabled input",disabled:!0}};var l,n,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div className="grid w-full max-w-sm items-center gap-1.5">
      <label htmlFor="email">Email</label>
      <Input id="email" type="email" placeholder="Email" {...args} />
    </div>
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    disabled: true
  }
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const N=["Default","WithLabel","Disabled"];export{a as Default,s as Disabled,t as WithLabel,N as __namedExportsOrder,I as default};

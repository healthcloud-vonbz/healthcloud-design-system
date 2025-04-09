import{j as o}from"./jsx-runtime-CQsLhzk5.js";import{r as d}from"./index-Wp2u197Z.js";import{B as O}from"./index-X01uzHCX.js";import{M as D}from"./index-CerVrDE5.js";import{D as f}from"./index-CWi1H7Wu.js";import"./index-9aUIr4gJ.js";import"./utils-jAU0Cazi.js";import"./index-Di7QxmPg.js";import"./Combination-CQrm5vnM.js";import"./index-NijHtZJS.js";import"./index-DA8gG4lw.js";import"./maska-DLZr1Z7F.js";import"./label-iTyObV1l.js";import"./constant-DrMsBLUd.js";import"./index-DTkbQ6HV.js";import"./check-DBIdT9Bo.js";import"./index-CdxupODD.js";function r({open:n,onOpenChange:e,onSubmit:t,selectedValue:g}){return o.jsx(D,{open:n,onOpenChange:e,title:"Selecione o Documento",children:o.jsx(f,{onSubmit:h=>{t(h),e(!1)},selectedValue:g})})}try{r.displayName="DocumentsMobileModal",r.__docgenInfo={description:"",displayName:"DocumentsMobileModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!0,type:{name:"(open: boolean) => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: { documentType: string; documentValue: string; }) => void"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"{ documentType: string; documentValue: string; }"}}}}}catch{}const G={title:"Components/Layout/DocumentsModal/MobileModal",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"},onOpenChange:{action:"onOpenChange"}}},s={render:()=>{const[n,e]=d.useState(!0);return o.jsxs("div",{children:[o.jsx(O,{onClick:()=>e(!0),children:"Escolher Documento"}),o.jsx(r,{open:n,onOpenChange:e,onSubmit:t=>console.log(t)})]})}},a={render:()=>{const[n,e]=d.useState(!1);return o.jsxs("div",{children:[o.jsx(O,{onClick:()=>e(!0),children:"Escolher Documento"}),o.jsx(r,{open:n,onOpenChange:e,onSubmit:t=>console.log(t),selectedValue:{documentType:"RG",documentValue:"439853860"}})]})}};var u,l,i;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Escolher Documento</Button>
        <DocumentsMobileModal open={isOpen} onOpenChange={setIsOpen} onSubmit={documentsData => console.log(documentsData)} />
      </div>;
  }
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Escolher Documento</Button>
        <DocumentsMobileModal open={isOpen} onOpenChange={setIsOpen} onSubmit={documentsData => console.log(documentsData)} selectedValue={{
        documentType: 'RG',
        documentValue: '439853860'
      }} />
      </div>;
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const N=["Default","WithSelectedValue"];export{s as Default,a as WithSelectedValue,N as __namedExportsOrder,G as default};

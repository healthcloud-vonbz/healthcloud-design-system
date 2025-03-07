import{j as o}from"./jsx-runtime-CQsLhzk5.js";import{r as d}from"./index-Wp2u197Z.js";import{B as O}from"./index-Cp0rTnXd.js";import{M as D}from"./index-iGlb7z7Q.js";import{D as f}from"./index-D1TU6PRE.js";import"./index-9aUIr4gJ.js";import"./utils-jAU0Cazi.js";import"./index-BPKZZaUH.js";import"./Combination-DFpj9S_z.js";import"./index-NijHtZJS.js";import"./index-DA8gG4lw.js";import"./maska-DLZr1Z7F.js";import"./label-iTyObV1l.js";import"./constant-BzauSrY0.js";import"./index-DZ6Fm6o8.js";import"./index-CdxupODD.js";function r({open:n,onOpenChange:e,onSubmit:t,selectedValue:g}){return o.jsx(D,{open:n,onOpenChange:e,title:"Selecione o Documento",children:o.jsx(f,{onSubmit:h=>{t(h),e(!1)},selectedValue:g})})}try{r.displayName="DocumentsMobileModal",r.__docgenInfo={description:"",displayName:"DocumentsMobileModal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!0,type:{name:"(open: boolean) => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: { documentType: string; documentValue: string; }) => void"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"{ documentType: string; documentValue: string; }"}}}}}catch{}const R={title:"Components/Layout/DocumentsModal/MobileModal",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"},onOpenChange:{action:"onOpenChange"}}},s={render:()=>{const[n,e]=d.useState(!0);return o.jsxs("div",{children:[o.jsx(O,{onClick:()=>e(!0),children:"Escolher Documento"}),o.jsx(r,{open:n,onOpenChange:e,onSubmit:t=>console.log(t)})]})}},a={render:()=>{const[n,e]=d.useState(!1);return o.jsxs("div",{children:[o.jsx(O,{onClick:()=>e(!0),children:"Escolher Documento"}),o.jsx(r,{open:n,onOpenChange:e,onSubmit:t=>console.log(t),selectedValue:{documentType:"RG",documentValue:"439853860"}})]})}};var u,l,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Escolher Documento</Button>
        <DocumentsMobileModal open={isOpen} onOpenChange={setIsOpen} onSubmit={documentsData => console.log(documentsData)} />
      </div>;
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const G=["Default","WithSelectedValue"];export{s as Default,a as WithSelectedValue,G as __namedExportsOrder,R as default};

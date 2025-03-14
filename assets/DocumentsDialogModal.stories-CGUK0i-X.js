import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{r as d}from"./index-Wp2u197Z.js";import{B as g}from"./index-Cp0rTnXd.js";import{D as h}from"./index-oDwqelt3.js";import{D as f}from"./index-D1TU6PRE.js";import"./index-9aUIr4gJ.js";import"./utils-jAU0Cazi.js";import"./index-BPKZZaUH.js";import"./dialog-7-xsjqW9.js";import"./index-DA8gG4lw.js";import"./maska-DLZr1Z7F.js";import"./label-iTyObV1l.js";import"./constant-BzauSrY0.js";import"./index-DZ6Fm6o8.js";import"./index-CdxupODD.js";function r({open:o,onOpenChange:n,onSubmit:t,selectedValue:D}){return e.jsx("div",{children:e.jsx(h,{open:o,onOpenChange:n,title:"Selecione o documento",children:e.jsx(f,{onSubmit:O=>{t(O),n(!1)},selectedValue:D})})})}try{r.displayName="DocumentsDialog",r.__docgenInfo={description:"",displayName:"DocumentsDialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!0,type:{name:"(open: boolean) => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: { documentType: string; documentValue: string; }) => void"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"{ documentType: string; documentValue: string; }"}}}}}catch{}const R={title:"Components/Layout/DocumentsModal/DocumentsDialog",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"},onOpenChange:{action:"onOpenChange"}}},s={render:()=>{const[o,n]=d.useState(!0);return e.jsxs("div",{children:[e.jsx(g,{onClick:()=>n(!0),children:"Escolher Documento"}),e.jsx(r,{open:o,onOpenChange:n,onSubmit:t=>console.log(t)})]})}},a={render:()=>{const[o,n]=d.useState(!1);return e.jsxs("div",{children:[e.jsx(g,{onClick:()=>n(!0),children:"Escolher Documento"}),e.jsx(r,{open:o,onOpenChange:n,onSubmit:t=>console.log(t),selectedValue:{documentType:"RG",documentValue:"439853860"}})]})}};var u,c,i;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Escolher Documento</Button>
        <DocumentsDialog open={isOpen} onOpenChange={setIsOpen} onSubmit={documentsData => console.log(documentsData)} />
      </div>;
  }
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Escolher Documento</Button>
        <DocumentsDialog open={isOpen} onOpenChange={setIsOpen} onSubmit={documentsData => console.log(documentsData)} selectedValue={{
        documentType: 'RG',
        documentValue: '439853860'
      }} />
      </div>;
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const G=["Default","WithSelectedValue"];export{s as Default,a as WithSelectedValue,G as __namedExportsOrder,R as default};

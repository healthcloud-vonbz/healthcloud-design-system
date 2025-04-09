import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{r as d}from"./index-Wp2u197Z.js";import{B as g}from"./index-X01uzHCX.js";import{D as h}from"./index-CBSS33qV.js";import{D as f}from"./index-CWi1H7Wu.js";import"./index-9aUIr4gJ.js";import"./utils-jAU0Cazi.js";import"./index-Di7QxmPg.js";import"./dialog-J9Ab1Qdn.js";import"./index-DA8gG4lw.js";import"./react-icons.esm-iaGqq73B.js";import"./maska-DLZr1Z7F.js";import"./label-iTyObV1l.js";import"./constant-DrMsBLUd.js";import"./index-DTkbQ6HV.js";import"./check-DBIdT9Bo.js";import"./index-CdxupODD.js";function r({open:o,onOpenChange:n,onSubmit:t,selectedValue:D}){return e.jsx("div",{children:e.jsx(h,{open:o,onOpenChange:n,title:"Selecione o documento",children:e.jsx(f,{onSubmit:O=>{t(O),n(!1)},selectedValue:D})})})}try{r.displayName="DocumentsDialog",r.__docgenInfo={description:"",displayName:"DocumentsDialog",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!0,type:{name:"(open: boolean) => void"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: { documentType: string; documentValue: string; }) => void"}},selectedValue:{defaultValue:null,description:"",name:"selectedValue",required:!1,type:{name:"{ documentType: string; documentValue: string; }"}}}}}catch{}const M={title:"Components/Layout/DocumentsModal/DocumentsDialog",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{open:{control:"boolean"},onOpenChange:{action:"onOpenChange"}}},s={render:()=>{const[o,n]=d.useState(!0);return e.jsxs("div",{children:[e.jsx(g,{onClick:()=>n(!0),children:"Escolher Documento"}),e.jsx(r,{open:o,onOpenChange:n,onSubmit:t=>console.log(t)})]})}},a={render:()=>{const[o,n]=d.useState(!1);return e.jsxs("div",{children:[e.jsx(g,{onClick:()=>n(!0),children:"Escolher Documento"}),e.jsx(r,{open:o,onOpenChange:n,onSubmit:t=>console.log(t),selectedValue:{documentType:"RG",documentValue:"439853860"}})]})}};var u,i,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Escolher Documento</Button>
        <DocumentsDialog open={isOpen} onOpenChange={setIsOpen} onSubmit={documentsData => console.log(documentsData)} />
      </div>;
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const N=["Default","WithSelectedValue"];export{s as Default,a as WithSelectedValue,N as __namedExportsOrder,M as default};

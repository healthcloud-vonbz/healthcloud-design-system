import{j as o}from"./jsx-runtime-CQsLhzk5.js";import{r as l}from"./index-Wp2u197Z.js";import{B as i}from"./index-Cp0rTnXd.js";import{D as s}from"./index-oDwqelt3.js";import"./index-9aUIr4gJ.js";import"./utils-jAU0Cazi.js";import"./index-BPKZZaUH.js";import"./dialog-7-xsjqW9.js";import"./index-DA8gG4lw.js";const f={title:"Components/Layout/DialogModal",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},open:{control:"boolean"},onOpenChange:{action:"onOpenChange"}}},e={args:{title:"Titulo do modal"},render:p=>{const[n,t]=l.useState(!0);return o.jsxs("div",{children:[o.jsx(i,{onClick:()=>t(!0),children:"Abrir modal"}),o.jsxs(s,{...p,open:n,onOpenChange:()=>t(!n),children:[o.jsx("p",{children:"Conteúdo do modal"}),o.jsx("p",{children:"Conteúdo do modal"}),o.jsx("p",{children:"Conteúdo do modal"}),o.jsx("p",{children:"Conteúdo do modal"}),o.jsx("p",{children:"Conteúdo do modal"})]})]})}};var r,a,d;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: 'Titulo do modal'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Abrir modal</Button>
        <DialogModal {...args} open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
          <p>Conteúdo do modal</p>
          <p>Conteúdo do modal</p>
          <p>Conteúdo do modal</p>
          <p>Conteúdo do modal</p>
          <p>Conteúdo do modal</p>
        </DialogModal>
      </div>;
  }
}`,...(d=(a=e.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const D=["Default"];export{e as Default,D as __namedExportsOrder,f as default};

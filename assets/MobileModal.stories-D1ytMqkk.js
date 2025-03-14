import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{r as l}from"./index-Wp2u197Z.js";import{B as d}from"./index-Cp0rTnXd.js";import{M as p}from"./index-iGlb7z7Q.js";import"./index-9aUIr4gJ.js";import"./utils-jAU0Cazi.js";import"./index-BPKZZaUH.js";import"./Combination-DFpj9S_z.js";import"./index-NijHtZJS.js";import"./index-DA8gG4lw.js";const f={title:"Components/Layout/MobileModal",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},open:{control:"boolean"},onOpenChange:{action:"onOpenChange"}}},o={args:{title:"Titulo do modal"},render:i=>{const[t,n]=l.useState(!0);return e.jsxs("div",{children:[e.jsx(d,{onClick:()=>n(!0),children:"Abrir modal"}),e.jsx(p,{...i,open:t,onOpenChange:()=>n(!t),children:e.jsx("p",{children:"Conteúdo do modal"})})]})}};var r,s,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: 'Titulo do modal'
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(true);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Abrir modal</Button>
        <MobileModal {...args} open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
          <p>Conteúdo do modal</p>
        </MobileModal>
      </div>;
  }
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const j=["Default"];export{o as Default,j as __namedExportsOrder,f as default};

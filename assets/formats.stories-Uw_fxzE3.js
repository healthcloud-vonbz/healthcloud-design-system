import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{r as n}from"./index-Wp2u197Z.js";import{F as t}from"./maska-DLZr1Z7F.js";import{I as o}from"./index-CdxupODD.js";import"./utils-jAU0Cazi.js";const h=new t({mask:"(##) 9####-####"}),v=new t({mask:"###.###.###-##"}),x=new t({mask:["##.###.###/####-##"]}),g=new t({mask:"#####-###"}),N=new t({mask:"##/##/####"});new t({mask:"#########"});new t({mask:"@@######"});const z=new t({mask:"9",tokens:{9:{pattern:/[0-9]/,repeated:!0}}}),_=new t({mask:"a",tokens:{a:{pattern:/[a-zA-Z]/,repeated:!0}}}),G={title:"Utils/Masks",tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Conjunto de máscaras utilizando a biblioteca [Maska](https://beholdr.github.io/maska/)."}}}},l={render:()=>{const[a,s]=n.useState("");return e.jsxs("div",{className:"max-w-[400px] m-auto space-y-6",children:[e.jsx("strong",{children:"Telefone com DDD:"})," ",e.jsx(o,{type:"text",value:a,placeholder:"(00) 00000-0000",onChange:r=>s(h.masked(r.target.value))}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-normal",children:"Preencha para o input para checar se a máscara é válida"}),h.completed(a)?e.jsx("p",{className:"text-green-600",children:"Máscara válida"}):e.jsx("p",{className:"text-red-600",children:"Máscara inválida"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-normal",children:"Preencha para o input para remover a mascára com o método unmasked"}),h.unmasked(a)]})]})}},c={render:()=>{const[a,s]=n.useState("");return e.jsxs("div",{className:"max-w-[400px] m-auto space-y-6",children:[e.jsx("strong",{children:"CPF:"})," ",e.jsx(o,{type:"text",placeholder:"000.000.000-00",value:a,onChange:r=>s(v.masked(r.target.value))}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-normal",children:"Preencha para o input para checar se a máscara é válida"}),v.completed(a)?e.jsx("p",{className:"text-green-600",children:"Máscara válida"}):e.jsx("p",{className:"text-red-600",children:"Máscara inválida"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-normal",children:"Preencha para o input para remover a mascára com o método unmasked"}),v.unmasked(a)]})]})}},m={render:()=>{const[a,s]=n.useState("");return e.jsxs("div",{className:"max-w-[400px] m-auto space-y-6",children:[e.jsx("strong",{children:"CNPJ:"})," ",e.jsx(o,{type:"text",placeholder:"00.000.000/0000-00",value:a,onChange:r=>s(x.masked(r.target.value))}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-normal",children:"Preencha para o input para checar se a máscara é válida"}),x.completed(a)?e.jsx("p",{className:"text-green-600",children:"Máscara válida"}):e.jsx("p",{className:"text-red-600",children:"Máscara inválida"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-normal",children:"Preencha para o input para remover a mascára com o método unmasked"}),x.unmasked(a)]})]})}},d={render:()=>{const[a,s]=n.useState("");return e.jsxs("div",{className:"max-w-[400px] m-auto space-y-6",children:[e.jsx("strong",{children:"CEP:"})," ",e.jsx(o,{type:"text",placeholder:"00000-000",value:a,onChange:r=>s(g.masked(r.target.value))}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-normal",children:"Preencha para o input para checar se a máscara é válida"}),g.completed(a)?e.jsx("p",{className:"text-green-600",children:"Máscara válida"}):e.jsx("p",{className:"text-red-600",children:"Máscara inválida"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-normal",children:"Preencha para o input para remover a mascára com o método unmasked"}),g.unmasked(a)]})]})}},p={render:()=>{const[a,s]=n.useState("");return e.jsxs("div",{className:"max-w-[400px] m-auto space-y-6",children:[e.jsx("strong",{children:"Data:"})," ",e.jsx(o,{type:"text",placeholder:"00/00/0000",value:a,onChange:r=>s(N.masked(r.target.value))}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-normal",children:"Preencha para o input para checar se a máscara é válida"}),N.completed(a)?e.jsx("p",{className:"text-green-600",children:"Máscara válida"}):e.jsx("p",{className:"text-red-600",children:"Máscara inválida"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-normal",children:"Preencha para o input para remover a mascára com o método unmasked"}),N.unmasked(a)]})]})}},u={render:()=>{const[a,s]=n.useState("");return e.jsxs("div",{className:"max-w-[400px] m-auto space-y-6",children:[e.jsx("strong",{children:"Apenas números:"})," ",e.jsx(o,{type:"text",placeholder:"Apenas números",value:a,onChange:r=>s(z.masked(r.target.value))})]})}},i={render:()=>{const[a,s]=n.useState("");return e.jsxs("div",{className:"max-w-[400px] m-auto space-y-6",children:[e.jsx("strong",{children:"Apenas letras:"})," ",e.jsx(o,{type:"text",placeholder:"Apenas letras",value:a,onChange:r=>s(_.masked(r.target.value))})]})}};var j,k,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="max-w-[400px] m-auto space-y-6">
        <strong>Telefone com DDD:</strong>{' '}
        <Input type="text" value={value} placeholder="(00) 00000-0000" onChange={e => setValue(utilsPhoneWithDDD.masked(e.target.value))} />
        <div>
          <h4 className="font-normal">
            Preencha para o input para checar se a máscara é válida
          </h4>

          {utilsPhoneWithDDD.completed(value) ? <p className="text-green-600">Máscara válida</p> : <p className="text-red-600">Máscara inválida</p>}
        </div>
        <div>
          <h4 className="font-normal">
            Preencha para o input para remover a mascára com o método unmasked
          </h4>

          {utilsPhoneWithDDD.unmasked(value)}
        </div>
      </div>;
  }
}`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var P,f,y;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="max-w-[400px] m-auto space-y-6">
        <strong>CPF:</strong>{' '}
        <Input type="text" placeholder="000.000.000-00" value={value} onChange={e => setValue(utilsFormatCpf.masked(e.target.value))} />
        <div>
          <h4 className="font-normal">
            Preencha para o input para checar se a máscara é válida
          </h4>

          {utilsFormatCpf.completed(value) ? <p className="text-green-600">Máscara válida</p> : <p className="text-red-600">Máscara inválida</p>}
        </div>
        <div>
          <h4 className="font-normal">
            Preencha para o input para remover a mascára com o método unmasked
          </h4>

          {utilsFormatCpf.unmasked(value)}
        </div>
      </div>;
  }
}`,...(y=(f=c.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var D,w,M;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="max-w-[400px] m-auto space-y-6">
        <strong>CNPJ:</strong>{' '}
        <Input type="text" placeholder="00.000.000/0000-00" value={value} onChange={e => setValue(utilsFormatCnpj.masked(e.target.value))} />
        <div>
          <h4 className="font-normal">
            Preencha para o input para checar se a máscara é válida
          </h4>

          {utilsFormatCnpj.completed(value) ? <p className="text-green-600">Máscara válida</p> : <p className="text-red-600">Máscara inválida</p>}
        </div>
        <div>
          <h4 className="font-normal">
            Preencha para o input para remover a mascára com o método unmasked
          </h4>

          {utilsFormatCnpj.unmasked(value)}
        </div>
      </div>;
  }
}`,...(M=(w=m.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var F,S,V;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="max-w-[400px] m-auto space-y-6">
        <strong>CEP:</strong>{' '}
        <Input type="text" placeholder="00000-000" value={value} onChange={e => setValue(utilsFormatCep.masked(e.target.value))} />
        <div>
          <h4 className="font-normal">
            Preencha para o input para checar se a máscara é válida
          </h4>

          {utilsFormatCep.completed(value) ? <p className="text-green-600">Máscara válida</p> : <p className="text-red-600">Máscara inválida</p>}
        </div>
        <div>
          <h4 className="font-normal">
            Preencha para o input para remover a mascára com o método unmasked
          </h4>

          {utilsFormatCep.unmasked(value)}
        </div>
      </div>;
  }
}`,...(V=(S=d.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var A,I,E;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="max-w-[400px] m-auto space-y-6">
        <strong>Data:</strong>{' '}
        <Input type="text" placeholder="00/00/0000" value={value} onChange={e => setValue(utilsFormatDate.masked(e.target.value))} />
        <div>
          <h4 className="font-normal">
            Preencha para o input para checar se a máscara é válida
          </h4>

          {utilsFormatDate.completed(value) ? <p className="text-green-600">Máscara válida</p> : <p className="text-red-600">Máscara inválida</p>}
        </div>
        <div>
          <h4 className="font-normal">
            Preencha para o input para remover a mascára com o método unmasked
          </h4>

          {utilsFormatDate.unmasked(value)}
        </div>
      </div>;
  }
}`,...(E=(I=p.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var b,O,J;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="max-w-[400px] m-auto space-y-6">
        <strong>Apenas números:</strong>{' '}
        <Input type="text" placeholder="Apenas números" value={value} onChange={e => setValue(utilsOnlyNumbers.masked(e.target.value))} />
      </div>;
  }
}`,...(J=(O=u.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var L,T,W;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="max-w-[400px] m-auto space-y-6">
        <strong>Apenas letras:</strong>{' '}
        <Input type="text" placeholder="Apenas letras" value={value} onChange={e => setValue(utilsOnlyLetters.masked(e.target.value))} />
      </div>;
  }
}`,...(W=(T=i.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};const H=["Telefone","CPF","CNPJ","CEP","Data","ApenasNumeros","ApenasLetras"];export{i as ApenasLetras,u as ApenasNumeros,d as CEP,m as CNPJ,c as CPF,p as Data,l as Telefone,H as __namedExportsOrder,G as default};

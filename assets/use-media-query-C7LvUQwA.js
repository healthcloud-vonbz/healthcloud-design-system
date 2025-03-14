import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as t}from"./index-C2WH5l5l.js";import"./index-B2P72KeL.js";import{M as i}from"./DocsRenderer-CFRXHY34-CK7ugdax.js";import"./index-Wp2u197Z.js";import"./preview-B4BrDhWa.js";import"./iframe-yZ_HAuBy.js";import"./index-DA8gG4lw.js";import"./index-yiGAEVS0.js";import"./index-DrFu-skq.js";import"./react-18-Bstx5tUr.js";function a(n){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Custom Hook/useMediaQuery"}),`
`,e.jsx(o.h1,{id:"use-media-query",children:"use-media-query"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"useMediaQuery"})," é um hook customizado do React que permite que você faça consultas de mídia diretamente no JavaScript. Ele monitora a correspondência de uma consulta de mídia CSS e atualiza automaticamente o estado conforme a consulta de mídia (query) seja atendida ou não. Esse tipo de funcionalidade é particularmente útil para fazer o layout responsivo, permitindo que você altere o comportamento do componente com base no tamanho da tela ou outras características do dispositivo."]}),`
`,e.jsx(o.h2,{id:"como-funciona",children:"Como Funciona"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:'Entrada: Você passa uma string representando a consulta de mídia CSS para o hook, como "max-width: 768px" ou "min-width: 1200px".'}),`
`,e.jsx(o.li,{children:"Saída: O hook retorna true se a consulta for atendida, ou false se não for atendida. Isso pode ser usado para condicionalmente renderizar ou estilizar componentes com base no tamanho da tela ou características do dispositivo."}),`
`]}),`
`,e.jsx(o.h2,{id:"exemplos",children:"Exemplos"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`import { useMediaQuery } from 'health-cloud-design-system';

export const ResponsiveComponent = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div>
      {isMobile ? (
        <p>You are using a mobile device!</p>
      ) : (
        <p>You are using a desktop or tablet!</p>
      )}
    </div>
  );
};
`})})]})}function f(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(a,{...n})}):a(n)}export{f as default};

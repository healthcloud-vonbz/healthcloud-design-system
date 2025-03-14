import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as r}from"./index-C2WH5l5l.js";import"./index-B2P72KeL.js";import{M as a}from"./DocsRenderer-CFRXHY34-CK7ugdax.js";import"./index-Wp2u197Z.js";import"./preview-B4BrDhWa.js";import"./iframe-yZ_HAuBy.js";import"./index-DA8gG4lw.js";import"./index-yiGAEVS0.js";import"./index-DrFu-skq.js";import"./react-18-Bstx5tUr.js";function n(o){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Custom Hook/useStep"}),`
`,e.jsx(t.h1,{id:"use-step",children:"use-step"}),`
`,e.jsxs(t.p,{children:["O ",e.jsx(t.code,{children:"useStep"})," é um hook customizado para controlar a navegação entre etapas em um processo (como um formulário de várias etapas ou um assistente). Ele mantém o controle do estado atual da etapa, além de fornecer funções para navegar entre as etapas, ir para a próxima, voltar para a anterior e resetar."]}),`
`,e.jsx(t.h2,{id:"como-funciona",children:"Como Funciona"}),`
`,e.jsx(t.p,{children:"Este hook mantém o estado da etapa atual e fornece os seguintes métodos:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"goToNextStep"}),": Avança para a próxima etapa, se possível."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"goToPrevStep"}),": Volta para a etapa anterior, se possível."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"setStep"}),": Define uma etapa específica, ou utiliza uma função para calcular a próxima etapa."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"canGoToNextStep"}),": Retorna ",e.jsx(t.code,{children:"true"})," se for possível avançar para a próxima etapa."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"canGoToPrevStep"}),": Retorna ",e.jsx(t.code,{children:"true"})," se for possível voltar para a etapa anterior."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"reset"}),": Reseta a navegação para a etapa inicial."]}),`
`]}),`
`,e.jsx(t.h2,{id:"exemplos",children:"Exemplos"}),`
`,e.jsx(t.h3,{id:"exemplo-básico",children:"Exemplo Básico"}),`
`,e.jsxs(t.p,{children:["A seguir está um exemplo simples de como utilizar o ",e.jsx(t.code,{children:"useStep"})," em um componente."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { useStep } from './useStep';

const StepForm = ({ maxStep }: { maxStep: number }) => {
  const [
    currentStep,
    { goToNextStep, goToPrevStep, reset, canGoToNextStep, canGoToPrevStep },
  ] = useStep(maxStep);

  return (
    <div>
      <h1>Current Step: {currentStep}</h1>
      <button onClick={goToPrevStep} disabled={!canGoToPrevStep}>
        Go to Previous Step
      </button>
      <button onClick={goToNextStep} disabled={!canGoToNextStep}>
        Go to Next Step
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export const StepFormExample = () => <StepForm maxStep={5} />;
`})})]})}function S(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{S as default};

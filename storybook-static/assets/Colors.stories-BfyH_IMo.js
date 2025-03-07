import{j as e}from"./jsx-runtime-CQsLhzk5.js";import"./index-Wp2u197Z.js";const d={ds_health:{primary:"#6194FA",secondary:"#04CCFC",success:"#34C759",warning:"#FFCD29",pending:"#FF9500",error:"#EB4335",background:{primary:"#FFFFFF",secondary:"#F8F9FC",tertiary:"#F2F5F7"},calendar:{blockedBg:"#C4C4C44D",AllowBg:"#34C75999"},text:{primary:"#09090B",muted:"#677294",inactive:"#C4C4C4"}}},x={title:"Design System/Colors"},o=({name:s,color:r})=>e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsx("div",{className:"w-16 h-16 rounded-lg shadow-md",style:{backgroundColor:r}}),e.jsx("span",{className:"text-sm font-medium text-gray-700",children:s})]}),t=()=>e.jsxs("div",{className:"max-w-3xl mx-auto p-6 space-y-10",children:[e.jsx("h1",{className:"text-4xl text-center",children:"Paleta de cores"}),e.jsx("div",{className:"grid grid-cols-3 gap-6",children:Object.entries(d.ds_health).map(([s,r])=>typeof r=="string"?e.jsx(o,{name:s,color:r},s):typeof r=="object"?e.jsxs("div",{className:"my-10 text-center space-y-4 p-4 bg-slate-200",children:[e.jsx("p",{className:"font-bold",children:s}),Object.entries(r).map(([a,i])=>e.jsx(o,{name:`${s}-${a}`,color:i},`${s}-${a}`))]},s):null)})]});var n,l,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <div className="max-w-3xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl text-center">Paleta de cores</h1>
      <div className="grid grid-cols-3 gap-6">
        {Object.entries(DSColors.ds_health).map(([category, value]) => {
        if (typeof value === 'string') {
          return <ColorBox key={category} name={category} color={value} />;
        } else if (typeof value === 'object') {
          return <div className="my-10 text-center space-y-4 p-4 bg-slate-200" key={category}>
                <p className="font-bold">{category}</p>
                {Object.entries(value).map(([subKey, subValue]) => <ColorBox key={\`\${category}-\${subKey}\`} name={\`\${category}-\${subKey}\`} color={subValue as string} />)}
              </div>;
        }
        return null;
      })}
      </div>
    </div>;
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const u=["ColorPalette"];export{t as ColorPalette,u as __namedExportsOrder,x as default};

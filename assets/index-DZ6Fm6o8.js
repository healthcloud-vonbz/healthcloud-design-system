import{r as n}from"./index-Wp2u197Z.js";import{d as b}from"./index-BPKZZaUH.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d=(...e)=>e.filter((t,r,o)=>!!t&&o.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=n.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:a,...c},f)=>n.createElement("svg",{ref:f,...g,width:t,height:t,stroke:e,strokeWidth:o?Number(r)*24/Number(t):r,className:d("lucide",i),...c},[...a.map(([u,h])=>n.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(e,t)=>{const r=n.forwardRef(({className:o,...i},s)=>n.createElement(w,{ref:s,iconNode:t,className:d(`lucide-${l(e)}`,o),...i}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=p("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);function k(e){const[t,r]=n.useState(void 0);return b(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const s=i[0];let a,c;if("borderBoxSize"in s){const f=s.borderBoxSize,u=Array.isArray(f)?f[0]:f;a=u.inlineSize,c=u.blockSize}else a=e.offsetWidth,c=e.offsetHeight;r({width:a,height:c})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else r(void 0)},[e]),t}export{z as C,p as c,k as u};

import{r as n}from"./index-Wp2u197Z.js";import{u as h}from"./index-Di7QxmPg.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d=(...e)=>e.filter((t,r,o)=>!!t&&o.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=n.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:i="",children:s,iconNode:a,...c},u)=>n.createElement("svg",{ref:u,...w,width:t,height:t,stroke:e,strokeWidth:o?Number(r)*24/Number(t):r,className:d("lucide",i),...c},[...a.map(([f,b])=>n.createElement(f,b)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(e,t)=>{const r=n.forwardRef(({className:o,...i},s)=>n.createElement(g,{ref:s,iconNode:t,className:d(`lucide-${l(e)}`,o),...i}));return r.displayName=`${e}`,r};function z(e){const[t,r]=n.useState(void 0);return h(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const s=i[0];let a,c;if("borderBoxSize"in s){const u=s.borderBoxSize,f=Array.isArray(u)?u[0]:u;a=f.inlineSize,c=f.blockSize}else a=e.offsetWidth,c=e.offsetHeight;r({width:a,height:c})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else r(void 0)},[e]),t}export{y as c,z as u};

import{j as e,C as m,a as v,b as g,c as u,V as w,d as f,u as j,e as p,m as b}from"./useAspect.F2IIYIOL.js";import{r as a}from"./index.DhYZZe0J.js";const N={src:"/_astro/three.ll-TiiA1.jpeg",width:1138,height:816,format:"jpg"},S={src:"/_astro/airbnb.DF3VPsC1.png",width:1871,height:870,format:"png"},k={src:"/_astro/foodapp.BBIRnni7.png",width:1854,height:860,format:"png"},y="/_astro/solar.Bn7MkxGL.mp4",T=`
varying vec2 vUv;
uniform float uTime;
uniform float uAmplitude;
uniform float uWaveLength;
void main() {
  vUv = uv;
  vec3 newPosition = position;

  float wave = uAmplitude * sin(position.x * uWaveLength + uTime);
  newPosition.z = position.z + wave;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`,q=`
uniform sampler2D uTexture;
uniform vec2 vUvScale;
varying vec2 vUv;
void main() {
  vec2 uv = (vUv - 0.5) * vUvScale + 0.5;
  vec4 color = texture2D(uTexture, uv);
  gl_FragColor = color;
}
`;function A({imageSrc:r}){console.log(r);const s=a.useRef(),l=v(r.src);g();const i=u(l.image.width,l.image.height,.3),o=a.useRef({uTime:{value:0},uAmplitude:{value:.25},uWaveLength:{value:5},uTexture:{value:l},vUvScale:{value:new w(0,0)}});return f(()=>{s.current.material.uniforms.uTime.value+=.04,s.current.material.uniforms.uAmplitude.value=.12,s.current.material.uniforms.uWaveLength.value=5,s.current.scale.x=8,s.current.scale.y=5,s.current.material.uniforms.vUvScale.value.set(1,1)}),e.jsxs("mesh",{ref:s,scale:i,children:[e.jsx("planeGeometry",{args:[1,1,15,15]}),e.jsx("shaderMaterial",{fragmentShader:q,vertexShader:T,uniforms:o.current})]})}const h=({imageSource:r})=>e.jsx(m,{className:"fixed",children:e.jsx(a.Suspense,{fallback:null,children:e.jsx(A,{imageSrc:r})})});function L(){const r=a.useRef(),[s,l]=a.useState(!1),i=a.useRef([]),{scrollYProgress:o}=j({target:r,offset:["start end","end end"]}),d=n=>{l(!0);const t=n.target;t.muted=!0,t.play()},x=n=>{l(!1);const t=n.target;t.muted=!1,t.currentTime=0,t.pause()};return a.useEffect(()=>{o.on("change",n=>{i.current.forEach((t,c)=>{t.setAttribute("startOffset",-40+c*40+n*40+"%")})})},[]),e.jsxs("div",{ref:r,id:"work-section",children:[e.jsxs("div",{className:"bg-[#c7c0ad] relative",children:[e.jsxs("svg",{className:"w-full  relative mb-20",viewBox:"0 0 250 90",children:[e.jsx("path",{fill:"none",id:"curve",d:"m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"}),e.jsx("text",{className:"text-[6px] uppercase",style:{fill:"#823a4c"},children:[...Array(4)].map((n,t)=>e.jsx("textPath",{className:"font-eikothin",ref:c=>i.current[t]=c,startOffset:t*40+"%",href:"#curve",children:"Javascript-ThreeJS-Unity-AR/VR"},t))})]}),e.jsx("h1",{className:"text-7xl  font-eikobold absolute left-[36%] top-[12%] text-[#eaeaea]",children:"PROJECTS"}),e.jsxs("div",{className:"grid grid-cols-12 grid-rows-10 px-4 gap-x-10",children:[e.jsx("div",{className:"col-start-1 col-end-6 row-start-1 row-end-2",children:e.jsx("h3",{className:"text-[5rem] text-[#ede8e4] font-montrealthin ml-3",children:"Selected Work"})}),e.jsxs("div",{className:"col-start-1 col-end-7 row-start-2 row-end-5",children:[e.jsx("a",{className:"  row-start-2 row-end-4  col-span-7 z-0 left-[1%] bottom-[35%] absolute  w-[650px] h-[600px]",href:"https://github.com/ma22-maker",target:"_blank",children:e.jsx(h,{imageSource:N})}),e.jsxs("div",{className:"row-start-4 row-end-5 flex flex-row justify-between mt-2 px-10",children:[e.jsx("h1",{className:"  font-montrealthin text-xs",children:"ThreeJS Portfolio"}),e.jsx("h3",{className:"  font-montrealthin text-xs",children:"React | ThreeJS"})]})]}),e.jsxs("div",{className:"col-start-7 col-end-13 row-start-1 row-end-4 ",children:[e.jsx("a",{className:"  row-start-1 row-end-3 col-span-7 z-0 right-[2%] top-[27%] absolute  w-[650px] h-[600px]",href:"https://github.com/ma22-maker",target:"_blank",children:e.jsx(h,{imageSource:k})}),e.jsxs("div",{className:"row-start-3 row-end-4 flex flex-row justify-between mt-2 px-10",children:[e.jsx("h1",{className:"  font-montrealthin text-xs",children:"Tasty Treat"}),e.jsx("h3",{className:"  font-montrealthin text-xs",children:"NextJS|Typescript|Redux"})]})]}),e.jsxs("div",{className:"col-start-1 col-end-7 row-start-6 row-end-9 relative",children:[e.jsx("a",{className:" row-start-6 row-end-8  col-span-7 z-0 left-[0%] bottom-[-35%] absolute  w-[650px] h-[600px]",href:"https://github.com/ma22-maker",target:"_blank",children:e.jsx(h,{imageSource:S})}),e.jsxs("div",{className:"row-start-8 row-end-9 flex flex-row justify-between mt-2 px-10",children:[e.jsx("h1",{className:"  font-montrealthin text-xs",children:"Airbnb Clone "}),e.jsx("h3",{className:" font-montrealthin text-xs",children:"React|Typescript|Redux"})]})]}),e.jsxs("div",{className:"col-start-7 col-end-13 row-start-5 row-end-8",children:[e.jsx("video",{width:"750",height:"500",controls:s,autoPlay:s,className:" row-start-5 row-end-7",onMouseEnter:d,onMouseLeave:x,children:e.jsx("source",{src:y,type:"video/mp4"})}),e.jsxs("div",{className:"row-start-7 row-end-8 flex flex-row justify-between mt-2",children:[e.jsxs("h1",{className:"  font-montrealthin text-xs",children:["VR Based Tutoring"," "]}),e.jsx("h3",{className:" font-montrealthin text-xs",children:"Unity|C#"})]})]})]})]}),e.jsx(M,{scrollProgress:o})]})}const M=({scrollProgress:r})=>{const s=p(r,[0,1],[-700,0]);return e.jsx("div",{className:"h-[450px] bg-black overflow-hidden ",children:e.jsx(b.div,{style:{y:s},className:" h-full  bg-black text-white flex justify-center gap-10 items-center p-10",children:e.jsxs("div",{className:"flex flex-col gap-40 border-2 border-[#ede8e4] rounded-xl px-[60px] py-10",children:[e.jsxs("div",{className:"flex flex-row gap-3 items-end justify-end  ",children:[e.jsxs("h1",{className:"text-[2.5rem] font-montrealmed  basis-8/12 ",children:[e.jsx("p",{className:"relative",children:" Lets Create something Great Together"}),e.jsx("span",{className:"absolute left-[29%] top-[38%]",children:e.jsxs("svg",{id:"SvgjsSvg1011",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",children:[e.jsx("defs",{id:"SvgjsDefs1012"}),e.jsx("g",{id:"SvgjsG1013",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"10",height:"10",children:e.jsx("rect",{width:"20",height:"20",x:"3.92",y:"3.92","data-name":"49. Box, design, geometry, square, stop",rx:".9",fill:"#ede8e4",class:"color000 svgShape"})})})]})})]}),e.jsxs("a",{className:"text-xl font-eikomed basis-4/12 flex flex-row gap-2 items-center hover:underline hover:underline-offset-2",href:"mailto:deepthimai.kandula@gmail.com?body=Hey There!",children:["SEND ME AN EMAIL",e.jsx("span",{children:e.jsxs("svg",{id:"SvgjsSvg1052",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",children:[e.jsx("defs",{id:"SvgjsDefs1053"}),e.jsx("g",{id:"SvgjsG1054",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"20",height:"20",children:[e.jsx("path",{fill:"none",d:"M0 0h48v48H0z"}),e.jsx("path",{d:"m24 8-2.83 2.83L32.34 22H8v4h24.34L21.17 37.17 24 40l16-16z",fill:"#ede8e4",class:"color000 svgShape"})]})})]})})]})]}),e.jsxs("div",{className:" flex  flex-row justify-between text-sm",children:[e.jsxs("div",{className:"flex flex-row pr-20 gap-3",children:[e.jsx("p",{className:"hover:underline hover:underline-offset-2",children:"My work at"}),e.jsx("a",{href:"https://github.com/ma22-maker",target:"_blank",children:e.jsxs("svg",{id:"SvgjsSvg1048",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",children:[e.jsx("defs",{id:"SvgjsDefs1049"}),e.jsx("g",{id:"SvgjsG1050",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1792 1792",width:"20",height:"20",children:e.jsx("path",{d:"M522 1352q-8 9-20-3-13-11-4-19 8-9 20 3 12 11 4 19zm-42-61q9 12 0 19-8 6-17-7t0-18q9-7 17 6zm-61-60q-5 7-13 2-10-5-7-12 3-5 13-2 10 5 7 12zm31 34q-6 7-16-3-9-11-2-16 6-6 16 3 9 11 2 16zm129 112q-4 12-19 6-17-4-13-15t19-7q16 5 13 16zm63 5q0 11-16 11-17 2-17-11 0-11 16-11 17-2 17 11zm58-10q2 10-14 14t-18-8 14-15q16-2 18 9zm964-956v960q0 119-84.5 203.5T1376 1664h-224q-16 0-24.5-1t-19.5-5-16-14.5-5-27.5v-239q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105T1386 856q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27T578 459.5 492 446q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5T484 1274q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 103t.5 68q0 22-11 33.5t-22 13-33 1.5H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z",fill:"#ede8e4",class:"color000 svgShape"})})})]})}),e.jsx("a",{href:"https://github.com/ma22-maker",target:"_blank",children:e.jsxs("svg",{id:"SvgjsSvg1063",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",children:[e.jsx("defs",{id:"SvgjsDefs1064"}),e.jsx("g",{id:"SvgjsG1065",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 39 39",width:"20",height:"20",children:e.jsx("path",{d:"M32.728 38.651H6.531c-3.459 0-6.273-2.808-6.273-6.26V6.26C.258 2.808 3.072 0 6.531 0h26.197C36.186 0 39 2.808 39 6.26v26.132c0 3.452-2.814 6.259-6.272 6.259Zm-19.379-6.698h.008V15.281H8.17v16.672h5.178ZM10.76 13.004a2.998 2.998 0 0 0 3.002-3.002A3.008 3.008 0 0 0 10.76 7a3.003 3.003 0 0 0-3.002 3.002 3.003 3.003 0 0 0 3.002 3.002Zm21.998 18.95v-9.14c0-4.491-.975-7.946-6.215-7.946-2.519 0-4.21 1.38-4.905 2.69h-.07v-2.277h-4.967v16.672h5.178v-8.25c0-2.176.413-4.281 3.11-4.281 2.652 0 2.691 2.488 2.691 4.421v8.11h5.178Z",fill:"#ede8e4",class:"color000 svgShape"})})})]})})]}),e.jsxs("p",{className:"text-white basis-6/12 flex items-center gap-1 ",children:["©-2024 made with"," ",e.jsxs("span",{children:[" ",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",width:"10",height:"10",viewBox:"0 0 24 24",id:"Love",children:e.jsx("path",{fill:"#d85b53",d:"M4.379 12.274A4.841 4.841 0 0 1 3 8.89C3 6.189 5.216 4 7.95 4c1.674 0 3.154.82 4.05 2.077A4.962 4.962 0 0 1 16.05 4C18.784 4 21 6.189 21 8.889a4.845 4.845 0 0 1-1.507 3.512L12 20l-7.621-7.726Z",class:"color000000 svgShape"})})]}),"Deepthimai kandula. All Rights Reserved."]})]})]})})})};export{L as default};
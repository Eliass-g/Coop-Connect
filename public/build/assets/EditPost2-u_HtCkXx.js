import{q as S,r as g,u as D,e as y,m as C,j as e,d,v as l,w as F,x as v}from"./app-DNWayCnB.js";import I from"./NavBar-BbcpywIw.js";import{Container as E,Card as T,FormWrapper as J,Title as B,Subtitle as P,FormContainer as w,SectionTitle as A,SectionHeading as c,SectionDescription as h,Form as K,InputField as q,HorizontalRule as p,Label as z,StyledInput as G,TagContainer as H,Tag as N,TagName as R,TagIcon as $,ButtonGroup as L,ActionButton as M,SubmitButton as W}from"./EditPost2.styles-DWlzvQEx.js";import"./NavBar.styles-rqfB7x5C.js";import"./styled-components.browser.esm-B0h7x_ce.js";import"./settings-UVqU3YHX.js";import"./index.es-BshNEZt1.js";import"./index-CCYKEXcx.js";import"./index-BMRxO3cL.js";function te(){const{props:m}=S(),{jobId:u}=m,[o,a]=g.useState(""),i=D(),n=y(C),j=t=>{const{name:s,value:r}=t.target;i(l({[s]:r}))},x=t=>{i(F(n)),i(v())},b=t=>{a(t.target.value)},k=t=>{if(t.key==="Enter"&&o.trim()){t.preventDefault();const s=[...n.skills,o.trim()];i(l({skills:s})),a("")}},f=t=>{const s=n.skills.filter(r=>r!==t);i(l({skills:s}))};return e.jsx(I,{header:"Edit Postings",children:e.jsx(E,{children:e.jsx(T,{children:e.jsxs(J,{children:[e.jsx(B,{children:"Edit Your Posting"}),e.jsx(P,{children:"Edit your selected posting's information."}),e.jsxs(w,{children:[e.jsx(A,{children:"Part 2 of 2: Job Details"}),e.jsx(c,{children:"Add a Job Description"}),e.jsx(h,{children:"Describe the contents of the job. Include details about the daily tasks, requirements, and expectations."}),e.jsx(K,{children:e.jsx(q,{name:"description",value:n.description,onChange:j})}),e.jsx(p,{}),e.jsx(c,{children:"Add Skills"}),e.jsx(h,{children:"Add some skill keywords to the job."}),e.jsx(z,{htmlFor:"skillInput",children:"Skill to add"}),e.jsx(G,{id:"skillInput",name:"skill",value:o,onChange:b,onKeyDown:k}),e.jsx(H,{children:n.skills.map((t,s)=>e.jsxs(N,{children:[e.jsx(R,{children:t}),e.jsx($,{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/f4297c66e6d9622e462ebb187a46dd67cf9ee2c5dfcfd5088583249a1e3bfc3e?apiKey=d66532d056b14640a799069157705b77&",alt:`${t} Icon`,onClick:()=>f(t)})]},s))}),e.jsx(p,{}),e.jsxs(L,{children:[e.jsx(d,{href:`/employer/editpost1/${u}`,children:e.jsx(M,{children:"Go Back"})}),e.jsx(d,{href:"/employer/home",children:e.jsx(W,{onClick:x,children:"Finished"})})]})]})]})})})})}export{te as default};

import{r as l,u as I,e as C,m as D,j as e,d as m,v as a,F as y,x as v}from"./app-BP2DlbBf.js";import F from"./NavBar-5D4p5KA4.js";import{Container as E,Card as w,FormWrapper as T,Title as J,Subtitle as P,FormContainer as B,SectionTitle as A,SectionHeading as x,SectionDescription as j,Form as K,InputField as U,HorizontalRule as f,Label as z,ErrorInput as H,StyledInput as N,ErrorText as G,TagContainer as O,Tag as R,TagName as $,TagIcon as q,ButtonGroup as L,ActionButton as M,SubmitButton as W}from"./Post2.styles-B5RB6oZ9.js";import"./NavBar.styles-gKPQgFy_.js";import"./styled-components.browser.esm-WlhnpHHw.js";import"./settings-UVqU3YHX.js";import"./index.es-Cq2d97-S.js";import"./index-DUoLStMl.js";import"./index-BMRxO3cL.js";const Q="https://coopconnect.info";function oe(){const[V,k]=l.useState(null),[o,c]=l.useState(""),[h,i]=l.useState(!1);l.useEffect(()=>{(async()=>{try{const s=await axios.get(`${Q}/api/user-id`);k(s.data.user.id),r(a({userId:s.data.user.id}))}catch(s){console.error("Error fetching user ID:",s)}})()},[]);const r=I(),n=C(D),b=t=>{const{name:s,value:d}=t.target;r(a({[s]:d}))},g=t=>{if(t.preventDefault(),n.skills.length===0){i(!0);return}i(!1),r(y(n)).then(()=>{r(v())}).then(()=>{window.location.href="/employer/home"})},u=t=>{c(t.target.value)},p=t=>{if(t.key==="Enter"&&o.trim()){t.preventDefault();const s=[...n.skills,o.trim()];r(a({skills:s})),c(""),i(!1)}},S=t=>{const s=n.skills.filter(d=>d!==t);r(a({skills:s})),s.length===0&&i(!0)};return e.jsx(F,{header:"Posting Jobs",children:e.jsx(E,{children:e.jsx(w,{children:e.jsxs(T,{children:[e.jsx(J,{children:"Create a New Posting"}),e.jsx(P,{children:"Hire amazing students through CO-OP Connect!"}),e.jsxs(B,{children:[e.jsx(A,{children:"Part 2 of 2: Job Details"}),e.jsx(x,{children:"Add a Job Description"}),e.jsx(j,{children:"Describe the contents of the job. Include details about the daily tasks, requirements, and expectations."}),e.jsx(K,{children:e.jsx(U,{name:"description",value:n.description,onChange:b,"data-test-id":"description-input"})}),e.jsx(f,{}),e.jsx(x,{children:"Add Skills"}),e.jsx(j,{children:"Add some skill keywords to the job."}),e.jsx(z,{htmlFor:"skillInput",children:"Skill to add"}),h?e.jsx(H,{id:"skillInput",name:"skills",value:o,onChange:u,onKeyDown:p}):e.jsx(N,{id:"skillInput",name:"skills",value:o,onChange:u,onKeyDown:p}),h&&e.jsx(G,{children:"Please add at least one skill."}),e.jsx(O,{children:n.skills.map((t,s)=>e.jsxs(R,{children:[e.jsx($,{children:t}),e.jsx(q,{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/f4297c66e6d9622e462ebb187a46dd67cf9ee2c5dfcfd5088583249a1e3bfc3e?apiKey=d66532d056b14640a799069157705b77&",alt:`${t} Icon`,onClick:()=>S(t)})]},s))}),e.jsx(f,{}),e.jsxs(L,{children:[e.jsx(m,{href:"/employer/post1",children:e.jsx(M,{children:"Go Back"})}),e.jsx(m,{href:"/employer/home",children:e.jsx(W,{onClick:g,children:"Finished"})})]})]})]})})})})}export{oe as default};

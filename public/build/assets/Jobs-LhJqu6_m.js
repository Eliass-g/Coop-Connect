import{r as n,u as I,e as m,n as B,o as D,a4 as E,j as e,d as b,a5 as N}from"./app-DNWayCnB.js";import{p as k}from"./styled-components.browser.esm-B0h7x_ce.js";import P from"./NavBar-DnO29Ijn.js";import A from"./ViewJobModal-DHk3_YLU.js";import"./index.es-BshNEZt1.js";import{d as V,e as $}from"./index-BMRxO3cL.js";import{MainContainer as z,SearchContainer as H,SearchInnerContainer as K,SubHeading as p,SearchForm as O,SearchField as f,SearchIcon as W,SearchInput as S,ClearButton as J,LocationIcon as _,SearchButton as G,FeaturedJobandList as R,JobList as q,FeaturedJob as Q,JobCardFeatured as U,JobTitle as g,CompanyInfo as X,CompanyDetails as Y,CompanyName as Z,CompanyLocation as ee,SkillsList as y,SkillBadge as C,ApplyButton as se,JobFullDescription as te,JobColumn as oe,JobCard as re,JobMeta as ie,JobDescription as ne,Divider as ae,ViewButton as le}from"./Jobs.styles-B_uFmkOh.js";import"./NavBar.styles-CDHeNScS.js";import"./settings-UVqU3YHX.js";import"./index-CCYKEXcx.js";const ce=k(p)`
    position: relative;

    margin-top: 20px;
    z-index: 10; /* Ensure the title is above the job cards */
`,de=k.div`
    position: relative; /* Create a stacking context */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${({darkMode:r})=>r?"#2C2C2C":"#fff"};
    transition: background-color 0.5s ease, color 0.5s ease;
    border: 1px solid ${({darkMode:r})=>r?"#555":"#ddd"};
    border-radius: 8px;
`;function ge(){const[r,l]=n.useState(null),[c,j]=n.useState(""),[d,u]=n.useState(""),[v,w]=n.useState(!1),[L,T]=n.useState(null),h=I(),a=m(B);m(D);const s=!1,t="1em";n.useEffect(()=>{h(E())},[h]),n.useEffect(()=>{a.length>0&&l(a[0])},[a]);const M=async o=>{o.preventDefault();try{const i=await h(N({searchTerm:c.split(",").map(x=>x.trim()),location:d}));l(i.payload[0])}catch(i){console.error("Error searching jobs:",i)}},F=()=>{w(!1),T(null)};return e.jsxs(P,{header:"All Postings",children:[e.jsxs(z,{darkMode:s,fontSize:t,children:[e.jsx(H,{darkMode:s,fontSize:t,children:e.jsxs(K,{darkMode:s,fontSize:t,children:[e.jsx(p,{darkMode:s,fontSize:t,children:"Search for Job Postings"}),e.jsxs(O,{darkMode:s,fontSize:t,onSubmit:M,children:[e.jsxs(f,{darkMode:s,fontSize:t,children:[e.jsx(W,{icon:V,darkMode:s,fontSize:t}),e.jsx(S,{darkMode:s,fontSize:t,type:"text",placeholder:"Search by Job Titles, Keywords",value:c,onChange:o=>j(o.target.value),"aria-label":"Job Titles, Keywords","data-test-id":"search-field-input"}),c&&e.jsx(J,{onClick:()=>j(""),darkMode:s,children:"✕"})]}),e.jsxs(f,{darkMode:s,fontSize:t,children:[e.jsx(_,{icon:$,darkMode:s,fontSize:t}),e.jsx(S,{darkMode:s,fontSize:t,type:"text",value:d,onChange:o=>u(o.target.value),"aria-label":"Location",placeholder:"Search by Location"}),d&&e.jsx(J,{onClick:()=>u(""),darkMode:s,children:"✕"})]}),e.jsx(G,{darkMode:s,fontSize:t,type:"submit",children:"View Jobs"})]}),e.jsx(p,{darkMode:s,fontSize:t,style:{marginTop:"20px"},children:"Featured Job"}),e.jsx(R,{darkMode:s,fontSize:t,children:a&&a.length>0?e.jsx(q,{darkMode:s,fontSize:t,children:r&&e.jsx(Q,{darkMode:s,fontSize:t,children:e.jsxs(U,{darkMode:s,fontSize:t,children:[e.jsx(g,{darkMode:s,fontSize:t,children:r.title}),e.jsx(X,{darkMode:s,fontSize:t,children:e.jsxs(Y,{darkMode:s,fontSize:t,children:[e.jsx(Z,{darkMode:s,fontSize:t,children:r.company}),e.jsx(ee,{darkMode:s,fontSize:t,children:r.location})]})}),e.jsx(y,{darkMode:s,fontSize:t,children:r.skills&&r.skills.length>0?r.skills.map((o,i)=>e.jsx(C,{darkMode:s,fontSize:t,children:o},i)):e.jsx("p",{children:"No skills listed."})}),e.jsx(b,{darkMode:s,fontSize:t,href:`/student/viewpost/${r.id}`,children:e.jsx(se,{darkMode:s,fontSize:t,children:"View Posting"})}),e.jsxs(te,{darkMode:s,fontSize:t,children:[e.jsx("strong",{children:"Job Description"}),e.jsx("br",{}),r.description,e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"Job Title"}),e.jsx("br",{}),r.title]})]})})}):e.jsx("p",{children:"No jobs found."})})]})}),e.jsxs(de,{children:[e.jsx(ce,{darkMode:s,fontSize:t,children:"Postings"}),e.jsx(oe,{darkMode:s,fontSize:t,children:a.map(o=>e.jsxs(re,{darkMode:s,fontSize:t,onClick:()=>l(o),children:[e.jsx(g,{darkMode:s,fontSize:t,children:o.title}),e.jsxs(ie,{darkMode:s,fontSize:t,children:[e.jsx("div",{children:o.company}),e.jsx("div",{children:o.location})]}),o.skills&&e.jsx(y,{darkMode:s,fontSize:t,children:o.skills.map((i,x)=>e.jsx(C,{children:i},x))}),e.jsx(ne,{darkMode:s,fontSize:t,dangerouslySetInnerHTML:{__html:o.description}}),e.jsx(ae,{darkMode:s,fontSize:t}),e.jsx(b,{darkMode:s,fontSize:t,href:`/student/viewpost/${o.id}`,children:e.jsx(le,{darkMode:s,fontSize:t,children:"VIEW POSTING"})})]},o.title))})]})]}),v&&e.jsx(A,{darkMode:s,fontSize:t,job:L,onClose:F})]})}export{ge as default};

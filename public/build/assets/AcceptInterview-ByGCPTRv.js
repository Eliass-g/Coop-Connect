import{r as a,u as f,e as j,a0 as S,q as w,a1 as v,j as e,p as l,l as d}from"./app-pcpPOzh4.js";import{p as n}from"./styled-components.browser.esm-Cye39UAp.js";import D from"./NavBar-CLkJCdju.js";import"./index-CBFIEith.js";import"./NavBar.styles-bKlC7kf5.js";import"./settings-UVqU3YHX.js";import"./index.es-n2NVWXFw.js";import"./index-Bn4jQ2MY.js";import"./index-BMRxO3cL.js";const M=()=>{const[c,p]=a.useState(null),i=f(),t=j(S),{props:h}=w(),{userJobsId:s}=h;a.useEffect(()=>{i(v({userJobsId:s})).then(()=>{console.log(t)})},[i,s]);const u=o=>{p(o)},x=()=>{c?i(l({userJobsId:s,timeSlots:[c],status:"Scheduled"})).then(()=>{const o={recipient_id:t.user_id,redirect:`${t.id}`,message:"Accepted Interview"};i(d(o))}).then(()=>{window.location.href="/student/viewapplications"}):alert("Please select a time slot.")},g=()=>{window.confirm("Are you sure you want to decline this application?")&&i(l({userJobsId:s,status:"Declined"})).then(()=>{const o={recipient_id:t.user_id,redirect:`${t.id}`,message:"Declined Interview"};i(d(o))}),window.location.href="/student/viewapplications"},b=o=>{const r=new Date(o);return new Intl.DateTimeFormat("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0,timeZoneName:"short"}).format(r)};return e.jsx(D,{header:"Accept Interview",children:e.jsx(y,{children:t&&e.jsxs(e.Fragment,{children:[e.jsxs(k,{children:[e.jsx("h2",{children:t.title}),e.jsx("h3",{children:t.company}),e.jsx("p",{children:t.description})]}),e.jsx(I,{children:e.jsx("p",{children:t.message})}),e.jsxs(J,{children:[e.jsx("h4",{children:"Select a Time Slot"}),t.timeSlots.map((o,r)=>e.jsxs(A,{children:[e.jsx("input",{type:"radio",id:`slot-${r}`,name:"timeSlot",value:o,onChange:()=>u(o)}),e.jsx("label",{htmlFor:`slot-${r}`,children:b(o)})]},r))]}),e.jsx(m,{onClick:x,children:"Submit"}),e.jsx(C,{onClick:g,children:"Decline"})]})})})},y=n.div`
    padding: 20px;
`,k=n.div`
    margin-bottom: 20px;
`,I=n.div`
    margin-bottom: 20px;
`,J=n.div`
    margin-bottom: 20px;
`,A=n.div`
    margin-bottom: 10px;
`,m=n.button`
    margin-right: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`,C=n(m)`
    background-color: #dc3545;

    &:hover {
        background-color: #c82333;
    }
`;export{M as default};

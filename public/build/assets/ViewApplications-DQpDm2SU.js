import{r as c,u as f,e as b,a6 as j,a7 as g,j as n,p as w,l as v}from"./app-BP2DlbBf.js";import{p as t}from"./styled-components.browser.esm-WlhnpHHw.js";import y from"./NavBar-CoCfeu4G.js";import"./NavBar.styles-CA0dnq32.js";import"./settings-UVqU3YHX.js";import"./index.es-Cq2d97-S.js";import"./index-DUoLStMl.js";import"./index-BMRxO3cL.js";const P=()=>{const[i,l]=c.useState("Pending"),o=f(),r=b(j);c.useEffect(()=>{o(g())},[o]);const p=["Pending","Interview","Scheduled","Declined","Rejected"],u=e=>{window.location.href=`/student/accept-interview/${e}`},x=e=>{window.confirm("Are you sure you want to decline this application?")&&o(w({userJobsId:e.id,status:"Declined"})).then(()=>{const s={recipient_id:e.user_id,redirect:`${e.jobs_id}`,message:"Declined Interview"};o(v(s))})},h=e=>{const s=new Date(e);return new Intl.DateTimeFormat("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0,timeZoneName:"short"}).format(s)},m=()=>r.filter(e=>e.status===i).map(e=>n.jsxs(C,{children:[n.jsxs("h3",{children:[n.jsx("b",{children:"Position:"})," ",e.title]}),n.jsxs("p",{children:[n.jsx("b",{children:"Company:"})," ",e.company]}),n.jsxs("p",{children:[n.jsx("b",{children:"Location:"})," ",e.location]}),n.jsxs("p",{children:[n.jsx("b",{children:"Description:"})," ",e.description]}),e.status==="Interview"&&n.jsxs(E,{children:[n.jsx(a,{onClick:()=>u(e.id),children:"Accept"}),n.jsx(a,{onClick:()=>x(e),children:"Decline"})]}),e.status==="Scheduled"&&n.jsxs("p",{children:[n.jsx("b",{children:"Date:"})," ",h(e.timeSlots)]})]},e.id));return n.jsx(y,{header:"View Applications",children:n.jsxs(D,{children:[n.jsx(A,{children:p.map(e=>n.jsx(k,{$active:i===e,onClick:()=>l(e),children:e},e))}),r.length>0?n.jsx(d,{children:m()}):n.jsx(d,{children:"No applications found"})]})})},D=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`,A=t.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`,k=t.div`
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
    background: ${({$active:i})=>i?"#6b538c":"#E0E0E0"};
    color: ${({$active:i})=>i?"#FFF":"#000"};
    border-radius: 5px;
    user-select: none;

    &:hover {
        background: ${({$active:i})=>i?"#5A4476":"#c7c7c7"};
    }
`,d=t.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
`,C=t.div`
    background: #fff;
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
`,E=t.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`,a=t.button`
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
    background: #6b538c;
    color: #fff;
    border: none;
    border-radius: 5px;
    user-select: none;

    &:hover {
        background: #5a4476;
    }
`;export{P as default};

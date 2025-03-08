import{q as C,r as h,u as R,e as w,V as E,X as M,Y as I,t as F,j as e,p as _,k as $,l as v}from"./app-DNWayCnB.js";import{p as t}from"./styled-components.browser.esm-B0h7x_ce.js";import N from"./NavBar-BbcpywIw.js";import"./NavBar.styles-rqfB7x5C.js";import"./settings-UVqU3YHX.js";import"./index.es-BshNEZt1.js";import"./index-CCYKEXcx.js";import"./index-BMRxO3cL.js";const P=({applicant:s,onClose:c,onSubmit:d})=>{const[x,i]=h.useState(""),m=()=>{d(x),c()};return e.jsx(H,{children:e.jsxs(O,{children:[e.jsxs("h2",{children:["Reject ",s.name]}),e.jsxs(q,{children:[e.jsx(G,{children:"Message"}),e.jsx(X,{rows:"4",value:x,onChange:j=>i(j.target.value),placeholder:"Enter your message here"})]}),e.jsxs(Y,{children:[e.jsx(u,{color:"gray",onClick:c,children:"Cancel"}),e.jsx(u,{color:"red",onClick:m,children:"Send"})]})]})})},ie=()=>{const{props:s}=C(),{jobId:c}=s,[d,x]=h.useState("Pending"),[i,m]=h.useState(null),[j,g]=h.useState(!1),o=R(),f=w(E),l=w(M);h.useEffect(()=>{o(I({jobsId:c})),o(F({jobId:c}))},[o,c]);const S=["Pending","Interview","Scheduled","Declined","Rejected"],k=n=>{m(n),g(!0)},D=n=>{o(_({userJobsId:i.id,status:"Rejected",message:n,timeSlots:[""]})).then(()=>{const r={receiver_email:i.email,message:n};o($(r))}).then(()=>{const r={recipient_id:i.user_id,redirect:"viewapplications",message:"Rejected for Interview"};o(v(r))}).then(()=>{const r={recipient_id:i.user_id,redirect:"message",message:n};o(v(r))})},y=n=>{window.location.href=`/employer/accept-applicant/${n.id}`},A=n=>{const r=new Date(n);return new Intl.DateTimeFormat("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0,timeZoneName:"short"}).format(r)},T=()=>f.filter(n=>n.status===d).map(n=>e.jsxs(b,{children:[e.jsx(a,{children:n.name}),e.jsx(a,{children:n.email}),e.jsx(a,{children:e.jsx(B,{href:n.resume,target:"_blank",rel:"noopener noreferrer",children:"View Resume"})}),n.status==="Pending"&&e.jsxs(a,{children:[e.jsx(u,{color:"green",onClick:()=>y(n),children:"Accept"}),e.jsx(u,{color:"red",onClick:()=>k(n),children:"Reject"})]}),n.status==="Scheduled"&&e.jsx(a,{children:A(n.timeSlots)})]},n.id));return e.jsx(N,{header:"View Applicants",children:l&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("b",{children:"Position:"})," ",l.title]}),e.jsxs("p",{children:[e.jsx("b",{children:"Company:"})," ",l.company]}),e.jsxs("p",{children:[e.jsx("b",{children:"Location:"})," ",l.location]}),e.jsxs("p",{children:[e.jsx("b",{children:"Description:"})," ",l.description]}),e.jsxs(J,{children:[e.jsx(V,{children:S.map(n=>e.jsx(L,{$active:d===n,onClick:()=>x(n),children:n},n))}),e.jsxs(U,{children:[e.jsx(z,{children:e.jsxs(b,{children:[e.jsx(p,{children:"Name"}),e.jsx(p,{children:"Email"}),e.jsx(p,{children:"Resume"}),d==="Pending"&&e.jsx(p,{children:"Actions"}),d==="Scheduled"&&e.jsx(p,{children:"Date"})]})}),e.jsx("tbody",{children:f.length>0?T():e.jsx(b,{children:e.jsx(a,{colSpan:"5",children:"No applicants found."})})})]})]}),j&&e.jsx(P,{applicant:i,onClose:()=>g(!1),onSubmit:D})]})})},J=t.div`
    padding: 20px;
`,V=t.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`,L=t.div`
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
    background: ${({$active:s})=>s?"#6b538c":"#E0E0E0"};
    color: ${({$active:s})=>s?"#FFF":"#000"};
    border-radius: 5px;
    user-select: none;

    &:hover {
        background: ${({$active:s})=>s?"#5A4476":"#c7c7c7"};
    }
`,U=t.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
`,z=t.thead`
    background-color: #f1f1f1;
`,b=t.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`,p=t.th`
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
`,a=t.td`
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
`,B=t.a`
    color: #007bff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`,u=t.button`
    margin: 5px;
    padding: 10px 15px;
    font-size: 1em;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: ${s=>s.color};
`,H=t.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`,O=t.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    max-width: 90%;
`,q=t.div`
    margin-bottom: 15px;
`,G=t.label`
    display: block;
    margin-bottom: 5px;
`,X=t.textarea`
    width: 100%;
    padding: 10px;
    resize: none;
`;t.input`
    width: 100%;
    padding: 10px;
`;const Y=t.div`
    display: flex;
    justify-content: flex-end;
`;export{ie as default};

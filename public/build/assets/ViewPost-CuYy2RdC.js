import{q as y,u as w,e as c,X as j,o as P,a8 as v,r as s,t as k,a9 as f,j as e,aa as C,l as J}from"./app-pcpPOzh4.js";import{p as o}from"./styled-components.browser.esm-Cye39UAp.js";import S from"./NavBar-CLkJCdju.js";import"./NavBar.styles-bKlC7kf5.js";import"./settings-UVqU3YHX.js";import"./index.es-n2NVWXFw.js";import"./index-Bn4jQ2MY.js";import"./index-BMRxO3cL.js";function ie(){const{props:i}=y(),{jobId:n,userId:p}=i,a=w(),t=c(j);c(P);const l=c(v),[b,d]=s.useState(!1),[x,h]=s.useState("");s.useEffect(()=>{a(k({jobId:n}))},[a]),s.useEffect(()=>{a(f({userId:p,jobsId:n}))},[a,t]);const g=()=>{d(!0)},u=()=>{a(C({jobsId:Number(n),userId:p,resume:x})).then(r=>{a(f({userId:p,jobsId:n}))}).then(()=>{const r={recipient_id:t.userId,redirect:`${t.id}`,message:"Applied"};a(J(r))}),d(!1)};return e.jsxs(S,{header:"Job Posting",children:[e.jsx(I,{children:e.jsx(M,{children:e.jsx(A,{children:e.jsxs(L,{children:[e.jsxs(T,{children:[e.jsx(B,{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/c18c37d4baea2f5cbd4d392adacf6fa12686c4c99b1f2a12d132c4a3ef4a5899?apiKey=d66532d056b14640a799069157705b77&",alt:"Company Logo"}),e.jsxs(N,{children:[e.jsx(E,{children:t.title}),e.jsx(O,{children:t.company}),e.jsx(D,{children:t.description})]})]}),e.jsxs(R,{children:[e.jsxs($,{children:["Posting Status: ",t.postingStatus]}),e.jsxs(U,{children:["Job Type: ",t.jobType]}),e.jsxs(z,{children:["Work Location: ",t.location]})]}),e.jsx(q,{children:e.jsx(F,{onClick:g,disabled:l,children:l?"Applied":"Apply"})})]})})})}),b&&e.jsx(H,{children:e.jsxs(K,{children:[e.jsx(V,{children:"Apply for Job"}),e.jsx(W,{children:e.jsxs("label",{children:["Resume Link:"," ",e.jsx("input",{type:"text",value:x,onChange:r=>h(r.target.value)})]})}),e.jsxs(X,{children:[e.jsx(m,{onClick:()=>d(!1),children:"Cancel"}),e.jsx(m,{onClick:u,children:"Apply Now"})]})]})})]})}const I=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    flex-shrink: 0;
    width: 100%;
    min-height: 100vh;
`,M=o.section`
    align-self: center;
    display: flex;
    width: 788px;
    max-width: 100%;
    flex-direction: column;
    padding: 10px 10px 0;
`,A=o.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: var(--Schemes-Primary-Container, #eddcff);
    padding: 20px;
    margin-top: 20px;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`,L=o.section`
    display: flex;
    flex-direction: column; /* Changed from row to column */
    gap: 20px;
    color: var(--Schemes-On-Primary-Container, #260e44);
    font-weight: 400;
    @media (max-width: 991px) {
        flex-wrap: wrap;
    }
`,T=o.div`
    display: flex;
    gap: 20px;
    color: var(--Schemes-On-Primary-Container, #260e44);
    font-weight: 400;
    @media (max-width: 991px) {
        flex-wrap: wrap;
    }
`,B=o.img`
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 100px;
    border: 2px solid rgba(45, 54, 72, 1);
    max-width: 100%;
    margin: auto 0;
`,N=o.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`,E=o.h3`
    font: 32px Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`,O=o.h4`
    color: var(--Schemes-Secondary, #6c538c);
    margin-top: 10px;
    font: 500 22px/127% Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`,D=o.p`
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    letter-spacing: 0.5px;
    margin-top: 10px;
    font: 16px/24px Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`,R=o.div`
    justify-content: center;
    border-bottom: 1px solid black;
    display: flex;
    gap: 10px;
    font-size: 16px;
    color: var(--Schemes-On-Primary, #fff);
    font-weight: 500;
    letter-spacing: 0.15px;
    line-height: 150%;
    padding: 10px 20px;
    @media (max-width: 991px) {
        flex-wrap: wrap;
        padding: 0 20px;
    }
`,$=o.span`
    font-family: Poppins, sans-serif;
    border-radius: 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    background-color: var(--Palettes-Primary-40, #773dc3);
    justify-content: center;
    padding: 10px;
`,U=o.span`
    font-family: Poppins, sans-serif;
    border-radius: 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    background-color: var(--Palettes-Primary-40, #773dc3);
    justify-content: center;
    padding: 10px;
`,z=o.span`
    font-family: Poppins, sans-serif;
    border-radius: 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    background-color: var(--Palettes-Primary-40, #773dc3);
    justify-content: center;
    padding: 10px;
`,q=o.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
`,F=o.button`
    font-family: Poppins, sans-serif;
    background-color: ${i=>i.applied?"rgba(119, 61, 195, 0.5)":"var(--Palettes-Primary-40, #773dc3)"};
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: ${i=>i.applied?"not-allowed":"pointer"};
    text-align: center;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${i=>i.applied?"rgba(119, 61, 195, 0.5)":"var(--Palettes-Primary-30, #542a93)"};
    }

    &:disabled {
        background-color: rgba(119, 61, 195, 0.5);
        cursor: not-allowed;
    }
`,H=o.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`,K=o.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    width: 400px;
    max-width: 100%;
`,V=o.h3`
    margin: 0;
    margin-bottom: 10px;
    font-size: 24px;
    text-align: center;
`,W=o.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,X=o.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`,m=o.button`
    font-family: Poppins, sans-serif;
    background-color: var(--Palettes-Primary-40, #773dc3);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s;

    &:hover {
        background-color: var(--Palettes-Primary-30, #542a93);
    }
`;export{ie as default};

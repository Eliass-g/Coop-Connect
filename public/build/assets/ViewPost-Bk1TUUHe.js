import{q as d,u as x,e as s,X as l,o as m,r as f,t as h,j as e,d as n,Z as b}from"./app-pcpPOzh4.js";import{p as t}from"./styled-components.browser.esm-Cye39UAp.js";import g from"./NavBar-BOO9_XOg.js";import"./NavBar.styles-CDm2d02o.js";import"./settings-UVqU3YHX.js";import"./index.es-n2NVWXFw.js";import"./index-Bn4jQ2MY.js";import"./index-BMRxO3cL.js";function z(){const{props:p}=d(),{jobId:i}=p,a=x(),o=s(l);s(m),f.useEffect(()=>{a(h({jobId:i}))},[a]);const c=()=>{a(b({jobId:i}))};return e.jsx(g,{header:"Job Postings",children:e.jsx(u,{children:e.jsxs(w,{children:[e.jsx(y,{children:"Current Company Postings"}),e.jsx(j,{children:e.jsxs(P,{children:[e.jsxs(v,{children:[e.jsx(J,{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/c18c37d4baea2f5cbd4d392adacf6fa12686c4c99b1f2a12d132c4a3ef4a5899?apiKey=d66532d056b14640a799069157705b77&",alt:"Company Logo"}),e.jsxs(S,{children:[e.jsx(k,{children:o.title}),e.jsx(C,{children:o.company}),e.jsx(T,{children:o.description})]}),e.jsx(n,{href:`/employer/editpost1/${i}`,children:e.jsx(I,{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/0f00bd98ccee0cca896d493616005574e2e5aaa7076659900adbd3e310f5af87?apiKey=d66532d056b14640a799069157705b77&",alt:"Status Icon"})})]}),e.jsxs(D,{children:[e.jsxs(E,{children:["Posting Status: ",o.postingStatus]}),e.jsxs(L,{children:["Job Type: ",o.jobType]}),e.jsxs(B,{children:["Work Location: ",o.location]})]}),e.jsxs(O,{children:[e.jsx(n,{href:`/employer/viewapplicants/${i}`,children:e.jsx(r,{children:"View Applicants"})}),e.jsx(n,{href:"/employer/home",children:e.jsx(r,{onClick:c,children:"Delete Job Posting"})})]})]})})]})})})}const u=t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    flex-shrink: 0;
    width: 100%;
    min-height: 100vh;
`,w=t.section`
    align-self: center;
    display: flex;
    width: 788px;
    max-width: 100%;
    flex-direction: column;
    padding: 10px 10px 0;
`,y=t.h2`
    color: var(--Schemes-On-Background, #1d1a20);
    align-self: center;
    font: 400 36px/122% Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`,j=t.article`
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
`,P=t.section`
    display: flex;
    flex-direction: column; /* Changed from row to column */
    gap: 20px;
    color: var(--Schemes-On-Primary-Container, #260e44);
    font-weight: 400;
    @media (max-width: 991px) {
        flex-wrap: wrap;
    }
`,v=t.div`
    display: flex;
    gap: 20px;
    color: var(--Schemes-On-Primary-Container, #260e44);
    font-weight: 400;
    @media (max-width: 991px) {
        flex-wrap: wrap;
    }
`,J=t.img`
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 100px;
    border: 2px solid rgba(45, 54, 72, 1);
    max-width: 100%;
    margin: auto 0;
`,S=t.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`,k=t.h3`
    font: 32px Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`,C=t.h4`
    color: var(--Schemes-Secondary, #6c538c);
    margin-top: 10px;
    font: 500 22px/127% Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`,T=t.p`
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    letter-spacing: 0.5px;
    margin-top: 10px;
    font: 16px/24px Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`,I=t.img`
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 24px;
    align-self: start;
`,D=t.div`
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
`,E=t.span`
    font-family: Poppins, sans-serif;
    border-radius: 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    background-color: var(--Palettes-Primary-40, #773dc3);
    justify-content: center;
    padding: 10px;
`,L=t.span`
    font-family: Poppins, sans-serif;
    border-radius: 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    background-color: var(--Palettes-Primary-40, #773dc3);
    justify-content: center;
    padding: 10px;
`,B=t.span`
    font-family: Poppins, sans-serif;
    border-radius: 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    background-color: var(--Palettes-Primary-40, #773dc3);
    justify-content: center;
    padding: 10px;
`,O=t.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
`,r=t.button`
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
`;export{z as default};

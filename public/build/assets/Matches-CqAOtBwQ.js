import{u as m,e as i,n as f,o as h,r as c,a2 as g,j as e}from"./app-BP2DlbBf.js";import{f as b,p as o}from"./styled-components.browser.esm-WlhnpHHw.js";import u from"./ViewJobModal-vbcG5dmG.js";const y=b`
    0% {
        opacity: 0;
        transform: translateY(-40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`,w=o.section`
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    padding: 40px 30px;

    @media (max-width: 991px) {
        padding: 20px;
    }
`,S=o.h2`
    color: var(--Schemes-Primary, #6b538c);
    text-decoration: underline;
    align-self: center;
    font: 600 32px Poppins, sans-serif;
`,j=o.p`
    color: var(--Schemes-Outline, #7b757f);
    margin-top: 10px;
    font: 24px/133% Poppins, sans-serif;
`,J=o.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
    flex-direction: column;
    font-size: 16px;
    color: var(--Schemes-On-Primary-Container, #260e44);
    line-height: 150%;
    padding: 0 60px 10px;

    @media (max-width: 991px) {
        padding: 0 20px;
    }
`,v=o.article`
    max-width: 100%;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--Schemes-Primary-Container, #eddcff);
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    margin-top: ${n=>n.hasMargin?"10px":"0"};
    animation: ${y} 0.8s ease forwards;
    animation-delay: ${n=>n.index*.1}s;
    opacity: 0; /* Start hidden */
    transition: transform 0.7s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 1001px) {
        font-size: 16px;
    }
`,C=o.h3`
    color: var(--Schemes-On-Primary-Container, #260e44);
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px; /* 133.333% */
`,k=o.section`
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    letter-spacing: 0.15px;
    margin-top: 15px;

    @media (max-width: 991px) {
        flex-direction: column;
    }
`,P=o.div`
    display: flex;
    flex-direction: column;
    margin: auto 0;
    padding: 3px 0;
    flex-wrap: wrap;
`,M=o.p`
    font-family: Poppins, sans-serif;
`,O=o.p`
    font-family: Poppins, sans-serif;
`,z=o.hr`
    border: 1px solid rgba(38, 14, 68, 1);
    background-color: var(--Schemes-On-Primary-Container, #260e44);
    margin-top: 14px;
`,E=o.button`
    justify-content: center;
    align-self: center;
    border-radius: 12px;
    background-color: var(--Schemes-Primary, #6b538c);
    margin-top: 15px;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.5px;
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #543b6f;
        transform: scale(1.05);
    }
`;function Y(){const n=m(),l=i(f);i(h);const[s,t]=c.useState(null);c.useEffect(()=>{n(g({skills:[]}))},[n]);const p=l.slice(0,3),d=a=>{t(a)},x=()=>{t(null)};return e.jsxs(w,{children:[e.jsx(S,{children:"Matches"}),e.jsx(j,{children:"Some recommended jobs for you to check out!"}),e.jsx(J,{children:p.map((a,r)=>e.jsxs(v,{hasMargin:r!==0,children:[e.jsx(C,{children:a.title}),e.jsxs(k,{children:[e.jsx("img",{loading:"lazy",src:a.imgSrc,alt:a.imgAlt}),e.jsxs(P,{children:[e.jsx(M,{children:a.company}),e.jsx(O,{children:a.location})]})]}),e.jsx(z,{}),e.jsx(E,{onClick:()=>d(a),children:"VIEW JOB"})]},r))}),s&&e.jsx(u,{job:s,onClose:x})]})}export{Y as default};

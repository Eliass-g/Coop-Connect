import{j as e}from"./app-pcpPOzh4.js";import{p as o}from"./styled-components.browser.esm-Cye39UAp.js";const a=o.section`
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    padding: 40px 30px;
`,t=o.h2`
    color: var(--Schemes-Primary, #6b538c);
    text-decoration: underline;
    align-self: center;
    font: 600 32px Poppins, sans-serif;
`,r=o.p`
    color: var(--Schemes-Outline, #7b757f);
    margin-top: 10px;
    font: 24px/133% Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`,s=o.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
    flex-direction: column;
    font-size: 16px;
    color: var(--Schemes-On-Primary-Container, #260e44);
    line-height: 150%;
    padding: 0 60px 10px;
    @media (max-width: 991px) {
        max-width: 100%;
        padding: 0 20px;
    }
`,c=o.article`
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--Schemes-Primary-Container, #eddcff);
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 20px 10px;
    margin-top: ${n=>n.hasMargin?"10px":"0"};
`,p=o.h3`
    color: var(--Schemes-On-Primary-Container, #260e44);
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 133.333% */
`,l=o.section`
    align-self: center;
    display: flex;
    margin-top: 15px;
    gap: 15px;
    letter-spacing: 0.15px;
`,d=o.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: auto 0;
    padding: 3px 0;
`,m=o.p`
    font-family: Poppins, sans-serif;
`,x=o.p`
    font-family: Poppins, sans-serif;
`,f=o.hr`
    border: 1px solid rgba(38, 14, 68, 1);
    background-color: var(--Schemes-On-Primary-Container, #260e44);
    margin-top: 14px;
`,g=o.button`
    font-family: Roboto, sans-serif;
    justify-content: center;
    border-radius: 12px;
    background-color: var(--Schemes-Primary, #6b538c);
    align-self: center;
    margin-top: 15px;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.5px;
    padding: 8px 16px;
    cursor: pointer;
`,h=[{title:"Front-End Developer",companyName:"Company Name",location:"Location",imgSrc:"https://cdn.builder.io/api/v1/image/assets/TEMP/f431c52a26bb3f4d9af631c4376a9111f916c5faa63eae0fe2f1f5853c8bb441?apiKey=d66532d056b14640a799069157705b77&",imgAlt:"Company Logo"},{title:"Front-End Developer",companyName:"Company Name",location:"Location",imgSrc:"https://cdn.builder.io/api/v1/image/assets/TEMP/f431c52a26bb3f4d9af631c4376a9111f916c5faa63eae0fe2f1f5853c8bb441?apiKey=d66532d056b14640a799069157705b77&",imgAlt:"Company Logo"}];function u(){return e.jsxs(a,{children:[e.jsx(t,{children:"Matches"}),e.jsx(r,{children:"Some recommended jobs for you to check out!"}),e.jsx(s,{children:h.map((n,i)=>e.jsxs(c,{hasMargin:i!==0,children:[e.jsx(p,{children:n.title}),e.jsxs(l,{children:[e.jsx("img",{loading:"lazy",src:n.imgSrc,alt:n.imgAlt}),e.jsxs(d,{children:[e.jsx(m,{children:n.companyName}),e.jsx(x,{children:n.location})]})]}),e.jsx(f,{}),e.jsx(g,{children:"VIEW JOB"})]},i))})]})}export{u as default};

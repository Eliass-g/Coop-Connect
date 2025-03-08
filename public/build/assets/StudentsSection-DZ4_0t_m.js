import{j as e}from"./app-DNWayCnB.js";import{p as a}from"./styled-components.browser.esm-B0h7x_ce.js";function h(){const i=[{name:"Alex Norton",imgSrc:"https://cdn.builder.io/api/v1/image/assets/TEMP/cb388c4792d2da12914aa0e249254d3a981fcff8dd25ec90cae6e0e0a59e3cbb?apiKey=d66532d056b14640a799069157705b77&",email:"alex@co-opconnect.com",id:"01",class:"Alpha"},{name:"Samuel Raltman",imgSrc:"https://cdn.builder.io/api/v1/image/assets/TEMP/cb388c4792d2da12914aa0e249254d3a981fcff8dd25ec90cae6e0e0a59e3cbb?apiKey=d66532d056b14640a799069157705b77&",email:"samuel@co-opconnect.com",id:"02",class:"Beta"},{name:"Joshua Chan",imgSrc:"https://cdn.builder.io/api/v1/image/assets/TEMP/cb388c4792d2da12914aa0e249254d3a981fcff8dd25ec90cae6e0e0a59e3cbb?apiKey=d66532d056b14640a799069157705b77&",email:"joshchan@co-opconnect.com",id:"03",class:"Xeta"},{name:"Navdeep Singh",imgSrc:"https://cdn.builder.io/api/v1/image/assets/TEMP/cb388c4792d2da12914aa0e249254d3a981fcff8dd25ec90cae6e0e0a59e3cbb?apiKey=d66532d056b14640a799069157705b77&",email:"navdeep@co-opconnect.com",id:"04",class:"Omega"}];return e.jsxs(d,{children:[e.jsx(r,{children:"Current Students"}),e.jsxs(n,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Student"}),e.jsx("th",{children:"Classroom"}),e.jsx("th",{style:{textAlign:"center"},children:"Email"}),e.jsx("th",{style:{textAlign:"center"},children:"Student ID"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:i.map((t,c)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(s,{children:[e.jsx(o,{loading:"lazy",src:t.imgSrc,alt:`Image of ${t.name}`}),e.jsx(l,{children:t.name})]})}),e.jsx("td",{children:t.class}),e.jsx("td",{style:{textAlign:"center"},children:t.email}),e.jsx("td",{style:{textAlign:"center"},children:t.id}),e.jsx("td",{children:e.jsx(p,{children:"View Student"})})]},c))})]})]})}const d=a.section`
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    display: flex;
    height: 364px;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
`,r=a.h1`
    color: var(--Schemes-Primary, #6b538c);
    font: 500 24px/133% Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`,n=a.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    border-radius: 10px;
    border: 1px solid var(--gray-200, #e2e8f0);
    background: var(--white, #fff);
    th {
        padding: 12px;
        border-bottom: 1px solid var(--gray-200, #e2e8f0);
        color: var(--gray-600, #4a5568);
    }
    td {
        padding: 12px;
        border-bottom: 1px solid var(--gray-200, #e2e8f0);
        color: var(--gray-700, #2d3748);
    }
`,s=a.div`
    display: flex;
    align-items: center;
    gap: 16px;
`,o=a.img`
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    width: 32px;
    border: 1px solid rgba(123, 117, 127, 1);
    border-radius: 50%;
`,l=a.p`
    margin: 0;
    font-family: Inter, sans-serif;
`,p=a.button`
    font-family: Inter, sans-serif;
    display: flex;
    height: 24px;
    padding: 0px 8px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 6px;
    background: var(--Schemes-Primary, #6b538c);
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    cursor: pointer;
    &:hover {
        background-color: #543e6c;
    }
`;export{h as default};

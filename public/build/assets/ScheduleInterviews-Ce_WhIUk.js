import{r as u,j as e}from"./app-C5_nSkG0.js";import{p as n}from"./styled-components.browser.esm-B3TAIFtu.js";import C from"./NavBar-CNV2D5l_.js";import"./settings-UVqU3YHX.js";const L=()=>{const[t,d]=u.useState(new Date().getMonth()),[a,h]=u.useState(new Date().getFullYear()),y=(r,i)=>{const c=new Date(i,r+1,0).getDate(),f=new Date(i,r,1).getDay(),p=f===0?6:f-1,D=new Date(i,r,0).getDate(),M=42-(c+p);return[...Array(p).fill(null).map((g,l)=>({day:D-p+l+1,isInCurrentMonth:!1})),...Array(c).fill(null).map((g,l)=>({day:l+1,isInCurrentMonth:!0})),...Array(M).fill(null).map((g,l)=>({day:l+1,isInCurrentMonth:!1}))]},w=()=>{const r=new Date;t===r.getMonth()&&a===r.getFullYear()||(t===0?(d(11),h(a-1)):d(t-1))},b=()=>{t===11?(d(0),h(a+1)):d(t+1)},j=y(t,a),o=new Date,v=t===o.getMonth()&&a===o.getFullYear();return e.jsx(C,{header:"Interviews",children:e.jsx(I,{children:e.jsx(S,{children:e.jsxs(k,{children:[e.jsx(A,{children:"Schedule your Interviews"}),e.jsxs(P,{children:[e.jsxs(Y,{children:[e.jsx(F,{children:new Date(a,t).toLocaleDateString("en-us",{month:"long",year:"numeric"})}),e.jsxs(z,{children:[e.jsx(m,{loading:"lazy",src:"https://img.icons8.com/ios-glyphs/30/000000/chevron-left.png",onClick:w,isDisabled:v}),e.jsx(m,{loading:"lazy",src:"https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png",onClick:b,isDisabled:!1})]})]}),e.jsxs(T,{children:[e.jsx(s,{children:"Mo"}),e.jsx(s,{children:"Tu"}),e.jsx(s,{children:"We"}),e.jsx(s,{children:"Th"}),e.jsx(s,{children:"Fr"}),e.jsx(s,{children:"Sa"}),e.jsx(s,{children:"Su"})]}),e.jsx(W,{children:j.map((r,i)=>{const c=r.day===o.getDate()&&t===o.getMonth()&&a===o.getFullYear();return r.isInCurrentMonth?c?e.jsx(N,{children:r.day},i):e.jsx(x,{children:r.day},i):e.jsx(E,{children:r.day},i)})})]})]})})})})},I=n.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    flex: 1 0 0;
    align-self: stretch;
    background-color: var(--Schemes-Background, #fff7ff);
`,S=n.div`
    align-items: center;
    align-self: stretch;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    display: flex;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
`,k=n.div`
    display: flex;
    width: 782px;
    max-width: 100%;
    flex-direction: column;
`,A=n.div`
    color: var(--Schemes-Primary, #6b538c);
    text-decoration-line: underline;
    align-self: center;
    font: 600 32px Poppins, sans-serif;
`,P=n.div`
    border-radius: 16px;
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
        0px 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-color: rgba(123, 117, 127, 1);
    border-style: solid;
    border-width: 1px;
    background-color: #fff;
    display: flex;
    margin-top: 40px;
    flex-direction: column;
    padding: 30px;
    @media (max-width: 991px) {
        max-width: 100%;
        padding: 0 20px;
    }
`,Y=n.div`
    justify-content: space-between;
    display: flex;
    width: 100%;
    gap: 20px;
    @media (max-width: 991px) {
        max-width: 100%;
        flex-wrap: wrap;
    }
`,F=n.div`
    color: var(--Schemes-Primary, #6b538c);
    margin: auto 0;
    font: 900 24px Inter, sans-serif;
`,z=n.div`
    display: flex;
    gap: 8px;
    justify-content: space-between;
    padding: 16px;
`,m=n.img`
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 30px;
    cursor: ${({isDisabled:t})=>t?"default":"pointer"};
    filter: ${({isDisabled:t})=>t?"grayscale(100%) brightness(150%)":"none"};
    opacity: ${({isDisabled:t})=>t?.5:1};
`,T=n.div`
    display: flex;
    margin-top: 12px;
    gap: -1px;
    font-size: 14px;
    color: #000;
    font-weight: 600;
    white-space: nowrap;
    text-align: center;
    justify-content: space-between;
    padding: 40px 80px 40px 0;
    @media (max-width: 991px) {
        max-width: 100%;
        flex-wrap: wrap;
        padding-right: 20px;
        white-space: initial;
    }
`,s=n.div`
    display: flex;
    font-variant-numeric: lining-nums tabular-nums;
    font-family: Inter, sans-serif;
`,W=n.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: -1px;
    font-size: 14px;
    color: #000;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    justify-content: space-between;
    @media (max-width: 991px) {
        flex-wrap: wrap;
        white-space: initial;
    }
`,x=n.div`
    font-variant-numeric: lining-nums tabular-nums;
    font-family: Inter, sans-serif;
    justify-content: center;
    border-color: rgba(213, 212, 223, 1);
    border-style: solid;
    border-width: 1px;
    padding: 40px;
    @media (max-width: 991px) {
        white-space: initial;
        padding: 0 20px;
    }
`,E=n(x)`
    background-color: var(--Inactive, #f2f3f7);
`,N=n(x)`
    border: 1px solid var(--Stroke, #d5d4df);
    background: var(--Schemes-Primary, #6b538c);
    color: #fff; // Ensures the text is readable
`;export{L as default};

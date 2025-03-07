import{j as o}from"./app-DAlFUNO8.js";import{p as n}from"./styled-components.browser.esm-C7o4QOmv.js";const d=n.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`,s=n.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    width: 100%;
`,c=n.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`,a=n.h2`
    margin: 0;
`,l=n.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
`,p=n.div`
    margin-bottom: 20px;
`,x=n.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`,u=n.button`
    background-color: #e53e3e;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`,b=n.button`
    background-color: grey;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`,m=({title:e,children:r,onConfirm:i,onCancel:t})=>o.jsx(d,{children:o.jsxs(s,{children:[o.jsxs(c,{children:[o.jsx(a,{children:e}),o.jsx(l,{onClick:t,children:"×"})]}),o.jsx(p,{children:r}),o.jsxs(x,{children:[o.jsx(b,{onClick:t,children:"Cancel"}),o.jsx(u,{onClick:i,children:"Confirm"})]})]})});export{m as default};

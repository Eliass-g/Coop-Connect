import{r as s,j as e}from"./app-DAlFUNO8.js";import{p as o}from"./styled-components.browser.esm-C7o4QOmv.js";const R="#FFFFFF",W="#333333",c=(t,l,d=1.5)=>{const p=parseFloat(l);return l==="1em"?`${t*p}px`:l==="1.07em"?`${t*p*1.3}px`:l==="1.12em"?`${t*p*1.7}px`:`${t*p*d}px`},q=o.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({darkMode:t})=>t?W:R};
    color: ${({darkMode:t})=>t?"#FFF":"#333"};
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    width: 90%;
    max-width: 400px;
    max-height: 80%;
    overflow-y: auto;

    @media (min-width: 768px) {
        width: 400px;
        max-height: 90%;
    }
`,G=o.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
`,J=o.h2`
    margin-top: 0;
    margin-bottom: 20px;
    font-size: ${({fontSize:t})=>c(24,t)};
    color: ${({darkMode:t})=>t?"#FFF":"#333"};
`,i=o.label`
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: ${({fontSize:t})=>c(16,t)};
    color: ${({darkMode:t})=>t?"#CCC":"#555"};
`,x=o.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: ${({fontSize:t})=>c(16,t)};
    background-color: ${({darkMode:t})=>t?"#555":"#FFF"};
    color: ${({darkMode:t})=>t?"#FFF":"#000"};

    @media (min-width: 768px) {
        font-size: ${({fontSize:t})=>c(16,t)};
    }
`,K=o.textarea`
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: ${({fontSize:t})=>c(16,t)};
    background-color: ${({darkMode:t})=>t?"#555":"#FFF"};
    color: ${({darkMode:t})=>t?"#FFF":"#000"};
    resize: vertical;

    @media (min-width: 768px) {
        font-size: ${({fontSize:t})=>c(16,t)};
    }
`,N=o.div`
    display: flex;
    justify-content: space-between;
`,v=o.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-size: ${({fontSize:t})=>c(16,t)};
    cursor: pointer;
    background-color: #8a76bd;
    color: white;
    &:hover {
        background-color: #624e7c;
    }
    &:first-child {
        background-color: #6c757d;
        &:hover {
            background-color: #5a6268;
        }
    }
`,X=({onClose:t,onSubmit:l,defaultDate:d,applicants:p,darkMode:r,fontSize:n})=>{const[h,C]=s.useState(""),[g,$]=s.useState(""),[u,w]=s.useState(d.toISOString().substring(0,10)),[m,T]=s.useState(d.toISOString().substring(11,16)),[b,y]=s.useState(d.toISOString().substring(0,10)),[F,D]=s.useState(d.toISOString().substring(11,16)),[j,E]=s.useState(""),S=a=>C(a.target.value),B=a=>$(a.target.value),I=a=>w(a.target.value),f=a=>T(a.target.value),O=a=>y(a.target.value),A=a=>D(a.target.value),k=a=>E(a.target.value),H=()=>{const a=new Date(`${u}T${m}`),L=new Date(`${b}T${F}`);l(h,g,a,L,j),t()};return e.jsxs(e.Fragment,{children:[e.jsx(G,{onClick:t}),e.jsxs(q,{darkMode:r,children:[e.jsx(J,{fontSize:n,darkMode:r,children:"Create Event"}),e.jsx(i,{fontSize:n,darkMode:r,children:"Title:"}),e.jsx(x,{type:"text",value:h,onChange:S,fontSize:n,darkMode:r}),e.jsx(i,{fontSize:n,darkMode:r,children:"Description:"}),e.jsx(K,{value:g,onChange:B,fontSize:n,darkMode:r}),e.jsx(i,{fontSize:n,darkMode:r,children:"Start Date:"}),e.jsx(x,{type:"date",value:u,onChange:I,fontSize:n,darkMode:r}),e.jsx(i,{fontSize:n,darkMode:r,children:"Start Time:"}),e.jsx(x,{type:"time",value:m,onChange:f,fontSize:n,darkMode:r}),e.jsx(i,{fontSize:n,darkMode:r,children:"End Date:"}),e.jsx(x,{type:"date",value:b,onChange:O,fontSize:n,darkMode:r}),e.jsx(i,{fontSize:n,darkMode:r,children:"End Time:"}),e.jsx(x,{type:"time",value:F,onChange:A,fontSize:n,darkMode:r}),p&&e.jsxs(e.Fragment,{children:[e.jsx(i,{fontSize:n,darkMode:r,children:"Student Email:"}),e.jsx(x,{type:"text",value:j,onChange:k,fontSize:n,darkMode:r})]}),e.jsxs(N,{children:[e.jsx(v,{onClick:t,fontSize:n,children:"Cancel"}),e.jsx(v,{onClick:H,fontSize:n,children:"Save"})]})]})]})};export{X as default};

import{r as a,j as e}from"./app-DAlFUNO8.js";import{p as o}from"./styled-components.browser.esm-C7o4QOmv.js";const p="http://127.0.0.1:8000",E=({job:t,onClose:l})=>{const[r,n]=a.useState(!1),c=s=>{try{return JSON.parse(s)}catch(i){return console.error("Error parsing skills JSON:",i),[]}};typeof t.skills=="string"?c(t.skills):t.skills,a.useEffect(()=>{(async()=>{try{const i=await axios.get(`${p}/api/check-application/${t.id}`);n(i.data.applied)}catch(i){console.error("Error checking application status:",i)}})()},[t.id]);const d=async()=>{try{const s=await axios.post(`${p}/api/apply/${t.id}`);alert(s.data.message),s.data.applied===!1&&n(!0)}catch(s){alert(s.response.data.message||"Error applying for the job.")}},x=typeof t.skills=="string"?JSON.parse(t.skills):t.skills;return e.jsx(f,{children:e.jsxs(g,{children:[e.jsx(h,{onClick:l,children:"Close"}),e.jsx(u,{children:t.title}),e.jsxs(k,{children:[e.jsx(m,{children:t.company}),e.jsx(y,{children:t.location}),e.jsx(b,{children:x.map((s,i)=>e.jsx(w,{children:s},i))}),e.jsx(v,{children:t.description}),e.jsx(S,{}),e.jsx(C,{onClick:d,applied:r,disabled:r,children:r?"Applied":"Apply Now"})]})]})})},f=o.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`,g=o.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    max-width: 90%;
    max-height: 90%;
    overflow-y: auto;
    position: relative;
    text-align: center;
`,h=o.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #aaa;
`,u=o.h2`
    font-size: 24px;
    margin-top: 0;
`,k=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,m=o.p`
    font-family: Poppins, sans-serif;
    letter-spacing: 0.15px;
    margin-top: 18px;
`,y=o.p`
    font-family: Poppins, sans-serif;
    letter-spacing: 0.15px;
`,b=o.div`
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    align-self: stretch;
    flex-wrap: wrap;
    margin-top: 17px;
    gap: 10px;
    font-size: 12px;
    color: #773dc3;
    letter-spacing: 0.4px;
    line-height: 133%;
`,w=o.span`
    font-family: Poppins, sans-serif;
    border: 1px solid #773dc3;
    border-radius: 40px;
    padding: 8px 10px;
    text-align: center;

    &:nth-child(4) {
        background-color: #773dc3;
        color: #fff;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    }
`,v=o.p`
    text-align: center;
    letter-spacing: 0.25px;
    margin-top: 15px;
    font: 400 14px/20px Poppins, sans-serif;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`,S=o.hr`
    width: 86px;
    height: 1px;
    margin-top: 14px;
    background-color: #260e44;
    border: none;
    align-self: center;
`,C=o.button`
    background-color: #6b538c;
    color: #fff;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    border-radius: 12px;
    letter-spacing: 0.5px;
    padding: 8px 16px;
    margin-top: 15px;
    cursor: pointer;
`;export{E as default};

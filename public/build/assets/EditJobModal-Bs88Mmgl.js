import{r as b,j as e}from"./app-DNWayCnB.js";import{p as t}from"./styled-components.browser.esm-B0h7x_ce.js";const k=({isOpen:l,onRequestClose:c,job:n,onSave:p})=>{const[o,x]=b.useState({id:n.id||"",title:n.title||"",company:n.company||"",description:n.description||"",postingStatus:n.postingStatus||"open",jobType:n.jobType||"hybrid",location:n.location||""}),i=s=>{const{name:h,value:m}=s.target;x(g=>({...g,[h]:m}))},u=s=>{s.preventDefault(),p(o)};return l&&e.jsx(f,{children:e.jsxs(j,{children:[e.jsxs(y,{children:[e.jsx("h2",{children:"Edit Job"}),e.jsx(v,{onClick:c,children:"×"})]}),e.jsx(C,{children:e.jsxs(S,{onSubmit:u,children:[e.jsxs(r,{children:["Job Title",e.jsx(a,{type:"text",name:"title",value:o.title,onChange:i,required:!0})]}),e.jsxs(r,{children:["Company",e.jsx(a,{type:"text",name:"company",value:o.company,onChange:i,required:!0})]}),e.jsxs(r,{children:["Description",e.jsx(z,{name:"description",value:o.description,onChange:i,required:!0})]}),e.jsxs(r,{children:["Posting Status",e.jsxs(d,{name:"postingStatus",value:o.postingStatus,onChange:i,required:!0,children:[e.jsx("option",{value:"open",children:"Open"}),e.jsx("option",{value:"closed",children:"Closed"})]})]}),e.jsxs(r,{children:["Job Type",e.jsxs(d,{name:"jobType",value:o.jobType,onChange:i,required:!0,children:[e.jsx("option",{value:"Full-time",children:"Full-time"}),e.jsx("option",{value:"Part-time",children:"Part-time"}),e.jsx("option",{value:"Contract",children:"Contract"})]})]}),e.jsxs(r,{children:["Location",e.jsx(a,{type:"text",name:"location",value:o.location,onChange:i,required:!0})]}),e.jsx(T,{type:"submit",children:"Save Changes"})]})})]})})},f=t.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`,j=t.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 600px;
    max-height: 80%;
    overflow-y: auto;
    position: relative;
`,y=t.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 20px;
`,v=t.button`
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
`,C=t.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`,S=t.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`,r=t.label`
    font-family: Poppins, sans-serif;
    font-size: 16px;
    display: flex;
    flex-direction: column;
`,a=t.input`
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
`,z=t.textarea`
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    resize: vertical;
    min-height: 150px; /* Increased size */
`,d=t.select`
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
`,T=t.button`
    padding: 10px;
    font-size: 16px;
    background-color: #773dc3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;export{k as default};

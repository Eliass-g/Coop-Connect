import{r as m,j as e}from"./app-BP2DlbBf.js";import{p as i}from"./styled-components.browser.esm-WlhnpHHw.js";function I(){const[t,l]=m.useState({name:"John Doe",email:"email123@gmail.com",accountTypes:["Employer","Teacher","Student"],educationInstitute:"School Name",preferredPosition:"Junior Software Developer"}),o=p=>{const{name:x,value:c}=p.target;l(f=>({...f,[x]:c}))};return e.jsxs(h,{children:[e.jsx(g,{children:"Student Name"}),e.jsx(u,{children:e.jsxs(j,{children:[e.jsx(b,{children:e.jsx(y,{loading:"lazy",src:"",alt:"Profile"})}),e.jsxs(w,{children:[e.jsx(P,{children:"Bio:"}),e.jsxs(v,{children:[e.jsx(s,{}),e.jsx(s,{}),e.jsxs(S,{children:[e.jsx(d,{}),e.jsx(d,{})]})]})]})]})}),e.jsxs(k,{children:[e.jsxs(n,{children:[e.jsx(r,{children:"Full Name"}),e.jsx(a,{type:"text",name:"name",value:t.name,onChange:o})]}),e.jsxs(n,{children:[e.jsx(r,{children:"Email"}),e.jsx(a,{type:"email",name:"email",value:t.email,onChange:o})]}),e.jsxs(n,{children:[e.jsx(r,{children:"Account Type"}),e.jsx(a,{type:"text",name:"accountTypes",value:t.accountTypes.join(", "),onChange:o})]}),e.jsxs(n,{children:[e.jsx(r,{children:"Education Institute"}),e.jsx(a,{type:"text",name:"educationInstitute",value:t.educationInstitute,onChange:o})]}),e.jsxs(n,{children:[e.jsx(r,{children:"Preferred Position"}),e.jsx(a,{type:"text",name:"preferredPosition",value:t.preferredPosition,onChange:o})]})]}),e.jsx(B,{children:"Edit Profile"})]})}const h=i.section`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-width: 300px; /* Set a minimum width */
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    gap: 40px;
    padding: 40px 30px;
`,g=i.h1`
    color: #6b538c;
    text-decoration: underline;
    align-self: center;
    font-weight: 600;
    font-size: 32px;
    font-family: Poppins, sans-serif;
`,u=i.section`
    margin-top: 40px;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`,j=i.div`
    gap: 20px;
    display: flex;
    @media (max-width: 991px) {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }
`,b=i.figure`
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 26%;
    margin: 0 auto;
    @media (max-width: 991px) {
        width: 100%;
        margin-top: 20px;
    }
`,y=i.img`
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid rgba(45, 54, 72, 1);
    background-color: #edf0f7;
    display: block;
    width: 150px;
    height: 150px;
    padding: 0 55px;
    aspect-ratio: 1;
    object-fit: cover;
    @media (max-width: 991px) {
        padding: 0 20px;
    }
`,w=i.div`
    display: flex;
    flex-direction: column;
    width: 74%;
    margin-left: 20px;
    @media (max-width: 991px) {
        width: 100%;
        margin-top: 20px;
    }
`,P=i.h2`
    color: #2d3648;
    letter-spacing: 0.1px;
    font-weight: 500;
    font-size: 14px;
    font-family: Poppins, sans-serif;
`,v=i.div`
    border-radius: 10px;
    border: 2px solid #7b757f;
    background-color: #eedcff;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    padding: 12px;
`,s=i.div`
    border-radius: 3px;
    background-color: #260e44;
    height: 16px;
    margin-top: 8px;
    &:first-child {
        margin-top: 0;
    }
`,S=i.div`
    display: flex;
    margin-top: 8px;
    padding-right: 80px;
    gap: 0;
    @media (max-width: 991px) {
        padding-right: 20px;
    }
`,d=i.div`
    border-radius: 3px;
    background-color: #260e44;
    height: 16px;
    flex: 1;
    &:first-child {
        border-radius: 3px 0 0 3px;
    }
    &:last-child {
        border-radius: 0 3px 3px 0;
    }
`,k=i.section`
    margin-top: 20px;
`,n=i.div`
    margin-top: 20px;
`,r=i.label`
    color: #6b538c;
    letter-spacing: 0.1px;
    font-weight: 500;
    font-size: 14px;
    font-family: Poppins, sans-serif;
`,a=i.input`
    align-items: start;
    border-radius: 6px;
    border: 2px solid #260e44;
    background-color: #fff7ff;
    margin-top: 8px;
    color: #7b757f;
    letter-spacing: 0.25px;
    padding: 19px 12px;
    font-size: 14px;
    font-family: Poppins, sans-serif;
    line-height: 143%;
    width: 100%;
    box-sizing: border-box;
    @media (max-width: 991px) {
        max-width: 100%;
        padding-right: 20px;
    }
`,B=i.button`
    justify-content: center;
    border-radius: 12px;
    background-color: #6b538c;
    align-self: start;
    margin-top: 20px;
    color: #fff;
    letter-spacing: 0.5px;
    padding: 8px 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    font-family: Roboto, sans-serif;
`;export{I as default};

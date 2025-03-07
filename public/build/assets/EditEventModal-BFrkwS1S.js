import{r as n,j as i}from"./app-C5_nSkG0.js";import{p as s}from"./styled-components.browser.esm-B3TAIFtu.js";const B="#FFFFFF",I="#333333",e=(t,d,r=1.5)=>{const o=parseFloat(d);return d==="1em"?`${t*o}px`:d==="1.07em"?`${t*o*1.3}px`:d==="1.12em"?`${t*o*1.7}px`:`${t*o*r}px`},z=s.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({darkMode:t})=>t?I:B};
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
`,R=s.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,q=s.h2`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: ${({fontSize:t})=>e(24,t)};
  color: ${({darkMode:t})=>t?"#FFF":"#333"};
`,h=s.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: ${({fontSize:t})=>e(16,t)};
  color: ${({darkMode:t})=>t?"#CCC":"#555"};
`,b=s.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: ${({fontSize:t})=>e(16,t)};
  background-color: ${({darkMode:t})=>t?"#555":"#FFF"};
  color: ${({darkMode:t})=>t?"#FFF":"#000"};

  @media (min-width: 768px) {
    font-size: ${({fontSize:t})=>e(16,t)};
  }
`;s.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: ${({fontSize:t})=>e(16,t)};
  background-color: ${({darkMode:t})=>t?"#555":"#FFF"};
  color: ${({darkMode:t})=>t?"#FFF":"#000"};
  resize: vertical;

  @media (min-width: 768px) {
    font-size: ${({fontSize:t})=>e(16,t)};
  }
`;const A=s.div`
  display: flex;
  justify-content: space-between;
`,F=s.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: ${({fontSize:t})=>e(16,t)};
  cursor: pointer;
  background-color: #8A76BD;
  color: white;
  &:hover {
    background-color: #624E7C;
  }
  &:first-child {
    background-color: #6c757d;
    &:hover {
      background-color: #5a6268;
    }
  }
`,O=({onClose:t,onSubmit:d,event:r,darkMode:o,fontSize:a})=>{const[H,$]=n.useState((r==null?void 0:r.title)||""),[L,w]=n.useState((r==null?void 0:r.description)||""),[u,x]=n.useState(r?r.startDate.substring(0,10):""),[g,l]=n.useState(r?r.startDate.substring(11,16):""),[f,D]=n.useState(r?r.startDate.substring(0,10):""),[j,S]=n.useState(r?r.startDate.substring(11,16):""),C=c=>{const p=c.target.value,[k,m]=p.split(":").map(Number);if(m%5!==0){const E=Math.round(m/5)*5,y=`${String(k).padStart(2,"0")}:${String(E).padStart(2,"0")}`;l(y)}else l(p)};n.useEffect(()=>{r&&($(r.title),w(r.description),x(r.startDate.substring(0,10)),l(r.startDate.substring(11,16)),D(r.endDate.substring(0,10)),S(r.endDate.substring(11,16)))},[r]);const T=()=>{const c=new Date(`${u}T${g}`),p=new Date(`${f}T${j}`);d({id:r.id,start:c,interviewee:r.intervieweeId,interviewer:r.interviewerId,initialStart:p,title:r.title}),t()};return i.jsxs(i.Fragment,{children:[i.jsx(R,{onClick:t}),i.jsxs(z,{darkMode:o,children:[i.jsx(q,{fontSize:a,darkMode:o,children:"Request Updated Interview Time"}),i.jsx(h,{fontSize:a,darkMode:o,children:"Start Date:"}),i.jsx(b,{min:new Date().toISOString().split("T")[0],type:"date",value:u,onChange:c=>x(c.target.value),fontSize:a,darkMode:o}),i.jsx(h,{fontSize:a,darkMode:o,children:"Start Time:"}),i.jsx(b,{type:"time",value:g,onChange:C,fontSize:a,darkMode:o,step:"300"}),i.jsxs(A,{children:[i.jsx(F,{onClick:t,fontSize:a,children:"Cancel"}),i.jsx(F,{onClick:T,fontSize:a,children:"Send"})]})]})]})};export{O as default};

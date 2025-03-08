import{j as o}from"./app-BP2DlbBf.js";import{p as e}from"./styled-components.browser.esm-WlhnpHHw.js";const B=({isOpen:r,onRequestClose:s,applicant:t,isOnShortlist:d,addToShortlist:l,removeFromShortlist:c})=>{if(!r||!t)return null;const i=t.skills,a=()=>{l(t.id)},x=()=>{c(t.id)};return o.jsx(f,{children:o.jsxs(g,{children:[o.jsxs(m,{children:[o.jsx("h2",{children:t.name}),o.jsx(b,{onClick:s,children:"×"})]}),o.jsxs(u,{children:[o.jsx(j,{src:t.profile_image||"https://via.placeholder.com/150",alt:t.name}),o.jsxs(v,{children:[o.jsxs(n,{children:[o.jsx("strong",{children:"School:"})," ",t.school||"N/A"]}),o.jsxs(n,{children:[o.jsx("strong",{children:"Location:"})," ",t.location]}),o.jsxs(n,{children:[o.jsx("strong",{children:"Description:"})," ",t.description||"N/A"]}),i.length>0&&o.jsx(k,{children:i.map((p,h)=>o.jsx(w,{children:p},h))}),i.length===0&&o.jsx("div",{children:"No skills listed"})]}),d?o.jsx(S,{onClick:x,children:"Remove from Shortlist"}):o.jsx(y,{onClick:a,children:"Add to Shortlist"})]})]})})},f=e.div`
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
`,g=e.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  max-height: 80%;
  overflow-y: auto;
  position: relative;
`,m=e.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
`,b=e.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`,u=e.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,j=e.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 150px;
  border: 2px solid rgba(45, 54, 72, 1);
  align-self: center;
`,v=e.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,n=e.div`
  font-family: Poppins, sans-serif;
  font-size: 16px;
`,k=e.div`
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

    @media (max-width: 991px) {
        white-space: initial;
    }
`,w=e.span`
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
`,y=e.button`
  background-color: #773dc3;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #5a299a;
  }
`,S=e.button`
  background-color: #FF0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #5a299a;
  }
`;export{B as default};

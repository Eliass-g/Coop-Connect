import{j as s}from"./app-pcpPOzh4.js";import{p as o}from"./styled-components.browser.esm-Cye39UAp.js";import"./SidePanel-BOFlTom7.js";import"./NewMessage-BOBuG7Fb.js";import"./TypeMessage-_61mikFP.js";import"./UserPanel-CutHQOkU.js";function f(){const e=[{content:"This is the top Message",sender:"PersonA",timestamp:"Today, 12:00pm"},{content:"This is the only message that was received.",sender:"PersonB",timestamp:"Today, 12:00pm"},{content:"This is the top Message",sender:"PersonA",timestamp:"Today, 12:00pm"},{content:"This is the only message",sender:"PersonA",timestamp:"Today, 12:00pm"},{content:"This is the only message that was received.",sender:"PersonB",timestamp:"Today, 12:00pm"},{content:"This is the top Message",sender:"PersonA",timestamp:"Today, 12:00pm"},{content:"This is the bottom Message",sender:"PersonA",timestamp:"Today, 12:00pm"},{content:"This is the first message to be received out of 2.",sender:"PersonB",timestamp:"Today, 12:00pm"},{content:"2nd message received.",sender:"PersonB",timestamp:"Today, 12:00pm"},{content:"This is the only message",sender:"PersonA",timestamp:"Today, 12:00pm"}];return s.jsx(s.Fragment,{children:e.map((t,n)=>{const r=n<e.length-1?e[n+1].sender:null;return s.jsxs(i,{sender:t.sender,children:[s.jsx(a,{sender:t.sender,children:t.content}),(r!==t.sender||r===null)&&s.jsx(p,{sender:t.sender,children:t.timestamp})]},n)})})}const i=o.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px; /* Reduced margin */
    align-items: ${({sender:e})=>e==="PersonB"?"flex-end":"flex-start"};
`,a=o.div`
    border-radius: ${({sender:e})=>e==="PersonA"?"0px 10px 10px 10px":"10px 0px 10px 10px"};
    background-color: ${({sender:e})=>e==="PersonA"?"#6b538c":"#7c4e7e"};
    color: #fff;
    justify-content: center;
    padding: 10px;
    font: 16px/150% Poppins, sans-serif;
    margin-top: 5px; /* Reduced margin */
    width: fit-content;
    align-self: ${({sender:e})=>e==="PersonB"?"flex-end":"flex-start"};
`,p=o.div`
    color: #000000; /* Lighter color for timestamp */
    align-self: ${({sender:e})=>e==="PersonB"?"flex-end":"flex-start"};
    margin-top: 5px;
    font: 12px/133% Poppins, sans-serif;
    width: fit-content;
    margin-bottom: 5px; /* Reduced margin */
`;export{f as default};

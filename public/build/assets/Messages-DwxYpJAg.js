import{u as j,r,e as p,B as b,j as e,C as N,D as g}from"./app-pcpPOzh4.js";import v from"./Chat-D5RgJTYg.js";import{h as w}from"./moment-BH_gi4k_.js";import S from"./NavBar-CLkJCdju.js";import{MainContainer as y,Title as k}from"./Messages.styles-PQPtamzq.js";import{X as C,S as _,A as E}from"./x-DmPbzdiq.js";import"./NavBar.styles-bKlC7kf5.js";import"./styled-components.browser.esm-Cye39UAp.js";import"./settings-UVqU3YHX.js";import"./index.es-n2NVWXFw.js";import"./index-Bn4jQ2MY.js";import"./index-BMRxO3cL.js";const $="http://138.197.158.246:8081",q=()=>{const l=j(),[t,c]=r.useState(null);p(s=>s.messages.unreadCount);const o=p(s=>s.messages.recentMessages),[i,h]=r.useState(""),[m,a]=r.useState(""),[d,x]=r.useState(!1),[u,n]=r.useState(!0);r.useEffect(()=>{l(b()).then(()=>{console.log(o)})},[l]);const f=async()=>{if(i){try{const s=await g.get(`${$}/api/users/email?email=${i}`);s.data?(c(s.data),a(""),n(!1)):a("User not found")}catch{a("User not found")}setTimeout(()=>{a("")},3e3)}};return e.jsx(e.Fragment,{children:e.jsx(S,{children:e.jsx(y,{children:o?e.jsxs("div",{className:"flex h-[90vh]",children:[e.jsxs("div",{className:`${u?"block":"hidden"} sm:block w-full sm:w-1/4 bg-purple-200 p-4 h-[90vh] overflow-y-auto absolute sm:relative rounded-l-lg border-l-2 border-t-2 border-b-2 border-purple-300`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(k,{children:"Messages"}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("button",{onClick:()=>x(!d),className:"p-1 rounded",children:d?e.jsx(C,{size:20,color:"purple"}):e.jsx(_,{size:20,color:"purple"})})})]}),d&&e.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[e.jsx("input",{type:"text",placeholder:"Enter email...",value:i,onChange:s=>h(s.target.value),className:"p-1 border rounded w-full"}),e.jsx("button",{onClick:f,className:"p-1 bg-purple-500 text-white rounded",children:"Search"})]}),m&&e.jsx("p",{className:"text-red-500 text-sm",children:m}),o.map(s=>e.jsxs("div",{className:`p-2 my-2 cursor-pointer text-gray-600 ${(t==null?void 0:t.id)===s.other_user.id?"bg-purple-300":"bg-purple-50"} rounded-lg flex justify-between`,onClick:()=>{c(s.other_user),l(N(s.other_user.id)),n(!1)},children:[e.jsxs("div",{children:[s.other_user.name," ",e.jsx("p",{className:" text-gray-400 text-sm",children:s!=null&&s.message?s.message.length>30?s.message.slice(0,30)+"...":s.message:"No messages yet"})]}),e.jsxs("div",{className:"flex flex-col items-end justify-between",children:[e.jsx("div",{className:"text-gray-400 text-xs",children:s!=null&&s.created_at?w(s.created_at).fromNow():""}),s.unread_count>0&&e.jsx("div",{className:"w-6 h-6 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs",children:s.unread_count})]})]},s.id))]}),e.jsx("div",{className:`w-full sm:w-3/4 bg-purple-50 ${u?"hidden":"block"} sm:block rounded-r-lg border-r-2 border-t-2 border-b-2 border-purple-300`,children:t?e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!0),className:"sm:hidden p-2 bg-gray-300",children:e.jsx(E,{size:20})}),e.jsx(v,{selectedUser:t})]}):e.jsx("p",{className:"text-center text-gray-500",children:"Select a user to start chatting."})})]}):e.jsx("p",{children:"No users found."})})})})};export{q as default};

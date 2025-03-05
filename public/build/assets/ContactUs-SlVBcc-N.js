import{r as d,j as e,_ as u}from"./app-DAlFUNO8.js";function b({isOpen:n,onClose:l}){const[a,m]=d.useState({name:"",email:"",message:""}),s=t=>{const{name:o,value:c}=t.target;m(i=>({...i,[o]:c}))},r=t=>{t.preventDefault(),u.post("/contact",a,{onSuccess:()=>{l(),alert("Thank you for contacting us! We'll get back to you shortly.")}})};return n?e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-lg w-full max-w-md",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"Contact Us"}),e.jsxs("form",{onSubmit:r,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Name"}),e.jsx("input",{type:"text",name:"name",value:a.name,onChange:s,className:"w-full px-3 py-2 border rounded-lg",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Email"}),e.jsx("input",{type:"email",name:"email",value:a.email,onChange:s,className:"w-full px-3 py-2 border rounded-lg",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-sm font-medium mb-1",children:"Message"}),e.jsx("textarea",{name:"message",value:a.message,onChange:s,className:"w-full px-3 py-2 border rounded-lg",rows:"4",required:!0})]}),e.jsxs("div",{className:"flex justify-end",children:[e.jsx("button",{type:"button",onClick:l,className:"mr-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800",children:"Cancel"}),e.jsx("button",{type:"submit",className:"px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-blue-700",children:"Submit"})]})]})]})}):null}export{b as default};

import{r as a,j as e,d as r}from"./app-DAlFUNO8.js";import{l}from"./COOPCONNECTLOGO-BU2kPxAZ.js";import i from"./ContactUs-SlVBcc-N.js";function h({auth:s}){const[d,t]=a.useState(!1);function o(n){switch(n){case"student":return{dashboard:"/student/home"};case"employee":return{dashboard:"/employer/home"};case"teacher":return{dashboard:"/teacher/home"};case"admin":return{dashboard:"/student/home"};default:return{}}}return o(s.userType),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-row items-center justify-between text-center",children:[e.jsx("div",{children:e.jsx(r,{href:"/",children:e.jsx("img",{className:"",src:l,alt:"Logo"})})}),e.jsx("div",{children:e.jsxs("div",{className:"flex flex-row gap-10 text-purple-700",children:[e.jsx("button",{onClick:()=>t(!0),children:"Contact Us"}),e.jsx(r,{href:"./about",children:"About Us"}),e.jsx(r,{href:"./guide",children:"Guide"})]})}),e.jsx("div",{className:"p-6 text-end",children:s.user?e.jsx(r,{href:o(s.user.role).dashboard,className:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Dashboard"}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-row gap-3",children:[e.jsx(r,{href:route("register"),className:"font-semibold text-white px-2 hover:opacity-80 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 text-xl border-2 border-white rounded-lg px py-1 bg-purple-700",children:"Sign Up"}),e.jsx(r,{href:route("login"),className:"font-semibold text-purple-900 hover:opacity-80 px-2 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 text-xl border-2 border-white rounded-lg px py-1 bg-purple-300",children:"Sign In"})]})})})]}),e.jsx(i,{isOpen:d,onClose:()=>t(!1)})]})}export{h as L};

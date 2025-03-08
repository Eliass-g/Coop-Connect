import{j as a}from"./app-BP2DlbBf.js";import{p as e}from"./styled-components.browser.esm-WlhnpHHw.js";import{l as r,b as n,m as d,c,u as l,s as p}from"./settings-UVqU3YHX.js";function x(){return a.jsx("aside",{children:a.jsxs(h,{children:[a.jsx(u,{src:r,alt:"Logo",loading:"lazy"}),a.jsx(m,{}),a.jsx(t,{children:a.jsx(s,{src:n,alt:"Icon 1",loading:"lazy"})}),a.jsx(t,{children:a.jsx(s,{src:d,alt:"",loading:"lazy"})}),a.jsx(t,{children:a.jsx(s,{src:c,alt:"",loading:"lazy"})}),a.jsx(t,{children:a.jsx(s,{src:l,alt:"",loading:"lazy"})}),a.jsx(t,{children:a.jsx(s,{src:p,alt:"",loading:"lazy"})})]})})}function f({header:i}){return a.jsx("header",{children:a.jsxs(y,{children:[a.jsx(v,{children:i}),a.jsxs(w,{children:[a.jsx(z,{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/abace578b51f3c9457a40eb525610751844e11d28da3970b407be86705a69459?apiKey=d66532d056b14640a799069157705b77&",alt:"User",loading:"lazy"}),a.jsxs(C,{children:[a.jsx(P,{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/c449c761188f38db922c89455e070256b822a267e33f51baa6901c76b73a4e78?apiKey=d66532d056b14640a799069157705b77&",alt:"Avatar",loading:"lazy"}),a.jsx(E,{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/c7749e10a4cb727e5ce0c7fd48d44fb683bf93b2fa7c59643148748496b286b0?apiKey=d66532d056b14640a799069157705b77&",alt:"Notification",loading:"lazy"})]})]})]})})}function g({header:i,children:o}){return a.jsx(k,{children:a.jsxs(j,{children:[a.jsx(f,{header:i}),o]})})}function T({header:i,children:o}){return a.jsxs(b,{children:[a.jsx(x,{}),a.jsx(g,{header:i,children:o})]})}const b=e.div`
    background-color: var(--Schemes-Background, #fff7ff);
    display: flex;
    gap: 0px;

    height: 100vh; /* Ensure it takes the full viewport height */
    @media (max-width: 991px) {
        flex-wrap: wrap;
    }
`,h=e.nav`
    align-items: center;
    border: 1px solid rgba(123, 117, 127, 1);
    background-color: var(--White, #fff);
    display: flex;
    flex-direction: column;
    width: 90px;
    padding: 30px 20px 20px;
    border-radius: 0 10px 10px 0;
    height: 100vh;
    @media (max-width: 991px) {
        display: none;
    }
`,u=e.img`
    aspect-ratio: 1.25;
    object-fit: auto;
    width: 50px;
`,m=e.hr`
    border: 1px solid #000;
    margin-top: 29px;
    align-self: stretch;
`,t=e.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 10px;
    border-radius: 10px;
    border: none;
    margin-top: 30px;
    cursor: pointer;
    @media (max-width: 991px) {
        margin-top: 40px;
    }
`,s=e.img`
    aspect-ratio: 1;
    object-fit: auto;
    width: 30px;
`,j=e.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
`,y=e.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    margin-bottom: 40px;
`,v=e.h1`
    color: #000;
    font: 600 36px/122% Poppins, sans-serif;
`,w=e.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`,z=e.img`
    aspect-ratio: 0.85;
    object-fit: auto;
    width: 40px;
`,C=e.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    border: 2px solid rgba(0, 0, 0, 1);
    background-color: var(--Schemes-Primary-Container, #eddcff);
    padding: 5px 10px;
    margin-top: 7px;
`,P=e.img`
    aspect-ratio: 1;
    object-fit: auto;
    width: 30px;
    border: 1px solid rgba(0, 0, 0, 1);
    border-radius: 50%;
`,E=e.img`
    aspect-ratio: 1;
    object-fit: auto;
    width: 24px;
    margin: auto 0;
`,k=e.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto; /* Ensure it scrolls if content overflows */
`;export{T as default};

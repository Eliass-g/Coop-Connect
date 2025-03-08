import{j as i}from"./app-pcpPOzh4.js";import{f as n,p as o,c as a}from"./styled-components.browser.esm-Cye39UAp.js";const s=n`
  0% { transform: translateX(0); }
  25% { transform: translateX(-1px); }
  50% { transform: translateX(1px); }
  75% { transform: translateX(-1px); }
  100% { transform: translateX(0); }
`,d=n`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;n`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;const h=o.div`
    background-color: var(--Schemes-Background, #fff7ff);
    display: flex;
    gap: 0px;
    height: 100vh;
    flex-direction: row;

    @media (max-width: 991px) {
        flex-direction: column;
    }
`,m=o.nav`
    align-items: center;
    border: 1px solid rgba(123, 117, 127, 1);
    background-color: var(--White, #fff);
    display: flex;
    flex-direction: column;
    width: 90px;
    padding: 30px 20px 20px;
    border-radius: 0 10px 10px 0;
    height: 100vh;
    z-index: 1000;

    @media (max-width: 991px) {
        align-items: center;
        display: flex;
        width: 100%;
        height: 12vh;
        border-radius: 10px 10px 0 0;
        border-bottom: 1px solid rgba(123, 117, 127, 1);
        flex-direction: row;
        justify-content: space-around;
        padding: 10px;
        margin-bottom: 1vh;
    }
`,b=o.img`
    aspect-ratio: 1.25;
    object-fit: auto;
    width: 50px;

    @media (max-width: 991px) {
        width: 40px;
    }
`,u=o.button`
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
    background-color: ${({active:t})=>t?"rgba(0, 0, 0, 0.1)":"transparent"};
    box-shadow: ${({active:t})=>t?"0px 4px 8px rgba(0, 0, 0, 0.1)":"none"};
    transform: ${({active:t})=>t?"translateX(5px)":"none"};

    @media (max-width: 991px) {
        width: auto;
        height: auto;
        margin-top: 0;
        padding: 5px;
        background-color: ${({active:t})=>t?"rgba(0, 0, 0, 0.2)":"transparent"};
    }
`,w=o.img`
    aspect-ratio: 1;
    object-fit: auto;
    width: 30px;

    @media (max-width: 991px) {
        width: 24px;
    }
`,v=o.hr`
    border: 1px solid #000;
    margin-top: 29px;
    align-self: stretch;

    @media (max-width: 991px) {
        display: none;
    }
`,y=o.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    margin-bottom: 40px;
    align-items: center;

    @media (max-width: 991px) {
        flex-direction: row;
    }
`,k=o.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    position: relative;
    transition: transform 0.3s ease, opacity 0.3s ease;

    // Apply slide-in animation when isOpen prop is true
    ${t=>a`
            animation: ${d} 0.5s ease-out;
        `}

    @media (max-width: 991px) {
        justify-content: flex-end;
        width: 100%;
        align-items: center;
    }
`,j=o.div`
    display: flex;
    align-items: center;

    @media (max-width: 991px) {
        justify-content: flex-end;
        width: 100%;
    }
`,$=o.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
`,C=o.h1`
    color: #000;
    font: 600 36px/122% Poppins, sans-serif;
`,z=o.div`
    width: 40px;
    height: 40px;
    background-color: #eddcff;
    border: 2px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    transition: transform 0.5s ease;
    ${t=>t.hasUnreadMessages&&a`
            animation: ${s} 0.5s ease infinite;
        `}

    &:hover {
        transform: scale(1.05);
    }

    svg {
        color: white;
        font-size: 20px;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 10px;
        background-color: red;
        border-radius: 50%;
        display: ${t=>t.hasUnreadMessages?"block":"none"};
    }
`,I=o.div`
    width: 8px;
    height: 8px;
    background-color: red;
    border-radius: 50%;
    margin-right: 5px;
`,M=o.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    border: 2px solid rgba(0, 0, 0, 1);
    background-color: var(--Schemes-Primary-Container, #eddcff);
    padding: 5px 10px;
`,X=o.img`
    aspect-ratio: 1;
    object-fit: auto;
    width: 30px;
    border: 1px solid rgba(0, 0, 0, 1);
    border-radius: 50%;
`,B=o.img`
    aspect-ratio: 1;
    object-fit: auto;
    width: 24px;
    margin: auto 0;
    cursor: pointer;
    transition: transform 0.3s ease;
    transform: ${({isOpen:t})=>t?"rotate(-360deg)":"rotate(-270deg)"};
`,S=o.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
`,N=o.div`
    position: absolute;
    background-color: white;
    border: 1px solid #7f00ff;
    border-radius: 5px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: ${({isOpen:t})=>t?1:0};
    transform: ${({isOpen:t})=>t?"translateY(0)":"translateY(-10px)"};
    pointer-events: ${({isOpen:t})=>t?"auto":"none"};
    left: 50%; /* Start positioning from center */
    transform: translateX(-50%); /* Shift left by half its width */
`,Y=o.div`
    display: ${t=>t.isOpen?"block":"none"};
    position: absolute;
    background: white;
    border: 1px solid #7f00ff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    overflow: hidden;
    z-index: 10;
    width: 200px; /* Increase width */
    max-height: 500px;
    left: 50%; /* Start positioning from center */
    transform: translateX(-50%); /* Shift left by half its width */
    overflow-y: auto;
`,D=o.ul`
    list-style: none;
    margin: 0;
    padding: 20px;
`,A=o.div`
    margin-bottom: 15px;
    padding: 15px;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    background-color: #fafafa;
`,L=o.div`
    margin-bottom: 15px;
    font-size: 14px;
    color: #555;
`,P=o.div`
    display: flex;
    flex-direction: column;
`,U=o.div`
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
`,O=o.button`
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }

    &:not(:last-child) {
        margin-right: 1vw;
    }
`,R=o.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    max-height: 80vh;
`,T=o.div`
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: rgb(237, 220, 255);
    }
    color: #7f00ff;
`,E=o.div`
    padding: 20px;
    text-align: center;
    font-size: 16px;
    color: #666;
`,p=n`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
`,e=o.div`
    width: 20px;
    height: 20px;
    background-color: #3498db;
    border-radius: 50%;
    animation: ${p} 1s infinite;
`,c=o.div`
    display: flex;
    justify-content: space-around;
    width: 60px;
`,F=()=>i.jsxs(c,{children:[i.jsx(e,{}),i.jsx(e,{}),i.jsx(e,{})]}),l=n`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`,r=o.div`
    width: 20px;
    height: 20px;
    background-color: #3498db;
    border-radius: 50%;
    animation: ${l} 0.6s infinite alternate;
    margin: 0 5px;
`,x=o.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,H=()=>i.jsxs(x,{children:[i.jsx(r,{}),i.jsx(r,{}),i.jsx(r,{})]}),W=o.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease;
    transform: translateY(${({isVisible:t})=>t?"0%":"100%"});
    z-index: 999;
`,q=o.button`
    position: absolute;
    top: 10px;
    left: 10px;
    background: none;
    border: none;
    font-size: 30px;
    cursor: pointer;
    color: #000;

    &:hover {
        color: #ff0000; // Optional: Change color on hover
    }
`,G=o.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    display: ${({isVisible:t})=>t?"block":"none"};
    z-index: 1000;
    transition: opacity 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`,J=o.div`
    display: none; // Hide by default
    position: relative;
    width: 40px; // Adjust the size as needed
    height: 40px;
    margin-top: auto; // Push to the bottom

    @media (min-width: 992px) {
        display: block; // Show on desktop
    }

    .fa-icon {
        width: 100%;
        height: 100%;
        color: #6b538c; // Icon color
        background-color: white; // White center
    }
`;export{h as AppContainer,X as Avatar,O as Button,q as CloseButton,$ as ContentContainer,A as Conversation,L as ConversationInfo,v as Divider,e as Dot,c as DotContainer,B as ExpandIcon,W as Footer,y as HeaderContainer,w as Icon,u as IconButton,J as IconContainer,F as LoadingContainer,H as LoadingDot,b as Logo,S as Main,U as Message,P as MessagesList,N as Modal,R as ModalContent,T as ModalItem,m as NavContainer,E as NoNotificationsMessage,I as NotificationBadge,z as NotificationIcon,Y as NotificationModalContainer,D as NotificationModalContent,j as RightAlignedItems,G as ScrollToTopButton,C as Title,M as UserDetails,k as UserProfile,p as pulse};

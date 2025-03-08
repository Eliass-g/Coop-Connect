import{p as o}from"./styled-components.browser.esm-WlhnpHHw.js";import"./app-BP2DlbBf.js";const n=o.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px; /* Reduced margin */
    align-items: ${({isCurrentUser:t})=>t?"flex-end":"flex-start"};
`,p=o.div`
    border-radius: ${({isCurrentUser:t})=>t?"10px 0px 10px 10px":"0px 10px 10px 10px"};
    background-color: ${({isCurrentUser:t})=>t?"#6b538c":"#7c4e7e"};
    color: #fff;
    justify-content: center;
    padding: 10px;
    font: 16px/150% Poppins, sans-serif;
    margin-top: 5px; /* Reduced margin */
    width: fit-content;

`,r=o.div`
    color: #000000; /* Lighter color for timestamp */

    margin-top: 5px;
    font: 12px/133% Poppins, sans-serif;
    width: fit-content;
    margin-bottom: 5px; /* Reduced margin */
`;export{p as Message,n as MessageContainer,r as Timestamp};

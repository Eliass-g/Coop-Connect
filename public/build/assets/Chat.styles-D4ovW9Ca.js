import{f as o,p as i}from"./styled-components.browser.esm-B3TAIFtu.js";import"./app-C5_nSkG0.js";const t=o`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,l=i.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    padding: 20px;
    height: 100%; /* Make sure it stretches to the bottom */
    flex-grow: 1; /* Allow it to grow */
    animation: ${t} 0.8s ease-in-out;
`,n=i.div`
    gap: 20px;
    display: flex;
    flex-grow: 1; /* Allow it to grow */
    @media (max-width: 991px) {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }
`,d=i.div`
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 36%;
    margin-left: 0;
    @media (max-width: 991px) {
        width: 100%;
    }
`,r=i.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1; /* Allow it to grow */
    @media (max-width: 991px) {
        max-width: 100%;
        margin-top: 40px;
    }
`,x=i.div`
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 64%;
    margin-left: 20px;
    @media (max-width: 991px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
    }
`,m=i.div`
    border-radius: 10px;
    border: 1px solid rgba(123, 117, 127, 1);
    background-color: #fff7ff;
    display: flex;
    flex-direction: column;
    flex-grow: 1; /* Allow it to grow */
    padding: 10px;
    @media (max-width: 991px) {
        max-width: 100%;
        margin-top: 40px;
    }
`,p=i.div`
    height: 60vh;
    @media (max-width: 991px) {
        height: auto;
        max-height: 60vh;
    }
`,f=i.div`
    overflow-y: auto;
    flex-grow: 1; /* Allow it to grow */
    @media (max-width: 991px) {
        max-height: 60vh;
        overflow-y: auto;
    }
`;export{d as Column,x as Column2,n as Content,r as LeftColumn,l as MainContainer,p as MessageContainer,m as RightColumn,f as ScrollableContainer};

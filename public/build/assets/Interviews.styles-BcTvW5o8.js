import{f as a,p as e,h as s}from"./styled-components.browser.esm-B3TAIFtu.js";import"./app-C5_nSkG0.js";const t=(o,r,i=1.5)=>{const n=parseFloat(r);return r==="1em"?`${o*n}px`:r==="1.07em"?`${o*n*1.3}px`:r==="1.12em"?`${o*n*1.7}px`:`${o*n*i}px`},c=a`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,p=e.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 2px solid ${({darkMode:o})=>o?"#444":"#e2e8f0"};
    background-color: ${({darkMode:o})=>o?"#1C1C1C":"#fff"};
    color: ${({darkMode:o})=>o?"#EDDCFF":"#6b538c"};

    animation: ${c} 0.8s ease-in-out;

    @media (max-width: 991px) {
        width: 100%;
    }
`,x=e.div`
    display: flex;
    height: 100%;
    background-color: ${({darkMode:o})=>o?"#2D2D2D":"#fff"};
    border: 2px solid ${({darkMode:o})=>o?"#444":"#e2e8f0"};
    flex-direction: row;
    gap: 15px;

    width: 100%;
    padding: 10px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 991px) {
        padding: 0px;
        height: 100%; /* Adjust height for smaller screens */
        flex-direction: column;
        width: 100%;
    }
`,f=e.div`
    width: 90%;
    display: flex;
    flex: 1;
    padding: 10px;
    color: ${({darkMode:o})=>o?"#EDDCFF":"#6b538c"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({darkMode:o})=>o?"#3C3C3C":"#fff"};
    color: ${({darkMode:o})=>o?"#EDDCFF":"#6b538c"};

    @media (max-width: 991px) {
        padding: 0px;
        height: 100%; /* Adjust height for smaller screens */
        flex-direction: column;
        min-height: 400px;
        width: 100%;
    }
`,b=e.div`
    color: ${({darkMode:o})=>o?"#EDDCFF":"#6b538c"};
    text-decoration-line: underline;
    align-self: center;
    font: 600 ${({fontSize:o})=>t(28,o)} Poppins, sans-serif;
    margin-bottom: 20px;
    @media (max-width: 991px) {
       font: 600 ${({fontSize:o})=>t(24,o)} Poppins, sans-serif;
`,g=e.div`
    width: 90%;
    flex: 1;
    overflow: auto; /* Enable vertical scrolling if needed */
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
        0px 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-color: ${({darkMode:o})=>o?"#444444":"rgba(123, 117, 127, 1)"};
    background-color: ${({darkMode:o})=>o?"#3C3C3C":"#fff"};
    color: ${({darkMode:o})=>o?"#EDDCFF":"#6b538c"};

    @media (max-width: 991px) {
        min-height: 60vh; /* Adjust height for smaller screens */
        height: 60vh;
        flex: none;
        width: 100%;
    }
`,h=e.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    color: ${({darkMode:o})=>o?"#EDDCFF":"#6b538c"};
    @media (max-width: 991px) {
        flex-direction: column;
        align-items: center;
    }
`,u=e.div`
    color: ${({darkMode:o})=>o?"#EDDCFF":"#6b538c"};
    margin: auto 0;
    font: 900 ${({fontSize:o})=>t(24,o)} Inter,
        sans-serif;
    transition: color 0.3s;
`,m=e.div`
    display: flex;
    gap: 8px;
    justify-content: space-between;
    padding: 16px;
`,w=e.img`
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 30px;
    cursor: ${({isDisabled:o})=>o?"default":"pointer"};
    filter: ${({isDisabled:o})=>o?"grayscale(100%) brightness(150%)":"none"};
    opacity: ${({isDisabled:o})=>o?.5:1};
`,$=e.div`
    display: flex;
    gap: -1px;
    font-size: ${({fontSize:o})=>t(14,o)};
    color: ${({darkMode:o})=>o?"#E0E0E0":"#000"};
    font-weight: 600;
    font-weight: 600;
    white-space: nowrap;
    text-align: center;
    justify-content: space-between;
    padding: 40px 80px 40px 0;

    @media (max-width: 991px) {
        flex-wrap: wrap;
        padding-right: 20px;
        justify-content: center;
    }
`,v=e.div`
    display: flex;
    font-variant-numeric: lining-nums tabular-nums;
    font-family: Inter, sans-serif;
    color: ${({darkMode:o})=>o?"#E0E0E0":"#000"};
    transition: color 0.3s;
`,F=e.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: -1px;
    font-size: ${({fontSize:o})=>t(14,o)};
    color: ${({darkMode:o})=>o?"#E0E0E0":"#000"};
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    justify-content: space-between;

    @media (max-width: 991px) {
        grid-template-columns: repeat(7, minmax(0, 1fr));
    }
`,D=e.div`
    font-variant-numeric: lining-nums tabular-nums;
    font-family: Inter, sans-serif;
    justify-content: center;
    border-color: rgba(213, 212, 223, 1);
    border-style: solid;
    border-width: 1px;
    padding: ${({fontSize:o})=>t(40,o)};
    color: ${({darkMode:o})=>o?"#E0E0E0":"#000"};
    background-color: ${({darkMode:o})=>o?"#2D2D2D":"#fff"};
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(213, 212, 223, 0.5);
    }

    @media (max-width: 991px) {
        padding: 20px;
    }
`,y=e.div`
    display: flex;
    flex-direction: column;
    width: 35%;

    padding: 10px;
    border: 1px solid ${({darkMode:o})=>o?"#555555":"#ccc"};
    background-color: ${({darkMode:o})=>o?"#2D2D2D":"#fff"};
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;
    font-size: ${({fontSize:o})=>o};
    border-radius: 8px;
    overflow-y: auto; /* Enable vertical scrolling */
    /* Limit height for smaller screens */
    max-height: 85vh;

    @media (max-width: 991px) {
        overflow-y: auto; /* Enable vertical scrolling */
        max-height: 400px; /* Limit height for smaller screens */
        min-height: 20vh;
        width: 100%;
    }
`,C=e.h2`
    margin-bottom: 5px;
    font-size: ${({fontSize:o})=>t(24,o)};
    color: ${({darkMode:o})=>o?"#EDDCFF":"#6b538c"};
`,E=e.div`
    background-color: ${({darkMode:o})=>o?"#3C3C3C":"#ffffff"};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    color: ${({darkMode:o})=>o?"#EDDCFF":"#6b538c"};
    padding: 16px;
    margin-bottom: 16px;
    position: relative; /* Ensure relative positioning for absolute children */
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    /* Ensure text wrapping */
    word-wrap: break-word;
    word-break: break-word;
    white-space: normal;

    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }
`,k=e.div`
    margin-top: 10px;
    font-size: ${({fontSize:o})=>t(18,o)};
    color: ${({darkMode:o})=>o?"#EDDCFF":"#6b538c"};
    color: #999;
`,j=e.button`
    background-color: ${({darkMode:o})=>o?"darkred":"red"};
    color: white;
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: ${({fontSize:o})=>t(14,o)};
    position: absolute;
    top: 10px;
    right: 10px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: darkred;
    }
`,z=s`
  /* Style all buttons in the date navigation (Month, Week, Day, Today, etc.) */
  .rbc-btn-group button {
    font-size: ${({fontSize:o})=>t(14,o)};
    color: ${({darkMode:o})=>o?"#FFF":"#6B538C"}; /* Main color for labels */
    transition: color 0.3s, background-color 0.3s;
  }

  .rbc-btn-group button:hover {
    color: ${({darkMode:o})=>o?"#FFFFFF":"#543b6f"}; /* Hover color */
  }

  /* Active button style */
  .rbc-btn-group .rbc-active {
    background-color: ${({darkMode:o})=>"#6B538C"};
    color: #FFFFFF; /* Ensure text stays white on active */
  }

  /* Toolbar label color (e.g., displaying current date or view mode) */
  .rbc-toolbar-label {
    font-size: ${({fontSize:o})=>t(24,o)};
    color: ${({darkMode:o})=>o?"#EDDCFF":"#6B538C"};
    transition: color 0.3s;
  }
`,B=e.button`
    background-color: #b6a1e5;
    color: #fff;
    border: none;
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 4px;
    font-size: ${({fontSize:o})=>o||"1em"};
    margin-top: 10px;

    &:hover {
        background-color: #5b2a8b;
    }
`;export{g as CalendarDiv,h as CalendarHeader,x as Container,D as DateCell,F as DatesGrid,v as Day,$ as DaysOfWeek,j as DeleteButton,E as Event,y as EventsContainer,C as EventsHeader,z as GlobalStyles,b as Header,w as Icon,p as MainContainer,u as Month,m as NavIcons,k as NoEventsMessage,B as PurpleButton,f as Wrapper};

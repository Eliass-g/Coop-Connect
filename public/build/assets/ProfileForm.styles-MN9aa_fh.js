import{f as d,p as e}from"./styled-components.browser.esm-B0h7x_ce.js";import"./app-DNWayCnB.js";const r=(o,n,a=1.5,s="rem")=>{const t=parseFloat(n);if(s==="rem"){const i=o/16;return n==="1em"?`${i*t}rem`:n==="1.07em"?`${i*t*1.3}rem`:n==="1.12em"?`${i*t*1.7}rem`:`${i*t*a}rem`}if(s==="vw"){const i=o/100;return n==="1em"?`${i*t}vw`:n==="1.07em"?`${i*t*1.3}vw`:n==="1.12em"?`${i*t*1.7}vw`:`${i*t*a}vw`}},c=d`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`,x=e.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 10px;
    height: 100%;
    flex:1;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${({darkMode:o})=>o?"#1F1F1F":"#fff"};
    color: ${({darkMode:o})=>o?"#f1f1f1":"#2C2C2C"};
    font-size: ${({fontSize:o})=>r(20,o,1.9,"rem")};
    padding: 20px;
    @media (max-width: 991px) {
        padding: 20px;
    }
`,g=e.h1`
    color: ${({darkMode:o})=>o?"#EDDCFF":"#6b538c"};
    text-decoration: underline;
    align-self: center;
    font-weight: 600;
    font-size: ${({fontSize:o})=>r(28,o,1.5,"rem")};
    font-family: Poppins, sans-serif;
    margin-bottom: 20px;
    @media (max-width: 991px) {
        font-size: ${({fontSize:o})=>r(24,o,1.5,"rem")};
    }
`,m=e.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2%;

    color: ${({darkMode:o})=>o?"#f1f1f1":"#2C2C2C"};
    font-size: ${({fontSize:o})=>r(16,o,1.5,"rem")};
`,u=e.div`
    display: flex;
    flex-direction: row;
    width: 100%;

`,$=e.figure`
    display: flex;
    flex-direction: column;
    align-items: start;


`,h=e.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 2px solid ${({darkMode:o})=>o?"#555":"rgba(45, 54, 72, 1)"};
    background-color: ${({darkMode:o})=>o?"#2C2C2C":"#edf0f7"};
`,w=e.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;

`,C=e.input`
    border-radius: 6px;
    border: 2px solid ${({darkMode:o})=>o?"#444":"#260e44"};
    background-color: ${({darkMode:o})=>o?"#2C2C2C":"#fff7ff"};
    color: ${({darkMode:o})=>o?"#CCC":"#7b757f"};
    font-size: ${({fontSize:o})=>r(16,o,1.5,"rem")};
    font-family: Poppins, sans-serif;
    height: 100%;
    width: 95%;
    align-self: center;
`,v=e.h2`
    color: ${({darkMode:o})=>o?"#EDDCFF":"#2d3648"};
    letter-spacing: 0.1px;
    font-weight: 500;
    font-size: ${({fontSize:o})=>r(18,o,1.5,"rem")};
    font-family: Poppins, sans-serif;
`,k=e.section`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    width: 100%;
`,y=e.div`
    margin-bottom: 15px;
`,z=e.label`
    color: ${({darkMode:o})=>o?"#EDDCFF":"#6b538c"};
    font-weight: 500;
    font-size: ${({fontSize:o})=>r(21,o,1.5,"rem")};
    margin-bottom: 5px;
    display: block;
`,F=e.input`
    border-radius: 6px;
    border: 2px solid ${({darkMode:o})=>o?"#444":"#260e44"};
    background-color: ${({darkMode:o})=>o?"#2C2C2C":"#fff7ff"};
    color: ${({darkMode:o})=>o?"#CCC":"#7b757f"};
    font-size: ${({fontSize:o})=>r(17,o,1.5,"rem")};
    padding: 8px;
    width: 100%;
`,f=e.button`
    background-color: ${({darkMode:o})=>"#6b538c"};
    color: #fff;
    padding: 10px 20px;
    font-size: ${({fontSize:o})=>r(16,o,1.5,"rem")};
    border-radius: 8px;
    cursor: pointer;
    margin-top: 20px;
    width: 100%;
    max-width: 200px;
    align-self: start;
`,D=e(f)`
    background: linear-gradient(135deg, ${({darkMode:o})=>"#6b538c"}, ${({darkMode:o})=>"#a97bbf"});
    width: 100%;

    &:hover {
        background: linear-gradient(135deg, ${({darkMode:o})=>"#543b6f"}, ${({darkMode:o})=>"#8e6aae"});
        transform: scale(1.05);
    }
`,P=e.div`
    border: 2px dashed ${({darkMode:o})=>"#6b538c"};
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    color: ${({darkMode:o})=>o?"#EDDCFF":"#6b538c"};
    font-family: Poppins, sans-serif;
    font-size: ${({fontSize:o})=>r(14,o,1.5,"rem")};
    font-weight: 500;
    letter-spacing: 0.1px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: ${({darkMode:o})=>o?"#333":"#f3e8ff"};
    }
`,S=e.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,B=e.div`
    background-color: ${({darkMode:o})=>o?"#444":"#e0e0e0"};
    color: ${({darkMode:o})=>o?"#CCC":"#333"};
    padding: 6px 12px;
    border-radius: 20px;
    font-size: ${({fontSize:o})=>r(14,o,1.5,"rem")};
`,E=e.button`
    background-color: ${({darkMode:o})=>"#6b538c"};
    color: #fff;
    border: none;
    padding: 8px 16px;
    font-size: ${({fontSize:o})=>r(14,o,1.5,"rem")};
    border-radius: 4px;
    cursor: pointer;
`,I=e.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: ${({fontSize:o})=>r(20,o,1.5,"rem")};
    background-color: ${({darkMode:o})=>o?"#121212":"#f0f0f0"};
    color: ${({darkMode:o})=>o?"#f1f1f1":"#333"};
`,L=e.div`
    border: 4px solid ${({darkMode:o})=>o?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
    border-top: 4px solid ${({darkMode:o})=>o?"#EDDCFF":"#3498db"};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${c} 1s linear infinite;
`,j=e.ul`
    background-color: ${({darkMode:o})=>o?"#1F1F1F":"white"};
    border: 1px solid ${({darkMode:o})=>"#6b538c"};
    border-radius: 5px;
    margin: 0;
    padding: 0;
    list-style: none;
    width: calc(100% - 20px);
    max-height: 150px;
    overflow-y: auto;
    z-index: 1000;
`,A=e.li`
    padding: 8px;
    cursor: pointer;
    color: ${({darkMode:o})=>o?"#f1f1f1":"#333"};
    font-size: ${({fontSize:o})=>r(14,o,1.5,"rem")};

    &:hover {
        background-color: ${({darkMode:o})=>o?"#333":"#f0f0f0"};
    }
`,l=e.div`
    width: 100%;
    @media (min-width: 992px) {
        width: 48%;
    }
`,H=e(l)`
`,R=e.input.attrs({type:"radio"})`
    appearance: none;
    border: 2px solid ${({darkMode:o})=>"#6b538c"};
    width: 18px;
    height: 18px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    outline: none;
    transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

    &:checked {
        background-color: ${({darkMode:o})=>"#6b538c"};
        border-color: ${({darkMode:o})=>"#6b538c"};
    }

    &:focus {
        border-color: ${({darkMode:o})=>"#8e6aae"};
    }
`,W=e.label`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: ${({fontSize:o})=>r(16,o,1.5,"rem")};
    color: ${({darkMode:o})=>o?"#f1f1f1":"#333"};
    font-family: Poppins, sans-serif;
    cursor: pointer;
`,O=e.div`
    display: flex;
    gap: 16px;
    margin-top: 10px;
    font-size: ${({fontSize:o})=>r(16,o,1.5,"rem")};
`;export{E as AddSkillButton,A as AutocompleteItem,j as AutocompleteList,v as BioHeader,C as BioValue,D as ClearProfileButton,z as DetailLabel,F as DetailValue,P as DropzoneContainer,f as EditProfileButton,I as LoadingScreen,w as ProfileBio,u as ProfileContainer,k as ProfileDetail,y as ProfileDetailItem,l as ProfileDetailOne,H as ProfileDetailTwo,g as ProfileHeader,h as ProfileImage,$ as ProfileImageWrapper,m as ProfileSection,x as ProfileWrapper,B as SkillChip,S as SkillsContainer,L as Spinner,O as StatusContainer,W as StatusLabel,R as StatusRadioButton,c as spin};

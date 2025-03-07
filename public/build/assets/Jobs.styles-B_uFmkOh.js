import{f as r,p as i}from"./styled-components.browser.esm-B0h7x_ce.js";import{F as a}from"./index.es-BshNEZt1.js";import"./app-DNWayCnB.js";import"./index-CCYKEXcx.js";const t=(o,e,s=1.5)=>{const n=parseFloat(e);return e==="1em"?`${o*n}px`:e==="1.07em"?`${o*n*1.3}px`:e==="1.12em"?`${o*n*1.7}px`:`${o*n*s}px`},p=r`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,c=r`
    0% {
        opacity: 0;
        transform: translateY(-40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`,m=i.main`
    align-self: stretch;
    display: flex;
    flex: 1;
    flex-direction: row;
    padding: 10px;
    gap: 20px;
    transition: background-color 0.5s ease, color 0.5s ease;
    animation: ${p} 0.8s ease-in-out;
    background-color: ${({darkMode:o})=>o?"#2C2C2C":"#fff7ff"};
    color: ${({darkMode:o})=>o?"#f1f1f1":"#2C2C2C"};
    font-size: ${({fontSize:o})=>t(16,o)};
@media (max-width: 991px) {
        max-width: 100%;
        padding: 0 20px;
        flex-direction: column;
        width: 100%;
`,g=i.section`
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: ${({darkMode:o})=>o?"#2C2C2C":"#fff"};
    border: 1px solid ${({darkMode:o})=>o?"#555":"#ddd"};
    border-radius: 8px;
    display: flex;

    flex-direction: column;
    transition: background-color 0.5s ease, color 0.5s ease;
    padding: 20px 10px 0;
    color: ${({darkMode:o})=>o?"#f1f1f1":"#2C2C2C"};
    font-size: ${({fontSize:o})=>t(16,o)};

    @media (max-width: 991px) {
        max-width: 100%;
        padding: 0 20px;
    }
`,h=i.main`
    @media (max-width: 991px) {
        display: flex;
        flex-direction: column;
    }
`,b=i.div`
    display: flex;
    width: 100%;
    max-width: 1088px;
    flex-direction: column;
    align-items: center;
    color: ${({darkMode:o})=>o?"#f1f1f1":"#2C2C2C"};
    font-size: ${({fontSize:o})=>t(16,o)};

    @media (max-width: 991px) {
        max-width: 100%;
    }
`,u=i.h2`
    color: ${({darkMode:o})=>o?"#EDDCFF":"#6b538c"};
    font-size: ${({fontSize:o})=>t(32,o)};
    font-family: Poppins, sans-serif;
    font-weight: 700;
`,C=i.p`
    color: ${({darkMode:o})=>o?"#CCC":"#7b757f"};
    margin-top: 10px;
    font-size: ${({fontSize:o})=>t(24,o)};
    font-family: Poppins, sans-serif;
    font-weight: 700;
    line-height: 133%;

    @media (max-width: 991px) {
        max-width: 100%;
    }
`,w=i.form`
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid ${({darkMode:o})=>o?"#555":"#7b757f"};
    display: flex;
    margin-top: 30px;
    gap: 20px;
    font-size: ${({fontSize:o})=>t(16,o)};
    color: ${({darkMode:o})=>o?"#f1f1f1":"#7b757f"};
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 150%;
    padding: 10px;
    overflow-x: auto;
    width: 100%;
    white-space: nowrap;

    @media (max-width: 991px) {
        flex-wrap: nowrap;
    }
`,$=i.div`
    justify-content: center;
    display: flex;
    flex: 1;
    gap: 10px;
    min-width: 0; /* Allows shrinking of the input field if needed */
`,y=i.input`
    font-family: Poppins, sans-serif;
    flex: 1;
    border-radius: 4px;
    border: 1px solid ${({darkMode:o})=>o?"#444":"#6b538c"};
    background-color: ${({darkMode:o})=>o?"#2C2C2C":"#fff"};
    transition: background-color 0.5s ease, color 0.5s ease;
    padding: 8px 16px;
    color: ${({darkMode:o})=>o?"#f1f1f1":"#2C2C2C"};
    font-size: ${({fontSize:o})=>t(16,o)};
    width: 100%;
    min-width: 0; /* Allows the input to shrink if necessary */
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: ${({darkMode:o})=>o?"#666":"#9c4dcc"}; /* Slightly different border color on focus */
    }
`,F=i.button`
    font-family: Roboto, sans-serif;
    justify-content: center;
    border-radius: 12px;
    background-color: ${({darkMode:o})=>"#6b538c"};
    transition: background-color 0.5s ease, color 0.5s ease;
    color: #fff;
    padding: 8px 16px;
    font-size: ${({fontSize:o})=>t(16,o)};
`,k=i.div`
    display: flex;
    margin-top: 5vh;
    margin-bottom: 5vh;
    padding: 10px 10px 0;
    transition: background-color 0.5s ease, color 0.5s ease;
    color: ${({darkMode:o})=>o?"#f1f1f1":"#2C2C2C"};
    font-size: ${({fontSize:o})=>t(16,o)};

    @media (max-width: 991px) {
        max-width: 100%;
        flex-direction: column;
        margin-top: 2vh;
        margin-bottom: 2vh;
        padding: 0;
    }
`,v=i.button`
    background: transparent;
    border: none;
    color: ${({darkMode:o})=>o?"#FFF":"#000"};
    font-size: 1rem;
    cursor: pointer;
    margin-left: 5px;
    &:hover {
        color: ${({darkMode:o})=>o?"#EDDCFF":"#6B538C"};
    }
`,D=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    width: 90%;
    overflow-y: auto;
    background-color: ${({darkMode:o})=>o?"#2C2C2C":"#fff"};
    transition: background-color 0.5s ease, color 0.5s ease;
    padding: 16px;

    color: ${({darkMode:o})=>o?"#f1f1f1":"#2C2C2C"};
    font-size: ${({fontSize:o})=>t(16,o)};
    max-height: 83vh;

    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

    /* Ensure no more than 3 columns are displayed */
    grid-template-columns: repeat(3, minmax(0, 1fr));

    @media (max-width: 991px) {
        width: 100%;
        flex-direction: column;
        max-height: 50vh;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`,z=i.div`
    display: flex;
    flex-direction: column;
`,E=i.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({darkMode:o})=>o?"#444444":"#eddcff"};
    color: ${({darkMode:o})=>o?"#f1f1f1":"#260e44"};
    border-radius: 10px;
    border: 2px solid ${({darkMode:o})=>o?"#444":"#773dc3"};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    text-align: center;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    animation: ${c} 0.8s ease forwards;
    animation-delay: ${o=>o.index*.3}s;
    opacity: 0;
    min-width: 250px;
    max-width: 400px;
    max-height: 800px;
    justify-content: space-between;
    box-sizing: border-box;

    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }

    @media (max-width: 991px) {
        width: 100%; /* Ensure full width on smaller screens */
        flex-direction: column;
    }
`,J=i.h3`
    display: flex;
    font-size: ${({fontSize:o})=>t(28,o)};
    font-family: Poppins, sans-serif;
    color: ${({darkMode:o})=>o?"#EDDCFF":"#2C2C2C"};
`,j=i.div`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Poppins, sans-serif;
    letter-spacing: 0.15px;
    color: ${({darkMode:o})=>o?"#EDDCFF":"#2C2C2C"};
    font-size: ${({fontSize:o})=>t(16,o)};
`,S=i.div`
    justify-content: space-between;
    align-content: space-between;
    align-self: stretch;
    flex-wrap: wrap;
    display: flex;
    margin-top: 17px;
    gap: 10px;
    font-size: ${({fontSize:o})=>t(12,o)};
    color: ${({darkMode:o})=>"#773dc3"};
    font-weight: 400;
    letter-spacing: 0.4px;
    line-height: 133%;
`,I=i.span`
    font-family: Poppins, sans-serif;
    justify-content: center;
    border-radius: 40px;
    border: 1px solid ${({darkMode:o})=>"#773dc3"};
    padding: 8px 10px;
    background-color: ${({darkMode:o})=>o?"#444":"#fff"};
    transition: background-color 0.5s ease, color 0.5s ease;
    color: ${({darkMode:o})=>o?"#EDDCFF":"#2C2C2C"};
`,P=i.p`
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    align-self: stretch;
    text-align: center;
    text-overflow: ellipsis;
    letter-spacing: 0.25px;
    margin-top: 15px;
    font-size: ${({fontSize:o})=>t(14,o)};
    font-family: Poppins, sans-serif;
    color: ${({darkMode:o})=>o?"#f1f1f1":"#2C2C2C"};
`,B=i.hr`
    border-color: ${({darkMode:o})=>o?"#EDDCFF":"#260e44"};
    border-top: 1px solid;
    background-color: ${({darkMode:o})=>o?"#EDDCFF":"#260e44"};
    transition: background-color 0.5s ease, color 0.5s ease;
    margin-top: 14px;
    width: 86px;
`,T=i.button`
    font-family: Roboto, sans-serif;
    justify-content: center;
    border-radius: 12px;
    background-color: ${({darkMode:o})=>"#6b538c"};
    transition: background-color 0.5s ease, color 0.5s ease;
    margin-top: 15px;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.5px;
    padding: 8px 16px;
    font-size: ${({fontSize:o})=>t(16,o)};
`,A=i.div`
    display: flex;
    flex-direction: column;
    align-items: self-end;
    line-height: normal;
    width: 100%;
    margin-left: 20px;
    min-width: 500px;
    @media (max-width: 991px) {
        width: 100%;
        margin-left: 0;
        margin-top: 2vh;
        min-width: 100px;
    }
`,L=i.article`
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: 3px solid ${({darkMode:o})=>o?"#444":"#773dc3"};
    background-color: ${({darkMode:o})=>o?"#2C2C2C":"#eddcff"};
    transition: background-color 0.5s ease, color 0.5s ease;
    display: flex;
    width: 100%;
    min-width: 250px;
    flex-direction: column;
    padding: 20px 40px;
    margin-bottom: 10px;
    color: ${({darkMode:o})=>o?"#f1f1f1":"#2C2C2C"};
    font-size: ${({fontSize:o})=>t(16,o)};

    @media (max-width: 991px) {
        padding: 0 20px;
        min-width: none;
    }
`,R=i.img`
    width: 50px;
    height: 50px;
    border-radius: 10px;
`,Y=i.div`
    display: flex;
    margin-top: 10px;
    gap: 20px;
    letter-spacing: 0.15px;
    color: ${({darkMode:o})=>o?"#f1f1f1":"#2C2C2C"};
    font-size: ${({fontSize:o})=>t(16,o)};
`,M=i.div`
    display: flex;
    align-self: start;
    flex-direction: column;
    color: ${({darkMode:o})=>o?"#f1f1f1":"#2C2C2C"};
    font-size: ${({fontSize:o})=>t(16,o)};
`,H=i.p`
    font-family: Poppins, sans-serif;
    color: ${({darkMode:o})=>o?"#EDDCFF":"#2C2C2C"};
`,N=i.p`
    font-family: Poppins, sans-serif;
    color: ${({darkMode:o})=>o?"#EDDCFF":"#2C2C2C"};
`,q=i.button`
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    font-family: Roboto, sans-serif;
    border-radius: 12px;
    background-color: ${({darkMode:o})=>"#6b538c"};
    transition: background-color 0.5s ease, color 0.5s ease;
    margin-top: 10px;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 24px;
    font-style: normal;
    font-size: ${({fontSize:o})=>t(16,o)};
    width: 100%;
`,G=i.p`
    max-width: 550px;
    padding-top: 11px;
    border-top: 1px solid rgba(0, 0, 0, 1);
    align-self: stretch;
    margin-top: 15px;
    color: ${({darkMode:o})=>o?"#f1f1f1":"#000"};
    letter-spacing: 0.25px;
    font-size: ${({fontSize:o})=>t(14,o)};
    font-family: Poppins, sans-serif;

    @media (max-width: 991px) {
        max-width: 100%;
    }
`,K=i.div`
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    align-self: stretch;
    flex-wrap: wrap;
    margin-top: 17px;
    gap: 10px;
    font-size: ${({fontSize:o})=>t(12,o)};
    color: ${({darkMode:o})=>"#773dc3"};
    letter-spacing: 0.4px;
    line-height: 133%;

    @media (max-width: 991px) {
        white-space: initial;
    }
`,O=i.span`
    font-family: Poppins, sans-serif;
    border: 1px solid ${({darkMode:o})=>"#773dc3"};
    border-radius: 40px;
    padding: 8px 10px;
    text-align: center;
    background-color: ${({darkMode:o})=>o?"#444":"#fff"};
    transition: background-color 0.5s ease, color 0.5s ease;
    color: ${({darkMode:o})=>o?"#EDDCFF":"#2C2C2C"};
`,Q=i(a)`
    font-size: ${({fontSize:o})=>t(24,o)};
    color: ${({darkMode:o})=>o?"#f1f1f1":"#2C2C2C"};
    margin-right: 10px;
    align-self: center;
`,U=i(a)`
    font-size: ${({fontSize:o})=>t(24,o)};
    color: ${({darkMode:o})=>o?"#f1f1f1":"#2C2C2C"};
    margin-right: 10px;
    align-self: center;
`;export{q as ApplyButton,v as ClearButton,M as CompanyDetails,R as CompanyImage,Y as CompanyInfo,N as CompanyLocation,H as CompanyName,B as Divider,A as FeaturedJob,h as FeaturedJobandList,E as JobCard,L as JobCardFeatured,D as JobColumn,z as JobColumnAndTitle,P as JobDescription,G as JobFullDescription,k as JobList,j as JobMeta,S as JobTags,J as JobTitle,U as LocationIcon,m as MainContainer,F as SearchButton,g as SearchContainer,$ as SearchField,w as SearchForm,Q as SearchIcon,b as SearchInnerContainer,y as SearchInput,O as SkillBadge,K as SkillsList,u as SubHeading,I as Tag,C as TextDescription,T as ViewButton};

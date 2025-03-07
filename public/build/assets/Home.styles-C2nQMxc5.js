import{f as i,p as t}from"./styled-components.browser.esm-B3TAIFtu.js";import"./app-C5_nSkG0.js";const e=i`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,n=i`
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,r=t.span`
    text-decoration: underline;
`,s=t.main`
    align-self: stretch;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: var(--Schemes-Background, #fff7ff);
    animation: ${e} 0.8s ease-in-out;
`,x=t.section`
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    display: flex;
    margin-top: 40px;
    flex-direction: column;
    color: #7b757f;
    padding: 20px 10px;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`,d=t.h2`
    color: #6b538c;
    font: 600 32px Poppins, sans-serif;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`,c=t.h3`
    margin-top: 10px;
    font: 500 24px/133% Poppins, sans-serif;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`,f=t.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    text-align: center;
    margin-top: 30px;
    font: 400 22px/28px Poppins, sans-serif;
    @media (max-width: 768px) {
        font-size: 18px;
        margin-top: 20px;
    }
`,l=t.button`
    justify-content: center;
    border-radius: 12px;
    background-color: #6b538c;
    margin-top: 30px;
    color: #fff;
    letter-spacing: 0.5px;
    padding: 8px 16px;
    font: 700 16px/150% Roboto, sans-serif;
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 6px 12px;
    }
`,m=t.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px 10px;
    margin-top: 40px;

    @media (max-width: 991px) {
        padding: 0 20px;
    }
`,g=t.h2`
    color: #6b538c;
    font: 600 32px Poppins, sans-serif;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`,b=t.p`
    color: #7b757f;
    margin-top: 10px;
    font: 500 24px/32px Poppins, sans-serif;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`,w=t.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* Allow wrapping for desktop view */
    gap: 20px;
    margin-top: 20px;
    align-self: stretch;

    @media (max-width: 991px) {
        flex-direction: column; /* Stack items vertically */
        flex-wrap: nowrap; /* Prevent wrapping in mobile view */
        align-items: stretch; /* Stretch items to full width */
        overflow-y: auto; /* Enable vertical scrolling */
        padding: 10px; /* Add padding for better spacing */
        gap: 15px; /* Adjust gap between items */
        margin-top: 10px; /* Reduce top margin to prevent cut-off */
    }
`,h=t.article`
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #eddcff;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px 40px;
    word-wrap: break-word;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    animation: ${n} 0.5s ease forwards;
    animation-delay: ${o=>o.index*.1}s;
    opacity: 0; /* Start hidden */
    border: 2px solid #773dc3;

    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }
    @media (max-width: 768px) {
        margin-top: 20px;
        padding: 10px 20px;
        max-width: 300px;
    }
`,u=t.h3`
    color: #260e44;
    font: 28px/129% Poppins, sans-serif;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`,y=t.h4`
    color: #260e44;
    font-family: Poppins, sans-serif;
    margin-top: 18px;
    letter-spacing: 0.15px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`,v=t.p`
    color: #260e44;
    font-family: Poppins, sans-serif;
    letter-spacing: 0.15px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`,P=t.div`
    justify-content: space-between;
    flex-wrap: wrap;
    display: flex;
    margin-top: 17px;
    gap: 10px;
    font-size: 12px;
    color: #773dc3;
    font-weight: 400;
    letter-spacing: 0.4px;
    @media (max-width: 991px) {
        white-space: initial;
    }
`,k=t.span`
    font-family: Poppins, sans-serif;
    justify-content: center;
    border-radius: 40px;
    border: 1px solid #773dc3;
    padding: 8px 10px;
    white-space: nowrap;
    @media (max-width: 768px) {
        font-size: 10px;
        padding: 6px 8px;
    }
`,z=t.p`
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #260e44;
    text-align: center;
    text-overflow: ellipsis;
    letter-spacing: 0.25px;
    margin-top: 15px;
    font: 400 14px/20px Poppins, sans-serif;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`,S=t.div`
    background-color: #260e44;
    align-self: center;
    margin-top: 14px;
    width: 86px;
    height: 1px;
`,j=t.div`
    justify-content: center;
    display: flex;
    margin-top: 15px;
    gap: 15px;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`,J=t.button`
    font-family: Roboto, sans-serif;
    justify-content: center;
    border-radius: 12px;
    background-color: #6b538c;
    color: #fff;
    padding: 8px 16px;
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 6px 12px;
    }
`,B=t.button`
    font-family: Roboto, sans-serif;
    justify-content: center;
    border-radius: 12px;
    border: 2px solid #6b538c;
    color: #260e44;
    padding: 8px 16px;
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 6px 12px;
    }
`,C=t.button`
    background-color: red;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 12px;
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 6px 12px;
    }
`,T=t.div`
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    align-self: stretch;
    flex-wrap: wrap;
    margin-top: 17px;
    gap: 10px;
    font-size: 12px;
    color: #773dc3;
    letter-spacing: 0.4px;
    line-height: 133%;

    @media (max-width: 991px) {
        white-space: initial;
    }
`,D=t.span`
    font-family: Poppins, sans-serif;
    border: 1px solid #773dc3;
    border-radius: 40px;
    padding: 8px 10px;
    text-align: center;
    background-color: #ffffff;

    @media (max-width: 768px) {
        font-size: 10px;
        padding: 6px 8px;
    }
`;export{j as CardButtons,y as CompanyName,x as CreateJobSection,m as CurrentPostingsSection,C as DeletePostingButton,S as Divider,B as EditPostingButton,b as EditingInstructions,h as JobCard,u as JobCardTitle,f as JobDescription,z as JobDescriptionText,c as JobSubtitle,d as JobTitle,v as Location,s as MainContainer,l as PostJobButton,w as PostingsGrid,g as SectionTitle,D as SkillBadge,T as SkillsList,k as Tag,P as Tags,r as UnderlineText,J as ViewPostingButton};

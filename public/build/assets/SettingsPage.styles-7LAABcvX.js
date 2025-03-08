import{f as r,p as t}from"./styled-components.browser.esm-Cye39UAp.js";import"./app-pcpPOzh4.js";const n=r`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,s=t.main`
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: ${({darkMode:o})=>o?"#1f1f1f":"#fff"};
    color: ${({darkMode:o})=>o?"#f5f5f5":"#000"};
    display: flex;
    border: 2px solid ${({darkMode:o})=>o?"#444":"#e2e8f0"};
    flex-direction: column;
    padding: 20px;
    width: 100%;
    animation: ${n} 0.8s ease-in-out;
    transition: background-color 0.5s ease, color 0.5s ease;
    font-size: ${({fontSize:o})=>o};

    @media (max-width: 991px) {
        padding: 10px;
        width: 100%;
        flex-direction: column;
    }
`,d=t.section`
    display: flex;
    flex-direction: column;
    border-color: ${({darkMode:o})=>o?"rgba(200, 200, 200, 1)":"rgba(123, 117, 127, 1)"};
    transition: border-color 0.5s ease;
    font-size: ${({fontSize:o})=>o};

    @media (max-width: 991px) {
        max-width: 100%;
    }
`,c=t.section`
    border-color: ${({darkMode:o})=>o?"rgba(200, 200, 200, 1)":"rgba(123, 117, 127, 1)"};
    border-style: solid;
    border-bottom-width: 1px;
    margin-top: 40px;
    padding: 20px;
    display: flex;
    gap: 20px;
    transition: border-color 0.5s ease;
    font-size: ${({fontSize:o})=>o};

    @media (max-width: 991px) {
        flex-direction: column;
        align-items: stretch;
    }
`,l=t.header`
    align-items: center;
    border-radius: 6px;
    border: 1px solid
        ${({darkMode:o})=>o?"#444":"rgba(0, 0, 0, 1)"};
    align-self: center;
    display: flex;
    width: 100%;

    gap: 20px;
    font-size: ${({fontSize:o})=>o};
    color: ${({darkMode:o})=>o?"#f5f5f5":"#334155"};
    font-weight: 500;
    line-height: 143%;
    justify-content: space-between;
    padding: 5px 10px;
    transition: border-color 0.5s ease, color 0.5s ease;

    @media (max-width: 991px) {
        flex-wrap: wrap;
    }
`,p=t.div`
    font-family: Inter, sans-serif;
    border-bottom: 2px solid rgba(107, 83, 140, 1);
    background-color: ${({darkMode:o})=>o?"#333":"#fff"};
    align-self: stretch;
    color: ${({darkMode:o})=>o?"#ddd":"#0f172a"};
    justify-content: center;
    padding: 6px 20px;
    font-size: ${({fontSize:o})=>o};
    transition: background-color 0.5s ease, color 0.5s ease;

    @media (max-width: 991px) {
        white-space: normal;
    }
`,f=t.div`
    font-family: Inter, sans-serif;
    align-self: stretch;
    margin: auto 0;
    cursor: pointer;
    color: ${({darkMode:o})=>o?"#ddd":"#334155"};
    border-bottom: ${o=>o.active?"2px solid rgba(107, 83, 140, 1)":"none"};
    font-size: ${({fontSize:o})=>o};
    transition: color 0.5s ease;

    @media (max-width: 991px) {
        white-space: normal;
    }
`,x=t.div`
    display: flex;
    flex-direction: column;
    width: 77%;
    margin-left: 0;
    font-size: ${({fontSize:o})=>o};

    @media (max-width: 991px) {
        width: 100%;
    }
`,m=t.article`
    display: flex;
    flex-direction: column;
    font-size: ${({fontSize:o})=>o};

    @media (max-width: 991px) {
        margin-top: 20px;
    }
`,b=t.h2`
    color: ${({darkMode:o})=>o?"#ddd":"#000"};
    font-size: ${({fontSize:o})=>o};
    font: 400 32px Poppins, sans-serif;
    transition: color 0.5s ease;

    @media (max-width: 991px) {
        max-width: 100%;
    }
`,g=t.p`
    color: ${({darkMode:o})=>o?"#bbb":"#7b757f"};
    letter-spacing: 0.25px;
    margin-top: 10px;
    font-size: ${({fontSize:o})=>o};

    transition: color 0.5s ease;

    @media (max-width: 991px) {
        max-width: 100%;
    }
`,u=t.div`
    display: flex;
    flex-direction: column;
    width: 23%;
    margin-left: 20px;
    font-size: ${({fontSize:o})=>o};

    @media (max-width: 991px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
    }
`,h=t.button`
    justify-content: center;
    border-radius: 6px;
    background-color: #e53e3e;
    align-self: stretch;
    color: #fff;
    width: 100%;
    margin: auto 0;
    padding: 8px 16px;
    font-size: ${({fontSize:o})=>o};
    font: 600 16px/150% Inter, sans-serif;
    cursor: pointer;
    transition: background-color 0.5s ease, transform 0.5s ease;

    &:hover {
        background-color: #c53030;
        transform: scale(1.05);
    }

    @media (max-width: 991px) {
        margin-top: 20px;
    }
`,$=t.section`
    border-color: ${({darkMode:o})=>o?"rgba(200, 200, 200, 1)":"rgba(123, 117, 127, 1)"};
    border-style: solid;
    border-bottom-width: 1px;
    margin-top: 20px;
    padding: 20px;
    background-color: ${({darkMode:o})=>o?"#2c2c2c":"#fff"};
    transition: border-color 0.5s ease, background-color 0.5s ease;
    font-size: ${({fontSize:o})=>o};

    @media (max-width: 991px) {
        max-width: 100%;
    }
`,w=t.header`
    gap: 20px;
    display: flex;
    font-size: ${({fontSize:o})=>o};

    @media (max-width: 991px) {
        flex-direction: column;
        align-items: stretch;
    }
`,z=t.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    font-size: ${({fontSize:o})=>o};
    margin-left: 0;

    @media (max-width: 991px) {
        width: 100%;
    }
`,k=t.article`
    display: flex;
    flex-direction: column;
    font-size: ${({fontSize:o})=>o};

    @media (max-width: 991px) {
        margin-top: 20px;
    }
`,y=t.div`
    color: ${({darkMode:o})=>o?"#FF7777":"#D60000"};
    font-size: ${({fontSize:o})=>o}px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 8px;
`,v=t.h2`
    color: ${({darkMode:o})=>o?"#ddd":"#000"};
    font-size: ${({fontSize:o})=>o};
    font: 400 32px Poppins, sans-serif;
    transition: color 0.5s ease;

    @media (max-width: 991px) {
        max-width: 100%;
    }
`,F=t.p`
    color: ${({darkMode:o})=>o?"#bbb":"#7b757f"};
    letter-spacing: 0.25px;
    margin-top: 10px;
    font-size: ${({fontSize:o})=>o};
    font: 600 Poppins, sans-serif;
    transition: color 0.5s ease;

    @media (max-width: 991px) {
        max-width: 100%;
    }
`,S=t.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: ${({fontSize:o})=>o};
    margin-left: 20px;

    @media (max-width: 991px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
    }
`,C=t.div`
    text-align: center;
    color: ${({darkMode:o})=>o?"#bbb":"#7b757f"};
    letter-spacing: 0.4px;
    font-size: ${({fontSize:o})=>o};
    font: 600 12px/133% Poppins, sans-serif;
    transition: color 0.5s ease;
`,B=t.div`
    border-radius: 6px;
    border: 1px solid
        ${({darkMode:o})=>o?"#666":"rgba(0, 0, 0, 1)"};
    background-color: ${({darkMode:o})=>o?"#444":"#fff"};
    display: flex;
    margin-top: 10px;
    gap: 10px;
    font-size: ${({fontSize:o})=>o};
    font-weight: 500;
    width: 100%;
    line-height: 143%;
    justify-content: space-between;
    padding: 5px 10px;
    transition: border-color 0.5s ease, background-color 0.5s ease;

    @media (max-width: 991px) {
        white-space: nowrap; /* Prevent content from wrapping */
        overflow-x: auto; /* Enable horizontal scrolling */
        -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
    }
`,D=t.button`
    font-family: Inter, sans-serif;
    border-radius: 3px;
    background-color: ${({className:o,darkMode:e})=>(o==="private"||o==="public")&&e?"#543b6f":o==="private"||o==="public"?"#6b538c":"transparent"};
    color: ${({className:o,darkMode:e})=>o==="private"||o==="public"?"#fff":e?"#ddd":"#334155"};
    justify-content: center;
    padding: 6px 12px;
    cursor: pointer;
    font-size: ${({fontSize:o})=>o};
    transition: background-color 0.5s ease, transform 0.5s ease, color 0.5s ease;

    &:hover {
        background-color: ${({className:o,darkMode:e})=>(o==="private"||o==="public")&&e?"#4e3663":o==="private"||o==="public"?"#543b6f":e?"#555":"#f0f0f0"};
        transform: scale(1.05);
    }

    @media (max-width: 991px) {
        white-space: normal;
    }
`,I=t.button`
    padding: 0.5em;
    margin: 5px;
    cursor: pointer;
    background: ${({active:o,darkMode:e})=>o?"#6B538C":e?"#555":"#E0E0E0"};
    color: ${({active:o,darkMode:e})=>o?"#FFF":e?"#ddd":"#000"};
    border: none;
    border-radius: 5px;
    user-select: none;
    font-size: ${({fontSize:o})=>o};
    transition: background-color 0.5s ease, color 0.5s ease;

    &:hover {
        background: ${({active:o,darkMode:e})=>o?"#0056b3":e?"#666":"#c7c7c7"};
    }
`,j=t.button`
    padding: 0.5em;
    margin: 5px;
    cursor: pointer;
    background: ${({active:o,darkMode:e})=>o?"#6B538C":e?"#006400":"#66CC66"};
    color: ${({active:o,darkMode:e})=>o?"#FFF":e?"#ddd":"#FFF"};
    border: none;
    border-radius: 5px;
    user-select: none;
    font-size: ${({fontSize:o})=>o};
    transition: background-color 0.5s ease, color 0.5s ease;

    &:hover {
        background: ${({active:o,darkMode:e})=>o?"#0056b3":e?"#66CC66":"#006400"};
    }
`,O=t.section`
    border-color: ${({darkMode:o})=>o?"rgba(200, 200, 200, 1)":"rgba(123, 117, 127, 1)"};
    border-style: solid;
    border-bottom-width: 1px;
    padding: 20px;
    display: flex;
    margin-top: 20px;
    gap: 20px;
    background-color: ${({darkMode:o})=>o?"#2c2c2c":"#fff"};
    font-size: ${({fontSize:o})=>o};
    transition: border-color 0.5s ease, background-color 0.5s ease;

    @media (max-width: 991px) {
        flex-direction: column;
        align-items: stretch;
    }
`,P=t.button`
    justify-content: center;
    border-radius: 6px;
    background-color: ${({darkMode:o})=>o?"#543b6f":"#6b538c"};
    align-self: stretch;
    color: #fff;
    width: 100%;
    margin: auto 0;
    padding: 8px 16px;
    font-size: ${({fontSize:o})=>o};
    font: 600 16px/150% Inter, sans-serif;
    cursor: pointer;
    transition: background-color 0.5s ease, transform 0.5s ease;

    &:hover {
        background-color: ${({darkMode:o})=>o?"#4e3663":"#543b6f"};
        transform: scale(1.05);
    }

    @media (max-width: 991px) {
        margin-top: 20px;
    }
`,E=t.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    font-size: ${({fontSize:o})=>o};
`,A=t.div`
    display: flex;
    flex-direction: column;
    font-size: ${({fontSize:o})=>o};
`,T=t.label`
    font-size: ${({fontSize:o})=>o};
    color: ${({darkMode:o})=>o?"#ddd":"#334155"};
    margin-bottom: 5px;
    transition: color 0.5s ease;
`,H=t.input`
    padding: 10px;
    border: 1px solid ${({darkMode:o})=>o?"#444":"#e2e8f0"};
    border-radius: 5px;
    font-size: ${({fontSize:o})=>o};
    transition: border-color 0.5s ease, background-color 0.5s ease,
        color 0.5s ease;
    background-color: ${({darkMode:o})=>o?"#333":"#fff"};
    color: ${({darkMode:o})=>o?"#ddd":"#000"};

    &:hover {
        border-color: ${({darkMode:o})=>o?"#543b6f":"#6b538c"};
        background-color: ${({darkMode:o})=>o?"#444":"#f3e8ff"};
    }
`,L=t.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: ${({darkMode:o})=>o?"rgb(83, 63, 100)":"rgb(107,83,140)"};
    color: #fff;
    font-size: ${({fontSize:o})=>o};
    cursor: pointer;
    align-self: flex-end;
    margin-right: 1vw;
    transition: background-color 0.5s ease, transform 0.5s ease;

    &:hover {
        background-color: ${({darkMode:o})=>o?"#4e3663":"#543b6f"};
        transform: scale(1.05);
    }
`,M=t.p`
    color: ${({error:o,darkMode:e})=>o?"red":e?"lightgreen":"green"};
    font-size: ${({fontSize:o})=>o};
    transition: color 0.5s ease;
`;export{f as AccountDetail,l as AccountHeader,p as AccountTitle,C as CurrentSelection,h as DeleteButton,y as DemoNotice,O as DummySection,u as FormButtonColumn,x as FormColumn,m as FormContent,g as FormDetail,A as FormField,c as FormSection,b as FormTitle,H as Input,T as Label,s as Main,M as Message,D as OptionButton,I as OtherOptionButton,E as PasswordChangeForm,j as SaveOptionButton,d as Section,P as SettingsButton,z as SettingsColumn,k as SettingsContent,S as SettingsControls,F as SettingsDetail,w as SettingsHeader,B as SettingsOptions,$ as SettingsSection,v as SettingsTitle,L as SubmitButton};

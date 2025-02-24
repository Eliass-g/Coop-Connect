import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    background: var(--Schemes-Background, #fff7ff);
    padding: 40px;
    padding-top: 0px;
    padding-bottom: 0px;
    animation: ${fadeIn} 0.8s ease-in-out;
`;

export const Title = styled.h2`
    font-size: 1.25rem;
    font-weight: 700;
    color: #6b538c;
`;

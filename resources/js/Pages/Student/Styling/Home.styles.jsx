import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    background: var(--Schemes-Background, #fff7ff);
    padding: 20px;
    animation: ${fadeIn} 0.8s ease-in-out;
`;

export const SearchSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    color: #7b757f;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    margin-top: 40px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 991px) {
        padding: 10px;
    }
`;

export const SearchTitle = styled.h2`
    font: 600 32px Poppins, sans-serif;
    color: #6b538c;
    text-align: center;

    @media (max-width: 991px) {
        font-size: 28px;
    }
`;

export const Tagline = styled.h3`
    margin-top: 10px;
    font: 500 24px/133% Poppins, sans-serif;
    text-align: center;

    @media (max-width: 991px) {
        font-size: 20px;
    }
`;

export const Description = styled.p`
    text-align: center;
    font: 400 22px/28px Poppins, sans-serif;
    margin-top: 30px;

    @media (max-width: 991px) {
        font-size: 18px;
    }
`;

export const Button = styled.button`
    background-color: #6b538c;
    color: #fff;
    font: 700 16px/150% Roboto, sans-serif;
    border-radius: 12px;
    letter-spacing: 0.5px;
    padding: 8px 16px;
    margin-top: 30px;
    cursor: pointer;
    align-self: center;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #5a4175;
        transform: scale(1.05);
    }

    @media (max-width: 991px) {
        font-size: 14px;
        padding: 6px 12px;
    }
`;

export const JobsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    margin-top: 40px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 991px) {
        padding: 10px;
    }
`;

export const JobsHeader = styled.h2`
    font: 600 32px Poppins, sans-serif;
    color: #6b538c;
    text-align: center;

    @media (max-width: 991px) {
        font-size: 28px;
    }
`;

export const JobsSubHeader = styled.p`
    font: 500 24px/32px Poppins, sans-serif;
    color: #7b757f;
    text-decoration: underline;
    margin-top: 10px;
    text-align: center;

    @media (max-width: 991px) {
        font-size: 20px;
    }
`;

export const JobListings = styled.div`
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
`;

export const JobCardContainer = styled.article`
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #eddcff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 20px 40px;
    word-wrap: break-word;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    animation: ${fadeInLeft} 0.5s ease forwards;
    animation-delay: ${(props) => props.index * 0.1}s;
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
`;

export const JobTitle = styled.h3`
    font: 28px/129% Poppins, sans-serif;
    text-align: center;
    margin-bottom: 10px;
`;

export const CompanyName = styled.p`
    font-family: Poppins, sans-serif;
    letter-spacing: 0.15px;
    margin-top: 18px;
`;

export const Location = styled.p`
    font-family: Poppins, sans-serif;
    letter-spacing: 0.15px;
`;

export const SkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    font-size: 12px;
    color: #773dc3;
    letter-spacing: 0.4px;
    line-height: 133%;
    margin-top: 17px;
    text-align: center;
`;

export const SkillBadge = styled.span`
    font-family: Poppins, sans-serif;
    border: 1px solid #773dc3;
    border-radius: 40px;
    padding: 8px 10px;
    text-align: center;
    background-color: #ffffff;
`;

export const JobDescription = styled.p`
    text-align: center;
    letter-spacing: 0.25px;
    margin-top: 15px;
    font: 400 14px/20px Poppins, sans-serif;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const Divider = styled.hr`
    width: 86px;
    height: 1px;
    margin-top: 14px;
    background-color: #260e44;
    border: none;
    align-self: center;
`;

export const JobButton = styled.button`
    background-color: #6b538c;
    color: #fff;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    border-radius: 12px;
    letter-spacing: 0.5px;
    padding: 8px 16px;
    margin-top: 15px;
    cursor: pointer;
    align-self: center;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #5a4175;
        transform: scale(1.05);
    }

    @media (max-width: 991px) {
        font-size: 14px;
        padding: 6px 12px;
    }
`;

export const EmptyMessage = styled.div`
    color: #ff6347; /* Tomato color for visibility */
    font-size: 1.2em;
    padding: 20px;
    text-align: center;
    background-color: #f0f0f0;
    border-radius: 8px;
    margin-top: 20px;
`;

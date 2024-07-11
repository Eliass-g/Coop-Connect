<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react";
import styled from "styled-components";
import NavBar from "./Components/NavBar";

function Home() {
    const jobs = [
        {
            title: "Front-End Developer",
            company: "Company Name",
            location: "Location",
            skills: ["Javascript", "HTML", "Development", "+3"],
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            title: "Front-End Developer",
            company: "Company Name",
            location: "Location",
            skills: ["Javascript", "HTML", "Development", "+3"],
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            title: "Front-End Developer",
            company: "Company Name",
            location: "Location",
            skills: ["Javascript", "HTML", "Development", "+3"],
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
    ];
=======
=======
>>>>>>> 913bdfa (employer side: updates to view job postings, view single job posting, related backend, creation of view applicants, decline applicant, accept applicant, related backend; student side: creation of view single job posting, apply to job posting, related backend)
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 0541389 (employer side: updates to view job postings, view single job posting, related backend, creation of view applicants, decline applicant, accept applicant, related backend; student side: creation of view single job posting, apply to job posting, related backend)
import NavBar from "./Components/NavBar";
import { Link } from "@inertiajs/react";
import {
<<<<<<< HEAD
    searchJobsbySkill,
    selectJobsStatus,
    selectJobs,
=======
    selectJobs,
    selectJobsStatus,
    searchJobsbySkill,
>>>>>>> 0541389 (employer side: updates to view job postings, view single job posting, related backend, creation of view applicants, decline applicant, accept applicant, related backend; student side: creation of view single job posting, apply to job posting, related backend)
} from "@/Features/jobs/jobsSlice";
<<<<<<< HEAD
=======
import {
    MainContainer,
    SearchSection,
    SearchTitle,
    Tagline,
    Description,
    Button,
    JobsSection,
    JobsHeader,
    JobsSubHeader,
    JobListings,
    JobCardContainer,
    JobTitle,
    CompanyName,
    Location,
    SkillsList,
    SkillBadge,
    JobDescription,
    Divider,
    JobButton,
    EmptyMessage,
} from "./Styling/Home.styles";

const appUrl = import.meta.env.VITE_APP_URL;
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)

function Home() {
    const dispatch = useDispatch();

    const jobs = useSelector(selectJobs) || [];
    const jobsStatus = useSelector(selectJobsStatus);

    useEffect(() => {
        dispatch(
            searchJobsbySkill({
                skills: [],
            })
        );
    }, [dispatch]);
>>>>>>> feb0b09 (add redux integration to student pages: home, jobs, profile)

<<<<<<< HEAD
=======
    const JobCard = ({ job }) => {
        return (
            <JobCardContainer>
                <JobTitle>{job.title}</JobTitle>
                <CompanyName>{job.company}</CompanyName>
                <Location>{job.location}</Location>
                <SkillsList>
                    {job.skills.map((tag, index) => (
                        <SkillBadge key={index}>{tag}</SkillBadge>
                    ))}
                </SkillsList>
                <JobDescription>{job.description}</JobDescription>
                <Divider />
                <Link href={`/student/viewpost/${job.id}`}>
                    <JobButton>VIEW POSTING</JobButton>
                </Link>
            </JobCardContainer>
        );
    };

>>>>>>> 0541389 (employer side: updates to view job postings, view single job posting, related backend, creation of view applicants, decline applicant, accept applicant, related backend; student side: creation of view single job posting, apply to job posting, related backend)
    return (
        <NavBar>
            <MainContainer>
                <SearchSection>
                    <SearchTitle>Search for Job Postings</SearchTitle>
                    <Tagline>
                        Get amazing through jobs at CO-OP Connect!
                    </Tagline>
                    <Description>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it t
                    </Description>
<<<<<<< HEAD
                    <Button>View Jobs</Button>
=======
                    <Link href="/student/jobs">
                        <Button>View Jobs</Button>
                    </Link>
>>>>>>> feb0b09 (add redux integration to student pages: home, jobs, profile)
                </SearchSection>
                <JobsSection>
                    <JobsHeader>Recommended Jobs</JobsHeader>
                    <JobsSubHeader>
                        <u>View</u> some of these recommended jobs!
                    </JobsSubHeader>
                    <JobListings>
<<<<<<< HEAD
                        {jobs.map((job, index) => (
                            <JobCard key={index}>
                                <JobTitle>{job.title}</JobTitle>
                                <CompanyName>{job.company}</CompanyName>
                                <Location>{job.location}</Location>
                                <SkillsList>
                                    {job.skills.map((skill, index) => (
                                        <SkillBadge key={index}>
                                            {skill}
                                        </SkillBadge>
                                    ))}
                                </SkillsList>
                                <JobDescription>
                                    {job.description}
                                </JobDescription>
                                <Divider />
                                <JobButton>VIEW POSTING</JobButton>
                            </JobCard>
                        ))}
=======
                        {jobsStatus === "loading" ? (
                            <EmptyMessage>Loading...</EmptyMessage>
                        ) : jobs.length === 0 ? (
                            <EmptyMessage>
                                Add some skills to your profile to see some jobs
                                to apply for
                            </EmptyMessage>
                        ) : (
                            jobs.map((job, index) => (
<<<<<<< HEAD
                                <JobCard key={index}>
                                    <JobTitle>{job.title}</JobTitle>
                                    <CompanyName>{job.company}</CompanyName>
                                    <Location>{job.location}</Location>
                                    <SkillsList>
                                        {job.skills.map((tag, index) => (
                                            <SkillBadge key={index}>
                                                {tag}
                                            </SkillBadge>
                                        ))}
                                    </SkillsList>
                                    <JobDescription>
                                        {job.description}
                                    </JobDescription>
                                    <Divider />
                                    <JobButton>VIEW POSTING</JobButton>
                                </JobCard>
=======
                                <JobCard key={index} job={job} />
>>>>>>> 0541389 (employer side: updates to view job postings, view single job posting, related backend, creation of view applicants, decline applicant, accept applicant, related backend; student side: creation of view single job posting, apply to job posting, related backend)
                            ))
                        )}
>>>>>>> feb0b09 (add redux integration to student pages: home, jobs, profile)
                    </JobListings>
                </JobsSection>
            </MainContainer>
        </NavBar>
    );
}

<<<<<<< HEAD
const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    background: var(--Schemes-Background, #fff7ff);
`;
const SearchSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    color: #7b757f;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px 10px;
    margin-top: 40px;

    @media (max-width: 991px) {
        width: 100%;
    }
`;

const SearchTitle = styled.h2`
    font: 600 32px Poppins, sans-serif;
    color: #6b538c;
`;

const Tagline = styled.h3`
    margin-top: 10px;
    font: 500 24px/133% Poppins, sans-serif;

    @media (max-width: 991px) {
        width: 100%;
    }
`;

const Description = styled.p`
    align-self: stretch;
    text-align: center;
    font: 400 22px/28px Poppins, sans-serif;
    margin-top: 30px;

    @media (max-width: 991px) {
        width: 100%;
    }
`;

const Button = styled.button`
    background-color: #6b538c;
    color: #fff;
    font: 700 16px/150% Roboto, sans-serif;
    border-radius: 12px;
    letter-spacing: 0.5px;
    padding: 8px 16px;
    margin-top: 30px;
    cursor: pointer;
`;

const JobsSection = styled.section`
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
`;

const JobsHeader = styled.h2`
    font: 600 32px Poppins, sans-serif;
    color: #6b538c;
`;

const JobsSubHeader = styled.p`
    font: 500 24px/32px Poppins, sans-serif;
    color: #7b757f;
    text-decoration: underline;
    margin-top: 10px;

    @media (max-width: 991px) {
        width: 100%;
    }
`;

const JobListings = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-self: stretch;
    margin-top: 20px;
    gap: 20px;

    @media (max-width: 991px) {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }
`;

const JobCard = styled.article`
    display: flex;
    flex-direction: column;
    -items: center;
    background-color: #eddcff;
    color: #260e44;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    max-width: 400px;
    width: 100%;
    padding: 20px 40px;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 991px) {
        margin-top: 20px;
        padding: 0 20px;
    }
`;

const JobTitle = styled.h3`
    font: 28px/129% Poppins, sans-serif;
    align-self: stretch;
`;

const CompanyName = styled.p`
    font-family: Poppins, sans-serif;
    letter-spacing: 0.15px;
    margin-top: 18px;
`;

const Location = styled.p`
    font-family: Poppins, sans-serif;
    letter-spacing: 0.15px;
`;

const SkillsList = styled.div`
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
`;

const SkillBadge = styled.span`
    font-family: Poppins, sans-serif;
    border: 1px solid #773dc3;
    border-radius: 40px;
    padding: 8px 10px;
    text-align: center;

    &:nth-child(4) {
        background-color: #773dc3;
        color: #fff;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    }
`;

const JobDescription = styled.p`
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

const Divider = styled.hr`
    width: 86px;
    height: 1px;
    margin-top: 14px;
    background-color: #260e44;
    border: none;
    align-self: center;
`;

const JobButton = styled.button`
    background-color: #6b538c;
    color: #fff;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    border-radius: 12px;
    letter-spacing: 0.5px;
    padding: 8px 16px;
    margin-top: 15px;
    cursor: pointer;
`;

<<<<<<< HEAD
=======
const EmptyMessage = styled.div`
    color: #ff6347; /* Tomato color for visibility */
    font-size: 1.2em;
    padding: 20px;
    text-align: center;
    background-color: #f0f0f0;
    border-radius: 8px;
`;

=======
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
>>>>>>> c9b0256 (clean up code, remove unnecessary controllers, separate styling)
export default Home;

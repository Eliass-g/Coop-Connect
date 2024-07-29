<<<<<<< HEAD
<<<<<<< HEAD
import * as React from "react";
import styled from "styled-components";
import NavBar from "./Components/NavBar";

function ViewPost() {
    const applicants = [
        {
            id: 1,
            imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffe01f15e5bd2c123e54f594bac37752eb1d698a2b703557da309d5e47debd5e?apiKey=d66532d056b14640a799069157705b77&",
            name: "Barack Obama",
            schoolInfo: "School Information",
            location: "Toronto, ON",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            id: 2,
            imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffe01f15e5bd2c123e54f594bac37752eb1d698a2b703557da309d5e47debd5e?apiKey=d66532d056b14640a799069157705b77&",
            name: "Barack Obama",
            schoolInfo: "School Information",
            location: "Toronto, ON",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            id: 3,
            imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffe01f15e5bd2c123e54f594bac37752eb1d698a2b703557da309d5e47debd5e?apiKey=d66532d056b14640a799069157705b77&",
            name: "Barack Obama",
            schoolInfo: "School Information",
            location: "Toronto, ON",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            id: 4,
            imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffe01f15e5bd2c123e54f594bac37752eb1d698a2b703557da309d5e47debd5e?apiKey=d66532d056b14640a799069157705b77&",
            name: "Barack Obama",
            schoolInfo: "School Information",
            location: "Toronto, ON",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
    ];

=======
import React, { useEffect, useState } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> 0541389 (employer side: updates to view job postings, view single job posting, related backend, creation of view applicants, decline applicant, accept applicant, related backend; student side: creation of view single job posting, apply to job posting, related backend)
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import {
    deleteJob,
    selectJob,
    selectSingleJob,
    selectJobsStatus,
} from "@/Features/jobs/jobsSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePage, Link } from "@inertiajs/react";

function ViewPost() {
    const { props } = usePage();
    const { jobId } = props;

    const dispatch = useDispatch();
    const job = useSelector(selectSingleJob);
    const jobStatus = useSelector(selectJobsStatus);

    useEffect(() => {
        dispatch(selectJob({ jobId: jobId }));
    }, [dispatch]);
        // Fetch job details including applications based on jobId
        const fetchJobDetails = async () => {
            try {
                const response = await fetch(`${appUrl}/api/v1/jobs/${jobId}`); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error("Failed to fetch job details");
                }
                const data = await response.json();
                setJob(data);
                console.log(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching job details:", error);
            }
        };

        fetchJobDetails();
    }, [jobId]);

    if (loading || !job) {
        return <div>Loading...</div>; // You can show a loading indicator here
    }

    console.log("Job from URL:", job);

    // Check if job.applications exists and is an array
    const applicants =
        job.applications && Array.isArray(job.applications)
            ? job.applications.map((app) => app.user)
            : [];

    const openModal = (applicant) => {
        setSelectedApplicant(applicant);
        setModalIsOpen(true);
    };

    const handleDelete = () => {
        dispatch(deleteJob({ jobId: jobId }));
        console.log(`Delete job posting with ID: ${jobId}`);
    };

>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
    return (
        <NavBar header={"Job Postings"}>
            <MainContainer>
                <Container>
                    <Title>Current Company Postings</Title>
                    <JobPostingCard>
                        <JobInfo>
                            <JobInfoLeft>
                                <CompanyLogo
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c18c37d4baea2f5cbd4d392adacf6fa12686c4c99b1f2a12d132c4a3ef4a5899?apiKey=d66532d056b14640a799069157705b77&"
                                    alt="Company Logo"
                                />
                                <JobDetails>
<<<<<<< HEAD
                                    <JobTitle>Front-End Developer</JobTitle>
                                    <CompanyName>Microsoft</CompanyName>
                                    <JobDescription>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book.
=======
                                    <JobTitle>{job.title}</JobTitle>
                                    <CompanyName>{job.company}</CompanyName>
                                    <JobDescription>
                                        {job.description}
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
                                    </JobDescription>
                                </JobDetails>
<<<<<<< HEAD
                                <StatusIcon
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f00bd98ccee0cca896d493616005574e2e5aaa7076659900adbd3e310f5af87?apiKey=d66532d056b14640a799069157705b77&"
                                    alt="Status Icon"
<<<<<<< HEAD
                                />
                            </JobInfoLeft>
                            <JobInfoRight>
                                <StatusTag>Posting Status: Open</StatusTag>
                                <JobTypeTag>Job Type: Full-Time</JobTypeTag>
                                <LocationTag>Work Location: Remote</LocationTag>
=======
                                    onClick={openEditModal}
                                />
=======
                                <Link href={`/employer/editpost1/${jobId}`}>
                                    <StatusIcon
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f00bd98ccee0cca896d493616005574e2e5aaa7076659900adbd3e310f5af87?apiKey=d66532d056b14640a799069157705b77&"
                                        alt="Status Icon"
                                    />
                                </Link>
>>>>>>> 0541389 (employer side: updates to view job postings, view single job posting, related backend, creation of view applicants, decline applicant, accept applicant, related backend; student side: creation of view single job posting, apply to job posting, related backend)
                            </JobInfoLeft>
                            <JobInfoRight>
                                <StatusTag>
                                    Posting Status: {job.postingStatus}
                                </StatusTag>
                                <JobTypeTag>Job Type: {job.jobType}</JobTypeTag>
                                <LocationTag>
                                    Work Location: {job.location}
                                </LocationTag>
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
                            </JobInfoRight>
                            <ActionButtons>
                                <Link
                                    href={`/employer/viewapplicants/${jobId}`}
                                >
                                    <ActionButton>View Applicants</ActionButton>
                                </Link>
                                <Link href={`/employer/home`}>
                                    <ActionButton onClick={handleDelete}>
                                        Delete Job Posting
                                    </ActionButton>
                                </Link>
                            </ActionButtons>
                        </JobInfo>
<<<<<<< HEAD
                        <ApplicantSection>
                            <ApplicantTitle>Applicants</ApplicantTitle>
                            <Applicants>
                                {applicants.map((applicant) => (
                                    <ApplicantCard key={applicant.id}>
                                        <ApplicantInfo>
                                            <ApplicantImage
<<<<<<< HEAD
                                                src={applicant.imgSrc}
=======
                                                src={
                                                    applicant.profile_image ||
                                                    "https://via.placeholder.com/150"
                                                }
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
                                                alt={applicant.name}
                                            />
                                            <ApplicantDetails>
                                                <ApplicantName>
                                                    {applicant.name}
                                                </ApplicantName>
                                                <SchoolInfo>
<<<<<<< HEAD
                                                    {applicant.schoolInfo}
=======
                                                    {applicant.school || "N/A"}
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
                                                </SchoolInfo>
                                                <Location>
                                                    {applicant.location}
                                                </Location>
                                            </ApplicantDetails>
                                        </ApplicantInfo>
                                        <ApplicantDescription>
<<<<<<< HEAD
                                            {applicant.description}
                                        </ApplicantDescription>
                                        <ViewButton>View Applicant</ViewButton>
=======
                                            {applicant.description || "N/A"}
                                        </ApplicantDescription>
                                        <ViewButton
                                            onClick={() => openModal(applicant)}
                                        >
                                            View Applicant
                                        </ViewButton>
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
                                    </ApplicantCard>
                                ))}
                            </Applicants>
                        </ApplicantSection>
                    </JobPostingCard>
                </Container>
            </MainContainer>
<<<<<<< HEAD
=======
            <ApplicantModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                applicant={selectedApplicant}
            />
            <EditJobModal
                isOpen={editModalIsOpen}
                onRequestClose={closeEditModal}
                job={job}
                onSave={handleSave}
            />
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
=======
                    </JobPostingCard>
                </Container>
            </MainContainer>
>>>>>>> 0541389 (employer side: updates to view job postings, view single job posting, related backend, creation of view applicants, decline applicant, accept applicant, related backend; student side: creation of view single job posting, apply to job posting, related backend)
        </NavBar>
    );
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0541389 (employer side: updates to view job postings, view single job posting, related backend, creation of view applicants, decline applicant, accept applicant, related backend; student side: creation of view single job posting, apply to job posting, related backend)
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    flex-shrink: 0;
    width: 100%;
    min-height: 100vh;
`;

const Container = styled.section`
    align-self: center;
    display: flex;
    width: 788px;
    max-width: 100%;
    flex-direction: column;
    padding: 10px 10px 0;
`;

const Title = styled.h2`
    color: var(--Schemes-On-Background, #1d1a20);
    align-self: center;
    font: 400 36px/122% Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const JobPostingCard = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: var(--Schemes-Primary-Container, #eddcff);
    padding: 20px;
    margin-top: 20px;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const JobInfo = styled.section`
    display: flex;
    flex-direction: column; /* Changed from row to column */
    gap: 20px;
    color: var(--Schemes-On-Primary-Container, #260e44);
    font-weight: 400;
    @media (max-width: 991px) {
        flex-wrap: wrap;
    }
`;

const JobInfoLeft = styled.div`
    display: flex;
    gap: 20px;
    color: var(--Schemes-On-Primary-Container, #260e44);
    font-weight: 400;
    @media (max-width: 991px) {
        flex-wrap: wrap;
    }
`;

const CompanyLogo = styled.img`
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 100px;
    border: 2px solid rgba(45, 54, 72, 1);
    max-width: 100%;
    margin: auto 0;
`;

const JobDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const JobTitle = styled.h3`
    font: 32px Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const CompanyName = styled.h4`
    color: var(--Schemes-Secondary, #6c538c);
    margin-top: 10px;
    font: 500 22px/127% Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const JobDescription = styled.p`
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    letter-spacing: 0.5px;
    margin-top: 10px;
    font: 16px/24px Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const StatusIcon = styled.img`
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 24px;
    align-self: start;
`;

const JobInfoRight = styled.div`
    justify-content: center;
    border-bottom: 1px solid black;
    display: flex;
    gap: 10px;
    font-size: 16px;
    color: var(--Schemes-On-Primary, #fff);
    font-weight: 500;
    letter-spacing: 0.15px;
    line-height: 150%;
    padding: 10px 20px;
    @media (max-width: 991px) {
        flex-wrap: wrap;
        padding: 0 20px;
    }
`;

const StatusTag = styled.span`
    font-family: Poppins, sans-serif;
    border-radius: 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    background-color: var(--Palettes-Primary-40, #773dc3);
    justify-content: center;
    padding: 10px;
`;

const JobTypeTag = styled.span`
    font-family: Poppins, sans-serif;
    border-radius: 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    background-color: var(--Palettes-Primary-40, #773dc3);
    justify-content: center;
    padding: 10px;
`;

const LocationTag = styled.span`
    font-family: Poppins, sans-serif;
    border-radius: 10px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    background-color: var(--Palettes-Primary-40, #773dc3);
    justify-content: center;
    padding: 10px;
`;

<<<<<<< HEAD
const ApplicantSection = styled.section`
    margin-top: 20px;
`;

const ApplicantTitle = styled.h4`
    color: var(--Schemes-On-Primary-Container, #260e44);
    align-self: center;
    text-align: center;
    margin-bottom: 5px;
    font: 400 24px/133% Poppins, sans-serif;
`;

const Applicants = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    @media (max-width: 991px) {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }
`;

const ApplicantCard = styled.article`
    max-width: 350px;
    border-radius: 10px;
    border: 1px solid rgba(123, 117, 127, 1);
    display: flex;
    flex-direction: column;
    padding: 10px 13px;
    @media (max-width: 991px) {
        margin-top: 10px;
    }
`;

const ApplicantInfo = styled.div`
    display: flex;
    align-items: start;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(123, 117, 127, 1);
    font-size: 12px;
    color: var(--Schemes-Primary, #6b538c);
    font-weight: 500;
    line-height: 133%;
`;

const ApplicantImage = styled.img`
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 75px;
    border: 2px solid rgba(45, 54, 72, 1);
`;

const ApplicantDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

const ApplicantName = styled.span`
    color: #000;
    font: 400 24px Poppins, sans-serif;
`;

const SchoolInfo = styled.span`
    font-family: Poppins, sans-serif;
    letter-spacing: 0.5px;
`;

const Location = styled.span`
    font-family: Poppins, sans-serif;
    letter-spacing: 0.5px;
`;

const ApplicantDescription = styled.p`
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    color: var(--Schemes-On-Surface-Variant, #4a454e);
    text-overflow: ellipsis;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin-top: 10px;
`;

const ViewButton = styled.button`
    font-family: Roboto, sans-serif;
    justify-content: center;
    border-radius: 12px;
    background-color: var(--Schemes-Primary, #6b538c);
    align-self: center;
    margin-top: 20px;
    color: var(--Schemes-On-Primary, #fff);
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 150%;
    padding: 8px 16px;
    cursor: pointer;
`;

=======
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
=======
const ActionButtons = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
`;

const ActionButton = styled.button`
    font-family: Poppins, sans-serif;
    background-color: var(--Palettes-Primary-40, #773dc3);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s;

    &:hover {
        background-color: var(--Palettes-Primary-30, #542a93);
    }
`;

>>>>>>> 0541389 (employer side: updates to view job postings, view single job posting, related backend, creation of view applicants, decline applicant, accept applicant, related backend; student side: creation of view single job posting, apply to job posting, related backend)
export default ViewPost;

import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import { usePage, Link } from "@inertiajs/react";
import JobModal from "../Profile/Partials/ViewJobModal";
import { useSelector, useDispatch } from "react-redux";
import {
    selectJobs,
    selectJobsStatus,
    searchJobsbySkill,
} from "@/Features/jobs/jobsSlice";
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

function Home() {
    const { props } = usePage();
    const { skills } = props;

    let s = skills;

    if (s === null) {
        s = [];
    }


    const dispatch = useDispatch();

    const jobs = useSelector(selectJobs) || [];
    const jobsStatus = useSelector(selectJobsStatus);

    useEffect(() => {
        if (s.length > 0) {
            dispatch(
                searchJobsbySkill({
                    skills: s,
                })
            );
        }
    }, [dispatch]);

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

    return (
        <NavBar>
            <MainContainer>
                <SearchSection>
                    <SearchTitle>Search for Job Postings</SearchTitle>
                    <Tagline>
                        Find incredible job opportunities at CO-OP Connect!
                    </Tagline>
                    <Description>
                        Discover exciting career opportunities and internships
                        tailored to your skills and ambitions. Join a network of
                        top employers and kick-start your journey toward
                        professional success today!
                    </Description>
                    <Link href="/student/jobs">
                        <Button>View Jobs</Button>
                    </Link>
                </SearchSection>
                <JobsSection>
                    <JobsHeader>Recommended Jobs</JobsHeader>
                    <JobsSubHeader>
                        <u>View</u> some of these recommended jobs!
                    </JobsSubHeader>
                    <JobListings>
                        {jobsStatus === "loading" ? (
                            <EmptyMessage>Loading...</EmptyMessage>
                        ) : s.length == 0 ? (
                            <Link href="/student/profile">
                                <EmptyMessage>
                                    Add some skills to your profile to see some
                                    jobs to apply for
                                </EmptyMessage>
                            </Link>
                        ) : (
                            jobs.map((job, index) => (
                                <JobCard key={index} job={job} />
                            ))
                        )}
                    </JobListings>
                </JobsSection>
            </MainContainer>
        </NavBar>
    );
}

export default Home;

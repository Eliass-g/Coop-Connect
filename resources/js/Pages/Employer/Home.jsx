import * as React from "react";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
<<<<<<< HEAD
=======
import { Link } from "@inertiajs/react";
<<<<<<< HEAD
>>>>>>> 42ed0af (add backend/functionality to teacher home page, employer jobs page, edit jobs)

function Home() {
=======
import EditJobModal from "../Profile/Partials/EditJobModal";
EditJobModal;
const appUrl = import.meta.env.VITE_APP_URL;
import {
    getJobsforEmployer,
    patchJob,
    selectJobs,
    selectJobsStatus,
} from "@/Features/jobs/jobsSlice";
import { useDispatch, useSelector } from "react-redux";
import {
    UnderlineText,
    MainContainer,
    CreateJobSection,
    JobTitle,
    JobSubtitle,
    JobDescription,
    PostJobButton,
    CurrentPostingsSection,
    SectionTitle,
    EditingInstructions,
    PostingsGrid,
    JobCard,
    JobCardTitle,
    CompanyName,
    Location,
    Tags,
    Tag,
    JobDescriptionText,
    Divider,
    CardButtons,
    ViewPostingButton,
    EditPostingButton,
    SkillsList,
    SkillBadge,
} from "./Styling/Home.styles";

const Home = () => {
    const dispatch = useDispatch();
    const jobs = useSelector(selectJobs);
    const jobsStatus = useSelector(selectJobsStatus);

    useEffect(() => {
        const fetchUserAndJobs = async () => {
            try {
                const response = await axios.get(`${appUrl}/api/user-id`);
                const userData = response.data.user;
                userData.skills = userData.skills || "[]";

                // Fetch jobs for the user
                dispatch(getJobsforEmployer({ userId: userData.id }));
            } catch (error) {
                console.error("Error fetching user ID or jobs:", error);
            }
        };

        fetchUserAndJobs();
    }, [dispatch]);

<<<<<<< HEAD
    const openEditModal = (job) => {
        setJobToEdit(job);
        setEditModalIsOpen(true);
    };

    const closeEditModal = () => {
        setEditModalIsOpen(false);
    };

    const handleSave = async (updatedJob) => {
        // Dispatch the patchJob action and wait for it to complete
        dispatch(
            patchJob({
                jobsId: updatedJob.id,
                title: updatedJob.title,
                description: updatedJob.description,
                company: updatedJob.company,
                location: updatedJob.location,
                postingStatus: updatedJob.postingStatus,
                jobType: updatedJob.jobType,
            })
        );

        closeEditModal();
    };

<<<<<<< HEAD

>>>>>>> 40b014e (add backend/functionality to teacher home page, employer jobs page, edit jobs)
=======
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
=======
>>>>>>> 0541389 (employer side: updates to view job postings, view single job posting, related backend, creation of view applicants, decline applicant, accept applicant, related backend; student side: creation of view single job posting, apply to job posting, related backend)
    return (
        <NavBar header={"Job Postings"}>
            <MainContainer>
                <CreateJobSection>
                    <JobTitle>Create a New Job Posting</JobTitle>
                    <JobSubtitle>
                        Hire amazing students through CO-OP Connect!
                    </JobSubtitle>
                    <JobDescription>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it t
                    </JobDescription>
                    <PostJobButton>Post a Job</PostJobButton>
                </CreateJobSection>
                <CurrentPostingsSection>
                    <SectionTitle>Current Company Postings</SectionTitle>
                    <EditingInstructions>
<<<<<<< HEAD
                        <UnderlineText>View</UnderlineText> or{" "}
=======
<<<<<<< HEAD
                        <Link href="/employer/viewpost">
                        <UnderlineText>View</UnderlineText></Link> or{" "}
>>>>>>> 913bdfa (employer side: updates to view job postings, view single job posting, related backend, creation of view applicants, decline applicant, accept applicant, related backend; student side: creation of view single job posting, apply to job posting, related backend)
                        <UnderlineText>edit</UnderlineText> your company’s
                        current job postings.
=======
                        View or edit your company's current job postings.
>>>>>>> 0541389 (employer side: updates to view job postings, view single job posting, related backend, creation of view applicants, decline applicant, accept applicant, related backend; student side: creation of view single job posting, apply to job posting, related backend)
                    </EditingInstructions>
<<<<<<< HEAD
                    <PostingsGrid>
                        {jobPostings.map((post, i) => {
                            return <JobPosting key={i} post={post} />;
                        })}
                    </PostingsGrid>
=======
                    {jobsStatus === "loading" && <p>Loading...</p>}
                    {jobs.length > 0 && (
                        <PostingsGrid>
                            {jobs.map((post, i) => (
                                <JobPosting key={i} post={post} />
                            ))}
                        </PostingsGrid>
                    )}
>>>>>>> 40b014e (add backend/functionality to teacher home page, employer jobs page, edit jobs)
                </CurrentPostingsSection>
            </MainContainer>
        </NavBar>
    );
<<<<<<< HEAD
}

// Reusable Components
function JobPosting({ post }) {
=======
};

const JobPosting = ({ post }) => {
>>>>>>> 0541389 (employer side: updates to view job postings, view single job posting, related backend, creation of view applicants, decline applicant, accept applicant, related backend; student side: creation of view single job posting, apply to job posting, related backend)
    return (
        <JobCard>
            <JobCardTitle>{post.title}</JobCardTitle>
            <CompanyName>{post.companyName}</CompanyName>
            <Location>{post.location}</Location>
            <Tags>
                {post.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
            </Tags>
            <JobDescriptionText>{post.description}</JobDescriptionText>
            <Divider />
            <CardButtons>
<<<<<<< HEAD
                <ViewPostingButton>VIEW POSTING</ViewPostingButton>
                <EditPostingButton>EDIT POSTING</EditPostingButton>
=======
                <Link href={`/employer/viewpost/${post.id}`}>
                    <ViewPostingButton>VIEW POSTING</ViewPostingButton>
                </Link>
                <Link href={`/employer/editpost1/${post.id}`}>
                    <EditPostingButton>EDIT POSTING</EditPostingButton>
                </Link>
>>>>>>> 0541389 (employer side: updates to view job postings, view single job posting, related backend, creation of view applicants, decline applicant, accept applicant, related backend; student side: creation of view single job posting, apply to job posting, related backend)
            </CardButtons>
        </JobCard>
    );
}

<<<<<<< HEAD
// Styled Components
const UnderlineText = styled.span`
    text-decoration: underline;
`;

const MainContainer = styled.main`
    align-self: stretch;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: var(--Schemes-Background, #fff7ff);
`;

const CreateJobSection = styled.section`
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
`;

const JobTitle = styled.h2`
    color: #6b538c;
    font: 600 32px Poppins, sans-serif;
`;

const JobSubtitle = styled.h3`
    margin-top: 10px;
    font: 500 24px/133% Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const JobDescription = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    text-align: center;
    margin-top: 30px;
    font: 400 22px/28px Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const PostJobButton = styled.button`
    justify-content: center;
    border-radius: 12px;
    background-color: #6b538c;
    margin-top: 30px;
    color: #fff;
    letter-spacing: 0.5px;
    padding: 8px 16px;
    font: 700 16px/150% Roboto, sans-serif;
    cursor: pointer;
`;

const CurrentPostingsSection = styled.section`
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

const SectionTitle = styled.h2`
    color: #6b538c;
    font: 600 32px Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const EditingInstructions = styled.p`
    color: #7b757f;
    margin-top: 10px;
    font: 500 24px/32px Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const PostingsGrid = styled.div`
    justify-content: center;
    flex-wrap: wrap;
    align-self: stretch;
    margin: 20px 0 30px;
    display: flex;
    gap: 20px;
    @media (max-width: 991px) {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        max-width: 100%;
    }
`;

const JobCard = styled.article`
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #eddcff;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px 40px;
    @media (max-width: 991px) {
        margin-top: 20px;
        padding: 0 20px;
    }
`;

const JobCardTitle = styled.h3`
    color: #260e44;
    font: 28px/129% Poppins, sans-serif;
    text-align: center;
`;

const CompanyName = styled.h4`
    color: #260e44;
    font-family: Poppins, sans-serif;
    margin-top: 18px;
    letter-spacing: 0.15px;
    text-align: center;
`;

const Location = styled.p`
    color: #260e44;
    font-family: Poppins, sans-serif;
    letter-spacing: 0.15px;
    text-align: center;
`;

const Tags = styled.div`
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
`;

const Tag = styled.span`
    font-family: Poppins, sans-serif;
    justify-content: center;
    border-radius: 40px;
    border: 1px solid #773dc3;
    padding: 8px 10px;
    white-space: nowrap;
    @media (max-width: 991px) {
        white-space: initial;
    }
`;

const JobDescriptionText = styled.p`
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #260e44;
    text-align: center;
    text-overflow: ellipsis;
    letter-spacing: 0.25px;
    margin-top: 15px;
    font: 400 14px/20px Poppins, sans-serif;
`;

const Divider = styled.div`
    background-color: #260e44;
    align-self: center;
    margin-top: 14px;
    width: 86px;
    height: 1px;
`;

const CardButtons = styled.div`
    justify-content: center;
    display: flex;
    margin-top: 15px;
    gap: 15px;
    font-weight: 700;
    letter-spacing: 0.5px;
`;

const ViewPostingButton = styled.button`
    font-family: Roboto, sans-serif;
    justify-content: center;
    border-radius: 12px;
    background-color: #6b538c;
    color: #fff;
    padding: 8px 16px;
`;

const EditPostingButton = styled.button`
    font-family: Roboto, sans-serif;
    justify-content: center;
    border-radius: 12px;
    border: 2px solid #6b538c;
    color: #260e44;
    padding: 8px 16px;
`;

=======
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
export default Home;

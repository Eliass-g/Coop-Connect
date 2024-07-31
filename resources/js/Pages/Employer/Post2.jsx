import * as React from "react";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import downarrow from "@/Pages/Images/Icon.svg";
<<<<<<< HEAD
=======
import { Link } from "@inertiajs/react";
import {
    Container,
    Card,
    FormWrapper,
    Title,
    Subtitle,
    FormContainer,
    Form,
    SectionTitle,
    SectionHeading,
    SectionDescription,
    InputField,
    ProgressBar,
    ProgressItem,
    StyledInput,
    Tag,
    TagName,
    TagIcon,
    TagContainer,
    Label,
    HorizontalRule,
    ButtonGroup,
    ActionButton,
    SubmitButton,
    ButtonContainerPost2,
} from "./Styling/Post2.styles";
>>>>>>> c9b0256 (clean up code, remove unnecessary controllers, separate styling)

function Post2() {
<<<<<<< HEAD
    const skills = ["Tag", "Tag", "Tag", "Tag", "Tag", "Tag", "Tag"];
=======
    const [userId, setUserId] = useState(null);
    const [currentSkill, setCurrentSkill] = useState("");

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/user-id`
                );
                setUserId(response.data.user.id);
                dispatch(updateJobFormData({ userId: response.data.user.id }));
<<<<<<< HEAD
                console.log(response.data.user.id);
=======
>>>>>>> 042e20d (view applications and applicants display and data adjustments)
            } catch (error) {
                console.error("Error fetching user ID:", error);
            }
        };
        fetchUserId();
    }, []);

    const dispatch = useDispatch();
    const jobFormData = useSelector(selectJobFormData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateJobFormData({ [name]: value }));
    };

    const handleSubmit = (e) => {
        // Dispatch postJob action with jobFormData
        dispatch(postJob(jobFormData));
        dispatch(resetJobFormData());
    };

    const handleSkillChange = (e) => {
        setCurrentSkill(e.target.value);
    };

    const handleSkillKeyDown = (e) => {
        if (e.key === "Enter" && currentSkill.trim()) {
            e.preventDefault();
            const updatedSkills = [...jobFormData.skills, currentSkill.trim()];
            dispatch(updateJobFormData({ skills: updatedSkills }));
            setCurrentSkill("");
        }
    };

    const removeSkill = (skillToRemove) => {
        const updatedSkills = jobFormData.skills.filter(
            (skill) => skill !== skillToRemove
        );
        dispatch(updateJobFormData({ skills: updatedSkills }));
    };

>>>>>>> 46d5365 (view applications and applicants display and data adjustments)
    return (
        <NavBar header={"Posting Jobs"}>
            <Container>
                <Card>
                    <FormWrapper>
                        <Title>Create a New Posting</Title>
                        <Subtitle>
                            Hire amazing students through CO-OP Connect!
                        </Subtitle>
                        <FormContainer>
                            <SectionTitle>
                                Part 2 of 2: Job Details
                            </SectionTitle>
                            <SectionHeading>
                                Add a Job Description
                            </SectionHeading>
                            <SectionDescription>
                                Describe the contents of the job. Include
                                details about the daily tasks, requirements, and
                                expectations.
                            </SectionDescription>
                            <Form>
                                <InputField />
                                <InputField />
                                <ProgressBar>
                                    <ProgressItem />
                                    <ProgressItem />
                                </ProgressBar>
                            </Form>
                            <HorizontalRule />
                            <SectionHeading>Add Skills</SectionHeading>
                            <SectionDescription>
                                Add some skill keywords to the job.
                            </SectionDescription>
                            <Label htmlFor="skillInput">Skill to add</Label>
<<<<<<< HEAD
                            <StyledInput id="skillInput" />
                            <TagContainer>
                                {skills.map((skill, index) => (
=======
                            <StyledInput
                                id="skillInput"
                                name="skills"
                                value={currentSkill}
                                onChange={handleSkillChange}
                                onKeyDown={handleSkillKeyDown}
                            />
                            <TagContainer>
                                {jobFormData.skills.map((skill, index) => (
>>>>>>> 46d5365 (view applications and applicants display and data adjustments)
                                    <Tag key={index}>
                                        <TagName>{skill}</TagName>
                                        <TagIcon
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4297c66e6d9622e462ebb187a46dd67cf9ee2c5dfcfd5088583249a1e3bfc3e?apiKey=d66532d056b14640a799069157705b77&"
                                            alt={`${skill} Icon`}
<<<<<<< HEAD
=======
                                            onClick={() => removeSkill(skill)}
>>>>>>> 46d5365 (view applications and applicants display and data adjustments)
                                        />
                                    </Tag>
                                ))}
                            </TagContainer>
                            <HorizontalRule />
<<<<<<< HEAD
                            <ButtonGroup>
                                <ActionButton>Go Back</ActionButton>
=======
<<<<<<< HEAD
                            <ButtonGroup><Link href="/employer/post1">
                                <ActionButton>Go Back</ActionButton></Link>
>>>>>>> 33b1357 (add role access restriction)
                                <SubmitButton>Finished</SubmitButton>
=======
                            <ButtonGroup>
                                <Link href="/employer/post1">
                                    <ActionButton>Go Back</ActionButton>
                                </Link>
                                <Link href="/employer/home">
                                    <SubmitButton onClick={handleSubmit}>
                                        Finished
                                    </SubmitButton>
                                </Link>
>>>>>>> 9793cbe (add role access restriction)
                            </ButtonGroup>
                        </FormContainer>
                    </FormWrapper>
                </Card>
            </Container>
        </NavBar>
    );
}

<<<<<<< HEAD
const Container = styled.section`
    align-self: stretch;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Card = styled.article`
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--White, #fff);
    display: flex;
    margin-top: 40px;
    justify-content: center;
    padding: 20px 10px;
    @media (max-width: 991px) {
        max-width: 100%;
        padding: 0 20px;
    }
`;

const FormWrapper = styled.div`
    display: flex;
    margin-bottom: 257px;
    width: 720px;
    max-width: 100%;
    flex-direction: column;
    @media (max-width: 991px) {
        margin-bottom: 40px;
    }
`;

const Title = styled.h1`
    color: var(--Schemes-Primary, #6b538c);
    align-self: center;
    font: 600 32px Poppins, sans-serif;
`;

const Subtitle = styled.p`
    color: var(--Schemes-Outline, #7b757f);
    margin: 10px 68px 0;
    font: 500 24px/133% Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
        margin-right: 10px;
    }
`;

const FormContainer = styled.div`
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 1);
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    color: var(--WF-Base-800, #2d3648);
    padding: 20px;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const Form = styled.form`
    border: 2px solid rgba(123, 117, 127, 1);
    border-radius: 6px;
    background-color: var(--WF-Base-White, #fff);
    display: flex;
    margin-top: 12px;
    flex-direction: column;
    padding: 12px;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const SectionTitle = styled.h2`
    color: #000;
    font: 400 32px Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const SectionHeading = styled.h2`
    color: var(--Black, #000);
    letter-spacing: 0.15px;
    margin-top: 20px;
    font: 500 16px/150% Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const SectionDescription = styled.p`
    color: var(--Schemes-Outline, #7b757f);
    letter-spacing: 0.25px;
    font: 400 14px/20px Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const InputField = styled.div`
    border-radius: 3px;
    background-color: var(--WF-Base-500, #a0abc0);
    height: 16px;
    & + & {
        margin-top: 8px;
    }
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const ProgressBar = styled.div`
    display: flex;
    margin-top: 8px;
    padding-right: 80px;
    gap: 0px;
    @media (max-width: 991px) {
        flex-wrap: wrap;
        padding-right: 20px;
    }
`;

const ProgressItem = styled.div`
    flex: 1;
    height: 16px;
    background-color: var(--WF-Base-500, #a0abc0);
    &:first-of-type {
        border-radius: 3px 0 0 3px;
    }
    &:last-of-type {
        border-radius: 0 3px 3px 0;
    }
`;

const StyledInput = styled.input`
    border: 2px solid rgba(203, 210, 224, 1);
    border-radius: 6px;
    background-color: var(--WF-Base-White, #fff);
    margin-top: 8px;
    width: 371px;
    max-width: 100%;
    height: 48px;
`;

const Tag = styled.div`
    display: flex;
    gap: 8px;
    padding: 4px 12px;
    border-radius: 6px;
    background-color: var(--purple-100, #e9d8fd);
    @media (max-width: 991px) {
        white-space: initial;
    }
`;

const TagName = styled.span`
    font-family: Inter, sans-serif;
`;

const TagIcon = styled.img`
    width: 10px;
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    fill: var(--purple-800, #44337a);
    margin: auto 0;
`;

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 15px;
    margin-top: 10px;
    padding-right: 80px;
    font-size: 16px;
    color: var(--purple-800, #44337a);
    font-weight: 500;
    white-space: nowrap;
    line-height: 150%;
    @media (max-width: 991px) {
        padding-right: 20px;
        white-space: initial;
    }
`;
const Label = styled.label`
    font-feature-settings: "calt" off;
    letter-spacing: -0.14px;
    font: 600 14px/114% Inter, sans-serif;
`;

const HorizontalRule = styled.hr`
    border: 1px solid rgba(0, 0, 0, 1);
    background-color: #000;
    margin-top: 19px;
    height: 1px;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 150%;
`;

const ActionButton = styled.button`
    font-family: Roboto, sans-serif;
    justify-content: center;
    border: 2px solid rgba(107, 83, 140, 1);
    border-radius: 12px;
    color: var(--Schemes-Primary, #6b538c);
    padding: 8px 16px;
    background: none;
`;

const SubmitButton = styled.button`
    font-family: Roboto, sans-serif;
    justify-content: center;
    border-radius: 12px;
    background-color: var(--Schemes-Primary, #6b538c);
    color: var(--Schemes-On-Primary, #fff);
    white-space: nowrap;
    padding: 8px 16px;
    @media (max-width: 991px) {
        white-space: initial;
    }
`;
<<<<<<< HEAD
=======

const ButtonContainerPost2 = styled.div`
    display: flex;
flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
    flex-shrink: 0;
`;
=======
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
>>>>>>> c9b0256 (clean up code, remove unnecessary controllers, separate styling)
export default Post2;

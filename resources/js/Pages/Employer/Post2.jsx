import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import {
    postJob,
    updateJobFormData,
    selectJobFormData,
    resetJobFormData,
} from "@/Features/jobs/jobsSlice";
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

function Post2() {
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
                                <InputField
                                    name="description"
                                    value={jobFormData.description}
                                    onChange={handleInputChange}
                                    data-test-id="description-input"
                                />
                            </Form>
                            <HorizontalRule />
                            <SectionHeading>Add Skills</SectionHeading>
                            <SectionDescription>
                                Add some skill keywords to the job.
                            </SectionDescription>
                            <Label htmlFor="skillInput">Skill to add</Label>
                            <StyledInput
                                id="skillInput"
                                name="skills"
                                value={currentSkill}
                                onChange={handleSkillChange}
                                onKeyDown={handleSkillKeyDown}
                            />
                            <TagContainer>
                                {jobFormData.skills.map((skill, index) => (
                                    <Tag key={index}>
                                        <TagName>{skill}</TagName>
                                        <TagIcon
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4297c66e6d9622e462ebb187a46dd67cf9ee2c5dfcfd5088583249a1e3bfc3e?apiKey=d66532d056b14640a799069157705b77&"
                                            alt={`${skill} Icon`}
                                            onClick={() => removeSkill(skill)}
                                        />
                                    </Tag>
                                ))}
                            </TagContainer>
                            <HorizontalRule />
                            <ButtonGroup>
                                <Link href="/employer/post1">
                                    <ActionButton>Go Back</ActionButton>
                                </Link>
                                <Link href="/employer/home">
                                    <SubmitButton onClick={handleSubmit}>
                                        Finished
                                    </SubmitButton>
                                </Link>
                            </ButtonGroup>
                        </FormContainer>
                    </FormWrapper>
                </Card>
            </Container>
        </NavBar>
    );
}

export default Post2;

import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { useDropzone } from "react-dropzone";
import {
    spin,
    ProfileWrapper,
    ProfileHeader,
    ProfileSection,
    ProfileContainer,
    ProfileImageWrapper,
    ProfileImage,
    ProfileBio,
    BioHeader,
    ProfileDetail,
    ProfileDetailItem,
    DetailLabel,
    DetailValue,
    EditProfileButton,
    ClearProfileButton,
    DropzoneContainer,
    SkillsContainer,
    SkillChip,
    AddSkillButton,
    LoadingScreen,
    Spinner,
    AutocompleteList,
    AutocompleteItem,
    BioValue,
    ProfileDetailOne,
    ProfileDetailTwo,
    StatusRadioButton,
    StatusContainer,
    StatusLabel,
} from "../Styling/ProfileForm.styles";

import { useSelector, useDispatch } from "react-redux";
import {
    selectUserStatus,
    selectUser,
    getUser,
    updateUserProfile,
    updateUserFormData,
    selectUserFormData,
} from "@/Features/users/userSlice";

const Dropzone = ({ onDrop }) => {
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            "image/*": [],
        },
    });

    return (
        <DropzoneContainer {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drop a profile image here</p>
        </DropzoneContainer>
    );
};

const ProfileForm = ({ user }) => {
    const userFormData = useSelector(selectUserFormData);
    const dispatch = useDispatch();
    const darkMode = false;
    const fontSize = "1em";
    const [droppedImage, setDroppedImage] = useState(null);
    const [currentSkill, setCurrentSkill] = useState("");
    const [currentCourse, setCurrentCourse] = useState("");
    const [saveMessage, setSaveMessage] = useState("");
    const [image, setImage] = useState(userFormData.profile_image);

    useEffect(() => {
        dispatch(
            updateUserFormData({
                ...user,
                skills: user.skills || [],
                courses: user.courses || [],
            })
        );
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData();
        formData.append("profile_image", image);
        formData.append("name", userFormData.name);
        formData.append("email", userFormData.email);
        formData.append("description", userFormData.description);
        formData.append("skills", JSON.stringify(userFormData.skills));
        formData.append("courses", JSON.stringify(userFormData.courses));
        formData.append("status", userFormData.status);
        formData.append("pronouns", userFormData.pronouns);
        formData.append("school", userFormData.school);

        try {
            await dispatch(updateUserProfile(formData)).unwrap();
            setSaveMessage("Changes saved successfully!");
            setTimeout(() => setSaveMessage(""), 3000); // Hide message after 3 seconds
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    const handleDrop = (acceptedFiles) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            setDroppedImage(URL.createObjectURL(file));
            setImage(file);
        }
    };

    const handleClear = () => {
        setImage(null);
        dispatch(updateUserFormData({ profile_image: null }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateUserFormData({ [name]: value }));
    };

    const handleSkillChange = (e) => {
        setCurrentSkill(e.target.value);
    };

    const addSkill = () => {
        if (currentSkill.trim()) {
            const updatedSkills = [...userFormData.skills, currentSkill.trim()];
            dispatch(updateUserFormData({ skills: updatedSkills }));
            setCurrentSkill("");
        }
    };

    const removeSkill = (skillToRemove) => {
        const updatedSkills = userFormData.skills.filter(
            (skill) => skill !== skillToRemove
        );
        dispatch(updateUserFormData({ skills: updatedSkills }));
    };

    const handleCourseChange = (e) => {
        setCurrentCourse(e.target.value);
    };

    const addCourse = () => {
        if (currentCourse.trim()) {
            const updatedCourses = [
                ...userFormData.courses,
                currentCourse.trim(),
            ];
            dispatch(updateUserFormData({ courses: updatedCourses }));
            setCurrentCourse("");
        }
    };

    const removeCourse = (courseToRemove) => {
        const updatedCourses = userFormData.skills.filter(
            (skill) => skill !== courseToRemove
        );
        dispatch(updateUserFormData({ courses: updatedCourses }));
    };

    if (!user) {
        return (
            <LoadingScreen>
                <Spinner />
            </LoadingScreen>
        );
    }

    return (
        <ProfileWrapper fontSize={fontSize} darkMode={darkMode}>
            <ProfileHeader fontSize={fontSize} darkMode={darkMode}>
                {" "}
                Edit Profile
            </ProfileHeader>
            <ProfileSection fontSize={fontSize} darkMode={darkMode}>
                <ProfileContainer fontSize={fontSize} darkMode={darkMode}>
                    <ProfileImageWrapper
                        fontSize={fontSize}
                        darkMode={darkMode}
                    >
                        {droppedImage ? (
                            <ProfileImage
                                loading="lazy"
                                src={droppedImage}
                                alt="Profile"
                            />
                        ) : userFormData.profile_image ? (
                            <div>
                                <ProfileImage
                                    fontSize={fontSize}
                                    darkMode={darkMode}
                                    loading="lazy"
                                    src={userFormData.profile_image}
                                    alt="Profile Image"
                                />
                                <ClearProfileButton
                                    fontSize={fontSize}
                                    darkMode={darkMode}
                                    onClick={handleClear}
                                >
                                    Clear
                                </ClearProfileButton>
                            </div>
                        ) : (
                            <Dropzone
                                fontSize={fontSize}
                                darkMode={darkMode}
                                onDrop={handleDrop}
                            />
                        )}
                    </ProfileImageWrapper>
                    <ProfileBio fontSize={fontSize} darkMode={darkMode}>
                        <BioValue
                            fontSize={fontSize}
                            darkMode={darkMode}
                            name="description"
                            value={userFormData.description}
                            onChange={handleChange}
                            placeholder="Add a few words about yourself..."
                        />
                    </ProfileBio>
                </ProfileContainer>
            </ProfileSection>

            <ProfileDetailItem fontSize={fontSize} darkMode={darkMode}>
                <DetailLabel fontSize={fontSize} darkMode={darkMode}>
                    Full Name
                </DetailLabel>
                <DetailValue
                    fontSize={fontSize}
                    darkMode={darkMode}
                    type="text"
                    name="name"
                    value={userFormData.name}
                    onChange={handleChange}
                />
            </ProfileDetailItem>
            <ProfileDetail fontSize={fontSize} darkMode={darkMode}>
                <ProfileDetailOne>
                    <ProfileDetailItem fontSize={fontSize} darkMode={darkMode}>
                        <DetailLabel fontSize={fontSize} darkMode={darkMode}>
                            Email
                        </DetailLabel>
                        <DetailValue
                            fontSize={fontSize}
                            darkMode={darkMode}
                            type="email"
                            name="email"
                            value={userFormData.email}
                            onChange={handleChange}
                        />
                    </ProfileDetailItem>
                    <ProfileDetailItem
                        fontSize={fontSize}
                        darkMode={darkMode}
                    ></ProfileDetailItem>
                    <ProfileDetailItem fontSize={fontSize} darkMode={darkMode}>
                        <DetailLabel fontSize={fontSize} darkMode={darkMode}>
                            School
                        </DetailLabel>
                        <DetailValue
                            fontSize={fontSize}
                            darkMode={darkMode}
                            type="text"
                            name="school"
                            value={userFormData.school}
                            onChange={handleChange}
                        />
                    </ProfileDetailItem>
                    <ProfileDetailItem fontSize={fontSize} darkMode={darkMode}>
                        {/* <DetailLabel fontSize={fontSize} darkMode={darkMode}>Preferred Position Title</DetailLabel>
          <DetailValue fontSize={fontSize} darkMode={darkMode}
            type="text"
            name="positiontitle"
            value={user.positiontitle}
            onChange={handleChange}
          /> */}
                    </ProfileDetailItem>
                    <ProfileDetailItem fontSize={fontSize} darkMode={darkMode}>
                        <DetailLabel fontSize={fontSize} darkMode={darkMode}>
                            Pronouns
                        </DetailLabel>
                        <DetailValue
                            fontSize={fontSize}
                            darkMode={darkMode}
                            type="text"
                            name="pronouns"
                            value={userFormData.pronouns}
                            onChange={handleChange}
                        />
                    </ProfileDetailItem>
                    <ProfileDetailItem fontSize={fontSize} darkMode={darkMode}>
                        <DetailLabel fontSize={fontSize} darkMode={darkMode}>
                            Current Status
                        </DetailLabel>
                        <StatusContainer fontSize={fontSize}>
                            <StatusLabel
                                fontSize={fontSize}
                                darkMode={darkMode}
                            >
                                <StatusRadioButton
                                    name="status"
                                    type="radio"
                                    value="searching"
                                    onChange={handleChange}
                                    checked={
                                        userFormData.status === "searching"
                                    }
                                    darkMode={darkMode}
                                />
                                Searching
                            </StatusLabel>
                            <StatusLabel
                                fontSize={fontSize}
                                darkMode={darkMode}
                            >
                                <StatusRadioButton
                                    name="status"
                                    type="radio"
                                    value="interviewing"
                                    onChange={handleChange}
                                    checked={
                                        userFormData.status === "interviewing"
                                    }
                                    darkMode={darkMode}
                                />
                                Interviewing
                            </StatusLabel>
                            <StatusLabel
                                fontSize={fontSize}
                                darkMode={darkMode}
                            >
                                <StatusRadioButton
                                    name="status"
                                    type="radio"
                                    value="working"
                                    onChange={handleChange}
                                    checked={userFormData.status === "working"}
                                    darkMode={darkMode}
                                />
                                Working
                            </StatusLabel>
                        </StatusContainer>
                    </ProfileDetailItem>
                </ProfileDetailOne>
                <ProfileDetailTwo>
                    <ProfileDetailItem fontSize={fontSize} darkMode={darkMode}>
                        <DetailLabel fontSize={fontSize} darkMode={darkMode}>
                            Skills
                        </DetailLabel>
                        <SkillsContainer
                            fontSize={fontSize}
                            darkMode={darkMode}
                        >
                            {Array.isArray(userFormData.skills) &&
                            userFormData.skills.length > 0 ? (
                                userFormData.skills.map((skill, index) => (
                                    <SkillChip
                                        fontSize={fontSize}
                                        darkMode={darkMode}
                                        key={index}
                                    >
                                        {skill}
                                        <span
                                            style={{
                                                cursor: "pointer",
                                                marginLeft: "6px",
                                            }}
                                            onClick={() => removeSkill(skill)}
                                            data-testid="remove-skill"
                                        >
                                            &#10005;
                                        </span>
                                    </SkillChip>
                                ))
                            ) : (
                                <p>No skills added yet.</p>
                            )}
                            <DetailValue
                                fontSize={fontSize}
                                darkMode={darkMode}
                                type="text"
                                name="currentSkill"
                                value={currentSkill || ""}
                                onChange={handleSkillChange}
                                placeholder="Add a skill..."
                                data-testid="skill-input"
                            />
                            <AddSkillButton
                                fontSize={fontSize}
                                darkMode={darkMode}
                                type="button"
                                onClick={addSkill}
                                data-testid="add-skill-button"
                            >
                                Add Skill
                            </AddSkillButton>
                        </SkillsContainer>
                    </ProfileDetailItem>
                    <ProfileDetailItem fontSize={fontSize} darkMode={darkMode}>
                        <DetailLabel fontSize={fontSize} darkMode={darkMode}>
                            Courses
                        </DetailLabel>
                        <SkillsContainer
                            fontSize={fontSize}
                            darkMode={darkMode}
                        >
                            {Array.isArray(userFormData.courses) &&
                            userFormData.courses.length > 0 ? (
                                userFormData.courses.map((course, index) => (
                                    <SkillChip
                                        fontSize={fontSize}
                                        darkMode={darkMode}
                                        key={index}
                                    >
                                        {course}
                                        <span
                                            style={{
                                                cursor: "pointer",
                                                marginLeft: "6px",
                                            }}
                                            onClick={() => removeCourse(course)}
                                        >
                                            &#10005;
                                        </span>
                                    </SkillChip>
                                ))
                            ) : (
                                <p>No courses added yet.</p>
                            )}
                            <DetailValue
                                fontSize={fontSize}
                                darkMode={darkMode}
                                type="text"
                                name="currentCourse"
                                value={currentCourse}
                                onChange={handleCourseChange}
                                placeholder="Add a course..."
                                data-testid="course-input"
                            />
                            <AddSkillButton
                                fontSize={fontSize}
                                darkMode={darkMode}
                                type="button"
                                onClick={addCourse}
                            >
                                Add Course
                            </AddSkillButton>
                        </SkillsContainer>
                    </ProfileDetailItem>
                </ProfileDetailTwo>
            </ProfileDetail>
            <EditProfileButton
                fontSize={fontSize}
                darkMode={darkMode}
                onClick={handleSubmit}
            >
                Save Profile Changes
            </EditProfileButton>
            {saveMessage && (
                <p
                    style={{
                        color: "green",
                        marginTop: "10px",
                        fontSize: "0.9em",
                    }}
                >
                    {saveMessage}
                </p>
            )}
        </ProfileWrapper>
    );
};

export default ProfileForm;

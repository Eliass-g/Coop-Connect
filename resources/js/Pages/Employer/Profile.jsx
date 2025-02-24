import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import { useDropzone } from "react-dropzone";
import { useSelector, useDispatch } from "react-redux";
import {
    selectUserStatus,
    selectUser,
    getUser,
    updateUserProfile,
    updateUserFormData,
    selectUserFormData,
} from "@/Features/users/userSlice";
import {
    Main,
    Section,
    RightContainer,
    Title,
    ProfileWrapper,
    ProfileDetails,
    ProfileImageWrapper,
    ProfileImage,
    ClearProfileButton,
    BioSection,
    BioTitle,
    BioDescription,
    BioLine,
    BioLineGroup,
    SmallBioLine,
    FieldTitle,
    Input,
    EditProfileButton,
    DetailValue,
    DropzoneContainer,
    SuccessMessage,
} from "./Styling/Profile.styles";
import { usePage, Link } from "@inertiajs/react";

const Dropzone = ({ onDrop }) => {
    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <DropzoneContainer {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drop a profile image here</p>
        </DropzoneContainer>
    );
};

function Profile() {
    const { props } = usePage();
    const { user } = props;
    const [droppedImage, setDroppedImage] = useState(null);
    const userFormData = useSelector(selectUserFormData);
    const [saveMessage, setSaveMessage] = useState("");
    const [image, setImage] = useState(userFormData.profile_image);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateUserFormData(user));
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData();
        formData.append("profile_image", image);
        formData.append("name", userFormData.name);
        formData.append("description", userFormData.description);
        formData.append("email", userFormData.email);
        formData.append("company", userFormData.company);
        formData.append("positiontitle", userFormData.positiontitle);

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
        setDroppedImage(null);
        dispatch(updateUserFormData({ profile_image: null }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateUserFormData({ [name]: value }));
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <NavBar header={"Profile"}>
            <Main>
                <Section>
                    <Title>Employer Profile</Title>
                    <ProfileWrapper>
                        <ProfileDetails>
                            <ProfileImageWrapper>
                                {droppedImage ? (
                                    <ProfileImage
                                        loading="lazy"
                                        src={droppedImage}
                                        alt="Profile"
                                    />
                                ) : userFormData.profile_image ? (
                                    <div>
                                        <ProfileImage
                                            loading="lazy"
                                            src={userFormData.profile_image}
                                            alt="Profile Image"
                                        />
                                        <ClearProfileButton
                                            onClick={handleClear}
                                        >
                                            Clear
                                        </ClearProfileButton>
                                    </div>
                                ) : (
                                    <Dropzone onDrop={handleDrop} />
                                )}
                            </ProfileImageWrapper>
                            <BioSection>
                                <BioTitle>Bio:</BioTitle>
                                <DetailValue
                                    name="description"
                                    value={userFormData.description}
                                    onChange={handleChange}
                                    placeholder="Add a few words about yourself..."
                                />
                            </BioSection>
                        </ProfileDetails>
                    </ProfileWrapper>
                    <FieldTitle>Full Name</FieldTitle>
                    <Input
                        type="text"
                        name="name"
                        value={userFormData.name}
                        onChange={handleChange}
                    />
                    <FieldTitle>Email</FieldTitle>
                    <Input
                        type="email"
                        name="email"
                        value={userFormData.email}
                        onChange={handleChange}
                    />
                    <FieldTitle>Company</FieldTitle>
                    <Input
                        type="text"
                        name="company"
                        value={userFormData.company}
                        onChange={handleChange}
                    />
                    <FieldTitle>Position</FieldTitle>
                    <Input
                        type="text"
                        name="positiontitle"
                        value={userFormData.positiontitle}
                        onChange={handleChange}
                    />
                    <EditProfileButton onClick={handleSubmit}>
                        Edit Profile
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
                </Section>
            </Main>
        </NavBar>
    );
}

export default Profile;

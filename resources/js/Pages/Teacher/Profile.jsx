import * as React from "react";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import {
    Main,
    Section,
    Title,
    ProfileWrapper,
    ProfileDetails,
    ProfileImageWrapper,
    ProfileImage,
    BioSection,
    BioTitle,
    BioDescription,
    BioLine,
    BioLineGroup,
    SmallBioLine,
    FieldTitle,
    Input,
    EditProfileButton,
} from "./Styling/Profile.styles";

function Profile() {
    const [fullName, setFullName] = React.useState("John Doe");
    const [email, setEmail] = React.useState("email123@gmail.com");
    const [accountType, setAccountType] = React.useState(
        "Employer, Teacher, Student"
    );
    const [school, setSchool] = React.useState("Microsoft Secondary School");
    const [specialty, setSpecialty] = React.useState("Teaches IT");

    return (
        <NavBar header={"My Profile"}>
            <Main>
                <Section>
                    <Title>Teacher Name</Title>
                    <ProfileWrapper>
                        <ProfileDetails>
                            <ProfileImageWrapper>
                                <ProfileImage
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/494aedb62fd8412da67a4596baf8d98d8d50133601f1ad66dd714781f065006f?apiKey=d66532d056b14640a799069157705b77&"
                                />
                            </ProfileImageWrapper>
                            <BioSection>
                                <BioTitle>Bio:</BioTitle>
                                <BioDescription>
                                    <BioLine />
                                    <BioLine />
                                    <BioLineGroup>
                                        <SmallBioLine />
                                        <SmallBioLine />
                                    </BioLineGroup>
                                </BioDescription>
                            </BioSection>
                        </ProfileDetails>
                    </ProfileWrapper>
                    <FieldTitle>Full Name</FieldTitle>
                    <Input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <FieldTitle>Email</FieldTitle>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FieldTitle>Account Type</FieldTitle>
                    <Input
                        value={accountType}
                        onChange={(e) => setAccountType(e.target.value)}
                    />
                    <FieldTitle>School</FieldTitle>
                    <Input
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                    />
                    <FieldTitle>Specialty</FieldTitle>
                    <Input
                        value={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                    />
                    <EditProfileButton>Edit Profile</EditProfileButton>
                </Section>
            </Main>
        </NavBar>
    );
}

const ClearProfileButton = styled.button`
    justify-content: center;
    border-radius: 12px;
    background: linear-gradient(135deg, #6b538c, #a97bbf);
    align-self: start;
    margin-top: 20px;
    color: #fff;
    letter-spacing: 0.5px;
    padding: 8px 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    font-family: Roboto, sans-serif;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;

    &:hover {
        background: linear-gradient(135deg, #543b6f, #8e6aae);
        transform: scale(1.05);
    }
`;


const SuccessMessage = styled.div`
    color: green;
    margin-top: 10px;
    font: 500 14px Poppins, sans-serif;
`;

const DropzoneContainer = styled.div`
    border: 2px dashed #6b538c;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    color: #6b538c;
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.1px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #f3e8ff;
    }
`;

export default Profile;

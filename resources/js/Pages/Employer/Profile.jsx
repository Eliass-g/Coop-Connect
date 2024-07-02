import * as React from "react";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
<<<<<<< HEAD
=======
import ReflectionDocuments from "../Employer/Components/ReflectionDocuments";
import { useDropzone } from "react-dropzone";
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
} from "./Styling/Profile.styles";

const appUrl = import.meta.env.VITE_APP_URL;

const Dropzone = ({ onDrop }) => {
    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <DropzoneContainer {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drop a profile image here</p>
        </DropzoneContainer>
    );
};
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)

function Profile() {
    const [fullName, setFullName] = React.useState("John Doe");
    const [email, setEmail] = React.useState("email123@gmail.com");
    const [accountType, setAccountType] = React.useState(
        "Employer, Teacher, Student"
    );
    const [company, setCompany] = React.useState("Microsoft");
    const [position, setPosition] = React.useState("IT Department Manager");

<<<<<<< HEAD
=======
    const [user, setUser] = useState(null);
    const [droppedImage, setDroppedImage] = useState(null);

    const handleDrop = (acceptedFiles) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            const imageUrl = URL.createObjectURL(file);
            setDroppedImage(imageUrl);
        }
    };

    useEffect(() => {

        const fetchUserId = async () => {
            try {
                const response = await axios.get(`${appUrl}/api/user-id`);
                const userData = response.data.user;
                userData.skills = userData.skills || "[]";
                setUser(userData);
                console.log(response.data.user);
            } catch (error) {
                console.error("Error fetching user ID:", error);
            }
        };

        fetchUserId();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const addSkill = () => {
        if (user.newSkill.trim() !== "") {
            setUser((prevData) => ({
                ...prevData,
                skills: [...prevData.skills, prevData.newSkill.trim()],
                newSkill: "", // Clear the input field after adding the skill
            }));
        }
    };

    const removeSkill = (index) => {
        const updatedSkills = [...user.skills];
        updatedSkills.splice(index, 1);
        setUser((prevData) => ({
            ...prevData,
            skills: updatedSkills,
        }));
    };

    const handleSubmit = async () => {
        try {
            const formData = new FormData();

            // Check if droppedImage is set and append it to formData
            if (droppedImage) {
                // If droppedImage is a File object (if using Dropzone), directly append it
                if (droppedImage instanceof File) {
                    formData.append("profile_image", droppedImage);
                } else {
                    // If droppedImage is a URL (if using an image preview), fetch the file and append
                    const response = await fetch(droppedImage);
                    const blob = await response.blob();
                    formData.append("profile_image", blob, "profile_image.png"); // Adjust filename as needed
                }
            }

            // Append other form fields
            formData.append("description", user.description);
            formData.append("name", user.name);
            formData.append("email", user.email);
            formData.append("role", user.role);
            formData.append("school", user.school);
            formData.append("positiontitle", user.positiontitle);
            formData.append("company_name", user.company_name);
            formData.append("skills", user.skills);

            const response = await axios.post(
                `${appUrl}/api/update-profile/${user.id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            );

            console.log("Profile updated:", response.data);
            window.location.reload();
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    const handleClear = () => {
        // Update user state to clear profile image
        setUser({ ...user, profile_image: null });
    };

    if (!user) {
        return <div>Loading...</div>;
    }

>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
    return (
        <NavBar>
            <Main>
                <Section>
                    <Title>Employer Name</Title>
                    <ProfileWrapper>
                        <ProfileDetails>
                            <ProfileImageWrapper>
<<<<<<< HEAD
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
=======
                                {droppedImage ? (
                                    <ProfileImage
                                        loading="lazy"
                                        src={droppedImage}
                                        alt="Profile"
                                    />
                                ) : user.profile_image ? (
                                    <div>
                                        <ProfileImage
                                            loading="lazy"
                                            src={user.profile_image}
                                            alt="ProfileIMG"
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
                                    value={user.description}
                                    onChange={handleChange}
                                    placeholder="Add a few words about yourself..."
                                />
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
                            </BioSection>
                        </ProfileDetails>
                    </ProfileWrapper>
                    <FieldTitle>Full Name</FieldTitle>
                    <Input
<<<<<<< HEAD
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
                    <FieldTitle>Company</FieldTitle>
                    <Input
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    <FieldTitle>Position</FieldTitle>
                    <Input
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                    <EditProfileButton>Edit Profile</EditProfileButton>
                </Section>
=======
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                    <FieldTitle>Email</FieldTitle>
                    <Input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <FieldTitle>Account Type</FieldTitle>
                    <Input value={user.role} onChange={handleChange} />
                    <FieldTitle>Company</FieldTitle>
                    <Input
                        type="text"
                        name="company_name"
                        value={user.company_name}
                        onChange={handleChange}
                    />
                    <FieldTitle>Position</FieldTitle>
                    <Input
                        type="text"
                        name="positiontitle"
                        value={user.positiontitle}
                        onChange={handleChange}
                    />
                    <EditProfileButton onClick={handleSubmit}>
                        Edit Profile
                    </EditProfileButton>
                </Section>
                <RightContainer>
                    <ReflectionDocuments />
                </RightContainer>
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
            </Main>
        </NavBar>
    );
}

<<<<<<< HEAD
const Main = styled.main`
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    display: flex;
    justify-content: center;
    padding: 20px;
`;

const Section = styled.section`
    display: flex;
    width: 600px;
    max-width: 100%;
    flex-direction: column;
`;

const Title = styled.h1`
    color: #6b538c;
    text-decoration: underline;
    align-self: center;
    font: 600 32px Poppins, sans-serif;
`;

const ProfileWrapper = styled.div`
    margin-top: 40px;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const ProfileDetails = styled.div`
    gap: 20px;
    display: flex;
    @media (max-width: 991px) {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }
`;

const ProfileImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 26%;
    @media (max-width: 991px) {
        width: 100%;
    }
`;

const ProfileImage = styled.img`
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid rgba(45, 54, 72, 1);
    background-color: #edf0f7;
    display: flex;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    padding: 0 55px;
    @media (max-width: 991px) {
        margin-top: 20px;
        padding: 0 20px;
    }
`;

const BioSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 74%;
    margin-left: 20px;
    @media (max-width: 991px) {
        width: 100%;
    }
`;

const BioTitle = styled.h2`
    color: #2d3648;
    letter-spacing: 0.1px;
    font: 500 14px Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const BioDescription = styled.div`
    border-radius: 10px;
    border: 2px solid rgba(123, 117, 127, 1);
    background-color: #eedcff;
    display: flex;
    margin-top: 8px;
    flex-direction: column;
    padding: 12px;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const BioLine = styled.div`
    border-radius: 3px;
    background-color: #260e44;
    height: 16px;
`;

const BioLineGroup = styled.div`
    display: flex;
    margin-top: 8px;
    padding-right: 80px;
    @media (max-width: 991px) {
        padding-right: 20px;
    }
`;

const SmallBioLine = styled.div`
    border-radius: 3px;
    background-color: #260e44;
    height: 16px;
    flex: 1;
`;

const FieldTitle = styled.h2`
    color: #6b538c;
    letter-spacing: 0.1px;
    margin-top: 20px;
    font: 500 14px Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const Input = styled.input`
    align-items: start;
    border-radius: 6px;
    border: 2px solid rgba(38, 14, 68, 1);
    background-color: #fff7ff;
    margin-top: 8px;
    color: #7b757f;
    letter-spacing: 0.25px;
    justify-content: center;
    padding: 19px 12px;
    font: 400 14px Poppins, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
        padding-right: 20px;
    }
`;

const EditProfileButton = styled.button`
    justify-content: center;
    border-radius: 12px;
    background-color: #6b538c;
    align-self: start;
    margin-top: 20px;
    color: #fff;
    letter-spacing: 0.5px;
    padding: 8px 16px;
    font: 700 16px Roboto, sans-serif;
`;

=======
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
export default Profile;

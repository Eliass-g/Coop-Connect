import * as React from "react";
import styled from "styled-components";

function ProfileForm() {
<<<<<<< HEAD
    const [userData, setUserData] = React.useState({
        name: "John Doe",
        email: "email123@gmail.com",
        accountTypes: ["Employer", "Teacher", "Student"],
        educationInstitute: "School Name",
        preferredPosition: "Junior Software Developer",
    });
=======
    const [user, setUser] = useState(null);
<<<<<<< HEAD
=======
    const [droppedImage, setDroppedImage] = useState(null);

    // Fetch user data on component mount
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${appUrl}/api/user-id`);
                const userData = response.data.user;
                userData.skills = userData.skills || "[]";
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    const handleDrop = (acceptedFiles) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            const file = acceptedFiles[0];
            const imageUrl = URL.createObjectURL(file);
            setDroppedImage(imageUrl);
        }
    };
>>>>>>> b6cf7b6 (create page for viewing applicants, accepting applicants, modal for declining applicants)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/user-id`
                );
                setUser(response.data.user);
            } catch (error) {
                console.error("Error fetching user ID:", error);
            }
        };
        fetchUser();
    }, []);
>>>>>>> feb0b09 (add redux integration to student pages: home, jobs, profile)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

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
            formData.append("skills", (user.skills));

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

>>>>>>> e0e590c (format viewapplicants to match viewapplicantions, fix student home state management)
    if (!user) {
        return <div>Loading...</div>;
    }
>>>>>>> 757c3dd (format viewapplicants to match viewapplicantions, fix student home state management)

    return (
        <ProfileWrapper>
            <ProfileHeader>Student Name</ProfileHeader>
            <ProfileSection>
                <ProfileContainer>
                    <ProfileImageWrapper>
<<<<<<< HEAD
                        <ProfileImage loading="lazy" src="" alt="Profile" />
=======
                        <ProfileImage
                            loading="lazy"
                            src="{user.school}"
                            alt="Profile"
                        />
>>>>>>> feb0b09 (add redux integration to student pages: home, jobs, profile)
                    </ProfileImageWrapper>
                    <ProfileBio>
                        <BioHeader>Bio:</BioHeader>
                        <BioContent>
                            <BioLine />
                            <BioLine />
                            <BioStatus>
                                <BioStatusItem />
                                <BioStatusItem />
                            </BioStatus>
                        </BioContent>
                    </ProfileBio>
                </ProfileContainer>
            </ProfileSection>
            <ProfileDetail>
                <ProfileDetailItem>
                    <DetailLabel>Full Name</DetailLabel>
                    <DetailValue
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                    />
                </ProfileDetailItem>
                <ProfileDetailItem>
                    <DetailLabel>Email</DetailLabel>
                    <DetailValue
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                </ProfileDetailItem>
                <ProfileDetailItem>
                    <DetailLabel>Account Type</DetailLabel>
                    <DetailValue
                        type="text"
                        name="accountTypes"
<<<<<<< HEAD
                        value={userData.accountTypes.join(", ")}
                        onChange={handleChange}
=======
                        value={user.role}
>>>>>>> feb0b09 (add redux integration to student pages: home, jobs, profile)
                    />
                </ProfileDetailItem>
                <ProfileDetailItem>
                    <DetailLabel>Education Institute</DetailLabel>
                    <DetailValue
                        type="text"
                        name="educationInstitute"
                        value={userData.educationInstitute}
                        onChange={handleChange}
                    />
                </ProfileDetailItem>
                <ProfileDetailItem>
                    <DetailLabel>Preferred Position</DetailLabel>
                    <DetailValue
                        type="text"
                        name="preferredPosition"
                        value={userData.preferredPosition}
                        onChange={handleChange}
                    />
                </ProfileDetailItem>
            </ProfileDetail>
            <EditProfileButton>Edit Profile</EditProfileButton>
        </ProfileWrapper>
    );
}

const ProfileWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-width: 300px; /* Set a minimum width */
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    gap: 40px;
    padding: 40px 30px;
`;
const ProfileHeader = styled.h1`
    color: #6b538c;
    text-decoration: underline;
    align-self: center;
    font-weight: 600;
    font-size: 32px;
    font-family: Poppins, sans-serif;
`;
const ProfileSection = styled.section`
    margin-top: 40px;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;
const ProfileContainer = styled.div`
    gap: 20px;
    display: flex;
    @media (max-width: 991px) {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }
`;
const ProfileImageWrapper = styled.figure`
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 26%;
    margin: 0 auto;
    @media (max-width: 991px) {
        width: 100%;
        margin-top: 20px;
    }
`;
const ProfileImage = styled.img`
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid rgba(45, 54, 72, 1);
    background-color: #edf0f7;
    display: block;
    width: 150px;
    height: 150px;
    padding: 0 55px;
    aspect-ratio: 1;
    object-fit: cover;
    @media (max-width: 991px) {
        padding: 0 20px;
    }
`;
const ProfileBio = styled.div`
    display: flex;
    flex-direction: column;
    width: 74%;
    margin-left: 20px;
    @media (max-width: 991px) {
        width: 100%;
        margin-top: 20px;
    }
`;
const BioHeader = styled.h2`
    color: #2d3648;
    letter-spacing: 0.1px;
    font-weight: 500;
    font-size: 14px;
    font-family: Poppins, sans-serif;
`;
const BioContent = styled.div`
    border-radius: 10px;
    border: 2px solid #7b757f;
    background-color: #eedcff;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    padding: 12px;
`;
const BioLine = styled.div`
    border-radius: 3px;
    background-color: #260e44;
    height: 16px;
    margin-top: 8px;
    &:first-child {
        margin-top: 0;
    }
`;
const BioStatus = styled.div`
    display: flex;
    margin-top: 8px;
    padding-right: 80px;
    gap: 0;
    @media (max-width: 991px) {
        padding-right: 20px;
    }
`;
const BioStatusItem = styled.div`
    border-radius: 3px;
    background-color: #260e44;
    height: 16px;
    flex: 1;
    &:first-child {
        border-radius: 3px 0 0 3px;
    }
    &:last-child {
        border-radius: 0 3px 3px 0;
    }
`;
const ProfileDetail = styled.section`
    margin-top: 20px;
`;
const ProfileDetailItem = styled.div`
    margin-top: 20px;
`;
const DetailLabel = styled.label`
    color: #6b538c;
    letter-spacing: 0.1px;
    font-weight: 500;
    font-size: 14px;
    font-family: Poppins, sans-serif;
`;
const DetailValue = styled.input`
    align-items: start;
    border-radius: 6px;
    border: 2px solid #260e44;
    background-color: #fff7ff;
    margin-top: 8px;
    color: #7b757f;
    letter-spacing: 0.25px;
    padding: 19px 12px;
    font-size: 14px;
    font-family: Poppins, sans-serif;
    line-height: 143%;
    width: 100%;
    box-sizing: border-box;
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
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    font-family: Roboto, sans-serif;
`;

export default ProfileForm;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import downarrow from "@/Pages/Images/Icon.svg";
import wordlogo from "../Images/worddocicon.png";
import pdflogo from "../Images/pdf-icon.png";
const appUrl = import.meta.env.VITE_APP_URL;
import {
    Wrapper,
    Content,
    FileSection,
    SectionHeader,
    TabList,
    TabItem,
    FileList,
    FileContainer,
    FileIcons,
    FileDetails,
    FileTitle,
    FileSize,
    FileActions,
    ActionButton,
    FormSection,
    Form,
    Title,
    Label,
    FileDropContainer,
    DropText,
    FileTypes,
    SecurityNote,
    SubmitButton,
    DropZoneWrapper,
    DropZoneContainer,
    DropZone,
    DropZoneText,
    DropZoneDescription,
    PreviewImage,
} from "./Styling/Document.styles";

function DocumentDropZone({
    onFileDrop,
    imgSrc,
    altText,
    description,
    clearPreviewsTrigger,
}) {
    const [isDragging, setIsDragging] = useState(false);
    const [filesPreview, setFilesPreview] = useState([]);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        onFileDrop(files);
        setFilesPreview(
            files.map((file) => ({
                file,
                preview: URL.createObjectURL(file),
                type: file.type,
            }))
        );
    };

    useEffect(() => {
        if (clearPreviewsTrigger) {
            setFilesPreview([]);
        }
    }, [clearPreviewsTrigger]);

    const getIconForFileType = (fileType) => {
        if (fileType.includes("pdf")) {
            return pdflogo;
        } else if (fileType.includes("word")) {
            return wordlogo;
        } else {
            return null;
        }
    };

    return (
        <DropZoneContainer
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            isDragging={isDragging}
        >
            <DropZone>
                {filesPreview.length > 0 ? (
                    filesPreview.map((fileObj, index) => {
                        const icon = getIconForFileType(fileObj.type);
                        return (
                            <PreviewImage
                                key={index}
                                src={icon ? icon : fileObj.preview}
                            />
                        );
                    })
                ) : (
                    <img
                        src={imgSrc}
                        alt={altText}
                        style={{
                            width: "100px",
                            height: "100px",
                        }}
                    />
                )}
                <DropZoneText>Drag your files here</DropZoneText>
            </DropZone>
            <DropZoneDescription>{description}</DropZoneDescription>
        </DropZoneContainer>
    );
}

const TabMenu = ({ tabs }) => (
    <TabList>
        {tabs.map((tab, index) => (
            <TabItem key={index} className={index === 0 ? "active" : ""}>
                {tab}
            </TabItem>
        ))}
    </TabList>
);

const FileItem = ({ title, type, downloadDocument, doc, handleDelete }) => (
    <FileContainer>
        <FileIcons>
            <img
                onClick={() => handleDelete(type)}
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4cdb93b18319c472265cce9eb4f7345c821b3f3e0269b1464d286a7094472e4?apiKey=d66532d056b14640a799069157705b77&"
                alt=""
                style={{ width: "24px", height: "24px" }}
            />
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a9403df13b2dd9b0c6d623620f8e8a11ded89bf005c81d6d7336457cda636ca?apiKey=d66532d056b14640a799069157705b77&"
                alt=""
                style={{ width: "24px", height: "24px" }}
            />
        </FileIcons>
        <FileDetails>
            <div>
                <FileTitle>{title}</FileTitle>
                <FileSize>{type}</FileSize>
            </div>
            <FileActions>
                <ActionButton onClick={() => downloadDocument(type, title)}>
                    Download{" "}
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2af48e24c34a904b3b5a3559caeea0ddb30ee829cab8a5c4740ff86e9c992067?apiKey=d66532d056b14640a799069157705b77&"
                        alt="Download icon"
                    />
                </ActionButton>
                <ActionButton outline>
                    Share{" "}
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a625fb433ce98b0d17f96a94179431e6cdfe22a98d39394247a5eaf65fd6856?apiKey=d66532d056b14640a799069157705b77&"
                        alt="Share icon"
                    />
                </ActionButton>
            </FileActions>
        </FileDetails>
    </FileContainer>
);

function Document() {
    const [filesToUpload, setFilesToUpload] = useState([]);
    const [clearPreviewsTrigger, setClearPreviewsTrigger] = useState(false);
    const [userId, setUserId] = useState(null);
    const [userDocuments, setUserDocuments] = useState([]);

    useEffect(() => {
        // Fetch the XSRF token from cookies and set it in Axios headers
        const csrfToken = document.cookie
            .split("; ")
            .find((row) => row.startsWith("XSRF-TOKEN="))
            ?.split("=")[1];
        axios.defaults.headers.common["X-XSRF-TOKEN"] = csrfToken;

        // Fetch the user ID, only allows if token is correct
        const fetchUserId = async () => {
            try {
                const response = await axios.get(`${appUrl}/api/user-id`);
                setUserId(response.data.user.id);
            } catch (error) {
                console.error("Error fetching user ID:", error);
            }
        };

        fetchUserId();
    }, []);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                if (!userId) {
                    return; // Exit early if userId is null or undefined
                }

                const response = await axios.get(`${appUrl}/api/fetchdocs`, {
                    params: {
                        user_id: userId,
                    },
                });

                if (response.data.status === 1) {
                    setUserDocuments(response.data.data);
                    console.log(
                        "Documents fetched successfully:",
                        response.data.data
                    );
                } else {
                    console.error(
                        "Error fetching documents:",
                        response.data.message
                    );
                }
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };

        fetchDocuments();
    }, [userId]);

    const handleFileDrop = async (files) => {
        setFilesToUpload((prevFiles) => [...prevFiles, ...files]);
        setClearPreviewsTrigger(false);
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(
                `${appUrl}/api/deletedoc/${id}`
            );
            if (response.data.status === 1) {
                setUserDocuments((prevDocuments) =>
                    prevDocuments.filter((doc) => doc.id !== id)
                );
                console.log("Document deleted successfully");
            } else {
                console.error(
                    "Error deleting document:",
                    response.data.message
                );
            }
        } catch (error) {
            console.error("Error deleting document:", error);
        }
    };

    const handleUpload = async () => {
        const formData = new FormData();

        filesToUpload.forEach((file) => {
            let fileType;

            // Determine the file type based on the file's MIME type
            if (file.type === "application/pdf") {
                fileType = "pdf";
            } else if (file.type === "application/docx") {
                fileType = "word";
            } else {
                // Handle other file types as needed
                fileType = "other";
            }

            // Append the file with its type to formData
            formData.append("files[]", file);
            formData.append("file_types[]", fileType);
        });

        formData.append("user_id", userId);

        try {
            const response = await axios.post(
                `${appUrl}/api/uploaddocs`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("Upload successful:", response.data);
            setFilesToUpload([]);
            setClearPreviewsTrigger(true);
            window.location.reload();
        } catch (error) {
            console.error("Error uploading files:", error);
        }
    };

    const downloadDocument = async (id, title) => {
        try {
            const response = await axios.get(`${appUrl}/api/download/${id}`, {
                responseType: "blob",
            });

            // Create a blob URL for the response data
            const blob = new Blob([response.data], {
                type: response.data.type,
            });
            const url = window.URL.createObjectURL(blob);

            // Create a link element to trigger the download
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", title);
            document.body.appendChild(link);

            // Trigger the download
            link.click();

            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);

            console.log("Download successful");
        } catch (error) {
            console.error("Error downloading document:", error);
        }
    };

    return (
        <NavBar header={"Documents"}>
            <Wrapper>
                <Content>
                    <FileSection>
                        <SectionHeader>
                            <TabMenu
                                tabs={[
                                    "Progress Reports",
                                    "Student Logs",
                                    "Student Documents",
                                    "All Files",
                                ]}
                            />
                        </SectionHeader>
                        <FileList>
                            {userDocuments.map((doc, index) => (
                                <FileItem
                                    key={index}
                                    title={doc.title}
                                    type={doc.id}
                                    id={doc.id}
                                    downloadDocument={() =>
                                        downloadDocument(doc.id, doc.title)
                                    }
                                    handleDelete={() => handleDelete(doc.id)}
                                />
                            ))}
                        </FileList>
                    </FileSection>
                    <FormSection>
                        <Form>
                            <Title>Add Documents</Title>

                            <Label htmlFor="fileUpload">Attach Documents</Label>
                            <DropZoneWrapper>
                                <DocumentDropZone
                                    onFileDrop={handleFileDrop}
                                    clearPreviewsTrigger={clearPreviewsTrigger}
                                />
                            </DropZoneWrapper>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <FileTypes>
                                    Accepted File Types: .doc, .docx, .pdf only
                                </FileTypes>
                                <SecurityNote>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b7ec72c66d30f8ec5c35d4cec5db08f1877f1a7d86ea8b6c08df8054b4a9a85?apiKey=d66532d056b14640a799069157705b77&"
                                        alt=""
                                    />
                                    Secure
                                </SecurityNote>
                            </div>
                            <SubmitButton onClick={handleUpload}>
                                Upload
                            </SubmitButton>
                        </Form>
                    </FormSection>
                </Content>
            </Wrapper>
        </NavBar>
    );
}

export default Document;

import React from "react";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
<<<<<<< HEAD
=======
import wordlogo from "../Images/worddocicon.png";
import pdflogo from "../Images/pdf-icon.png";
import {
    MainContainer,
    Section,
    DropZoneWrapper,
    DropZoneContainer,
    DropZone,
    DropZoneText,
    DropZoneDescription,
    PreviewImage,
    UploadButton,
    DocumentWrapper,
    DocumentItem,
    ButtonContainer,
    PreviewImageDownload,
    DownloadButton,
    DeleteButton,
    MessageContainer,
    Message,
} from "./Styling/Document.styles";

<<<<<<< HEAD
function DocumentDropZone({ onFileDrop, imgSrc, altText, description, clearPreviewsTrigger }) {
=======
const appUrl = import.meta.env.VITE_APP_URL;

function DocumentDropZone({
    onFileDrop,
    imgSrc,
    altText,
    description,
    clearPreviewsTrigger,
}) {
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
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
>>>>>>> c9b0256 (clean up code, remove unnecessary controllers, separate styling)

function DocumentDropZone({ imgSrc, altText, description }) {
    return (
        <DropZoneContainer>
            <DropZone>
<<<<<<< HEAD
                <img
                    src={imgSrc}
                    alt={altText}
                    style={{
                        width: "100px",
                        height: "100px",
                    }}
                />
=======
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
>>>>>>> c9b0256 (clean up code, remove unnecessary controllers, separate styling)
                <DropZoneText>Drag your files here</DropZoneText>
            </DropZone>
            <DropZoneDescription>{description}</DropZoneDescription>
        </DropZoneContainer>
    );
}

function Document() {
    const documentData = [
        {
            imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/906419841746a1732713efefc5675f404b543de3dd88203c7d384fc92193a9c9?apiKey=d66532d056b14640a799069157705b77&",
            altText: "Upload Zone 1",
            description: "Document 1",
        },
        {
            imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2be66a00f7af6f4de8a52f78e488702758db936f19f83e7cdf4e5d364c3d5980?apiKey=d66532d056b14640a799069157705b77&",
            altText: "Upload Zone 2",
            description: "Document 2",
        },
        {
            imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/68d58af99d26ef77eebd68a3c053d0bde9718f44bdef04efbe9ae7634110a91c?apiKey=d66532d056b14640a799069157705b77&",
            altText: "Upload Zone 3",
            description: "Document 3",
        },
<<<<<<< HEAD
        {
            imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/906419841746a1732713efefc5675f404b543de3dd88203c7d384fc92193a9c9?apiKey=d66532d056b14640a799069157705b77&",
            altText: "Upload Zone 1",
            description: "Document 1",
        },
        {
            imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2be66a00f7af6f4de8a52f78e488702758db936f19f83e7cdf4e5d364c3d5980?apiKey=d66532d056b14640a799069157705b77&",
            altText: "Upload Zone 2",
            description: "Document 2",
        },
        {
            imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/68d58af99d26ef77eebd68a3c053d0bde9718f44bdef04efbe9ae7634110a91c?apiKey=d66532d056b14640a799069157705b77&",
            altText: "Upload Zone 3",
            description: "Document 3",
        },
    ];

=======
    ];

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
                const response = await axios.get('/api/user-id');
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

                const response = await axios.get("/api/fetchdocs", {
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
<<<<<<< HEAD
          const response = await axios.delete(`/api/deletedoc/${id}`);
          if (response.data.status === 1) {
            setUserDocuments((prevDocuments) =>
              prevDocuments.filter((doc) => doc.id !== id)
=======
            const response = await axios.delete(
                `${appUrl}/api/deletedoc/${id}`
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
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
<<<<<<< HEAD
            const response = await axios.post("/api/uploaddocs", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
=======
            const response = await axios.post(
                `${appUrl}/api/uploaddocs`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)
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

<<<<<<< HEAD
const downloadDocument = async (id, title) => {
    try {
        const response = await axios.get(`/api/download/${id}`, {
            responseType: "blob",
        });

        // Create a blob URL for the response data
        const blob = new Blob([response.data], { type: response.data.type });
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

=======
            // Create a link element to trigger the download
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", title);
            document.body.appendChild(link);
>>>>>>> 14a0769 (clean up code, remove unnecessary controllers, separate styling)

            // Trigger the download
            link.click();

            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);

            console.log("Download successful");
        } catch (error) {
            console.error("Error downloading document:", error);
        }
    };

>>>>>>> c9b0256 (clean up code, remove unnecessary controllers, separate styling)
    return (
        <NavBar header={"Document Upload"}>
            <MainContainer>
                <Section>
                    <DropZoneWrapper>
                        {documentData.slice(0, 3).map((doc, index) => (
                            <DocumentDropZone key={index} {...doc} />
                        ))}
                    </DropZoneWrapper>
                </Section>
                <Section>
<<<<<<< HEAD
                    <DropZoneWrapper>
                        {documentData.slice(3).map((doc, index) => (
                            <DocumentDropZone key={index} {...doc} />
                        ))}
                    </DropZoneWrapper>
=======
                    {userDocuments.length > 0 ? (
                        <DocumentWrapper>
                            {userDocuments.map((doc, index) => (
                                <DocumentItem key={index}>
                                    <span>{doc.title}</span>
                                    <ButtonContainer>
                                        <DownloadButton
                                            onClick={() =>
                                                downloadDocument(
                                                    doc.id,
                                                    doc.title
                                                )
                                            }
                                        >
                                            Download
                                        </DownloadButton>
                                        <DeleteButton
                                            onClick={() => handleDelete(doc.id)}
                                        >
                                            Delete
                                        </DeleteButton>
                                    </ButtonContainer>
                                </DocumentItem>
                            ))}
                        </DocumentWrapper>
                    ) : (
                        <MessageContainer>
                            <Message>
                                No documents uploaded. Upload some documents to
                                view.
                            </Message>
                        </MessageContainer>
                    )}
>>>>>>> c9b0256 (clean up code, remove unnecessary controllers, separate styling)
                </Section>
            </MainContainer>
        </NavBar>
    );
}

<<<<<<< HEAD
const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-top: 0px;
`;

const Section = styled.section`
    justify-content: center;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    display: flex;
    margin-top: 40px;
    flex-direction: column;
    padding: 80px 35px;
    @media (max-width: 991px) {
        max-width: 100%;
        padding: 0 20px;
    }
`;

const DropZoneWrapper = styled.div`
    gap: 20px;
    display: flex;
    @media (max-width: 991px) {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }
`;

const DropZoneContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    margin-left: 20px;
    @media (max-width: 991px) {
        width: 100%;
        margin-left: 0;
        margin-top: 20px;
    }
`;

const DropZone = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px dashed rgba(107, 83, 140, 1);
    background-color: #eddcff;
    font-size: 23px;
    color: #000;
    line-height: 40px;
    padding: 40px;
    @media (max-width: 991px) {
        padding: 0 20px;
    }
`;

const DropZoneText = styled.div`
    font-family: Poppins, sans-serif;
    margin-top: 10px;
    @media (max-width: 991px) {
        margin: 0 8px;
    }
`;

const DropZoneDescription = styled.p`
    color: #6b538c;
    align-self: center;
    margin-top: 10px;
    font: bold 28px Poppins, sans-serif;
`;

=======
>>>>>>> c9b0256 (clean up code, remove unnecessary controllers, separate styling)
export default Document;

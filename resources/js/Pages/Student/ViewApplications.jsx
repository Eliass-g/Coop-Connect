import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "./Components/NavBar";
import {
    selectJobs,
    getJobsDetails,
    patchUserJob,
} from "@/Features/userJobs/userJobsSlice";
import { useDispatch, useSelector } from "react-redux";
import { sendNotification } from "@/Features/notifications/notificationsSlice";

const ViewApplications = () => {
    const [activeTab, setActiveTab] = useState("Pending");

    const dispatch = useDispatch();
    const jobs = useSelector(selectJobs);

    useEffect(() => {
        dispatch(getJobsDetails());
    }, [dispatch]);

    const tabs = ["Pending", "Interview", "Scheduled", "Declined", "Rejected"];

    const handleAccept = (id) => {
        // Handle the accept action
        window.location.href = `/student/accept-interview/${id}`;
    };

    const handleDecline = (app) => {
        if (
            window.confirm("Are you sure you want to decline this application?")
        ) {
            dispatch(
                patchUserJob({
                    userJobsId: app.id,
                    status: "Declined",
                })
            ).then(() => {
                const notificationData = {
                    recipient_id: app.user_id,
                    redirect: `${app.jobs_id}`,
                    message: `Declined Interview`,
                };
                dispatch(sendNotification(notificationData));
            });
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            timeZoneName: "short",
        }).format(date);
    };

    const renderApplications = () => {
        return jobs
            .filter((app) => app.status === activeTab)
            .map((app) => (
                <ApplicationCard key={app.id}>
                    <h3>
                        <b>Position:</b> {app.title}
                    </h3>
                    <p>
                        <b>Company:</b> {app.company}
                    </p>
                    <p>
                        <b>Location:</b> {app.location}
                    </p>
                    <p>
                        <b>Description:</b> {app.description}
                    </p>
                    {app.status === "Interview" && (
                        <ButtonGroup>
                            <ActionButton onClick={() => handleAccept(app.id)}>
                                Accept
                            </ActionButton>
                            <ActionButton onClick={() => handleDecline(app)}>
                                Decline
                            </ActionButton>
                        </ButtonGroup>
                    )}
                    {app.status === "Scheduled" && (
                        <p>
                            <b>Date:</b> {formatDate(app.timeSlots)}
                        </p>
                    )}
                </ApplicationCard>
            ));
    };

    return (
        <NavBar header={"View Applications"}>
            <Container>
                <Tabs>
                    {tabs.map((tab) => (
                        <Tab
                            key={tab}
                            $active={activeTab === tab}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </Tab>
                    ))}
                </Tabs>
                {jobs.length > 0 ? (
                    <ApplicationsContainer>
                        {renderApplications()}
                    </ApplicationsContainer>
                ) : (
                    <ApplicationsContainer>
                        No applications found
                    </ApplicationsContainer>
                )}
            </Container>
        </NavBar>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Tabs = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const Tab = styled.div`
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
    background: ${({ $active }) => ($active ? "#6b538c" : "#E0E0E0")};
    color: ${({ $active }) => ($active ? "#FFF" : "#000")};
    border-radius: 5px;
    user-select: none;

    &:hover {
        background: ${({ $active }) => ($active ? "#5A4476" : "#c7c7c7")};
    }
`;

const ApplicationsContainer = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ApplicationCard = styled.div`
    background: #fff;
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
`;

const ActionButton = styled.button`
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
    background: #6b538c;
    color: #fff;
    border: none;
    border-radius: 5px;
    user-select: none;

    &:hover {
        background: #5a4476;
    }
`;

export default ViewApplications;

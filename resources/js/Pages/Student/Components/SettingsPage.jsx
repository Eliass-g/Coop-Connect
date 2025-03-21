import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import {
    updateUserPassword,
    deleteUser,
    getUser,
    selectUser,
} from "@/Features/users/userSlice";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./ConfirmationModal";
import {
    Main,
    Section,
    FormSection,
    AccountHeader,
    AccountTitle,
    AccountDetail,
    FormColumn,
    FormContent,
    FormTitle,
    FormDetail,
    FormButtonColumn,
    DeleteButton,
    SettingsSection,
    SettingsHeader,
    SettingsColumn,
    SettingsContent,
    SettingsTitle,
    SettingsDetail,
    SettingsControls,
    CurrentSelection,
    SettingsOptions,
    OptionButton,
    DummySection,
    SettingsButton,
    PasswordChangeForm,
    FormField,
    Label,
    Input,
    SubmitButton,
    Message,
    OtherOptionButton,
    SaveOptionButton,
    DemoNotice,
} from "../Styling/SettingsPage.styles";

const appUrl = import.meta.env.VITE_APP_URL;

function SettingsPanel() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const { post } = useForm();
    const [activeTab, setActiveTab] = useState("account");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [privacySetting, setPrivacySetting] = useState("Private");
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(
        user?.notifications ?? false
    );
    const darkMode = false;
    const fontSize = "1em";
    const [messageType, setMessageType] = useState("success"); // "success" or "error"

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const userID = user?.id;

    const handleTabClick = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        const passwordData = {
            current_password: currentPassword,
            new_password: newPassword,
            new_password_confirmation: confirmNewPassword,
        };

        dispatch(updateUserPassword(passwordData))
            .unwrap()
            .then(() => {
                setMessageType("success");
                setMessage("Password updated successfully");
                dispatch(getUser());
            })
            .catch((error) => {
                setMessageType("error");
                setMessage("Password change unsuccessful");
            });

        setTimeout(() => {
            setMessage("");
            setMessageType("success");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmNewPassword("");
        }, 3000);
    };

    const handlePrivacyChange = (setting) => {
        setPrivacySetting(setting);
    };

    const handleDeleteAccount = () => {
        setShowDeleteModal(true);
    };

    const confirmDeleteAccount = () => {
        dispatch(deleteUser(userID))
            .unwrap()
            .then(() => {
                setMessage("Account deleted successfully");
                setShowDeleteModal(false);
                // Assuming `post` is a function to log out the user
                post(route("logout")).then(() => {
                    window.location.reload();
                });
            })
            .catch((error) => {
                setMessage(error.message || "An error occurred");
            });
    };

    const handleNotificationsToggle = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };

    return (
        <Main darkMode={darkMode} fontSize={fontSize}>
            <Section
                fontSize={fontSize}
                darkMode={darkMode}
                className="account-section"
            >
                <AccountHeader fontSize={fontSize} darkMode={darkMode}>
                    <AccountDetail
                        fontSize={fontSize}
                        darkMode={darkMode}
                        onClick={() => handleTabClick("account")}
                        active={activeTab === "account"}
                    >
                        Account
                    </AccountDetail>

                    <AccountDetail
                        fontSize={fontSize}
                        darkMode={darkMode}
                        onClick={() => handleTabClick("notifications")}
                        active={activeTab === "notifications"}
                    >
                        Notifications
                    </AccountDetail>
                    <AccountDetail
                        fontSize={fontSize}
                        darkMode={darkMode}
                        onClick={() => handleTabClick("preferences")}
                        active={activeTab === "preferences"}
                    >
                        Preferences
                    </AccountDetail>
                </AccountHeader>

                {activeTab === "account" && (
                    <>
                        {/* <FormSection fontSize={fontSize} darkMode={darkMode}>
                        <FormColumn fontSize={fontSize} darkMode={darkMode}>
                            <FormContent fontSize={fontSize} darkMode={darkMode}>
                                <FormTitle fontSize={fontSize} darkMode={darkMode}>Delete Account</FormTitle>
                                <FormDetail fontSize={fontSize} darkMode={darkMode}>
                                    Delete your account from the platform permanently. This will remove access to the account. Your account information will also be deleted.
                                </FormDetail>
                            </FormContent>
                        </FormColumn>
                        <FormButtonColumn fontSize={fontSize}>
                            <DeleteButton fontSize={fontSize} onClick={handleDeleteAccount}>Delete Account</DeleteButton>
                        </FormButtonColumn>
                    </FormSection> */}

                        <SettingsSection
                            fontSize={fontSize}
                            darkMode={darkMode}
                        >
                            <DemoNotice fontSize={fontSize} darkMode={darkMode}>
                                DEMO NOT FUNCTIONAL (Profile Privacy)
                            </DemoNotice>
                            <SettingsHeader
                                fontSize={fontSize}
                                darkMode={darkMode}
                            >
                                <SettingsColumn
                                    fontSize={fontSize}
                                    darkMode={darkMode}
                                >
                                    <SettingsContent
                                        fontSize={fontSize}
                                        darkMode={darkMode}
                                    >
                                        <SettingsTitle
                                            darkMode={darkMode}
                                            fontSize={fontSize}
                                        >
                                            Profile Privacy
                                        </SettingsTitle>
                                        <SettingsDetail
                                            fontSize={fontSize}
                                            darkMode={darkMode}
                                        >
                                            Anyone can find and view the
                                            contents of your profile. Your
                                            profile will be viewable from job
                                            postings and search functions.
                                        </SettingsDetail>
                                    </SettingsContent>
                                </SettingsColumn>
                                <SettingsControls
                                    fontSize={fontSize}
                                    darkMode={darkMode}
                                >
                                    <CurrentSelection>
                                        Currently Selected: {privacySetting}
                                    </CurrentSelection>
                                    <SettingsOptions
                                        fontSize={fontSize}
                                        darkMode={darkMode}
                                    >
                                        <OptionButton
                                            fontSize={fontSize}
                                            darkMode={darkMode}
                                            className={
                                                privacySetting === "Private"
                                                    ? "private"
                                                    : ""
                                            }
                                            onClick={() =>
                                                handlePrivacyChange("Private")
                                            }
                                        >
                                            Private
                                        </OptionButton>
                                        <OptionButton
                                            fontSize={fontSize}
                                            darkMode={darkMode}
                                            className={
                                                privacySetting === "Public"
                                                    ? "public"
                                                    : ""
                                            }
                                            onClick={() =>
                                                handlePrivacyChange("Public")
                                            }
                                        >
                                            Public
                                        </OptionButton>
                                    </SettingsOptions>
                                </SettingsControls>
                            </SettingsHeader>
                        </SettingsSection>
                        <PasswordChangeForm
                            fontSize={fontSize}
                            darkMode={darkMode}
                            onSubmit={handlePasswordChange}
                        >
                            <FormField fontSize={fontSize} darkMode={darkMode}>
                                <Label fontSize={fontSize} darkMode={darkMode}>
                                    Current Password
                                </Label>
                                <Input
                                    fontSize={fontSize}
                                    darkMode={darkMode}
                                    type="password"
                                    placeholder="Current Password"
                                    value={currentPassword}
                                    onChange={(e) =>
                                        setCurrentPassword(e.target.value)
                                    }
                                />
                            </FormField>
                            <FormField fontSize={fontSize} darkMode={darkMode}>
                                <Label fontSize={fontSize} darkMode={darkMode}>
                                    New Password
                                </Label>
                                <Input
                                    fontSize={fontSize}
                                    darkMode={darkMode}
                                    type="password"
                                    placeholder="New Password"
                                    value={newPassword}
                                    onChange={(e) =>
                                        setNewPassword(e.target.value)
                                    }
                                />
                            </FormField>
                            <FormField fontSize={fontSize} darkMode={darkMode}>
                                <Label fontSize={fontSize} darkMode={darkMode}>
                                    Confirm New Password
                                </Label>
                                <Input
                                    fontSize={fontSize}
                                    darkMode={darkMode}
                                    type="password"
                                    placeholder="Confirm New Password"
                                    value={confirmNewPassword}
                                    onChange={(e) =>
                                        setConfirmNewPassword(e.target.value)
                                    }
                                />
                            </FormField>
                            {message && (
                                <Message
                                    fontSize={fontSize}
                                    darkMode={darkMode}
                                    style={{
                                        color:
                                            messageType === "error"
                                                ? "red"
                                                : "green",
                                    }}
                                >
                                    {message}
                                </Message>
                            )}
                            <SubmitButton
                                fontSize={fontSize}
                                darkMode={darkMode}
                            >
                                Change Password
                            </SubmitButton>
                        </PasswordChangeForm>
                    </>
                )}

                {activeTab === "notifications" && (
                    <SettingsSection fontSize={fontSize} darkMode={darkMode}>
                        <SettingsHeader fontSize={fontSize} darkMode={darkMode}>
                            <SettingsColumn
                                fontSize={fontSize}
                                darkMode={darkMode}
                            >
                                <SettingsContent
                                    fontSize={fontSize}
                                    darkMode={darkMode}
                                >
                                    <SettingsTitle
                                        fontSize={fontSize}
                                        darkMode={darkMode}
                                    >
                                        Notification Settings
                                    </SettingsTitle>
                                    <SettingsDetail
                                        fontSize={fontSize}
                                        darkMode={darkMode}
                                    >
                                        Enable or disable email notifications
                                        for your account.
                                    </SettingsDetail>
                                </SettingsContent>
                            </SettingsColumn>
                            <SettingsControls
                                fontSize={fontSize}
                                darkMode={darkMode}
                            >
                                <OtherOptionButton
                                    fontSize={fontSize}
                                    darkMode={darkMode}
                                    onClick={handleNotificationsToggle}
                                >
                                    {notificationsEnabled
                                        ? "Disable Notifications"
                                        : "Enable Notifications"}
                                </OtherOptionButton>
                                <SaveOptionButton
                                    fontSize={fontSize}
                                    darkMode={darkMode}
                                >
                                    Save my preferences
                                </SaveOptionButton>
                            </SettingsControls>
                        </SettingsHeader>
                        <br></br>
                        <DemoNotice fontSize={fontSize} darkMode={darkMode}>
                            DEMO NOT FUNCTIONAL
                        </DemoNotice>
                    </SettingsSection>
                )}

                {activeTab === "preferences" && (
                    <SettingsSection fontSize={fontSize} darkMode={darkMode}>
                        <SettingsHeader fontSize={fontSize} darkMode={darkMode}>
                            <SettingsColumn
                                fontSize={fontSize}
                                darkMode={darkMode}
                            >
                                <SettingsContent
                                    fontSize={fontSize}
                                    darkMode={darkMode}
                                >
                                    <SettingsTitle
                                        fontSize={fontSize}
                                        darkMode={darkMode}
                                    >
                                        Accessibility Settings
                                    </SettingsTitle>
                                    <SettingsDetail
                                        fontSize={fontSize}
                                        darkMode={darkMode}
                                    >
                                        Adjust your viewing preferences
                                    </SettingsDetail>
                                </SettingsContent>
                            </SettingsColumn>
                            <SettingsControls
                                fontSize={fontSize}
                                darkMode={darkMode}
                            >
                                <SettingsOptions
                                    fontSize={fontSize}
                                    darkMode={darkMode}
                                >
                                    <OtherOptionButton
                                        fontSize={fontSize}
                                        darkMode={darkMode}
                                        active={fontSize === "small"}
                                    >
                                        Small
                                    </OtherOptionButton>
                                    <OtherOptionButton
                                        fontSize={fontSize}
                                        darkMode={darkMode}
                                        active={fontSize === "medium"}
                                    >
                                        Medium
                                    </OtherOptionButton>
                                    <OtherOptionButton
                                        fontSize={fontSize}
                                        darkMode={darkMode}
                                        active={fontSize === "large"}
                                    >
                                        Large
                                    </OtherOptionButton>
                                </SettingsOptions>
                                <OtherOptionButton
                                    fontSize={fontSize}
                                    darkMode={darkMode}
                                >
                                    {darkMode ? (
                                        <FontAwesomeIcon icon={faSun} />
                                    ) : (
                                        <FontAwesomeIcon icon={faMoon} />
                                    )}
                                    {darkMode ? " Light Mode" : " Dark Mode"}
                                </OtherOptionButton>
                                <SaveOptionButton
                                    fontSize={fontSize}
                                    darkMode={darkMode}
                                >
                                    Save my preferences
                                </SaveOptionButton>
                            </SettingsControls>
                        </SettingsHeader>
                        <br></br>
                        <DemoNotice fontSize={fontSize} darkMode={darkMode}>
                            DEMO NOT FUNCTIONAL
                        </DemoNotice>
                    </SettingsSection>
                )}

                {showDeleteModal && (
                    <Modal
                        fontSize={fontSize}
                        darkMode={darkMode}
                        title="Confirm Account Deletion"
                        onConfirm={confirmDeleteAccount}
                        onCancel={() => setShowDeleteModal(false)}
                    >
                        Are you sure you want to delete your account? This
                        action cannot be undone.
                    </Modal>
                )}
            </Section>
        </Main>
    );
}

export default SettingsPanel;

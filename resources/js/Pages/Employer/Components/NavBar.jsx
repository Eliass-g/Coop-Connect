import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useForm } from "@inertiajs/react";
import {
    AppContainer,
    NavContainer,
    Logo,
    Divider,
    IconButton,
    Icon,
    ContentContainer,
    HeaderContainer,
    Title,
    UserProfile,
    NotificationIcon,
    NotificationBadge,
    UserDetails,
    Avatar,
    ExpandIcon,
    Main,
    Modal,
    NotificationModalContainer,
    NotificationModalContent,
    Conversation,
    ConversationInfo,
    MessagesList,
    Message,
    Button,
    ModalContent,
    ModalItem,
    NoNotificationsMessage,
    LoadingContainer,
    LoadingDot,
    IconContainer,
    Footer,
    CloseButton,
} from "../Styling/NavBar.styles";
import logo from "@/Pages/Images/puzzle.svg";
import briefcase from "@/Pages/Images/briefcase.svg";
import message from "@/Pages/Images/message-square.svg";
import calendar from "@/Pages/Images/calendar-days.svg";
import user from "@/Pages/Images/user.svg";
import settings from "@/Pages/Images/settings.svg";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMap, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
    selectUserStatus,
    selectUser,
    getUser,
    updateUserProfile,
} from "@/Features/users/userSlice";
import {
    getNotifications,
    markAsRead,
    deleteNotification,
} from "@/Features/notifications/notificationsSlice";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

function Sidebar() {
    const [activeTab, setActiveTab] = useState("/");
    const [footerVisible, setFooterVisible] = useState(false);

    const handleTabClick = (path) => {
        setActiveTab(path);
    };

    useEffect(() => {
        const path = window.location.pathname;

        const segments = path.split("/");
        const specificSegment = segments[segments.length - 1];
        setActiveTab(path);
    }, []);

    const toggleFooterVisibility = () => {
        setFooterVisible(!footerVisible);
    };

    const closeFooter = () => {
        setFooterVisible(false);
    };

    return (
        <aside>
            <NavContainer>
                <Link href="/" onClick={() => handleTabClick("/")}>
                    <Logo
                        src={logo}
                        alt="Logo"
                        loading="lazy"
                        active={activeTab === "/"}
                    />
                </Link>
                <Divider />

                <Link
                    href="/employer/home"
                    onClick={() => handleTabClick("/employer/home")}
                >
                    <IconButton active={activeTab === "/employer/home"}>
                        <Icon src={briefcase} alt="Icon 1" loading="lazy" />
                    </IconButton>
                </Link>
                <Link
                    href="/employer/messages"
                    onClick={() => handleTabClick("/employer/messages")}
                >
                    <IconButton active={activeTab === "/employer/messages"}>
                        <Icon src={message} alt="" loading="lazy" />
                    </IconButton>
                </Link>
                <Link
                    href="/employer/interviews"
                    onClick={() => handleTabClick("/employer/interviews")}
                >
                    <IconButton active={activeTab === "/employer/interviews"}>
                        <Icon src={calendar} alt="" loading="lazy" />
                    </IconButton>
                </Link>
                <Link
                    href="/employer/profile"
                    onClick={() => handleTabClick("/employer/profile")}
                    data-test-id="profile-link"
                >
                    <IconButton active={activeTab === "/employer/profile"}>
                        <Icon src={user} alt="" loading="lazy" />
                    </IconButton>
                </Link>
                <Link
                    href="/employer/settings"
                    onClick={() => handleTabClick("/employer/settings")}
                >
                    <IconButton active={activeTab === "/employer/settings"}>
                        <Icon src={settings} alt="" loading="lazy" />
                    </IconButton>
                </Link>

                <IconContainer onClick={toggleFooterVisibility}>
                    <FontAwesomeIcon icon={faMap} className="fa-icon" />
                </IconContainer>
            </NavContainer>
            <Footer isVisible={footerVisible}>
                <CloseButton onClick={closeFooter}>
                    <FontAwesomeIcon icon={faTimes} />
                </CloseButton>
                <p>
                    HTML Sitemap: <a href="/">Home</a> |{" "}
                    <a href="/about">About</a> |{" "}
                    <a href="/employer/home">Employer Home</a> |{" "}
                    <a href="/employer/messages">Employer Messages</a> |{" "}
                    <a href="/employer/interviews">Employer Schedule</a> |{" "}
                    <a href="/employer/profile">Employer Profile</a> |{" "}
                    <a href="/employer/settings">Employer Settings</a>{" "}
                </p>
            </Footer>
        </aside>
    );
}

function Header({ header }) {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const notifications = useSelector(
        (state) => state.notifications.notifications
    );
    const unreadCount = useSelector((state) => state.notifications.unreadCount);
    const profileModalRef = useRef();
    const notificationModalRef = useRef();
    const profileIconRef = useRef(); // Ref for the profile icon
    const notificationIconRef = useRef(); // Ref for the notification icon
    const [isProfileModalOpen, setIsProfileModalOpen] = React.useState(false);
    const [isNotificationModalOpen, setIsNotificationModalOpen] =
        React.useState(false);
    const [isExpanded, setIsExpanded] = React.useState(false);
    const { post } = useForm();
    const altAvatarSrc =
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c449c761188f38db922c89455e070256b822a267e33f51baa6901c76b73a4e78?apiKey=d66532d056b14640a799069157705b77&";

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getNotifications()).then(() => {
        });
    }, [dispatch]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                profileModalRef.current &&
                !profileModalRef.current.contains(event.target) &&
                !profileIconRef.current.contains(event.target) // Exclude profile icon
            ) {
                setIsProfileModalOpen(false);
            }
            if (
                notificationModalRef.current &&
                !notificationModalRef.current.contains(event.target) &&
                !notificationIconRef.current.contains(event.target) // Exclude notification icon
            ) {
                setIsNotificationModalOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleProfileModal = (e) => {
        e.stopPropagation();
        if (isProfileModalOpen) {
            setIsProfileModalOpen(false);
        } else {
            setIsProfileModalOpen(true);
        }

        setIsNotificationModalOpen(false);
    };

    const toggleNotificationModal = (e) => {
        e.stopPropagation();
        dispatch(markAsRead());
        setIsNotificationModalOpen(!isNotificationModalOpen);
        setIsProfileModalOpen(false);
    };
    const handleLogout = (e) => {
        e.preventDefault();
        post(route("logout"));
    };

    if (!user) {
        return LoadingDot;
    }

    return (
        <header>
            {user && (
                <HeaderContainer data-testid="nav-student-component">
                    <Title>{header}</Title>
                    <UserProfile>
                        <div className="relative">
                            <NotificationIcon
                                data-testid="nav-student-notification"
                                onClick={toggleNotificationModal}
                                ref={notificationIconRef} // Attach ref to the notification icon
                            >
                                <FontAwesomeIcon icon={faBell} />
                            </NotificationIcon>

                            {unreadCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    {unreadCount}
                                </span>
                            )}
                            <NotificationModal
                                isOpen={isNotificationModalOpen}
                                ref={notificationModalRef}
                                currentUser={user}
                                notifications={notifications}
                            ></NotificationModal>
                        </div>
                        <div className="relative">
                            <UserDetails
                                onClick={toggleProfileModal}
                                ref={profileIconRef}
                            >
                                {user && user.profile_image ? (
                                    <Avatar
                                        src={user.profile_image}
                                        alt="User Avatar"
                                        loading="lazy"
                                    />
                                ) : (
                                    <Avatar
                                        src={altAvatarSrc}
                                        alt="Default Avatar"
                                        loading="lazy"
                                    />
                                )}
                                <ExpandIcon
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7749e10a4cb727e5ce0c7fd48d44fb683bf93b2fa7c59643148748496b286b0?apiKey=d66532d056b14640a799069157705b77&"
                                    alt="Expand"
                                    loading="lazy"
                                    isOpen={isProfileModalOpen}
                                />
                            </UserDetails>
                            <Modal
                                isOpen={isProfileModalOpen}
                                ref={profileModalRef}
                            >
                                <ModalContent>
                                    <div className="p-1 border-b">
                                        <Link href="/employer/profile">
                                            <ModalItem>Profile</ModalItem>
                                        </Link>
                                    </div>
                                    <div className="p-1 border-b">
                                        <Link href="/employer/settings">
                                            <ModalItem>Settings</ModalItem>
                                        </Link>
                                    </div>

                                    <ModalItem
                                        as="button"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </ModalItem>
                                </ModalContent>
                            </Modal>
                        </div>
                    </UserProfile>
                </HeaderContainer>
            )}
        </header>
    );
}

function MainContent({ header, children }) {
    const windowSize = useWindowSize();
    const isMobile = windowSize.width <= 991;

    return (
        <Main>
            <ContentContainer>
                <Header header={header} />
                {isMobile && <Sidebar />}
                {children}
            </ContentContainer>
        </Main>
    );
}

function NavBar({ header, children }) {
    const windowSize = useWindowSize();
    const isMobile = windowSize.width <= 991;

    return (
        <AppContainer>
            {isMobile ? null : <Sidebar />}
            <MainContent header={header}>{children}</MainContent>
        </AppContainer>
    );
}

export default NavBar;

const NotificationModal = React.forwardRef(
    ({ isOpen, notifications, currentUser }, ref) => {
        const formatDate = (dateString) => {
            const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            };
            return new Date(dateString).toLocaleDateString(undefined, options);
        };
        const formatTimeAgo = (timestamp) => {
            const date = new Date(timestamp);
            const now = new Date();
            const diffInSeconds = Math.floor((now - date) / 1000);

            if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
            if (diffInSeconds < 3600)
                return `${Math.floor(diffInSeconds / 60)}m ago`;
            if (diffInSeconds < 86400)
                return `${Math.floor(diffInSeconds / 3600)}h ago`;
            return `${Math.floor(diffInSeconds / 86400)}d ago`;
        };

        const dispatch = useDispatch();

        const handleDeleteNotification = async (id) => {
            dispatch(deleteNotification(id));
        };

        const handleRedirect = (redirect) => {
            if (!isNaN(redirect)) {
                // If redirect is a number, assume it's an ID and navigate accordingly
                window.location.href = `/employer/viewapplicants/${redirect}`;
                return;
            }

            switch (redirect) {
                case "message":
                    window.location.href = "/employer/messages";
                    break;
                default:
                    console.warn("Unknown redirect path:", redirect);
            }
        };

        return (
            <NotificationModalContainer
                isOpen={isOpen}
                ref={ref}
                data-testid="notification-modal"
            >
                {notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className="p-4 border-b"
                            onClick={() =>
                                handleRedirect(notification.data.redirect)
                            }
                        >
                            {/* Sender Name & Timestamp on Same Line */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent redirect when deleting
                                    handleDeleteNotification(notification.id);
                                }}
                                className="flex justify-self-end text-xs text-gray-400 hover:text-purple-500 transition"
                            >
                                ✕
                            </button>
                            <div className="text-purple-700 flex justify-between items-center">
                                <p className="font-semibold">
                                    {notification.data.sender_name}
                                </p>
                                <span className="text-xs text-purple-400 ml-2 whitespace-nowrap">
                                    {formatTimeAgo(notification.created_at)}
                                </span>
                            </div>

                            {/* Message Below */}
                            <p className="text-purple-400 truncate max-w-xs text-sm">
                                {notification.data.message}
                            </p>
                        </div>
                    ))
                ) : (
                    <NoNotificationsMessage>
                        No new notifications
                    </NoNotificationsMessage>
                )}
            </NotificationModalContainer>
        );
    }
);

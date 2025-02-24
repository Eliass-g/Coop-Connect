import { useState, useEffect } from "react";
import axios from "axios";
import Chat from "./Chat";
import { getUser, selectUser } from "@/Features/users/userSlice";
import { getRecentMessages, markRead } from "@/Features/message/messageSlice";
import { useDispatch, useSelector } from "react-redux";
const appUrl = import.meta.env.VITE_APP_URL;
import moment from "moment";
import { Search, X, ArrowLeft } from "lucide-react";
import NavBar from "../Components/NavBar";
import styled, { keyframes } from "styled-components";
import { MainContainer, Title } from "./Messages.styles";

const ChatPage = () => {
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUser] = useState(null);
    const unreadCount = useSelector((state) => state.messages.unreadCount);
    const recentMessages = useSelector(
        (state) => state.messages.recentMessages
    );
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true); // Toggle for mobile

    useEffect(() => {
        dispatch(getRecentMessages());
    }, [dispatch]);

    const handleSearchUser = async () => {
        if (!email) return;
        try {
            const response = await axios.get(
                `${appUrl}/api/users/email?email=${email}`
            );
            if (response.data) {
                setSelectedUser(response.data);
                setError("");
                setSidebarOpen(false); // Hide sidebar after selecting user on mobile
            } else {
                setError("User not found");
            }
        } catch (error) {
            setError("User not found");
        }

        setTimeout(() => {
            setError("");
        }, 3000);
    };

    return (
        <>
            <NavBar>
                <MainContainer>
                    {recentMessages ? (
                        <div className="flex h-[90vh]">
                            {/* Sidebar */}
                            <div
                                className={`${
                                    sidebarOpen ? "block" : "hidden"
                                } sm:block w-full sm:w-1/4 bg-purple-200 p-4 h-[90vh] overflow-y-auto absolute sm:relative rounded-l-lg border-l-2 border-t-2 border-b-2 border-purple-300`}
                            >
                                <div className="flex items-center justify-between">
                                    <Title>Messages</Title>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() =>
                                                setShowSearch(!showSearch)
                                            }
                                            className="p-1 rounded"
                                        >
                                            {showSearch ? (
                                                <X size={20} color="purple" />
                                            ) : (
                                                <Search
                                                    size={20}
                                                    color="purple"
                                                />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                {showSearch && (
                                    <div className="flex items-center gap-2 mt-2">
                                        <input
                                            type="text"
                                            placeholder="Enter email..."
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            className="p-1 border rounded w-full"
                                        />
                                        <button
                                            onClick={handleSearchUser}
                                            className="p-1 bg-purple-500 text-white rounded"
                                        >
                                            Search
                                        </button>
                                    </div>
                                )}

                                {error && (
                                    <p className="text-red-500 text-sm">
                                        {error}
                                    </p>
                                )}
                                {recentMessages.map((recentMessage) => {
                                    return (
                                        <div
                                            key={recentMessage.id}
                                            className={`p-2 my-2 cursor-pointer text-gray-600 ${
                                                selectedUser?.id ===
                                                recentMessage.other_user.id
                                                    ? "bg-purple-300"
                                                    : "bg-purple-50"
                                            } rounded-lg flex justify-between`}
                                            onClick={() => {
                                                setSelectedUser(
                                                    recentMessage.other_user
                                                );
                                                dispatch(
                                                    markRead(
                                                        recentMessage.other_user
                                                            .id
                                                    )
                                                );
                                                setSidebarOpen(false); // Hide sidebar when selecting a user on mobile
                                            }}
                                        >
                                            <div>
                                                {recentMessage.other_user.name}{" "}
                                                <p className=" text-gray-400 text-sm">
                                                    {recentMessage?.message
                                                        ? recentMessage.message
                                                              .length > 30
                                                            ? recentMessage.message.slice(
                                                                  0,
                                                                  30
                                                              ) + "..."
                                                            : recentMessage.message
                                                        : "No messages yet"}
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-end justify-between">
                                                <div className="text-gray-400 text-xs">
                                                    {recentMessage?.created_at
                                                        ? moment(
                                                              recentMessage.created_at
                                                          ).fromNow()
                                                        : ""}
                                                </div>
                                                {recentMessage.unread_count >
                                                    0 && (
                                                    <div className="w-6 h-6 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
                                                        {
                                                            recentMessage.unread_count
                                                        }
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Chat Area */}
                            <div
                                className={`w-full sm:w-3/4 bg-purple-50 ${
                                    !sidebarOpen ? "block" : "hidden"
                                } sm:block rounded-r-lg border-r-2 border-t-2 border-b-2 border-purple-300`}
                            >
                                {selectedUser ? (
                                    <>
                                        {/* Back Button for Mobile */}
                                        <button
                                            onClick={() => setSidebarOpen(true)}
                                            className="sm:hidden p-2 bg-gray-300"
                                        >
                                            <ArrowLeft size={20} />
                                        </button>
                                        <Chat selectedUser={selectedUser} />
                                    </>
                                ) : (
                                    <p className="text-center text-gray-500">
                                        Select a user to start chatting.
                                    </p>
                                )}
                            </div>
                        </div>
                    ) : (
                        <p>No users found.</p>
                    )}
                </MainContainer>
            </NavBar>
        </>
    );
};

export default ChatPage;

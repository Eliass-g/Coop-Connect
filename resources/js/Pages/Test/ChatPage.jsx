import { useState, useEffect } from "react";
import axios from "axios";
import Chat from "./Chat";
import { getUser, selectUser } from "@/Features/users/userSlice";
import { getRecentMessages } from "@/Features/message/messageSlice";
import { useDispatch, useSelector } from "react-redux";
const appUrl = import.meta.env.VITE_APP_URL;
import moment from "moment";
import { Search, X, ArrowLeft } from "lucide-react";

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
            {recentMessages ? (
                <div className="flex h-screen">
                    {/* Sidebar */}
                    <div
                        className={`${
                            sidebarOpen ? "block" : "hidden"
                        } sm:block w-full sm:w-1/4 bg-gray-200 p-4 h-screen overflow-y-auto absolute sm:relative`}
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold">Chats</h2>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setShowSearch(!showSearch)}
                                    className="p-1 bg-gray-300 rounded"
                                >
                                    {showSearch ? (
                                        <X size={20} />
                                    ) : (
                                        <Search size={20} />
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
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="p-1 border rounded w-full"
                                />
                                <button
                                    onClick={handleSearchUser}
                                    className="p-1 bg-blue-500 text-white rounded"
                                >
                                    Search
                                </button>
                            </div>
                        )}

                        {error && (
                            <p className="text-red-500 text-sm">{error}</p>
                        )}
                        {recentMessages.map((recentMessage) => {
                            return (
                                <div
                                    key={recentMessage.id}
                                    className={`p-2 my-2 cursor-pointer ${
                                        selectedUser?.id ===
                                        recentMessage.other_user.id
                                            ? "bg-gray-400"
                                            : "bg-white"
                                    } rounded-lg`}
                                    onClick={() => {
                                        setSelectedUser(
                                            recentMessage.other_user
                                        );
                                        setSidebarOpen(false); // Hide sidebar when selecting a user on mobile
                                    }}
                                >
                                    {recentMessage.other_user.name}{" "}
                                    {unreadCount > 0 &&
                                        recentMessage.other_user.id ===
                                            selectedUser?.id && (
                                            <span>({unreadCount})</span>
                                        )}
                                    <p className="text-sm text-gray-600">
                                        {recentMessage?.message
                                            ? recentMessage.message.length > 30
                                                ? recentMessage.message.slice(
                                                      0,
                                                      30
                                                  ) + "..."
                                                : recentMessage.message
                                            : "No messages yet"}
                                    </p>
                                    <small className="text-gray-400">
                                        {recentMessage?.created_at
                                            ? moment(
                                                  recentMessage.created_at
                                              ).fromNow()
                                            : ""}
                                    </small>
                                </div>
                            );
                        })}
                    </div>

                    {/* Chat Area */}
                    <div
                        className={`w-full sm:w-3/4 bg-white ${
                            !sidebarOpen ? "block" : "hidden"
                        } sm:block`}
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
        </>
    );
};

export default ChatPage;

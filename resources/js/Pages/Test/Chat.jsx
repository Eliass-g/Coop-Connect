import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages, sendMessage } from "@/Features/message/messageSlice";
import moment from "moment";

const Chat = ({ selectedUser }) => {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.messages.messages);
    const [newMessage, setNewMessage] = useState("");
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (selectedUser) {
            dispatch(getMessages(selectedUser.id));
        }
    }, [selectedUser, dispatch]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessages = async () => {
        if (!newMessage.trim()) return;

        const messageData = {
            receiver_email: selectedUser.email,
            message: newMessage,
        };

        dispatch(sendMessage(messageData)).then(() => {
            setNewMessage("");
        });
    };

    return (
        <div className="flex flex-col h-full p-4 bg-gray-100">
            <div className="bg-blue-600 text-white p-4">
                <h2 className="text-lg font-semibold">{selectedUser.name}</h2>
            </div>
            <div
                className="flex-grow overflow-y-auto p-2"
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
                ref={chatContainerRef}
            >
                {messages.map((msg) => (
                    <>
                        <div
                            key={msg.id}
                            className={`inline-block max-w-[70%] p-2 my-2 rounded-lg ${
                                msg.sender_id === selectedUser.id
                                    ? "bg-blue-500 text-white self-start"
                                    : "bg-gray-300 text-black self-end"
                            }`}
                        >
                            <p className="whitespace-normal break-words">
                                {msg.message}
                            </p>
                            <small className="block pt-0 text-xs opacity-80">
                                {moment(msg.created_at).format(
                                    "MMMM Do YYYY, h:mm:ss a"
                                )}
                            </small>
                        </div>
                    </>
                ))}
            </div>
            <div className="flex items-center p-2 bg-white">
                <input
                    type="text"
                    className="flex-grow p-2 border rounded-lg"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button
                    onClick={sendMessages}
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;

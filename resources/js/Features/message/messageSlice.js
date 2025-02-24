import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const appUrl = import.meta.env.VITE_APP_URL;

const initialState = {
    messages: [],
    recentMessages: [],
    unreadCount: 0,
    status: {
        messages: "idle",
        getMessages: "idle",
        sendMessage: "idle",
        getRecentMessages: "idle",
        markRead: "idle",
    },
};

const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        addMessage: (state, action) => {
            state.messages.push(action.payload);

            const index = state.recentMessages.findIndex(
                (msg) => msg.other_user.id === action.payload.sender_id
            );

            if (index !== -1) {
                state.recentMessages[index] = {
                    ...state.recentMessages[index],
                    ...action.payload,
                    unread_count:
                        (state.recentMessages[index].unread_count || 0) + 1,
                };
                const [newMessage] = state.recentMessages.splice(index, 1);
                state.recentMessages.unshift(newMessage);
            } else {
                const newMessage = {
                    ...action.payload,
                    unread_count: 1,
                    other_user: {
                        ...action.payload.sender,
                    },
                };
                state.recentMessages.unshift(newMessage);
            }
        },
        setUnreadCount: (state, action) => {
            state.unreadCount = action.payload;
        },
        incrementUnreadCount: (state) => {
            state.unreadCount += 1;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getMessages.pending, (state, action) => {
                state.status.getMessages = "loading";
            })
            .addCase(getMessages.fulfilled, (state, action) => {
                state.messages = action.payload;
                state.status.getMessages = "succeeded";
            })
            .addCase(getMessages.rejected, (state, action) => {
                state.status.getMessages = "failed";
            })
            .addCase(getRecentMessages.pending, (state, action) => {
                state.status.getRecentMessages = "loading";
            })
            .addCase(getRecentMessages.fulfilled, (state, action) => {
                state.recentMessages = action.payload;
                state.status.getRecentMessages = "succeeded";
            })
            .addCase(getRecentMessages.rejected, (state, action) => {
                state.status.getRecentMessages = "failed";
            })
            .addCase(sendMessage.pending, (state, action) => {
                state.status.sendMessage = "loading";
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.messages.push(action.payload);
                const index = state.recentMessages.findIndex(
                    (msg) => msg.other_user.id === action.payload.receiver_id
                );

                if (index !== -1) {
                    state.recentMessages[index] = {
                        ...state.recentMessages[index],
                        ...action.payload,
                    };
                    const [newMessage] = state.recentMessages.splice(index, 1);
                    state.recentMessages.unshift(newMessage);
                } else {
                    const newMessage = {
                        ...action.payload,
                        other_user: {
                            ...action.payload.receiver,
                        },
                    };
                    state.recentMessages.unshift(newMessage);
                }
                state.status.sendMessage = "succeeded";
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.status.sendMessage = "failed";
            })
            .addCase(markRead.pending, (state, action) => {
                state.status.markRead = "loading";
            })
            .addCase(markRead.fulfilled, (state, action) => {
                const index = state.recentMessages.findIndex(
                    (msg) => msg.sender_id === action.payload.sender_id
                );
                if (index !== -1) {
                    state.recentMessages[index].unread_count = 0;
                }
                state.status.markRead = "succeeded";
            })
            .addCase(markRead.rejected, (state, action) => {
                state.status.markRead = "failed";
            });
    },
});

export const getMessages = createAsyncThunk(
    "messages/getMessages",
    async (userId) => {
        const response = await axios({
            url: `${appUrl}/api/messages/${userId}`,
            method: "GET",
        });
        return response.data;
    }
);

export const getRecentMessages = createAsyncThunk(
    "messages/getRecentMessages",
    async () => {
        const response = await axios({
            url: `${appUrl}/api/messages/recent/batch`,
            method: "GET",
        });
        return response.data;
    }
);

export const sendMessage = createAsyncThunk(
    "messages/sendMessage",
    async (messageData) => {
        const response = await axios({
            url: `${appUrl}/api/messages/send`,
            method: "POST",
            data: messageData,
        });
        return response.data;
    }
);

export const markRead = createAsyncThunk("messages/markRead", async (id) => {
    const response = await axios({
        url: `${appUrl}/api/messages/${id}/read`,
        method: "POST",
    });
    return response.data;
});

export const { setMessages, addMessage, setUnreadCount, incrementUnreadCount } =
    messageSlice.actions;
export default messageSlice.reducer;

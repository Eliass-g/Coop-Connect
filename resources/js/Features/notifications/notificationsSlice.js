import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const appUrl = import.meta.env.VITE_APP_URL;

const initialState = {
    notifications: [],
    unreadCount: 0,
    status: {
        notifications: "idle",
        getNotifications: "idle",
        markAsRead: "idle",
        sendNotification: "idle",
        deleteNotification: "idle",
    },
};

const notificationsSlice = createSlice({
    name: "notifications",
    initialState,
    reducers: {
        addNotification: (state, action) => {
            state.notifications.unshift(action.payload);
            state.unreadCount += 1;
        },
        clearNotifications: (state) => {
            return [];
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getNotifications.pending, (state, action) => {
                state.status.getNotifications = "loading";
            })
            .addCase(getNotifications.fulfilled, (state, action) => {
                state.notifications = action.payload;
                state.unreadCount = action.payload.filter(
                    (notif) => !notif.unread
                ).length;
                state.status.getNotifications = "succeeded";
            })
            .addCase(getNotifications.rejected, (state, action) => {
                state.status.getNotifications = "failed";
            })
            .addCase(markAsRead.pending, (state, action) => {
                state.status.getNotifications = "loading";
            })
            .addCase(markAsRead.fulfilled, (state, action) => {
                state.unreadCount = 0;
                state.status.getNotifications = "succeeded";
            })
            .addCase(markAsRead.rejected, (state, action) => {
                state.status.getNotifications = "failed";
            })
            .addCase(sendNotification.pending, (state, action) => {
                state.status.getNotifications = "loading";
            })
            .addCase(sendNotification.fulfilled, (state, action) => {
                state.status.getNotifications = "succeeded";
            })
            .addCase(sendNotification.rejected, (state, action) => {
                state.status.getNotifications = "failed";
            })
            .addCase(deleteNotification.pending, (state, action) => {
                state.status.getNotifications = "loading";
            })
            .addCase(deleteNotification.fulfilled, (state, action) => {
                state.notifications = state.notifications.filter(
                    (notif) => notif.id !== action.payload
                );
                state.status.getNotifications = "succeeded";
            })
            .addCase(deleteNotification.rejected, (state, action) => {
                state.status.getNotifications = "failed";
            });
    },
});

export const getNotifications = createAsyncThunk(
    "notifications/getNotifications",
    async () => {
        const response = await axios({
            url: `${appUrl}/api/notifications`,
            method: "GET",
        });
        return response.data;
    }
);

export const markAsRead = createAsyncThunk(
    "notifications/markAsRead",
    async () => {
        const response = await axios({
            url: `${appUrl}/api/notifications/mark-as-read`,
            method: "POST",
        });
        return response.data;
    }
);

export const sendNotification = createAsyncThunk(
    "notifications/sendNotification",
    async (data) => {
        const response = await axios({
            url: `${appUrl}/api/notifications/send`,
            method: "POST",
            data: data,
        });
        return response.data;
    }
);

export const deleteNotification = createAsyncThunk(
    "notifications/deleteNotification",
    async (id) => {
        const response = await axios({
            url: `${appUrl}/api/notifications/delete`,
            method: "POST",
            data: { id },
        });
        return response.data;
    }
);

export const { addNotification, clearNotifications } =
    notificationsSlice.actions;
export default notificationsSlice.reducer;

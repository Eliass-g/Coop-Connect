import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./Features/jobs/jobsSlice";
import usersReducer from "./Features/users/userSlice";
import messageReducer from "./Features/message/messageSlice";
import userJobsReducer from "./Features/userJobs/userJobsSlice";
import notificationsReducer from "./Features/notifications/notificationsSlice";

export const store = configureStore({
    reducer: {
        jobs: jobsReducer,
        user: usersReducer,
        messages: messageReducer,
        userJobs: userJobsReducer,
        notifications: notificationsReducer,
    },
});

export default store;

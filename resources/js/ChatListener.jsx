import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addMessage,
    sendMessage,
    incrementUnreadCount,
} from "./Features/message/messageSlice";
import echo from "./echo";
import { getUser, selectUser } from "./Features/users/userSlice";

const ChatListener = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    useEffect(() => {
        if (user) {
            const channel = echo.channel(`chat.${user.id}`);

            channel.listen("MessageSent", (e) => {
                dispatch(addMessage(e));
                dispatch(incrementUnreadCount());
            });

            return () => {
                channel.stopListening("MessageSent");
                echo.leave(`chat.${user.id}`);
            };
        }
    }, [user, dispatch]);

    return null;
};

export default ChatListener;

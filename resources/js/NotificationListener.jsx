import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import echo from "./echo";
import { getUser, selectUser } from "./Features/users/userSlice";
import { addNotification } from "./Features/notifications/notificationsSlice";

const NotificationListener = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    useEffect(() => {
        if (user) {
            const channel = echo.channel(`notifications.${user.id}`);

            channel.listen(
                "NotificationSent",
                (e) => {
                    dispatch(addNotification(e));
                }
            );

            return () => {
                channel.stopListening(
                    "NotificationSent"
                );
                echo.leave(`notifications.${user.id}`);
            };
        }
    }, [user, dispatch]);

    return null;
};

export default NotificationListener;

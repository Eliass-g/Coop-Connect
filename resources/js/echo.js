import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: "pusher",
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true,
    wsHost:
        import.meta.env.VITE_PUSHER_HOST ??
        `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
    wsPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
    wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
    enabledTransports: ["ws", "wss"],
    authEndpoint: "/broadcasting/auth",
    auth: {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    },
});

echo.connector.pusher.connection.bind("connected", () => {
    console.log("Connected to Pusher");
});

echo.connector.pusher.connection.bind("error", (error) => {
    console.error("Pusher connection error:", error);
});

export default echo;

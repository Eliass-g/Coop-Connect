import { Link } from "@inertiajs/react";
import logo from "@/Pages/Images/COOPCONNECTLOGO.png";
import ContactUsModal from "@/Pages/Home/ContactUs";
import { useState } from "react";

export default function LandingLayout({ auth }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function getUserLinks(userType) {
        switch (userType) {
            case "student":
                return {
                    dashboard: "/student/home",
                };
            case "employee":
                return {
                    dashboard: "/employer/home",
                };
            case "teacher":
                return {
                    dashboard: "/teacher/home",
                };
            case "admin":
                return {
                    dashboard: "/student/home",
                };
            default:
                return {};
        }
    }

    const userLinks = getUserLinks(auth.userType);

    return (
        <>
            <div className="flex flex-row items-center justify-between text-center">
                <div>
                    <Link href="/">
                        <img className="" src={logo} alt="Logo" />
                    </Link>
                </div>
                <div>
                    <div className="flex flex-row gap-10 text-purple-700">
                        <button onClick={() => setIsModalOpen(true)}>
                            Contact Us
                        </button>
                        <Link href="./about">About Us</Link>
                        <Link href="./guide">Guide</Link>
                    </div>
                </div>
                <div className="p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={getUserLinks(auth.user.role).dashboard}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <div className="flex flex-row gap-3">
                                <Link
                                    href={route("register")}
                                    className="font-semibold text-white px-2 hover:opacity-80 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 text-xl border-2 border-white rounded-lg px py-1 bg-purple-700"
                                >
                                    Sign Up
                                </Link>
                                <Link
                                    href={route("login")}
                                    className="font-semibold text-purple-900 hover:opacity-80 px-2 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 text-xl border-2 border-white rounded-lg px py-1 bg-purple-300"
                                >
                                    Sign In
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <ContactUsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}

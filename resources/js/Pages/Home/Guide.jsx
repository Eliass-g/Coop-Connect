import { Link, Head } from "@inertiajs/react";
import LandingLayout from "@/Layouts/LandingLayout";
import background from "@/Pages/Images/Landing.png";

export default function Guide({ auth }) {
    const backgroundStyle = {
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
    };

    return (
        <>
            <Head title="Guide" />
            <div className="" style={backgroundStyle}>
                <LandingLayout auth={auth} />
                <div className="min-h-[70vh] text-center flex justify-center items-center flex-col gap-5 p-6">
                    <div className="font-bold text-center flex flex-col justify-center items-center w-[50%]">
                        <div className="font-poppins font-extrabold text-3xl text-purple-700">
                            <h1>Welcome to Co-op Connect!</h1>
                        </div>
                        <div className="mt-4 text-2xl text-gray-700 leading-relaxed">
                            <p>
                                Thank you for joining Co-op Connect! This
                                platform is designed to bridge the gap between
                                students and employers, making the hiring
                                process smooth and efficient. To get the most
                                out of your experience, please follow this
                                guide.
                            </p>
                        </div>
                    </div>

                    <div className="w-[50%] text-center text-gray-700 leading-relaxed text-2xl">
                        <p className="mt-6">
                            <strong>Get Started:</strong> Navigate through the
                            dashboard, browse job postings, and engage with
                            other features.
                        </p>
                        <p className="mt-6">
                            <strong>Using Both Account Types:</strong>
                            <br />
                            <strong>Student Account:</strong> Apply for jobs,
                            track applications, and communicate with employers.
                            <br />
                            <strong>Employer Account:</strong> Post job
                            listings, review applicants, and schedule
                            interviews.
                        </p>
                    </div>

                    <div className="w-[50%] text-center text-gray-700 leading-relaxed text-2xl">
                        <p className="mt-6 font-extrabold text-purple-700">
                            Watch the Overview Video
                        </p>
                        <p className="mt-4">
                            To help you get started quickly, we've embedded a
                            video walkthrough of Co-op Connect below. This video
                            provides a complete guide on how to use the platform
                            effectively.
                        </p>
                        <div className="mt-6 flex justify-center">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/IKI8_Rs_hNQ"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    <div className="w-[50%] text-center text-gray-700 leading-relaxed text-2xl">
                        <p className="mt-6">
                            <strong>Skip to Specific Sections:</strong> If
                            you're looking for instructions on a particular
                            feature, use the timestamps provided in the video
                            description to jump to the relevant section.
                        </p>
                        <p className="mt-6">
                            We’re excited to have you on board! If you have any
                            questions, feel free to reach out for support. Happy
                            exploring!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

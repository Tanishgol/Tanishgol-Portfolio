import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";
import { FiCopy } from "react-icons/fi";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { contactData } from "../data/contact";

function copyToClipboard(text) {
    navigator.clipboard
        .writeText(text)
        .then(() => {
            toast.success(contactData.email.copySuccess);
        })
        .catch(() => {
            toast.error(contactData.email.copyError);
        });
}

const Getintouch = () => {
    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            <section
                id={contactData.sectionId}
                className="bg-white py-16 dark:bg-black"
            >
                <div className="mx-auto max-w-6xl px-4">
                    <div className="p-8 text-center shadow-sm sm:p-10">
                        <button className="mb-4 rounded-lg bg-gray-700 px-6 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-gray-800 dark:bg-gray-200 dark:text-black dark:hover:bg-white">
                            {contactData.title}
                        </button>

                        <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {contactData.description}
                        </p>
                        <div className="mt-8 flex flex-col items-center">
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                <HiOutlineMail className="text-3xl text-gray-800 dark:text-gray-200" />

                                <span className="break-all px-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                                    {contactData.email.address}
                                </span>

                                <button
                                    className="rounded-lg bg-gray-700 px-3 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-gray-200 dark:text-black dark:hover:bg-white"
                                    title="Copy to Clipboard"
                                    onClick={() =>
                                        copyToClipboard(contactData.email.address)
                                    }
                                >
                                    <FiCopy className="text-lg" />
                                </button>
                            </div>
                        </div>

                        <p className="mt-6 text-gray-500 dark:text-gray-400">
                            {contactData.socialTitle}
                        </p>

                        <div className="mt-4 flex flex-wrap justify-center gap-6">
                            <a href={contactData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-900 transition hover:opacity-80 dark:text-white">
                                <FaGithub />
                            </a>
                            <a href={contactData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-900 transition hover:opacity-80 dark:text-white">
                                <FaTwitter />
                            </a>
                            <a href={contactData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-900 transition hover:opacity-80 dark:text-white">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Getintouch;
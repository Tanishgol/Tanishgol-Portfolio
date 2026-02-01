import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-4 dark:bg-black">
            <div className="mx-auto max-w-6xl px-4 text-center">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    © {currentYear} | Designed 🎨 and coded 💻 with ❤️ by Tanishgol
                </p>
            </div>
        </footer>
    );
};

export default Footer;
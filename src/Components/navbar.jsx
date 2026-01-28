import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { navbarData } from "../data/navbar";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (!element) return;

        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsOpen(false);
    };

    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.25,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
                ease: "easeIn",
            },
        },
    };


    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = navbarData.cv.filePath;
        link.download = navbarData.cv.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <nav
                className={`sticky top-0 z-50 w-full transition-all duration-300
                ${scrolled
                        ? "border-b border-white/30 bg-white/70 backdrop-blur-xl backdrop-saturate-150 shadow-md dark:border-white/15 dark:bg-slate-900/70"
                        : "border-b border-transparent bg-gray-200 dark:bg-slate-900"
                    }`}
            >
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    <a
                        href={`#${navbarData.brand.scrollTo}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleScroll(navbarData.brand.scrollTo);
                        }}
                        className="select-none"
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {navbarData.brand.label}
                        </h3>
                    </a>

                    <div className="flex items-center gap-2 lg:hidden">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center rounded-lg border border-gray-300 p-2 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
                            aria-label="Toggle navigation"
                        >
                            {isOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
                        </button>
                    </div>

                    <div className="hidden items-center gap-4 lg:flex">
                        <ul className="flex items-center gap-2 text-base font-semibold text-gray-700 dark:text-gray-200">
                            {navbarData.navItems.map((item) => (
                                <li key={item.id} className="px-2 py-1">
                                    <a
                                        href={`#${item.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleScroll(item.id);
                                        }}
                                        className="transition hover:text-gray-900 dark:hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="h-8 w-[3px] bg-gray-400/70 dark:bg-gray-600" />

                        <button
                            type="button"
                            onClick={handleDownloadCV}
                            className="rounded-lg bg-gray-700 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-gray-200 dark:text-black dark:hover:bg-white"
                        >
                            {navbarData.cv.buttonText}
                        </button>

                        <ThemeToggle />
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-[60] flex items-start justify-center bg-black/20 backdrop-blur-sm lg:hidden pt-20"
                    >
                        <div className="relative w-full max-w-6xl px-4">
                            <div className="rounded-2xl border border-white/30 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 p-4 backdrop-blur-xl backdrop-saturate-150 shadow-2xl">
                                <ul className="flex flex-col gap-3 text-center text-base font-semibold text-gray-700 dark:text-gray-200">
                                    {navbarData.navItems.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleScroll(item.id);
                                                }}
                                                className="block rounded-lg px-3 py-2 hover:bg-white/50 dark:hover:bg-white/10"
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}

                                    <li className="pt-2">
                                        <button
                                            type="button"
                                            onClick={handleDownloadCV}
                                            className="w-full rounded-lg bg-gray-700 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-gray-200 dark:text-black dark:hover:bg-white"
                                        >
                                            {navbarData.cv.buttonText}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Overlay click to close */}
                        <div
                            className="absolute inset-0 -z-10"
                            onClick={() => setIsOpen(false)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
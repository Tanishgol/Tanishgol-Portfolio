import React from "react";
import { BounceLoader } from "react-spinners";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { devInfoData } from "../data/devinfo";
import "../Styles/globle.css";

const Devinfo = () => {
    return (
        <section id={devInfoData.sectionId} className="bg-white py-16 dark:bg-black">
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-8/12">
                        <h1 className="mb-4 text-center text-4xl font-bold text-gray-900 dark:text-white lg:text-left">
                            {devInfoData.heading.greeting} {devInfoData.heading.name}{" "}
                            <motion.span
                                style={{ display: "inline-block", transformOrigin: "70% 70%" }}
                                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                {devInfoData.heading.emoji}
                            </motion.span>
                        </h1>

                        <p className="mb-6 text-justify text-base leading-relaxed text-gray-700 dark:text-gray-300">
                            I'm pursuing a{" "}
                            <span className="font-semibold text-gray-900 dark:text-white">
                                {devInfoData.description.degree}
                            </span>{" "}
                            at{" "}
                            <span className="font-semibold text-gray-900 dark:text-white">
                                {devInfoData.description.university}
                            </span>
                            , {devInfoData.description.paragraph}
                        </p>

                        <div className="mb-4 flex flex-col items-center gap-3 lg:flex-row lg:items-start lg:gap-6">
                            <div className="flex items-center">
                                <IoLocationOutline className="mr-2 flip-pin text-lg text-blue-600" />
                                <span className="font-semibold text-gray-800 dark:text-gray-200">
                                    {devInfoData.location}
                                </span>
                            </div>

                            <div className="flex items-center">
                                <BounceLoader
                                    className="mx-2"
                                    color={devInfoData.availability.color}
                                    size={16}
                                />
                                <span className="font-semibold text-gray-800 dark:text-gray-200">
                                    {devInfoData.availability.text}
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4 lg:justify-start">
                            {devInfoData.socialLinks.map((link) => (
                                <a
                                    key={link.id}
                                    className="text-xl text-gray-900 transition hover:opacity-80 dark:text-white"
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={link.iconClass} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-center md:order-last md:flex-grow lg:justify-end">
                        <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
                            <div className="absolute z-0 h-[280px] w-[280px] border-8 border-transparent bg-gray-300/95 dark:bg-gray-700/65 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]" />

                            <img
                                alt={devInfoData.image.alt}
                                loading="lazy"
                                decoding="async"
                                className="absolute z-10 h-[280px] w-[240px] border-8 border-white dark:border-black max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px] object-cover"
                                src={devInfoData.image.src}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Devinfo;
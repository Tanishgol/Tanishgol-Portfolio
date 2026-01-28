import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { aboutData } from "../data/about";

const Aboutme = () => {
    return (
        <section
            id={aboutData.sectionId}
            className="bg-gray-100 py-16 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800"
        >
            <div className="mx-auto max-w-6xl px-4">
                <div className="text-center">
                    <button
                        type="button"
                        className="mt-10 rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-500
                        dark:bg-blue-500 dark:text-slate-900 dark:hover:bg-blue-400"
                    >
                        {aboutData.title}
                    </button>
                </div>

                <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:gap-12">
                    <div className="mx-auto flex w-full justify-center lg:w-6/12">
                        <img
                            className="w-[280px] sm:w-[460px] rounded-xl object-cover shadow-lg dark:shadow-blue-500/10"
                            loading="lazy"
                            src={aboutData.image.src}
                            alt={aboutData.image.alt}
                        />
                    </div>

                    <div className="flex w-full flex-col justify-center lg:w-6/12">
                        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-slate-100">
                            {aboutData.heading}
                        </h2>

                        <p className="mb-3 text-justify leading-relaxed text-gray-700 dark:text-slate-300">
                            {aboutData.paragraphs.p1.before}{" "}
                            <span className="font-semibold text-gray-900 dark:text-slate-100">
                                {aboutData.paragraphs.p1.highlight1}
                            </span>{" "}
                            {aboutData.paragraphs.p1.middle}{" "}
                            <span className="font-semibold text-gray-900 dark:text-slate-100">
                                {aboutData.paragraphs.p1.highlight2}
                            </span>
                            {aboutData.paragraphs.p1.after}
                        </p>

                        <p className="mb-3 text-justify leading-relaxed text-gray-700 dark:text-slate-300">
                            {aboutData.paragraphs.p2.before}{" "}
                            <span className="font-semibold text-gray-900 dark:text-slate-100">
                                {aboutData.paragraphs.p2.highlight1}
                            </span>{" "}
                            {aboutData.paragraphs.p2.middle}{" "}
                            <span className="font-semibold text-gray-900 dark:text-slate-100">
                                {aboutData.paragraphs.p2.highlight2}
                            </span>
                            {aboutData.paragraphs.p2.after1}{" "}
                            <span className="font-semibold text-gray-900 dark:text-slate-100">
                                {aboutData.paragraphs.p2.highlight3}
                            </span>
                            {aboutData.paragraphs.p2.after2}
                        </p>

                        <p className="mb-3 text-justify leading-relaxed text-gray-700 dark:text-slate-300">
                            {aboutData.paragraphs.p3}
                        </p>

                        <p className="mb-5 text-justify leading-relaxed text-gray-700 dark:text-slate-300">
                            {aboutData.paragraphs.p4}{" "}
                            Follow me on{" "}
                            <a
                                href={aboutData.socialLinks.twitter.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                            >
                                {aboutData.socialLinks.twitter.label}
                            </a>{" "}
                            for tech bites, connect with me on{" "}
                            <a
                                href={aboutData.socialLinks.linkedin.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                            >
                                {aboutData.socialLinks.linkedin.label}
                            </a>{" "}
                            for professional updates, or check out my{" "}
                            <a
                                href={aboutData.socialLinks.github.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                            >
                                {aboutData.socialLinks.github.label}
                            </a>{" "}
                            for projects.
                        </p>

                        <p className="mb-3 font-bold text-gray-900 dark:text-slate-100">
                            {aboutData.quickFactsTitle}
                        </p>

                        <ul className="space-y-3">
                            {aboutData.quickFacts.map((fact, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2 text-gray-700 dark:text-slate-300"
                                >
                                    <FaCheckCircle className="text-blue-600 dark:text-blue-400" />
                                    {fact}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutme;
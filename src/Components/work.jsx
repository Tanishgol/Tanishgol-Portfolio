import React from "react";
import { workData } from "../data/work";

const Work = () => {
    return (
        <section id={workData.sectionId} className="bg-white py-16 dark:bg-black">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-12 text-center">
                    <button className="mt-10 rounded-lg bg-gray-700 px-6 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-gray-800 dark:bg-gray-200 dark:text-black dark:hover:bg-white">
                        {workData.title}
                    </button>

                    <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
                        {workData.subtitle}
                    </h2>
                </div>

                <div className="mb-12 flex flex-col items-center gap-6 rounded-2xl bg-gray-50 p-6 shadow-md dark:bg-white/5 lg:flex-row">
                    <div className="w-full lg:w-6/12">
                        <img
                            src={workData.project1.image}
                            alt={workData.project1.imageAlt}
                            loading="lazy"
                            className="w-full rounded-xl object-cover"
                        />
                    </div>

                    <div className="w-full lg:w-6/12">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {workData.project1.title}
                        </h3>

                        <p className="mt-3 text-justify leading-relaxed text-gray-700 dark:text-gray-300">
                            {workData.project1.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {workData.project1.badges.map((badge) => (
                                <span
                                    key={badge.label}
                                    className="rounded-full px-3 py-1 text-sm font-semibold"
                                    style={{
                                        backgroundColor: badge.color,
                                        color: badge.text,
                                    }}
                                >
                                    {badge.label}
                                </span>
                            ))}
                        </div>

                        <a
                            href={workData.project1.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex rounded-lg border border-gray-600 px-5 py-2 font-semibold text-gray-800 transition hover:bg-gray-800 hover:text-white dark:border-gray-300 dark:text-white dark:hover:bg-white dark:hover:text-black"
                        >
                            View Project
                        </a>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6 rounded-2xl bg-gray-50 p-6 shadow-md dark:bg-white/5 lg:flex-row">
                    <div className="w-full lg:order-2 lg:w-6/12">
                        <img
                            src={workData.project2.image}
                            alt={workData.project2.imageAlt}
                            loading="lazy"
                            className="w-full rounded-xl object-cover"
                        />
                    </div>

                    <div className="w-full lg:order-1 lg:w-6/12">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {workData.project2.title}
                        </h3>

                        <p className="mt-3 text-justify leading-relaxed text-gray-700 dark:text-gray-300">
                            {workData.project2.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {workData.project2.badges.map((badge) => (
                                <span
                                    key={badge.label}
                                    className="rounded-full px-3 py-1 text-sm font-semibold"
                                    style={{
                                        backgroundColor: badge.color,
                                        color: badge.text,
                                    }}
                                >
                                    {badge.label}
                                </span>
                            ))}
                        </div>

                        <a
                            href={workData.project2.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex rounded-lg border border-gray-600 px-5 py-2 font-semibold text-gray-800 transition hover:bg-gray-800 hover:text-white dark:border-gray-300 dark:text-white dark:hover:bg-white dark:hover:text-black"
                        >
                            View Project
                        </a>
                    </div>
                </div>

                <div className="mb-12 flex flex-col items-center gap-6 rounded-2xl bg-gray-50 p-6 shadow-md dark:bg-white/5 lg:flex-row">
                    <div className="w-full lg:w-6/12">
                        <img
                            src={workData.project3.image}
                            alt={workData.project3.imageAlt}
                            loading="lazy"
                            className="w-full rounded-xl object-cover"
                        />
                    </div>

                    <div className="w-full lg:w-6/12">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {workData.project3.title}
                        </h3>

                        <p className="mt-3 text-justify leading-relaxed text-gray-700 dark:text-gray-300">
                            {workData.project3.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {workData.project3.badges.map((badge) => (
                                <span
                                    key={badge.label}
                                    className="rounded-full px-3 py-1 text-sm font-semibold"
                                    style={{
                                        backgroundColor: badge.color,
                                        color: badge.text,
                                    }}
                                >
                                    {badge.label}
                                </span>
                            ))}
                        </div>

                        <a
                            href={workData.project3.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex rounded-lg border border-gray-600 px-5 py-2 font-semibold text-gray-800 transition hover:bg-gray-800 hover:text-white dark:border-gray-300 dark:text-white dark:hover:bg-white dark:hover:text-black"
                        >
                            View Project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
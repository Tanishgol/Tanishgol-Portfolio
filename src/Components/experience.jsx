import React from "react";
import { experienceData } from "../data/experience";

const Experience = () => {
    return (
        <section className="py-16 dark:bg-black">
            <div className="mx-auto max-w-6xl px-4">
                <div className="mb-10 text-center">
                    <button
                        type="button"
                        className="mb-4 rounded-lg bg-gray-700 px-6 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-gray-800 dark:bg-gray-200 dark:text-black dark:hover:bg-white"
                    >
                        {experienceData.title}
                    </button>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {experienceData.subtitle}
                    </h2>
                </div>

                {experienceData.experiences.map((exp, idx) => (
                    <div
                        key={idx}
                        className="mb-6 flex flex-col items-center gap-6 rounded-xl border border-gray-200 bg-gray-50 px-4 py-10 shadow-sm dark:border-gray-700 dark:bg-white/5 md:flex-row md:px-6"
                    >
                        <div className="w-full md:w-3/12 flex justify-center">
                            <div className="rounded-md bg-white p-2 dark:bg-slate-500">
                                <img
                                    src={exp.company.logo}
                                    alt={exp.company.logoAlt}
                                    className="max-h-[90px] w-auto"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-6/12">
                            <h3 className="mb-4 text-center text-xl font-bold text-gray-900 dark:text-white">
                                {exp.role}
                            </h3>

                            <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                                <li>{exp.points.p1}</li>

                                <li>
                                    {exp.points.p2.before}{" "}
                                    {exp.points.p2.techStack.map((tech, index) => (
                                        <span
                                            key={tech}
                                            className="font-semibold text-gray-900 dark:text-white"
                                        >
                                            {tech}
                                            {index <
                                                exp.points.p2.techStack.length - 1 && ", "}
                                        </span>
                                    ))}
                                    {exp.points.p2.after}
                                </li>

                                <li>
                                    {exp.points.p3.before}{" "}
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        {exp.points.p3.highlight}
                                    </span>
                                    {exp.points.p3.after}
                                </li>
                            </ul>
                        </div>

                        <div className="w-full text-center md:w-2/12 md:text-right">
                            <p className="font-semibold text-gray-500 dark:text-gray-400">
                                {exp.duration}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
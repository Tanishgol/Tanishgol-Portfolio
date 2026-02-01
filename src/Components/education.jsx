import React from "react";
import { educationData } from "../data/education";

const Education = () => {
    return (
        <section id={educationData.sectionId} className="bg-gray-100 py-16 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-800">
            <div className="mx-auto max-w-6xl px-4">

                <div className="mb-10 text-center">
                    <button type="button" className="mt-10 mb-4 rounded-lg bg-gray-700 px-6 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-gray-800 dark:bg-gray-200 dark:text-black dark:hover:bg-white">
                        {educationData.title}
                    </button>
                </div>

                <div className="space-y-6">
                    {educationData.educationList.map((edu, index) => (
                        <div key={index} className="flex flex-col gap-6 rounded-xl border border-gray-200 bg-gray-50 px-6 py-8 shadow-sm dark:border-gray-700 dark:bg-white/5 md:flex-row">
                            <div className="flex w-full items-center justify-center md:w-2/12">
                                <div className="flex items-center justify-center bg-white dark:bg-slate-500 p-2 rounded-md">
                                    <img
                                        src={edu.logo}
                                        alt={edu.logoAlt}
                                        className="max-h-[120px] w-auto"
                                        loading="lazy"
                                    />
                                </div>

                            </div>

                            <div className="w-full md:w-7/12">
                                <h3 className="text-xl font-bold text-gray-900 text-center dark:text-white">
                                    🎓 {edu.degree}
                                </h3>
                                <p className="mt-1 font-medium text-gray-600 text-center dark:text-gray-400">
                                    {edu.institution}
                                </p>

                                <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                                    {edu.points.map((point, i) => (
                                        <li key={i} className="text-justify">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="w-full md:w-3/12 flex flex-col items-center justify-center text-center">
                                <p className="font-semibold text-gray-500 dark:text-gray-400">
                                    {edu.duration}
                                </p>
                                {edu.cgpa && (
                                    <p className="mt-1 font-semibold text-gray-700 dark:text-gray-300">
                                        CGPA: {edu.cgpa}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
import React from "react";
import {
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoJavascript,
    BiLogoTailwindCss,
    BiLogoGit,
    BiLogoReact,
    BiLogoNodejs,
    BiLogoRedux,
} from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { skillsData } from "../data/skills";

const Skills = () => {
    return (
        <section className="py-16 dark:bg-black">
            <div className="mx-auto max-w-6xl px-4">
                {/* Header */}
                <div className="mb-10 text-center">
                    <button
                        type="button"
                        className="mb-4 rounded-lg bg-gray-700 px-6 py-3 text-lg font-semibold text-white shadow-sm transition
                        hover:bg-gray-800 dark:bg-gray-200 dark:text-black dark:hover:bg-white"
                    >
                        {skillsData.title}
                    </button>

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {skillsData.subtitle}
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-y-8 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    <div className="flex flex-col items-center">
                        <BiLogoHtml5 className="text-7xl text-orange-600" />
                        <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
                            {skillsData.skills[0].label}
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <BiLogoCss3 className="text-7xl text-blue-600" />
                        <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
                            {skillsData.skills[1].label}
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <BiLogoJavascript className="text-7xl text-yellow-500" />
                        <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
                            {skillsData.skills[2].label}
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <FaBootstrap className="text-7xl text-violet-700" />
                        <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
                            {skillsData.skills[3].label}
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <BiLogoReact className="text-7xl text-cyan-400" />
                        <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
                            {skillsData.skills[4].label}
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <BiLogoRedux className="text-7xl text-violet-500" />
                        <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
                            {skillsData.skills[5].label}
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <BiLogoTailwindCss className="text-7xl text-sky-500" />
                        <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
                            {skillsData.skills[6].label}
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <BiLogoNodejs className="text-7xl text-green-600" />
                        <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
                            {skillsData.skills[7].label}
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <SiExpress className="text-7xl text-black dark:text-white" />
                        <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
                            {skillsData.skills[8].label}
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <DiMongodb className="text-7xl text-green-500" />
                        <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
                            {skillsData.skills[9].label}
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <RiNextjsFill className="text-7xl text-black dark:text-white" />
                        <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
                            {skillsData.skills[10].label}
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <BiLogoGit className="text-7xl text-orange-600" />
                        <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
                            {skillsData.skills[11].label}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
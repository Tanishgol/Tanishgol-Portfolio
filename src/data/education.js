import Mu_logo from "../Assets/MU_LOGO.png";
import RMIT_logo from "../Assets/RMIT_logo.png";

export const educationData = {
  sectionId: "education",
  title: "Education",
  educationList: [
    {
      degree: "Diploma in Computer Engineering",
      institution: "Marwadi University",
      duration: "August 2022 - May 2025",
      cgpa: "7.55 / 10",
      logo: Mu_logo,
      logoAlt: "Marwadi University Logo",
      points: [
        "Built strong foundations in software development and computer engineering principles",
        "Developed programming proficiency in C, C++, Java, and Python",
        "Strengthened analytical thinking and problem-solving through technical coursework and practical implementation",
        "Gained understanding of core areas including data structures, programming logic, and system fundamentals",
      ],
    },
    {
      degree: "Bachelor of Cyber Security",
      institution: "RMIT University, Melbourne",
      duration: "March 2026 - December 2028",
      logo: RMIT_logo,
      logoAlt: "RMIT University Logo",
      points: [
        "Studying cyber security and modern information technology systems",
        "Developing practical industry skills through the Bootcamp2Studio project-based learning model",
        "Building strong capabilities in team collaboration, technical communication, and project delivery",
        "Gaining hands-on experience through workshops, studio learning, and applied cyber security exercises",
      ],
    },
  ],
};

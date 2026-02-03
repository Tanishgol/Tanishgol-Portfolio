import DreamSpotLogo from "../Assets/dreamSpot_logo.png";

export const experienceData = {
  title: "Experience",
  subtitle: "Here is a quick summary of my most recent experiences:",

  experiences: [
    {
      company: {
        logo: DreamSpotLogo,
        logoAlt: "DreamSpot IT Academy Logo",
      },
      role: "Web Developer Intern",
      location: "Rajkot, Gujarat",
      points: {
        p1: "Selected as a Web Developer Intern at Dreamspot IT Academy after an evaluation of technical skills and aptitude.",
        p2: {
          before: "Worked on real-world web development tasks using",
          techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "ReactJS"],
          after: ", gaining hands-on industry experience.",
        },
        p3: {
          before: "Successfully completed a",
          highlight: "1.5-month Web Development Internship",
          after: " and received an internship completion certificate.",
        },
      },
      duration: "May 2024 - June 2024",
    },
    {
      company: {
        logo: DreamSpotLogo,
        logoAlt: "DreamSpot IT Academy Logo",
      },
      role: "Full-Stack Web Developer Trainee",
      points: {
        p1: "Contributed to multiple projects, gaining practical insights into modern web development practices.",
        p2: {
          before:
            "Acquired hands-on experience with key technologies, including",
          techStack: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Tailwind CSS",
            "ReactJS",
            "Redux",
            "Next.js",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Git/GitHub",
          ],
          after: ".",
        },
        p3: {
          before: "Completed the trainee period in",
          highlight: "Full-Stack Web Development",
          after: ".",
        },
      },
      duration: "June 2024 - June 2025",
    },
  ],
};

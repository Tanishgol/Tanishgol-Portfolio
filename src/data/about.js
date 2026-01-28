import DevImage from "../Assets/dev.png";

export const aboutData = {
  sectionId: "about",
  title: "About Me",

  image: {
    src: DevImage,
    alt: "Pic of Tanish",
  },

  heading: "Curious about me? Here you have it:",

  paragraphs: {
    p1: {
      before: "I'm a passionate tech enthusiast with a background in",
      highlight1: "full-stack web development",
      middle: "and a growing focus on",
      highlight2: "cybersecurity",
      after:
        ". I enjoy working at the intersection of building modern, responsive applications and understanding how to protect them from real-world threats.",
    },
    p2: {
      before: "Currently, I’m pursuing a",
      highlight1: "Bachelor of Cyber Security",
      middle: "at",
      highlight2: "RMIT University, Melbourne",
      after1:
        ", where I’m building a strong foundation in secure systems, networks, and risk management. Alongside my studies, I continue to sharpen my skills in",
      highlight3:
        "HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, ReactJS, Redux, Next.js, NodeJS, ExpressJS, MongoDB, and Git/GitHub",
      after2: ".",
    },
    p3: "I’m a progressive thinker who enjoys working on products end-to-end — from ideation and design to development and secure implementation.",
    p4: "When I’m not in full-on tech mode, you’ll find me exploring Twitter, learning from early-stage startups, or building side projects.",
  },

  socialLinks: {
    twitter: {
      label: "Twitter",
      url: "https://x.com/tanishgol",
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/tanish-gol-330a34284/",
    },
    github: {
      label: "GitHub",
      url: "https://github.com/Tanishgol",
    },
  },

  quickFactsTitle: "Quick facts about me:",

  quickFacts: [
    "Bachelor of Cyber Security — RMIT University (Pursuing)",
    "Full Stack Web Development (ReactJS & NodeJS)",
    "Focused on Secure & Modern Web Applications",
  ],
};

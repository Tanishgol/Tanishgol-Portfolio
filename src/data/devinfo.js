import tanishImage from "../Assets/Tanish_passport.jpg";

export const devInfoData = {
  sectionId: "developerinformation",

  heading: {
    greeting: "Hi, I'm",
    name: "Tanish",
    emoji: "👋",
  },

  description: {
    degree: "Bachelor of Cyber Security",
    university: "RMIT University, Melbourne",
    role: "Full Stack Developer (ReactJS & NodeJS)",
    paragraph:
      "with a strong interest in securing systems, networks, and applications against modern cyber threats. I also have a background as a Full Stack Developer focused on building fast, responsive, and user-friendly web applications. Passionate about combining secure development practices with modern web technologies, I'm excited to grow and build a career in this dynamic field.",
  },

  location: "Melbourne, Australia",

  availability: {
    text: "Available for new projects",
    color: "rgba(15, 185, 129, 1)",
  },

  socialLinks: [
    {
      id: "github",
      url: "https://github.com/Tanishgol",
      iconClass: "bi bi-github",
    },
    {
      id: "twitter",
      url: "https://x.com/tanishgol",
      iconClass: "bi bi-twitter",
    },
    {
      id: "linkedin",
      url: "https://www.linkedin.com/in/tanish-gol-330a34284/",
      iconClass: "bi bi-linkedin",
    },
  ],

  image: {
    src: tanishImage,
    alt: "Image of Tanish",
  },
};

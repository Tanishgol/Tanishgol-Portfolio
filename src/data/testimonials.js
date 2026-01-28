import Avatar from "../Assets/placeholderimage.png";
import robert from "../Assets/Robert Kocharyan.jfif";
import sohel from "../Assets/Sohel Khan.jfif";

export const testimonialsData = {
  sectionId: "testimonials",

  title: "Testimonials",
  subtitle: "Nice things people have said about me:",

  testimonials: [
    {
      avatar: Avatar,
      avatarAlt: "Profile Pic",
      quote:
        "Components are the best part about React. They let you reuse code elegantly and also help maintain clean code structure.",
      name: "Rohit Kadam",
      role: "Student at NMIMS",
    },
    {
      avatar: sohel,
      avatarAlt: "Profile Pic",
      quote:
        "React gets easier when you truly understand hooks — not just useEffect copy-paste. Think state → lifecycle → data flow → real components.",
      name: "Sohel Khan",
      role: "Founder of RoadmapFinder",
    },
    {
      avatar: robert,
      avatarAlt: "Profile Pic",
      quote:
        "React Router really changes the feel of an app, making navigation smooth and structured. I usually start with the Home page—it sets the foundation for the rest.",
      name: "Robert Kocharyan",
      role: "Web Developer",
    },
  ],
};

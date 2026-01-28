import Project1 from "../Assets/Project-1.png";
import Project2 from "../Assets/Project-2.jpeg";
import Project3 from "../Assets/Project-3.png";

export const workData = {
  sectionId: "work",

  title: "Work",
  subtitle: "Some of the noteworthy projects I have built:",

  project1: {
    image: Project1,
    imageAlt: "Wingie Project Screenshot",
    title: "Enhanced Invoice System",
    description:
      "This project is a responsive Enhanced Invoice System designed to help users generate invoices by capturing customer and product details, calculating totals with tax, and generating a PDF version of the invoice.",
    badges: [
      { label: "HTML", color: "#E44D26", text: "white" },
      { label: "CSS", color: "#2965F1", text: "white" },
      { label: "JavaScript", color: "#F7DF1E", text: "black" },
      { label: "Bootstrap 5", color: "#7952B3", text: "white" },
      { label: "jsPDF", color: "#D32F2F", text: "white" },
    ],
    link: "https://github.com/Tanishgol/Invoice",
  },

  project2: {
    image: Project2,
    imageAlt: "Fiskil Project Screenshot",
    title: "Expense-Manager",
    description:
      "The Expense Management System is a comprehensive web application designed to help users track their income, expenses, and budgets effectively.",
    badges: [
      { label: "HTML", color: "#E44D26", text: "white" },
      { label: "CSS", color: "#2965F1", text: "white" },
      { label: "JavaScript", color: "#F7DF1E", text: "black" },
      { label: "Bootstrap 5", color: "#7952B3", text: "white" },
      { label: "AJAX", color: "#007BFF", text: "white" },
    ],
    link: "https://github.com/Tanishgol/Expense-Manager",
  },
  project3: {
    image: Project3,
    imageAlt: "Project 3 Screenshot",
    title: "Restaurant Reservation System",
    description: "A web application for managing restaurant reservations.",
    badges: [
      { label: "HTML", color: "#E44D26", text: "white" },
      { label: "CSS", color: "#2965F1", text: "white" },
      { label: "JavaScript", color: "#F7DF1E", text: "black" },
      { label: "Bootstrap", color: "#7952B3", text: "white" },
      { label: "jsPDF", color: "#D32F2F", text: "white" },
    ],
    link: "https://github.com/Tanishgol/Restaurant-Management-System",
  },
};

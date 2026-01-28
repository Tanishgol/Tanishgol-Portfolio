import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Work from "./Components/work";
import Testimonials from "./Components/testimonials";
import Aboutme from "./Components/aboutme";
import Skills from "./Components/skills";
import Experience from "./Components/experience";
import Devinfo from "./Components/devinfo";
import Getintouch from "./Components/Getintouch";

function App() {
  return (
    <>
      <Navbar />
      <Devinfo />
      <Aboutme />
      <Skills />
      <Experience />
      <Work />
      <Testimonials />
      <Getintouch />
      <Footer />
    </>
  );
}

export default App;
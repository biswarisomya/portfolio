import About from "@/container/homepage/About/About";
import Resume from "@/container/homepage/Resume/Resume";
import Projects from "@/container/homepage/Projects/Projects";
import Home from "@/container/homepage/Home/Home";
import Interests from "@/container/homepage/Interests/Interests";
import Recommendations from "@/container/homepage/Recommendations/Recommendations";
import Contact from "@/container/homepage/Contact/Contact";
import Footer from "@/container/homepage/Footer/Footer";

const Homepage = () => {
  return (
    <>
      <Home />
      <About />
      <Resume />
      <Projects />
      <Interests />
      <Recommendations />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;

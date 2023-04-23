import Education from "@/container/homepage/Resume/Education/Education";
import Work from "@/container/homepage/Resume/Work/Work";
import Skills from "@/container/homepage/Resume/Skills/Skills";

const Resume = () => {
  return (
    <section id="resume" className="flex pt-[5.6rem] flex-wrap w-[100%] ">
      <Education />
      <Work />
      <Skills />
    </section>
  );
};

export default Resume;

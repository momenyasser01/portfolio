import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-start w-[70%] h-[600px]">
      <p className="dark:text-white text-[#0D0D0D] font-medium text-3xl">
        Projects
      </p>
      <div className="flex flex-col w-full">
        <ProjectLeft />
        <ProjectRight />
      </div>
    </div>
  );
};

export default Projects;

import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col justify-center items-start w-[240px] md:w-[600px] lg:w-[1015px]">
      <p className="dark:text-white text-[#0D0D0D] font-medium text-3xl">
        Projects
      </p>
      <div className="flex flex-col w-full">
        <ProjectLeft
          name="Cairo Metro"
          description="An intuitive metro ticketing system that allows users to easily
          calculate fares, find routes, and navigate the Cairo Metro with a
          smooth, user-friendly experience."
          image="/cairoMetro.png"
          tags={["Next.js", "React", "TailwindCSS", "GraphQL", "MongoDB"]}
        />
        <ProjectLeft
          name="Tickets22"
          description="A simple and intuitive ticket booking system that allows users to
          search, reserve, and manage event tickets with ease."
          image="/tickets22.png"
          tags={[
            "React",
            "TailwindCSS",
            "Node.js",
            "Express",
            "Kafka",
            "MongoDB",
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;

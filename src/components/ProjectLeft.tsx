import Tag from "./Tag";
import Image from "next/image";

interface ProjectProps {
  name: string;
  description: string;
  image: string;
  tags: Array<string>;
}

const ProjectLeft = ({ name, description, image, tags }: ProjectProps) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://cairometro.baraa.app/"
      className="flex flex-col lg:flex-row rounded-lg gap-4 dark:hover:bg-gray-900/65 hover:bg-gray-100/65 dark:hover:border-[1px] dark:border border-transparent hover:border-gray-800  md:w-full h-[490px] lg:h-[313px] mt-12"
    >
      <div className="flex flex-col justify-end items-start gap-6 h-1/2 lg:h-full lg:w-1/2 mt-2 lg:mt-0 lg:pb-10">
        <p className="dark:text-white text-[#0D0D0D] text-sm sm:text-base md:text-lg lg:text-xl pl-4">
          {name}
        </p>
        <p className="dark:text-[#A1A1A1] text-gray-500 text-xs md:text-sm lg:text-base pl-4 w-[97%] h-20">
          {description}
        </p>
        <div className="grid grid-cols-3 gap-2 pl-2">
          {tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
      </div>
      <div className="flex relative justify-center items-center w-[222px] rounded-lg h-1/2 lg:h-72 lg:w-1/2 mb-2 ml-2 lg:mt-3 lg:mr-3">
        <Image className="rounded-lg" src={image} alt="Cairo Metro" fill />
      </div>
    </a>
  );
};

export default ProjectLeft;

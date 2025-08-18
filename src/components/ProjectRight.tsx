import Tag from "./Tag";
import Image from "next/image";

interface ProjectProps {
  name: string;
  description: string;
  image: string;
  tags: Array<string>;
}

const ProjectRight = ({ name, description, image, tags }: ProjectProps) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://world-cup-client-microservice.vercel.app/"
      className="flex flex-row rounded-lg gap-4 dark:hover:bg-gray-900/65 hover:bg-gray-100/65 dark:hover:border-[1px] dark:border border-transparent hover:border-gray-800 w-full h-[313px] mt-12"
    >
      <div className="flex relative justify-center items-center h-72 w-1/2 mt-3 ml-3">
        <Image className="rounded-lg" src={image} alt="Tickets22" fill />
      </div>
      <div className="flex flex-col justify-end items-start gap-4 w-1/2 pb-10">
        <p className="dark:text-white text-[#0D0D0D] text-xl pl-4">{name}</p>
        <p className="dark:text-[#A1A1A1] text-gray-500 pl-4">{description}</p>
        <div className="grid grid-cols-3 gap-2 pl-2">
          {tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectRight;

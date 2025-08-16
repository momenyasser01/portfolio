import Tag from "./Tag";
import Image from "next/image";

const ProjectLeft = () => {
  return (
    <div className="flex flex-row justify-center items-center rounded-lg gap-4 dark:hover:bg-gray-900/65 hover:bg-gray-100/65 dark:hover:border-[1px] border-transparent hover:border-gray-800 h-90 mt-12">
      <div className="flex flex-col justify-end items-start gap-4">
        <p className="dark:text-white text-[#0D0D0D] text-xl pl-4">
          Cairo Metro
        </p>
        <p className="text-[#A1A1A1] pl-4">
          An intuitive metro ticketing system that allows users to easily
          calculate fares, find routes, and navigate the Cairo Metro with a
          smooth, user-friendly experience.
        </p>
        <div className="flex flex-row justify-start gap-2 pl-2">
          <Tag name="Next.js" />
          <Tag name="React" />
          <Tag name="Tailwind CSS" />
          <Tag name="GraphQL" />
          <Tag name="MongoDB" />
        </div>
      </div>
      <div className="hidden h-full border-[1px] border-gray-800"></div>
      <Image
        src="/cairoMetro.png"
        alt="Cairo Metro"
        className="rounded-lg mr-4"
        width={580}
        height={580}
      />
    </div>
  );
};

export default ProjectLeft;

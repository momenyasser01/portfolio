import Tag from "./Tag";
import Image from "next/image";

const ProjectRight = () => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://world-cup-client-microservice.vercel.app/"
      className="flex flex-row justify-center items-center rounded-lg gap-4 dark:hover:bg-gray-900/65 hover:bg-gray-100/65 dark:hover:border-[1px] border-transparent hover:border-gray-800 h-90 mt-12"
    >
      <Image
        src="/tickets22.png"
        alt="Tickets22"
        className="rounded-lg ml-4"
        width={580}
        height={580}
      />
      <div className="flex flex-col justify-end items-start gap-4">
        <p className="dark:text-white text-[#0D0D0D] text-xl pl-4">Tickets22</p>
        <p className="text-[#A1A1A1] pl-4">
          A simple and intuitive ticket booking system that allows users to
          search, reserve, and manage event tickets with ease.
        </p>
        <div className="flex flex-row justify-start gap-2 pl-2">
          <Tag name="React" />
          <Tag name="Tailwind CSS" />
          <Tag name="Node.js" />
          <Tag name="Express" />
          <Tag name="Kafka" />
          <Tag name="MongoDB" />
        </div>
      </div>
      <div className="hidden h-full border-[1px] border-gray-800"></div>
    </a>
  );
};

export default ProjectRight;

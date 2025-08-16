import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
// import { FaRegFile } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex flex-col items-start w-[70%] h-[640px]">
      <div className="flex flex-col gap-4 items-start">
        <p className="text-[#A1A1AA] text-xl">Hey, I&apos;m</p>
        <div className="flex flex-col items-start">
          <p className=" text-[80px] bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Momen Yasser
          </p>
          <div className="flex flex-col gap-5">
            <p className="text-[#0D0D0D] dark:text-white text-4xl">
              Full-Stack Developer
            </p>
            <p className="text-[#A1A1AA] text-lg text-start w-[850px]">
              an ambitious software engineer dedicated to crafting smooth,
              intuitive, and high-performing digital experiences, proficient in
              MERN stack, Next.js, and Tailwind CSS.
            </p>
          </div>
          <div className="flex flex-row justify-start items-center gap-9 py-10 w-40">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/momenyasser01"
              className="flex justify-center items-center min-w-14 min-h-14 rounded-md dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-[#0D0D0D] dark:hover:bg-gray-900/65 hover:bg-gray-100/65 dark:border-[1px] border-transparent hover:border-gray-800"
            >
              <FaGithub className="size-8" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/momen-yasser-178200213"
              className="flex justify-center items-center min-w-14 min-h-14 rounded-md dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-[#0D0D0D] dark:hover:bg-gray-900/65 hover:bg-gray-100/65 dark:border-[1px] border-transparent hover:border-gray-800"
            >
              <FaLinkedin className="size-8" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:momenyasser522@gmail.com"
              className="flex justify-center items-center min-w-14 min-h-14 rounded-md dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-[#0D0D0D] dark:hover:bg-gray-900/65 hover:bg-gray-100/65 dark:border-[1px] border-transparent hover:border-gray-800"
            >
              <FaGoogle className="size-8" />
            </a>
          </div>
        </div>
        <a className="flex justify-center items-center size-8 rounded-md"></a>
      </div>
    </div>
  );
};

export default Hero;

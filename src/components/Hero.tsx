import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { BiLogoGmail } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
// import { FaRegFile } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex flex-col items-center w-[240px] sm:w-[360px] md:w-[600px] lg:w-[1015px] mt-60">
      <div className="flex flex-col gap-4 items-start">
        <p className="dark:text-[#A1A1AA] text-gray-600 text-lg lg:text-xl">Hey, I&apos;m</p>
        <div className="flex flex-col items-start">
          <p className="text-4xl md:text-6xl lg:text-[80px] tracking-tighter bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Momen Yasser
          </p>
          <div className="flex flex-col gap-5">
            <p className="text-[#0D0D0D] dark:text-white text-xl md:text-3xl lg:text-4xl">
              Full-Stack Developer
            </p>
            <p className="dark:text-[#A1A1AA] text-gray-600 text-sm md:text-base lg:text-lg text-start w-[240px] md:w-[500px] lg:w-[850px]">
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
              <FaGithub className="size-6 md:size-8" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/momen-yasser-178200213"
              className="flex justify-center items-center min-w-14 min-h-14 rounded-md dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-[#0D0D0D] dark:hover:bg-gray-900/65 hover:bg-gray-100/65 dark:border-[1px] border-transparent hover:border-gray-800"
            >
              <FaLinkedin className="size-6 md:size-8" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:momenyasser522@gmail.com"
              className="flex justify-center items-center min-w-14 min-h-14 rounded-md dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-[#0D0D0D] dark:hover:bg-gray-900/65 hover:bg-gray-100/65 dark:border-[1px] border-transparent hover:border-gray-800"
            >
              <IoMdMail className="size-7 md:size-9" />
            </a>
          </div>
        </div>
        <a className="flex justify-center items-center size-8 rounded-md"></a>
      </div>
    </div>
  );
};

export default Hero;

const Work = () => {
  return (
    <div id="work" className="flex flex-col items-start w-[70%] h-96">
      <p className="dark:text-white text-[#0D0D0D] font-medium text-3xl">
        Work
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.itworx.com"
        className="flex flex-row items-center gap-24 ml-22 mt-16 w-auto h-12 rounded-md dark:hover:bg-gray-900/65 hover:bg-gray-100/65 dark:hover:border-[1px] border-transparent hover:border-gray-800"
      >
        <p className="dark:text-white text-[#0D0D0D] text-xl pl-4">ITWorx</p>
        <div className="flex flex-row items-center gap-4 pr-4">
          <p className="text-[#A1A1AA]">Software Engineering Intern</p>
          <span className="w-1 h-1 rounded-full bg-[#A1A1AA]"></span>
          <p className="text-[#A1A1AA]">February 2024 - July 2024</p>
        </div>
      </a>
    </div>
  );
};

export default Work;

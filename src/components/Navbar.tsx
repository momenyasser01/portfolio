import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div
      className={`flex flex-row justify-between items-center w-[240px] md:w-[600px] lg:w-[1015px] h-20 z-50 gap-20`}
    >
      <p className="dark:text-white text-[#0D0D0D] text-base md:text-xl">Momen Yasser</p>
      <div className="flex flex-row items-center gap-20">
        {/* <a href="#work" className="dark:text-white text-[#0D0D0D]">
          Work
        </a>
        <a href="#projects" className="dark:text-white text-[#0D0D0D]">
          Projects
        </a> */}
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;

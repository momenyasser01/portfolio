"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex justify-center items-center rounded-full transition min-h-10 min-w-10 dark:text-white text-[#0D0D0D] dark:hover:bg-gray-900/65 hover:bg-gray-100/65 dark:border-[1px] border-transparent hover:border-gray-800"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <IoIosSunny className="size-5" />
      ) : (
        <FaMoon className="size-5" />
      )}
    </button>
  );
};

export default ThemeToggle;

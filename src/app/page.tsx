import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen gap-60 dark:bg-[#0D0D0D] bg-white pb-72">
      <Navbar />
      <Hero />
      <Work />
      <Projects />
    </div>
  );
}

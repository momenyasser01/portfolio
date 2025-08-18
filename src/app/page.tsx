import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center font-geist w-full min-h-screen dark:bg-[#0D0D0D] bg-white pb-72">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-48 w-full">
        <Hero />
        <Work />
        <Projects />
      </div>
    </div>
  );
}

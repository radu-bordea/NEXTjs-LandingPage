import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import Team from "@/Components/Team";
import Technologies from "@/Components/Technologies";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO / HOME */}
      {/* TEAM */}
      <Team />

      {/* SERVICES */}
      <Services />

      {/* TECH  */}
      <Technologies />

      {/* PROJECTS */}
      <Projects />
    </div>
  );
}

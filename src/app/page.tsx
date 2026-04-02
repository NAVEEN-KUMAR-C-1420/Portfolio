import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Internships from "@/components/sections/Internships";
import Patents from "@/components/sections/Patents";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";
import ResumeViewer from "@/components/sections/ResumeViewer";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Internships />
      <Patents />
      <Achievements />
      <Education />
      <ResumeViewer />
      <Contact />
      <Footer />
    </main>
  );
}

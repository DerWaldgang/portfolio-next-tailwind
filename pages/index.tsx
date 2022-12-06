import { NextPage } from "next";
import Head from "next/head";
import About from "../components/sections/About";
import Header from "../components/Header";
import Person from "../components/sections/Person";
import Skills from "../components/sections/Skills";
import WorkExperience from "../components/sections/WorkExperience";
import Projects from "../components/sections/Projects";
import ContactMe from "../components/sections/ContactMe";
import Footer from "../components/Footer";


//bg-stone-900 bg-slate-900 bg-gray-900 bg-zinc-900 bg-stone-900 bg-neutral-900

const Home: NextPage = () => {
  return (
    <div className=" bg-slate-900  text-white h-screen  snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar-thin sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-0">
      <Head>
        <title>Portfolio</title>
      </Head>
      
      <Header />

      <section id="person" className="snap-start">
        <Person />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section> 

      <section id='experience' className="snap-center">
        <WorkExperience />
      </section>

      <section id='skills' className="snap-start">
        <Skills/>
      </section>

      <section id='projects' className="snap-start">
        <Projects />
      </section>
      
      <section id='contact' className="snap-start">
        <ContactMe />
      </section>
      <Footer/>
    </div>
  );
};

export default Home;

import React from "react";
import ProjectItem from "../ProjectItem";



type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (

    
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center
    z-0 "
    >
      <h3 className="absolute top-[98px] sm:top-7 uppercase tracking-[10px] text-gray-500 text-3xl font-thin">
        Projects
      </h3>
      
      <div className="scrollbar relative top-[50px] sm:top-10 md:top-16 w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((item,index) => {
          return <ProjectItem key={item} index={index} length={projects.length}/>;
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/50 h-[475px] -skew-y-6"></div>
    </div>
  );
};

export default Projects;

import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "../ExperienceCard";

type Props = {};

const WorkExperience = (props: Props) => {
  const experience = [1,2,3,4]
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center mt-5">

      <h3 className="absolute top-[94px] sm:top-7 uppercase tracking-[10px] text-gray-500 text-3xl font-thin">Experience</h3>

      <div className=" absolute top-40 md:top-0 md:mt-24 w-full flex space-x-5 overflow-x-scroll scrollbar-none p-2 md:p-10 snap-x snap-mandatory">

        {experience.map((item, index) => {
          return <ExperienceCard key={item+index} length={experience.length} index={index}/>
        })}

      </div>
    </motion.div>
  );
};

export default WorkExperience;

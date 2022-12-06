import { motion } from "framer-motion";
import React from "react";
import SkillElement from "../SkillElement";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity: 1}}
    transition={{duration: 1.5}}
    className="h-screen flex flex-col relative text-center md:text-left 
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">

      <h3 className="absolute top-[94px] sm:top-7 uppercase tracking-[10px] text-gray-500 text-3xl font-thin">Skills</h3>
      <h3 className="absolute top-[130px] sm:top-28 uppercase tracking-[3px] text-gray-500 text-sm font-thin">Hover over a skill for currency proficiency</h3>


      <div className="grid grid-cols-4 gap-5 absolute top-56 md:top-48">
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement />
        <SkillElement directionElement={true}/>
        <SkillElement directionElement={true}/>
        <SkillElement directionElement={true}/>
        <SkillElement directionElement={true}/>
        <SkillElement directionElement={true}/>
        <SkillElement directionElement={true}/>
        <SkillElement directionElement={true}/>
        <SkillElement directionElement={true}/>
      </div>

    </motion.div>
  );
};

export default Skills;

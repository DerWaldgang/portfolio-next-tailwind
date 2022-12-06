import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeftIcon , ArrowRightIcon} from '@heroicons/react/24/solid'

type Props = {
  index: number;
  length: number;
};

const ProjectItem = ({ index, length }: Props) => {

  const arrowSideIcon =  (index === length - 1 ? <ArrowLeftIcon className="w-10 h-10"/> : <ArrowRightIcon className="w-10 h-10"/>)
  const lastNumberColor = (index === length -1 ? <span className="text-[#F7BA0A]">{length}</span> : <span className="text-white">{length}</span> )

  return (
    <div className="w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center snap-center">
      <motion.div
      initial={{y: - 50, opacity: 0}}
      transition={{duration:1.2}}
      whileInView={{y:0, opacity: 1}}
      viewport={{once:true}}>
      
        <Image
          src={"/images/person.jpg"}
          height={140}
          width={220}
          alt="project"
          className="rounded-lg md:w-[400px] md:h-[300px] sm:w-[250px] sm:h-[180px]"
        />
        
      </motion.div>
      {arrowSideIcon}
      <div className="space-y-4 sm:space-y-10 px-5 md:px-10 max-w-6xl">
        <h4 className="text-xl sm:text-4xl font-semibold text-center">
          <span className="font-normal">
            Case study <span className="text-[#F7BA0A]">{index + 1}</span> {' '} of {lastNumberColor} {' '} : {' '}
          </span>
          UPS CLONE 
        </h4>
        <p className="text-sm sm:text-lg font-extralight text-left w-full md:w-1/2 mx-auto !mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          vel cumque. Officia odio aliquam odit numquam perspiciatis harum
          corrupti accusantium minima dignissimos, accusamus mollitia impedit
          nisi magnam quasi animi quaerat, vel culpa sit perferendis! Eum nisi
          sequi voluptatum qui rerum!
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;

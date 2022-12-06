import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  directionElement?: boolean;
};

const SkillElement = ({ directionElement }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionElement ? -50 : 50,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{once: true}}
        className="filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          src={"/images/person.jpg"}
          className="rounded-full h-[70px] w-[70px] sm:h-28 sm:w-28 border border-gray-500 object-cover md:w-32 md:h-32"
          width={150}
          height={150}
          alt="person"
        />
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#F7AB0A]/90
       h-14 w-14 md:h-24 md:w-24 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className=" text-xl md:text-3xl font-bold text-white opacity-100">100%</p>
        </div>
      </div>

    </div>
  );
};

export default SkillElement;

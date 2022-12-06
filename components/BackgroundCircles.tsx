import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        scale: [1, 1.5, 1.5, 1.8, 1],
      }}
      transition={{
        duration: 2.0,
      }}
      className="relative flex justify-center items-center mt-64"
    >
      <div
        className="absolute border border-[#333333] rounded-full h-[280px] w-[280px] 
         animate-ping"
      />
      <div
        className="absolute border border-[#333333] rounded-full h-[280px] w-[300px] 
         opacity-50"
      />
      <Image
        src={"/images/person.jpg"}
        className="rounded-full w-44 h-44 sm:h-52 sm:w-52  object-cover"
        width={150}
        height={150}
        alt="person"
      />
      <div
        className="absolute border border-[#333333] rounded-full h-[530px] w-[530px] 
         opacity-20"
      />
      <div
        className="absolute rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] 
         animate-pulse"
      />
    </motion.div>
  );
};

export default BackgroundCircles;

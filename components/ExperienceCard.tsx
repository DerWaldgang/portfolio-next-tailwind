import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  index: number;
  length: number;
};

const ExperienceCard = ({ index, length }: Props) => {


  return (
    <article
      className="relative flex flex-col rounded-lg items-center space-y-7
     flex-shrink-0 w-[350px] md:w-[500px] xl:w-[600px] snap-center bg-gray-800/40 p-2 md:p-8
     hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, x: 0 }}
        className="w-3/4"
      >
        <Image
            src={"/images/person.jpg"}
            className="rounded-full h-24 w-24 object-cover xl:w-[150px] 
          xl:h-[150px] "
            width={400}
            height={400}
            alt="experience"
          />

        <span className="absolute top-5 right-5 text-[#F7BA0A] font-mono border rounded-full py-1 px-3">
          {index + 1}
        </span>

        <div>
          <h4 className=" text-2xl md:text-4xl font-light">Junior Frontend</h4>

          <p className="font-bold text-xl md:text-2xl mt-1">Walgang</p>

          <div className="flex space-x-2 my-2">
            <Image
              src={"/images/person.jpg"}
              className="rounded-full h-10 w-10 object-cover"
              width={100}
              height={100}
              alt="experience"
            />
            <Image
              src={"/images/person.jpg"}
              className="rounded-full h-10 w-10 object-cover"
              width={100}
              height={100}
              alt="experience"
            />
            <Image
              src={"/images/person.jpg"}
              className="rounded-full h-10 w-10 object-cover"
              width={100}
              height={100}
              alt="experience"
            />
            <Image
              src={"/images/person.jpg"}
              className="rounded-full h-10 w-10 object-cover"
              width={100}
              height={100}
              alt="experience"
            />
          </div>

          <div className="">
          <p className="uppercase py-5 text-gray-300">started work...</p>
          <ul className="list-disc space-y-4 text-sm md:text-lg font-thin grid grid-cols-3 space-x-4">
            <li className="mt-4 ml-4">Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
          </ul>
          </div>
  
        </div>

      </motion.div>
    </article>
  );
};

export default ExperienceCard;

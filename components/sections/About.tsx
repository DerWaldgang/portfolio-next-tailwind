import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row relative h-screen text-center md:text-left md:flex-grow max-w-7xl sm:px-10 justify-evenly mx-auto items-center">

      <h1 className="absolute top-[90px] sm:top-7 uppercase tracking-[10px] text-gray-500 text-3xl font-thin">
        About
      </h1>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.0,
        }}
        className="mt-24 "
      >
        <Image
          src={"/images/person.jpg"}
          className=" rounded-full h-28 w-28 sm:h-72 sm:w-72 object-cover lg:mb-24 md:mb-44 md:rounded-lg lg:w-80 lg:h-80 xl:w-[500px] xl:h-[400px]"
          width={400}
          height={400}
          alt="person"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.0,
        }}
        className="space-y-10 px-5 md:px-10 md:w-3/4"
      >
        <h4 className="text-3xl text-semibold text-center">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-sm sm:text-lg font-extralight  !mt-1 text-left ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ex
          itaque fugit atque odio nostrum, dicta iure? Magnam possimus quod
          placeat, cum, deleniti sapiente, aliquid dolor dolores maiores commodi
          soluta perspiciatis autem dignissimos nesciunt molestias sunt quaerat
          provident eius harum tempora! Praesentium odit quidem animi suscipit
          vitae modi, enim reiciendis accusantium laboriosam voluptates quis,
          totam asperiores, dolores ipsum quaerat. Nulla maxime distinctio
          dolore dolorum vitae soluta quas ut unde, quidem, similique assumenda
          sunt quis quo nobis voluptatem ea non odit accusamus impedit. Corporis
          ab dicta deserunt officia asperiores recusandae labore hic, laborum
          culpa sapiente corrupti voluptate velit illo exercitationem quia.
        </p>
      </motion.div>
      
    </div>
  );
};

export default About;

import React from "react";
import { SocialIcon } from "react-social-icons";
import { AiOutlineMail } from 'react-icons/ai';
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-0 xl:items-center bg-[#F7AB0A]">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.6,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/DerWaldgang"
          fgColor="white"
          bgColor="transparent"
          className="cursor-pointer"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/salambek-makhaev-bb1223253"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.t.me/ze_blank"
          fgColor="white"
          bgColor="transparent"
        />
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          <AiOutlineMail className="w-8 h-full mr-1"/>
          <p className="uppercase hidden md:inline-flex text-sm text-white">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

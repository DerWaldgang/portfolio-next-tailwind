import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import BackgroundCircles from "../BackgroundCircles";

type Props = {};

const Person = (props: Props) => {
  return (
    <div className="h-screen flex flex-col space-y-4 xs:space-y-8 items-center justify-start sm:justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[10px]">
          Frontend React Developer
        </h2>
        <h1 className=" text-center text-base px-2 sm:text-2xl lg:text-5xl font-semibold sm:px-10">
          <span>
            <Typewriter
              words={[
                "Hello.HR.tsx",
                "console.log('My name is Salambek')",
                "<welcomeToPortfolio/>",
              ]}
              loop={true}
              delaySpeed={3000}
              typeSpeed={100}
              cursor
              cursorStyle="|"
              cursorColor="#F7AB0A"
            />
          </span>
        </h1>
        <div className=" pt-4 md:pt-6 flex flex-row gap-2 sm:gap-3 justify-evenly sm:justify-center sm:w-[100%] w-[80%] flex-wrap mx-auto">
          <Link href="#about">
            <button className="personButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="personButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="personButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="personButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Person;

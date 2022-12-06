import Link from "next/link";
import React from "react";
import { BsArrowUpSquare } from "react-icons/bs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="sticky bottom-8 left-5 w-[89%] cursor-pointer">
      <Link href={"#person"}>
        <div className="flex items-center justify-end">
          <BsArrowUpSquare className="h-5 w-5 grayscale hover:grayscale-0 hover:text-[#F7BA0A]" />
        </div>
      </Link>
    </footer>
  );
};

export default Footer;

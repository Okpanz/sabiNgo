"use client";
import React, { useState } from "react";
import Container from "@/components/Container";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/images/Logo1.png";
import Link from "next/link";
import Button from "@/components/Button";
import Toggle from "./icon/Toggle";

function Navbar() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const pathname = usePathname();

  return (

    <div className=" text-black">

      <Container>
        <div className="flex lg:py-[10px]   pt-[10px] justify-between items-center ">
          {" "}
          <div className="flex flex-col items-center">
          <Image className="w-[62px]  " alt="" src={logo} />{" "}
        <h2 className="font-semibold tracking-tighter">Tandem Advocacy Group</h2>
          </div>
          <div className="flex items-center  ">
            <ul className="lg:flex    hidden  font-montse font-[500] text-[18px] gap-16    ">
              <li
                className={`cursor-pointer  hover:text-primary ${
                  pathname === "/" ? "text-primary" : " "
                }`}
              >
                {" "}
                <Link href="/">Home </Link>{" "}
              </li>

              <li
                className={`cursor-pointer  hover:text-primary ${
                  pathname === "/about" ? "text-primary" : " "
                }`}
              >
                {" "}
                <Link href="/about">About </Link>{" "}
              </li>

              <li
                className={`cursor-pointer  hover:text-primary ${
                  pathname === "/blog" ? "text-primary" : " "
                }`}
              >
                {" "}
                <Link href="/blog">Blog </Link>{" "}
              </li>

              <li
                className={`cursor-pointer  hover:text-primary ${
                  pathname === "/event" ? "text-primary" : " "
                }`}
              >
                {" "}
                <Link href="/event">Event </Link>{" "}
              </li>

              <li
                className={`cursor-pointer  whitespace-nowrap  hover:text-primary ${
                  pathname === "/contact" ? "text-primary" : " "
                }`}
              >
                {" "}
                <Link href="/contact">Contact us </Link>{" "}
              </li>

              <li
                className={`cursor-pointer  hover:text-primary   lg:hidden ${
                  pathname === "/contact" ? "text-primary" : " "
                }`}
              >
                {" "}
                <Link href="/contact">Donate </Link>{" "}
              </li>
            </ul>
          </div>
          <div>
            <Button
              classes=" lg:flex  hidden"
              type="button"
              label="Donate"
              color="primary"
            />{" "}
          </div>
          <div className="  lg:hidden block " onClick={handleToggle}>
            <Toggle />
          </div>
        </div>
      </Container>

      {isToggled && (
        <div className=" items-center absolute  lg:hidden  w-full   h-full   bg-white transition-all ease-in-out duration-400">
          <ul className="flex-row   lg:hidden   font-montse font-[600] text-[20px]     lg:text-left   text-center  w-full ">
            <li
              className={`cursor-pointer  my-8  hover:text-primary  ${
                pathname === "/" ? "text-primary" : " "
              }`}
            >
              {" "}
              <Link href="/">Home </Link>
            </li>

            <li
              className={`cursor-pointer  my-8  hover:text-primary ${
                pathname === "/about" ? "text-primary" : " "
              }`}
            >
              {" "}
              <Link href="/about">About </Link>{" "}
            </li>

            <li
              className={`cursor-pointer  my-8  hover:text-primary ${
                pathname === "/blog" ? "text-primary" : " "
              }`}
            >
              {" "}
              <Link href="/blog">Blog </Link>{" "}
            </li>

            <li
              className={`cursor-pointer  my-8   hover:text-primary ${
                pathname === "/event" ? "text-primary" : " "
              }`}
            >
              {" "}
              <Link href="/event">Event </Link>{" "}
            </li>

            <li
              className={`cursor-pointer   my-8   whitespace-nowrap  hover:text-primary ${
                pathname === "/contact" ? "text-primary" : " "
              }`}
            >
              {" "}
              <Link href="/contact">Contact us </Link>{" "}
            </li>

            <li
              className={`cursor-pointer  my-8   hover:text-primary   lg:hidden ${
                pathname === "/contact" ? "text-primary" : " "
              }`}
            >
              {" "}
              <Link href="/contact">Donate </Link>{" "}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

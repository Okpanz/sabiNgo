"use client";
import React from "react";
import Container from "@/components/Container";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/public/images/Logo.png";
import Link from "next/link";
import Button from "@/components/Button";

function Navbar() {
  const pathname = usePathname();

  return (
    <div className=" text-black">
      <Container>
        <div className="flex py-[10px] justify-between items-center">
          {" "}
          <Image alt="" src={logo} />{" "}
          <div className="flex items-center">
            <ul className="flex   font-montse font-[500] text-[18px] gap-16">
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
                className={`cursor-pointer  hover:text-primary ${
                  pathname === "/contact" ? "text-primary" : " "
                }`}
              >
                {" "}
                <Link href="/contact">Contact us </Link>{" "}
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <Button type="button" label="Donate" color="primary" />{" "}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;

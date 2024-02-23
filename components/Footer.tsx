import React from "react";
import Container from "@/components/Container";
import Image from "next/image";
import Logo from "@/public/images/LogoWhite.png";
import Gallary from "@/public/images/Images (1).png";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div
      className="bg-[#2A2A2A] text-[18px] font-[500] font-body text-white
  "
    >
      <Container>
        <div className="flex flex-col md:flex-row mx-auto justify-center my-24  gap-20 w-[80%] py-11">
          <div className=" w-[280px]">
            <Image src={Logo} alt="Logo" />{" "}
            <p className=" leading-7 mt-4">
              Lorem Ipsum is simply dummy text of the industry's since the
              unknown. Lorem Ipsum is simply dummy text of the industry.
            </p>
          </div>
          <div>
            <h1 className="text-[24px] font-[500] ">Gallery</h1>
            <Image className=" mt-4" src={Gallary} alt="Gallery" />
          </div>
          <div>
            <h1 className="text-[24px] font-[500] mb-4">Quick Link</h1>

            <ul>
              <li className=" mb-4">
                <Link href="/">About Us </Link>
              </li>

              <li className="mb-4">
                <Link href="/">Leadership </Link>
              </li>

              <li className="mb-4">
                <Link href="/">FAQ’s </Link>
              </li>

              <li className="mb-4">
                <Link href="/">Become Volunteer </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="bg-white h-2 "></div>
      <Container>
        <div className=" flex  justify-between py-5">
          <div>
            {" "}
            © All right reserved 2024{" "}
            <span className="text-primary"> Sabi NGO </span>{" "}
          </div>

          <div className=" flex gap-4">
            <FaFacebook  className="hover:text-primary cursor-pointer transition-all ease-in-out duration-300" />
            <FaLinkedin  className="hover:text-primary cursor-pointer transition-all ease-in-out duration-300"/>
            <FaInstagram  className="hover:text-primary cursor-pointer transition-all ease-in-out duration-300"/>
            <FaTwitter className="hover:text-primary cursor-pointer transition-all ease-in-out duration-300" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;

import React from "react";
import Container from "@/components/Container";
import Image from "next/image";
import Logo from "@/public/images/Logo1.png";
import Gallary from "@/public/images/Images (1).png";
import Link from "next/link";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

function Footer() {
  const date = new Date()
  const fullYear = date.getFullYear()
  return (
    <div className="bg-[#2A2A2A] text-[18px] font-[500] font-body text-white">
      <Container>
        <div className="flex flex-col md:flex-row mx-auto justify-center my-24 gap-20 w-[80%] py-11">
          <div className="w-[280px] ">
            <div className="md:flex flex-col items-left">
            <Image src={Logo} alt="Logo" className="w-28" />
            <h2 className="font-bold">
            </h2>
            </div>
            <p className="mt-4 text-sm text-justify ">
            Here at Tandem Advocacy Group, we are driven to do our part in making the world a better place. We work with individuals, organizations and communities to address barriers that hinder access to available services while also advocating for the creation of services that are not available.
           <Link href="/about" className="mx-2 inline text-xs italic text-primary">read more</Link>
            </p>
          </div>
          <div>
            <h1 className="text-[24px] font-[500]">Gallery</h1>
            <Image className="mt-4" src={Gallary} alt="Gallery" />
          </div>
          <div>
            <h1 className="text-[24px] font-[500] mb-4">Quick Link</h1>
            <ul>
              <li className="mb-4">
                <Link href="/">About Us</Link>
              </li>
              <li className="mb-4">
                <Link href="/">Leadership</Link>
              </li>
              <li className="mb-4">
                <Link href="/">FAQ’s</Link>
              </li>
              <li className="mb-4">
                <Link href="/">Become Volunteer</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="bg-white h-2"></div>
      <Container>
        <div className="flex justify-between py-5 text-xs">
          <div>
            © All right reserved {fullYear} <span className="text-primary">Tandem Advocacy Group</span>
          </div>
          <div className="flex gap-4">
            <FaFacebook className="hover:text-primary cursor-pointer transition-all ease-in-out duration-300" />
            <FaLinkedin className="hover:text-primary cursor-pointer transition-all ease-in-out duration-300" />
            <FaInstagram className="hover:text-primary cursor-pointer transition-all ease-in-out duration-300" />
            <FaTwitter className="hover:text-primary cursor-pointer transition-all ease-in-out duration-300" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;

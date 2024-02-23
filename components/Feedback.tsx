import React from "react";
import Container from "./Container";
import Image from "next/image";
import Title from "@/public/images/Title.png";
import RevImage from "@/public/images/Ellipse 98.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Feedback() {
  return (
    <div className="h- text-black bg-[#EEEAFC] flex  items-center">
    <div className="flex items-center w-[30%] ">
      <div className="relative md:w-2/3   overflow-hidden">
        <Image src={Title} alt="title"/>
        <div className="absolute inset-0 opacity-50"></div>
        <h1 className="text-white text-center z-10 mix-blend-normal absolute top-[25%] md:text-xl lg:text-4xl font-heading right-0">What People are Saying About Us</h1>
      </div>
    </div>
  <div className="md:w-[80%] w-[70%]">
      <div className=" font-heading">
        <Image src={RevImage} alt="Ref Image"/>
        <p>Lorem ipsum dolor sit amet consectetur. Adipiscing ullamcorper fames mauris adipiscing amet egestas. Adipiscing cras duis sed tristique lectus orci bibendum. Massa massa feugiat egestas integer eget. Aenean fermentum interdum et eget diam vulputate. Risus ultricies lectus dolor enim. Mattis tellus diam lacus neque sit fusce montes. Adipiscing mauris orci.</p>
        <div className="flex md:flex-row flex-col w-full items-center justify-end my-5">
          <div className="mr-auto">
            <h1 className="font-bold text-xl">Adam Samson</h1>
            <p className="font-semibold">Senior Volunteer</p>
          </div>
          <div className="bg-[#3A40D8] pl-14 pr-20 py-2 flex items-center ml-auto text-white">
            <FaChevronLeft className="border rounded-full mx-2 text-2xl p-1"/>
            <FaChevronRight className="border rounded-full text-2xl p-1 mx-2"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Feedback;

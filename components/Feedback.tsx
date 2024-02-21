import React from "react";
import Container from "./Container";
import Image from "next/image";
import Title from "@/public/images/Title.png";
import RevImage from "@/public/images/Ellipse 98.png";

function Feedback() {
  return (
    <div
      className="bg-[  #EEEAFC] 
    "
    >
      <Container>
        <div
          className="flex gap-4
        "
        >
          <div className="flex w-full relative">
            <Image className="rounded-md" src={Title} alt="" />

            <h1 className=" font-[600] text-[44px] absolute font-heading  w-13  text-white">
              What People Say About <br></br>Us
            </h1>
          </div>
          <div className="">
            <Image className="mb-4   " src={RevImage} alt="" />

            <p className="font-[600] text-[24px]">
              {" "}
              It is long established fact that reader will distract by the
              readable content a page when looking atten layout. The point of
              using and that it has a normal distribution of letters
            </p>

            <div className="flex justify-between">
              <div>
                <h1 className=" font-heading  font-[500] text-[32px] ">
                  Adam Samson
                </h1>
                <p className="text-[18px] font-[500]">Senior Volunteer</p>
              </div>

              <div className="flex  w-[60%]"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Feedback;

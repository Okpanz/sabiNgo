import React from "react";
import Container from "./Container";
import Button from "@/components/Button";
import Image from "next/image";
import Donate from "@/public/images/donate.png";
import DonateCard from "./DonateCard";
import NeedImage from "@/public/images/currentNeed.png";
import Donner from "@/public/images/donners.png";

function DonateNow() {
  return (
    <div className="">
      <div className="bg-donate-pattern bg-cover py-20">
        <Container>
          <div className="flex gap-8 justify-center">
            <div className="md:inline hidden">
              <Image src={Donate} alt="donate" />
            </div>
            <div className="md:w-[50%] mt-14 flex-row item-center">
              <h2 className="text-[45px] font-[600] font-heading text-black">
              Tandem Advocacy Group is a Non Profit Organization
              </h2>
              <p className="my-6 font-body text-[20px] font-[500] text-[#414141] leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry orem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry orem Ipsum
                has been the industry's standard dummy text ever since the
                1500s, when an unknown.Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown.{" "}
              </p>
              <h1 className="w-[50%] text-black my-11 font-body text-[24px] font-[600] font border-r-4 border-primary">
                Need your simple <br></br> help save children.
              </h1>
              <Button type="button" label="Donate now" color="primary" />
            </div>
          </div>
        </Container>
      </div>
      <div className="py-24">
        <h1 className="text-center text-[40px] font-[600] font-heading">
          Donate For Poor People. <br /> Causes of Sabi{" "}
        </h1>
        <Container>
          <div className="flex md:flex-row flex-col p-5 items-center justify-center gap-5 my-11 text-black">
            <DonateCard />
            <DonateCard />
            <DonateCard />
          </div>
        </Container>
      </div>
      <div className="bg-[#EEEAFC] text-black py-11">
        <Container>
          <div className="flex md:flex-row flex-col md:w-auto justify-center gap-8">
            <div>
              <Image src={NeedImage} alt="need" />
            </div>
            <div className="md:w-[40%]">
              <h1 className="text-[40px] font-heading font-[600]">
                Need Pure Water For Anglo Jos People.
              </h1>
              <p className="text-[18px] text-[#5A5A5A]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry ore{" "}
              </p>
              <div>
                <div className="flex gap-5 mt-6">
                  <Button type="button" label="All Causes" color="primary" />
                  <Button classes="bg-[#EEEAFC]" type="button" label="Donate Now" color="secondry" />
                </div>
                <div className="my-8">
                  <h3 className="text-[32px] fon-[500] font-heading">Great Donners </h3>
                  <p className="my-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem.
                  </p>
                  <div className="flex gap-4">
                    <Image className="rounded-full w-[75px] h-[75px]" src={Donner} alt="Donations" />
                    <Image className="rounded-full w-[75px] h-[75px]" src={Donner} alt="Donations" />
                    <div className="flex font-[600] w-[75px] h-[75px] bg-primary items-center text-white rounded-full justify-center ">
                      350+
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default DonateNow;

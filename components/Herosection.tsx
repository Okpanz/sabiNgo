import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import Hero from "@/public/images/Hero Images.png";
import Card from "@/components/Card";
import volunterr from "@/public/images/Icon.png";

function Herosection() {
  return (
    <div>
      <div className="flex  gap-6  items-center justify-center   mt-20   ">
        <div className="w-[50%] ">
          <h1 className="  font-heading font-[700] text-[68px]  ">
            We Need Your Powerful Hands To{" "}
            <span className="text-primary">Change </span> The World.
          </h1>
          <div className="flex gap-5 mt-6">
            <Button type="button" label="All Causes" color="primary" />
            <Button type="button" label="Donate Now" color="secondry" />
          </div>
        </div>
        <div>
          {" "}
          <Image src={Hero} alt="" />{" "}
        </div>
      </div>

      <div className=" my-9   mt-40">
        <h1 className=" text-[40px]  text-center font-heading font-[600]  my-9">
          How Could You Help?
        </h1>

        <div className="flex  gap-8  justify-center">
          <Card
            imagePath={
              <Image className=" my-auto" src={volunterr} alt="voluteer logo" />
            }
            label="Become volunteer"
            alt="alt"
            ptage="You can contribute your time, skills and knowledge through volunteering with the UN."
          />

          <Card
            imagePath={
              <Image className=" my-auto" src={volunterr} alt="voluteer logo" />
            }
            label="Become volunteer"
            alt="alt"
            ptage="You can contribute your time, skills and knowledge through volunteering with the UN."
          />

          <Card
            imagePath={
              <Image className=" my-auto" src={volunterr} alt="voluteer logo" />
            }
            label="Become volunteer"
            alt="alt"
            ptage="You can contribute your time, skills and knowledge through volunteering with the UN."
          />
        </div>
      </div>
    </div>
  );
}

export default Herosection;

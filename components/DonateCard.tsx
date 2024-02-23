import Image from "next/image";
import React from "react";
import CardImg from "@/public/images/cardDonate.png";
import Button from "./Button";

function DonateCard() {
  return (
    <div className="max-w-md min-w-md font-body  shadow-md rounded-md ">
      <Image className="rounded-md w-full" src={CardImg} alt="" />

      <div className="p-5">
        <div className="flex flex-row  justify-between ">
          <div className=" text-[15px] font-[600] text-center">
            Goal <br />{" "}
            <span className=" text-[20px] text-primary"> $4000</span>{" "}
          </div>

          <div className=" text-[15px] font-[600] text-center">
            Raised <br />
            <span className=" text-[20px] text-primary"> $4000</span>{" "}
          </div>

          <div className=" text-[15px] font-[600] text-center">
            {" "}
            To Go <br />{" "}
            <span className=" text-[20px] text-primary"> $4000</span>{" "}
          </div>
        </div>

        <h1 className="text-[21px] font-[600] leading-8 mt-4 mb-2">
          {" "}
          Children Education Needs For Change The World.{" "}
        </h1>
        <p className="  text-[15px] font-body mb-4">
          Lorem Ipsum is simply dummy text of the industry's since the unknown.
        </p>

        <Button
          classes="mx-auto text-[15px] my-4 mt-8
           "
          type="button"
          label="Donate Now"
          color="secondry"
        />
      </div>
    </div>
  );
}

export default DonateCard;

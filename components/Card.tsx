import Image from "next/image";
import React from "react";
import Button from "@/components/Button";
import Volunteer from "@/public/images/Icon1.png";

function Card({
  imagePath,
  alt,
  label,
  ptage,
}: {
  imagePath: React.ReactNode;
  alt: string;
  label: string;
  ptage: string;
}) {
  return (
    <div
      className="border-[#D0D0D0] border rounded  max-w-[330px] 
        flex-row  justify-center py-8 px-4
      "
    >
      <div className="mx-auto my-3  flex justify-center"> {imagePath} </div>

      <h2 className="text-center text-[24px] font-[500] py-2"> {label}</h2>
      <p className="text-center text-[18px] font-[500]  text-[#5A5A5A]">
        {ptage}
      </p>

      <div className="hover:bg-primary hover:text-white transition-all ease-in-out duration-300  cursor-pointer mt-8 font-montse font-[500] flex w-[50%] justify-center  border-primary border-2 rounded-lg py-[12px] px-[17px]  text-[16px] text-primary  mx-auto">
        Read more
      </div>
    </div>
  );
}

export default Card;

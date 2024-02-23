import React from "react";
import BlogImage from "@/public/images/Blog Cart.png";
import Image from "next/image";
import Button from "@/components/Button";
import ShareIcon from "./icon/ShareIcon";

function Blogcard() {
  return (
    <div>
      <div className="max-w-[330px] font-body  shadow-md rounded-md ">
        <Image className="rounded-md" src={BlogImage} alt="Blog image" />

        <div className="p-3">
          <div className="flex justify-between items-center ">
            <div
              className=" text-[14px] font-[400] text-center bg-[#D3CAF8] rounded-md py-2 px-3
"
            >
              Water
            </div>

            <ShareIcon />
          </div>

          <h1 className="text-[21px] font-[600] leading-8 mt-4 mb-2">
            Children Education Needs For Change The World.
          </h1>
          <p className="  text-[15px] font-body mb-4">
            Lorem Ipsum is simply dummy text of the industry's since the
            unknown.
          </p>

          <Button
            classes="mx-auto text-[15px] my-4 mt-8"
            type="button"
            label="View Details"
            color="secondry"
          />
        </div>
      </div>
    </div>
  );
}

export default Blogcard;

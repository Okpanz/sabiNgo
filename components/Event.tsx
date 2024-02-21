import React from "react";
import Container from "./Container";
import Button from "@/components/Button";
import EvenCard from "@/components/EvenCards";

function Event() {
  return (
    <div className="">
      <Container>
        <div className="flex gap-5 justify-center py-24">
          <div className=" w-[30%] ">
            <h1 className="font-heading text-[40px] font-[600]">
              Multiple Event & Conference
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry ore
            </p>

            <Button
              classes="my-8"
              type="button"
              label="All Causes"
              color="primary"
            />
          </div>
          <div className="flex-row items-center">
            <EvenCard />
          </div>
        </div>

        <div className=" mx-11 flex font-heading font-[600] justify-between">
          <div className=" text-center ">
            <p className="text-[64px]"> 520k </p>
            <p className="text-[32px]"> Poor People</p>
          </div>

          <div className=" text-center ">
            <p className="text-[64px]"> 842M </p>
            <p className="text-[32px]"> Fund Rise</p>
          </div>

          <div className=" text-center ">
            <p className="text-[64px]"> 24k </p>
            <p className="text-[32px]"> Active Member</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Event;

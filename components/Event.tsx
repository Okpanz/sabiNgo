import React from "react";
import Container from "./Container";
import Button from "@/components/Button";
import EvenCard from "@/components/EvenCards";

function Event() {
  return (
    <div className="">
      <Container>
        <div className="flex md:flex-row flex-col gap-5 justify-center md:py-24 text-black">
          <div className=" md:w-[30%] ">
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

        <div className=" mx-11 my-2 text-black flex md:flex-row flex-col gap-3 font-heading font-[600] justify-between">
          <div className=" text-center ">
            <p className="md:text-5xl text-3xl"> 520k </p>
            <p className="md:text-3xl"> Poor People</p>
          </div>

          <div className=" text-center ">
            <p className="md:text-5xl text-3xl"> 842M </p>
            <p className="md:text-3xl"> Fund Rise</p>
          </div>

          <div className=" text-center ">
            <p className="md:text-5xl text-3xl"> 24k </p>
            <p className="md:text-3xl"> Active Member</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Event;

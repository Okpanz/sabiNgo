import Navbar from "@/components/Navbar";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import aboutframe from "../../public/images/Aboutframe.png"
import aboutkids from "../../public/images/aboutuskids.png"
import elipse1 from "../../public/images/Ellipse 100.png"
import elipse2 from "../../public/images/Ellipse 99.png"
import elipse3 from "../../public/images/Ellipse 100 (1).png"
import elipse4 from "../../public/images/Ellipse 99 (1).png"
import man1 from "../../public/images/volunteer.jpeg"
import man2 from "../../public/images/volunteer1.jpeg"
import frame12 from "../../public/images/Frame 12.png"
import avatar from "../../public/images/Frame 13.png"
import Image from "next/image";
import Container from "@/components/Container";
function Page() {

  const Volunteers = 
  [{
    id: "1",
    image: <Image src={man1} className="" />,
    alt: "man1"
  },
  {
    id: "1",
    image: <Image src={man2} className="" />,
    alt: "man1"
  },
 
]
const Stat = [
  {
    id: "1",
    figure : "520k",
    name: "Poor People"
  },
  {
    id: "2",
    figure : "800M",
    name: "Poor People"
  },
  {
    id: "3",
    figure : "24k",
    name: "Poor People"
  },
]
  return <>
  <Navbar />
    
    <div className="bg-white h-full text-black">
    <Image src={aboutframe} alt="" />{" "}
    <div className="md:w-[80%] mx-auto py-10">
  <Container>
      <h2 className="md:text-6xl text-3xl  font-heading font-semibold tracking-tighter leading-snug">Sabi NGO is a NON Profit Organisation</h2>
      <div className="md:flex items-stretch">
  <div className="flex-1 relative"> 
    <Image src={aboutkids} layout="fill" objectFit="cover" className="h-full w-full" /> 
  </div>
  <div className="flex-1 md:mx-7">
    <p className="font-semibold font-heading">
      Lorem ipsum dolor sit amet consectetur. Adipiscing ullamcorper fames mauris adipiscing amet egestas. Adipiscing cras duis sed tristique lectus orci bibendum. Massa massa feugiat egestas integer eget. Aenean fermentum interdum et eget diam vulputate. Risus ultricies lectus dolor enim. 
    </p>
    <p className="text-[.7rem] my-7 text-justify">Lorem ipsum dolor sit amet consectetur. Adipiscing ullamcorper fames mauris adipiscing amet egestas. Adipiscing cras duis sed tristique lectus orci bibendum. Massa massa feugiat egestas integer eget. Aenean fermentum interdum et eget diam vulputate. Risus ultricies lectus dolor enim. Mattis tellus diam lacus neque sit fusce montes. Adipiscing mauris orci.</p>
    <div className="flex flex-col md:flex-row  justify-evenly items-center">
      <div className="h-100 w-[18rem] m-1 h-[18rem] bg-[#E57373] relative rounded-md">
      <Image src={elipse1} className="absolute top-7 left-10"/>
      <Image src={elipse2} className="absolute top-0 overflow-hidden left-0"/>
      <h1 className="font-heading font-semibold text-xl text-white absolute top-9 left-14">Our Mission</h1>
      <p className="text-wrap text-white text-xs absolute bottom-7 p-2">Lorem ipsum dolor sit amet consectetur. Adipiscing ullamcorper fames mauris adipiscing amet egestas. Adipiscing cras duis sed tristique lectus orci bibendum. Massa massa feugiat egestas integer eget. Aenean fermentum interdum et eget diam vulputate. Risus ultricies lectus dolor enim. Mattis tellus diam lacus neque sit fusce montes. Adipiscing mauris orci.</p>
      </div>
      <div className="h-100 w-[18rem] m-1 h-[18rem] bg-[#FFB64C] relative rounded-md">
      <Image src={elipse3} className="absolute top-7 left-10"/>
      <Image src={elipse4} className="absolute top-0 overflow-hidden left-0"/>
      <h1 className="font-heading font-semibold text-xl text-white absolute top-9 left-14">Our Mission</h1>
      <p className="text-wrap text-white text-xs absolute bottom-7 p-2">Lorem ipsum dolor sit amet consectetur. Adipiscing ullamcorper fames mauris adipiscing amet egestas. Adipiscing cras duis sed tristique lectus orci bibendum. Massa massa feugiat egestas integer eget. Aenean fermentum interdum et eget diam vulputate. Risus ultricies lectus dolor enim. Mattis tellus diam lacus neque sit fusce montes. Adipiscing mauris orci.</p>
      </div>
    </div>
  </div>'
  <div>
  </div>
</div>
<div className="md:h-screen pt-10 ">
  <h1 className="font-heading font-bold text-2xl text-center mt-10">Meet Our Volunteers</h1>
  <div className="flex md:flex-row flex-col items-center justify-evenly">
  {Volunteers.map(function(item) {
  return (
    <div key={item.id} className="w-72 h-75 overflow-hidden">
      <span  className="h-full object-cover">{item.image} </span>
    </div>
  );
})}
    </div>
</div>
<div className="flex justify-around text-center font-heading h-full">
    {
      Stat.map(function(item) {
        return(
          <div key={item.id}>
            <p className="text-3xl md:text-5xl font-bold">{item.figure}</p>
            <p className="font-semibold md:text-2xl">{item.name}</p>
          </div>
        )
      })}
      </div>
  </Container>
    </div>
    <div className="h-screen bg-[#EEEAFC] flex items-center">
          <div className="flex items-center">
            <div className="relative w-2/3 overflow-hidden">
              <Image src={frame12} />
              <div className="absolute inset-0 bg-[#040bf9] opacity-50"></div>
              <h1 className="text-white text-left z-10 mix-blend-normal absolute top-[25%] md:text-5xl font-heading right-0">What People are Saying About Us</h1>
            </div>
          </div>
        <div className="w-[80%]">
            <div className="w-full font-heading">
              <Image src={avatar}/>
              <p>Lorem ipsum dolor sit amet consectetur. Adipiscing ullamcorper fames mauris adipiscing amet egestas. Adipiscing cras duis sed tristique lectus orci bibendum. Massa massa feugiat egestas integer eget. Aenean fermentum interdum et eget diam vulputate. Risus ultricies lectus dolor enim. Mattis tellus diam lacus neque sit fusce montes. Adipiscing mauris orci.</p>
              <div className="flex w-full items-center justify-end my-5">
                <div>
                  <h1 className="font-bold text-xl">Adam Samson</h1>
                  <p className="font-semibold">Senior Volunteer</p>
                </div>
                <div className="bg-[#3A40D8] pl-14 pr-20 py-2 flex items-center ml-auto text-white">
                  <FaChevronRight className="border rounded-full text-2xl p-1 mx-2"/>
                  <FaChevronLeft className="border rounded-full mx-2 text-2xl p-1"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
}

export default Page;

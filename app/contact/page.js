import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import contact from "../../public/images/contact.png";

function Page() {
  return (
    <div className="bg-white">
      <Navbar />
      <Image src={contact} className="w-screen" />
      <div className="bg-white">
        <Container>
          <div className="md:flex md:flex-row flex-col py-10 overflow-hidden">
            <div className="bg-[#3A40D8] md:w-[40%] p-8">
              <form className="space-y-2 font-heading tracking-widest">
                <div>
                  <label className="block text-white">First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="w-full p-2 bg-[#3a40db] border-2 outline-white outline-2"
                  />
                </div>
                <div>
                  <label className="block text-white">Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="w-full p-2 bg-[#3a40db] border-2 outline-white outline-2"
                  />
                </div>
                <div>
                  <label className="block text-white">Email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full p-2 bg-[#3a40db] border-2 outline-white outline-2"
                  />
                </div>
                <div>
                  <label className="block text-white">Phone Number:</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    required
                    className="w-full p-2 bg-[#3a40db] border-2 outline-white outline-2"
                  />
                </div>
                <div>
                  <label className="block text-white">Message:</label>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                    className="w-full p-2 bg-[#3a40db] border-2 outline-white outline-2"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-4 py-2 hover:bg-[#3a40db] hover:text-white transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="md:flex-1 ">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15722.338229961548!2d8.869361699999999!3d9.885178199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1708530465160!5m2!1sen!2sng"
                  className="w-full h-[85vh]"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Page;

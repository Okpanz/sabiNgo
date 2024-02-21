import BlogCarocel from "@/components/BlogCarocel";
import Button from "@/components/Button";
import Container from "@/components/Container";
import DonateNow from "@/components/DonateNow";
import Event from "@/components/Event";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen  bg-hero-pattern  bg-center bg-cover">
      <Navbar />
      <Container>
        <Herosection />
      </Container>
      <DonateNow />
      <Event />
      <Feedback />
      <BlogCarocel />
    </main>
  );
}

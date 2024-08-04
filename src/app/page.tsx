import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingVebinar from "@/components/UpcomingVebinar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <HeroSection></HeroSection>
      <FeaturedCourses></FeaturedCourses>
      <TestimonialCards></TestimonialCards>
      <UpcomingVebinar></UpcomingVebinar>
      <Instructor></Instructor>
      <Footer></Footer>
    </div>
  );
}

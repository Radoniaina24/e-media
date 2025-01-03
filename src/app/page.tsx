import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import QuiSommesNous from "@/components/QuiSommesNous";
import Video from "@/components/Cvideo";
import WhyUs from "@/components/WhyUs";
import { Metadata } from "next";
import Formation from "@/components/Formation";
import LightboxImage from "@/components/Carousel/Lightbox";
import CarouselLightBox from "@/components/Carousel/Carousel";
import Galerie from "@/components/Carousel";

export const metadata: Metadata = {
  title: "media | Accueil  ",
};

export default function page() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Banner /> */}
      <QuiSommesNous />
      <WhyUs />
      {/* <Features /> */}
      <Video />
      <Galerie />
      {/* Formation*/}
      <Formation />
      {/* <Brands /> */}
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}

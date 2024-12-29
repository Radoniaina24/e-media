import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Galerie from "@/components/galerie";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import QuiSommesNous from "@/components/QuiSommesNous";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Cvideo";
import WhyUs from "@/components/WhyUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil | E-media",
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
      {/* <Brands /> */}
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}

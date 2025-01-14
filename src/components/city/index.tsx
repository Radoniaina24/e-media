"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import FooterCity from "./Footer";
import HeroCity from "./HeroCity";
import AboutCity from "./AboutCity";
import OpportunitiesCity from "./OpportunitiesCity";
import VillageNumerique from "./VillageNumerique";
import Impact from "./Impact";
import Chiffre from "./Chiffre";
import Invitation from "./Invitation";

import Form from "./FormCity";
export default function CityProject() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <div className="bg-gray-50">
      <HeroCity />
      <AboutCity />
      <OpportunitiesCity />
      <VillageNumerique />
      <Impact />
      <Chiffre />
      <Invitation />
      <FooterCity />
      <Form />
    </div>
  );
}

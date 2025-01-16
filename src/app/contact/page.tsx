import Contact from "@/components/Contact";
import HeaderContact from "@/components/Contact/HeaderContact";
import HeroSectionPrograms from "@/components/HeroSectionPrograms/HeroSectionPrograms";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <div>
      <HeaderContact />
      <Contact />;
    </div>
  );
};

export default ContactPage;

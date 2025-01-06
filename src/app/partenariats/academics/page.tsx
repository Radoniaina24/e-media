import SectionPartenariats from "@/components/Partenariats/Partenarias";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partenariats",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const Academics = () => {
  return (
    <div className=" dark:bg-gray-dark">
      <SectionPartenariats />
    </div>
  );
};

export default Academics;

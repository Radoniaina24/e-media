"use client";
import Link from "next/link";
import Image from "next/image";
const programs = [
  {
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736512786/univ-M-1_ikzy9d.png",
    classe:
      "absolute ei_m top-[258px] left-[60px]  flex items-end justify-center  bg-opacity-50 opacity-100 md:top-[167px] md:left-6 lg:top-[140px] lg:left-2 xl:top-[218px] xl:left-[45px] transition-opacity duration-300",
    link: "/formation/master/electronique_informatique",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736512786/univ-M-2_necsbs.png",
    classe:
      "absolute ca_m top-[205px] left-[115px]  flex items-end justify-center  bg-opacity-50 opacity-100 md:top-[130px] md:left-[62px] lg:top-[105px] lg:left-[45px] xl:top-[172px] xl:left-[92px] transition-opacity duration-300",
    link: "/formation/master/ac",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736512785/univ-M5_cd5k4o.png",
    classe:
      "absolute mdj_m top-[258px] left-[150px]  flex items-end justify-center  bg-opacity-50 opacity-100  md:top-[170px] md:left-[82px] lg:top-[140px] lg:left-[62px] xl:top-[220px] xl:left-[120px] transition-opacity duration-300",
    link: "/formation/master/mdj",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736512785/univ-M-3_ov3yxn.png",
    classe:
      "absolute mba_m top-[288px] left-[280px]  flex items-end justify-center  bg-opacity-50 opacity-100  md:top-[188px] md:left-[172px] lg:top-[160px] lg:left-[138px] xl:top-[245px] xl:left-[230px] transition-opacity duration-300",
    link: "/formation/master/mba",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736512785/univ-M-4_lnjdme.png",
    classe:
      "absolute d_m top-[250px] left-[290px]  flex items-end justify-center  bg-opacity-50 opacity-100  md:top-[162px] md:left-[185px] lg:top-[132px] lg:left-[148px] xl:top-[212px] xl:left-[245px] transition-opacity duration-300",
    link: "/formation/master/droit",
  },
];

const MasterPrograms: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-800 dark:text-white">
        Nos Programmes de Master.
      </h2>
      <hr className="mb-20" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {programs.map((program, index) => (
          <Link key={index} href={program.link}>
            <HoverCard
              imageSrc={program.imageSrc}
              link={program.link}
              classe={program.classe}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MasterPrograms;

interface HoverCardProps {
  imageSrc: string;
  buttonText?: string;
  link: string;
  classe?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({
  imageSrc,
  buttonText = "En savoir plus",
  link,
  classe = "absolute top-[170px] left-7  flex items-end justify-center  bg-opacity-50 opacity-100  transition-opacity duration-300",
}) => {
  return (
    <div className="group relative w-full  overflow-hidden rounded-lg ">
      {/* Image de fond */}
      <div className="w-full">
        <Image
          src={imageSrc}
          alt="Image de fond"
          className="object-cover"
          width={500}
          height={500}
        />
      </div>

      {/* Overlay avec le bouton */}
      <div className={classe}>
        <Link
          className=" rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          href={link}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

import Image from "next/image";
import Link from "next/link";
interface HoverCardProps {
  imageSrc: string;
  buttonText?: string;
  link: string;
}

const HoverCard: React.FC<HoverCardProps> = ({
  imageSrc,
  buttonText = "En savoir plus",
  link,
}) => {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
      {/* Image de fond */}
      <div className="w-full">
        <Image
          src={imageSrc}
          alt="Image de fond"
          className="object-cover"
          width={250}
          height={250}
        />
      </div>

      {/* Overlay avec le bouton */}
      <div className="absolute inset-0 flex items-end justify-center  bg-opacity-50 opacity-100  transition-opacity duration-300">
        <Link
          className="mb-8 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          href={link}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default HoverCard;

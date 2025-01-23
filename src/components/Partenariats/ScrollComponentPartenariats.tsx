"use client";
import { useState } from "react";
interface ScrollComponentProps {
  text: string; // Le texte à afficher
}
const ScrollComponentPartenariats: React.FC<ScrollComponentProps> = ({
  text,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={` sticky left-1/2 top-24 z-50  `}>
      <div className="mx-auto max-w-4xl rounded-lg bg-transparent  text-center text-2xl font-semibold text-blue-600     backdrop-blur-sm sm:text-2xl  md:text-4xl lg:text-4xl dark:bg-opacity-50">
        {text}
      </div>
    </div>
  );
};

export default ScrollComponentPartenariats;

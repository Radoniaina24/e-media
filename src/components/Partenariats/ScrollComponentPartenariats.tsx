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
      <div className="mx-auto max-w-4xl rounded-lg bg-transparent  text-center text-5xl font-semibold text-blue-600     backdrop-blur-sm dark:bg-opacity-50  sm:text-4xl md:text-5xl lg:text-5xl">
        {text}
      </div>
    </div>
  );
};

export default ScrollComponentPartenariats;

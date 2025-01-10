"use client";
import { useState } from "react";
interface ScrollComponentProps {
  text: string; // Le texte à afficher
}
const ScrollComponent: React.FC<ScrollComponentProps> = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={` sticky left-1/2 top-24 z-50  `}>
      <div className="rounded-lg bg-white p-4 text-center text-xl font-semibold  text-primary  dark:bg-opacity-50 dark:text-primary sm:text-xl md:text-2xl lg:text-2xl">
        {text.toLocaleUpperCase()}
      </div>
    </div>
  );
};

export default ScrollComponent;

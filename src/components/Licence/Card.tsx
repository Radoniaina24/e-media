import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
interface CardProps {
  title: string;
  items: string[];
}

const Card: React.FC<CardProps> = ({ title, items }) => (
  <div
    className={` hover:t rounded-lg bg-white p-6 text-dark shadow-md hover:cursor-pointer ${items.length !== 0 ? "" : "flex items-center justify-center"}`}
  >
    <h3
      className={` ${items.length !== 0 ? "text-xl" : "text-lg"}text-gray-800"  font-bold`}
    >
      {title}
    </h3>
    {items ? (
      <ul className="mt-4 space-y-4 text-start text-dark">
        {items.map((item, index) => (
          <li key={index} className="flex items-center ">
            <div>
              <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
            </div>

            <div className="text-dark">{item}</div>
          </li>
        ))}
      </ul>
    ) : (
      ""
    )}
  </div>
);

export default Card;

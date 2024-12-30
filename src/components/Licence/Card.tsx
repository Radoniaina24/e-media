import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
interface CardProps {
  title: string;
  items: string[];
}

const Card: React.FC<CardProps> = ({ title, items }) => (
  <div
    className={` hover:t rounded-lg bg-white p-6 shadow-md hover:cursor-pointer  dark:bg-gray-800 dark:text-gray-200 ${items.length !== 0 ? "" : "flex items-center justify-center"}`}
  >
    <h3
      className={` ${items.length !== 0 ? "text-xl" : "text-lg"}text-gray-800"  font-bold`}
    >
      {title}
    </h3>
    {items ? (
      <ul className="mt-4 space-y-4 text-start text-gray-600 dark:text-gray-200 ">
        {items.map((item, index) => (
          <li key={index} className="flex items-center dark:text-gray-200 ">
            <div>
              <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
            </div>

            <div>{item}</div>
          </li>
        ))}
      </ul>
    ) : (
      ""
    )}
  </div>
);

export default Card;

import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
interface CardProps {
  title: string;
  items: string[];
}

const Card: React.FC<CardProps> = ({ title, items }) => (
  <div className="hover:bg-gray-darkhover:t rounded-lg bg-white p-6 shadow-md hover:cursor-pointer">
    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    <ul className="mt-4 space-y-4 text-start text-gray-600">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <div>
            <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
          </div>

          <div>{item}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default Card;

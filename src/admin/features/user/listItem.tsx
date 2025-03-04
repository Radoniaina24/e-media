import React from "react";
import ViewStudent from "./svg/view";
import Edit from "./svg/edit";
import DeleteButton from "./DeleteButton";
import Link from "next/link";
import User from "@/admin/interface/Users";

export default function ListItem({ user }: { user: User }) {
  return (
    <tr className="cursor-pointer bg-white hover:bg-gray dark:bg-boxdark  dark:text-white dark:hover:bg-gray-600">
      <th
        scope="row"
        className="whitespace-nowrap border-b border-[#eee] px-6 py-4 font-medium text-gray-900 dark:border-strokedark dark:text-white"
      >
        {user.username}
      </th>
      <td className="border-b border-[#eee] px-6 py-4 dark:border-strokedark">
        {user.email}
      </td>
      <td className="border-b border-[#eee] px-6 py-4 dark:border-strokedark">
        {user.role}
      </td>
      <td className=" border-b border-[#eee] px-4 py-5 dark:border-strokedark">
        <div className="flex items-center space-x-3.5">
          <button className="hover:text-primary">
            <ViewStudent />
          </button>
          <DeleteButton id={user._id} />
          <Link href={`/admin/users/edit/${user._id}`}>
            <Edit />
          </Link>
        </div>
      </td>
    </tr>
  );
}

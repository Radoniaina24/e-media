import React from "react";
import ViewStudent from "./svg/view";
import Edit from "./svg/edit";

import DeleteButton from "./DeleteButton";
import Image from "next/image";
import Link from "next/link";
import Student from "@/admin/interface/Student";

export default function ListItem({ student }: { student: Student }) {
  const photo = student.profilePhoto.url ? (
    <img
      src={student.profilePhoto.url}
      alt={"photo"}
      className="h-15 w-15 rounded-full border-4 border-gray-200 object-cover "
    />
  ) : (
    ""
  );
  return (
    <tr className="cursor-pointer bg-white hover:bg-gray">
      <th
        scope="row"
        className="whitespace-nowrap border-b border-[#eee] px-6 py-1 font-medium text-gray-900"
      >
        {photo}
      </th>
      <th
        scope="row"
        className="whitespace-nowrap border-b border-[#eee] px-6 py-1 font-medium text-gray-900 "
      >
        {student.last_name} {student.first_name}
      </th>
      <td className="border-b border-[#eee] px-6 py-1 ">
        {student.date_of_birth}
      </td>
      <td className="border-b border-[#eee] px-6 py-1 ">
        {student.classe.level}
      </td>
      <td className=" border-b border-[#eee] px-4 py-1 ">
        <div className="flex items-center space-x-3.5">
          <button className="hover:text-primary">
            <ViewStudent />
          </button>
          <DeleteButton id={student._id} />
          <Link href={`/admin/student/edit/${student._id}`}>
            <Edit />
          </Link>
        </div>
      </td>
    </tr>
  );
}

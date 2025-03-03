import React from "react";
import ViewStudent from "./svg/view";
import Edit from "./svg/edit";

import DeleteButton from "./DeleteButton";
import Image from "next/image";
import Link from "next/link";
import Student from "@/admin/interface/Student";

export default function ListItem({ student }: { student: Student }) {
  const photo = student.photo ? (
    <Image
      src={"http://localhost:8080/img/students/" + student.photo}
      alt={"photo"}
      width={50}
      height={50}
      className="rounded-full"
      unoptimized
    />
  ) : (
    ""
  );
  return (
    <tr className="hover:bg-gray dark:bg-boxdark cursor-pointer bg-white  dark:text-white dark:hover:bg-gray-600">
      <th
        scope="row"
        className="dark:border-strokedark whitespace-nowrap border-b border-[#eee] px-6 py-4 font-medium text-gray-900 dark:text-white"
      >
        {photo}
      </th>
      <th
        scope="row"
        className="dark:border-strokedark whitespace-nowrap border-b border-[#eee] px-6 py-4 font-medium text-gray-900 dark:text-white"
      >
        {student.name} {student.first_name}
      </th>
      <td className="dark:border-strokedark border-b border-[#eee] px-6 py-4">
        {student.date_of_birth}
      </td>
      <td className="dark:border-strokedark border-b border-[#eee] px-6 py-4">
        {student?.classe?.level ? student?.classe?.level : "-"}
      </td>
      <td className=" dark:border-strokedark border-b border-[#eee] px-4 py-5">
        <div className="flex items-center space-x-3.5">
          <button className="hover:text-primary">
            <ViewStudent />
          </button>
          <DeleteButton id={student._id} />
          <Link href={`/student/edit/${student._id}`}>
            <Edit />
          </Link>
        </div>
      </td>
    </tr>
  );
}

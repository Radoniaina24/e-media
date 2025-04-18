"use client";
import React from "react";
import CardDataStats from "../CardDataStats";
import Students_Svg from "./Svg/students";
import Teachers_Svg from "./Svg/Teachers";
import Parents_Svg from "./Svg/Parents";
import Earnings_Svg from "./Svg/Earnings";
import Link from "next/link";
import { useGetStudentQuery } from "@/lib/api/studentApi";

export default function Dashboard() {
  const { data } = useGetStudentQuery("");
  const coutStudent = data?.allStudents ? data?.allStudents : 0;
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <Link href={"/admin/users"}>
        <CardDataStats title="Users" total="10">
          <Parents_Svg />
        </CardDataStats>
      </Link>

      <Link href={"/admin"}>
        <CardDataStats title="Students" total={coutStudent}>
          <Students_Svg />
        </CardDataStats>
      </Link>
      <Link href={"/admin"}>
        <CardDataStats title="Teachers" total="1500">
          <Teachers_Svg />
        </CardDataStats>
      </Link>
      <CardDataStats title="Earnings" total="30000">
        <Earnings_Svg />
      </CardDataStats>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import SearchBar from "./search";
import Limit from "./limit";
import ListItem from "./listItem";
import Link from "next/link";
import Pagination from "./Pagination";

import Breadcrumb from "@/components/Admin/Breadcrumbs/Breadcrumb";
import Loader from "@/components/Admin/common/Loader";
import Student from "@/admin/interface/Student";
import { useGetUserQuery } from "@/lib/api/userApi";
import User from "@/admin/interface/Users";

export default function UsersList() {
  const [search, setSearch] = useState<string>("");
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error } = useGetUserQuery({
    search,
    limit,
    page,
  });
  const usersList = data?.users;
  // console.log(usersList);
  const totalePages = data?.totalPages;
  if (isLoading) return <Loader />;
  if (error) {
    return (
      <div>
        <Breadcrumb pageName={"List students"} />
        <div className=" rounded-sm border border-stroke bg-white px-5 py-5  shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
            <div
              className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
              role="alert"
            >
              <strong className="font-bold">🚨 Error: Server Issue</strong>
              <span className="block sm:inline">
                The users list cannot be displayed at the moment.
              </span>
              <span className="mt-2 block sm:inline">
                Please check your connection or contact the technical support
                team.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Breadcrumb pageName={"Users list"} />
      <div className=" rounded-sm border border-stroke bg-white px-5 py-5  shadow-default dark:border-strokedark dark:bg-boxdark">
        <button
          type="submit"
          className="mb-3 cursor-pointer rounded border  border-stroke bg-primary px-4 py-1 text-white outline-none transition hover:bg-opacity-90 dark:border-form-strokedark"
        >
          <Link href="/admin/users/add">Add</Link>
        </button>
        <div className="mb-3 flex flex-wrap items-center justify-between">
          <SearchBar query={search} onQuery={setSearch} />
          <Limit setLimit={setLimit} limit={limit} />
        </div>
        <div className="relative h-screen overflow-x-auto overflow-y-auto">
          <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="sticky top-0">
              <tr className=" bg-gray-2 text-left dark:bg-meta-4 dark:text-white">
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-4">
                  Role
                </th>
                <th scope="col" className="px-6 py-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {usersList?.length === 0 ? (
                <tr className="">
                  <td
                    rowSpan={8}
                    colSpan={5}
                    className="text-md text-center font-bold"
                    style={{ height: "250px" }}
                  >
                    Not Found
                  </td>
                </tr>
              ) : (
                usersList?.map((user: User) => (
                  <ListItem key={user._id} user={user} />
                ))
              )}
            </tbody>
          </table>
        </div>
        {/*Pagination*/}
        <div className="mt-5 flex justify-between">
          <h1>Tolale : {data?.totale || 0}</h1>
          <Pagination page={page} totalPage={totalePages} onPage={setPage} />
        </div>
      </div>
    </div>
  );
}

"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
export default function Pagination({
  page,
  onPage,
  totalPage,
}: {
  page: number;
  onPage: any;
  totalPage: number;
}) {
  const next = () => {
    if (page === totalPage || page - 1 === totalPage) return;

    onPage(page + 1);
  };

  const prev = () => {
    if (page === 1) return;

    onPage(page - 1);
  };

  return (
    <div className="flex items-center gap-8">
      <button onClick={prev} disabled={page === 1}>
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </button>
      <p className="mx-2  font-normal">
        Page <strong className="text-gray-900 dark:text-white">{page}</strong>{" "}
        of{" "}
        <strong className="text-gray-900 dark:text-white">{totalPage}</strong>
      </p>
      <button onClick={next}>
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4  " />
      </button>
    </div>
  );
}

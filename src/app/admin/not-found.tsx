import DefaultLayout from "@/components/Admin/Layouts/DefaultLayout";
import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <DefaultLayout>
      <section className="flex h-screen items-center justify-center bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-red-600 lg:text-9xl dark:text-red-500">
              404
            </h1>
            <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
              Il manque quelque chose.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Nous sommes désolés, mais nous ne parvenons pas à trouver cette
              page.
            </p>
            <Link href="/">
              <button className=" sm text-gray rounded bg-primary p-3 font-medium hover:bg-opacity-90">
                Retour à l&pos;accueil
              </button>
            </Link>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

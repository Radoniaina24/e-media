"use client";
import React from "react";
import Image from "next/image";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export default function Galerie() {
  return (
    <section className=" bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <h1 className=" text-center text-3xl font-semibold md:text-4xl">
          Galerie photo
        </h1>
        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          <a href="/images/banniere/.png">
            <Image
              width={500}
              height={1000}
              src={"/images/banniere/p7.png"}
              alt=""
              className=""
            />
          </a>
          <a href="/images/banniere/.png">
            <Image
              width={500}
              height={1000}
              src={"/images/banniere/p6.png"}
              alt=""
              className=""
            />
          </a>
        </LightGallery>
      </div>
    </section>
  );
}

{
  /* <Image
            width={500}
            height={1000}
            src={"/images/banniere/p7.png"}
            alt=""
            className=""
          /> */
}

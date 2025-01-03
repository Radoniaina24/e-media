"use client";

import { SetStateAction, useState } from "react";
import CarouselLightBox from "./Carousel";
import LightboxImage from "./Lightbox";

export default function Galerie() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const IMAGES = [
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890244/sekoly_cjypl4.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890240/IMG_6207_vjtlro.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890239/IMG_6197_tt7uab.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890238/IMG_6186_cdinmx.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890238/IMG_6186_cdinmx.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890237/IMG_2962_q10hhb.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890235/IMG_2961_ci7c1a.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890235/IMG_6193_kscoyh.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890234/IMG_2960_zejmcf.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890233/IMG_2959_rfrp0u.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890232/IMG_2958_jv6gxc.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890231/IMG_2957_fxkabj.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890230/IMG_2943_fyqvez.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890229/IMG_2942_zkic1a.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890229/IMG_2944_ny3jyv.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890224/IMG_2941_nutqnl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890223/IMG_2791_pcc5bh.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890223/IMG_2352_p9w3r8.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890221/IMG_2423_jxympk.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890220/IMG_2788_nlmifm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890220/IMG_2358_o1kyhz.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890218/IMG_2411_j58oem.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890218/IMG_2353_kxef9t.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890216/IMG_2345_zbgxjm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890215/IMG_2325_nkfitz.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890214/IMG_2350_wktbn1.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890213/IMG_2347_gzyiux.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890209/IMG_2341_sejg1f.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890206/IMG_2332_gpegsy.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890206/IMG_2323_leal5u.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890205/IMG_2291_dy801o.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890203/IMG_2296_octn2t.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890200/IMG_2306_j8tvog.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890200/IMG_2317_qs15ot.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890199/IMG_2293_b4wrrx.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890197/IMG_2144_fw9rya.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890195/IMG_2143_nniqhz.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890195/IMG_1987_ym6bbg.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890194/IMG_1980_gglnnm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890194/IMG_1976_owcfvu.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890193/IMG_1983_uodsao.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890193/IMG_1968_arvqvg.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890192/IMG_1975_agow2a.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890191/IMG_1974_m2eant.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890188/IMG_1958_rddh5h.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890188/IMG_1967_os1cqy.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890188/IMG_1966_wqn0r7.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890188/IMG_1965_uczybm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890186/IMG_1952_chz1un.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890183/_MGL1317_iv5cbs.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890182/IMG_1948_mvhxho.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890182/IMG_1957_vwg1jm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890181/IMG_1951_sordai.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890179/IMG_1885_u5zmae.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890172/_MGL1764_zde7h9.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890171/IMG_1833_bsushw.jpg",
    },

    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890170/IMG_1828_ny5n4z.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890168/IMG_1832_f1nwvv.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890166/_MGL1746_icbbwg.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890164/e0569a49-a01a-4dfa-9749-1446c75b009c_qdk0hs.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890163/f3475fa7-3109-448c-b17f-4c2e2fd372fb_tlwqhg.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890163/fb28780b-7198-469b-883d-a1bb52de535b_fmtbz6.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890161/_MGL1752_qoayys.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890161/ba46a174-3e89-4582-acbc-2d2a7fa6f16c_zbwehw.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890161/8380b37f-f52d-440f-9cf2-b001105b8561_yg5cz0.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890160/_MGL1730_dlq7xu.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890160/259a7bf9-75a7-405d-a7a3-ebab08480d71_cww1zb.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890158/_MGL1749_mntrue.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890154/_MGL1330_zqu5hf.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890153/_MGL1741_yufmey.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890149/_MGL1592_pa720j.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890146/_MGL1313_xrlp3r.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890146/_MGL1338_gfh06i.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890144/_MGL1300_n9zr1v.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890140/_MGL1273_edttau.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890138/_MGL1278_z1d5kp.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890137/_MGL1258_ekrnyl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890137/_MGL1251_jwqatk.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890117/_MGL1231_clgqab.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890115/_MGL1238_uh5tqe.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890114/_MGL1234_j2fv2j.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890114/_MGL1227_jzzqkw.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890106/_MGL1202_t48vql.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890084/_MGL1226_dftcm9.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890083/_MGL1218_xoefja.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890081/_MGL1185_xrtxyu.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890080/_MGL1224_avd5ns.jpg",
    },
  ];

  return (
    <section className=" bg-dark py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <CarouselLightBox
        lightboxIndex={lightboxIndex}
        setLightboxIndex={setLightboxIndex}
      />
      <LightboxImage
        lightboxIndex={lightboxIndex}
        setLightboxIndex={setLightboxIndex}
        images={IMAGES}
      />
    </section>
  );
}

"use client";
import React, { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Counter,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import CardGalerie from "./CardGalerie";

export default function GaleriePhotoAlbum() {
  const album = [
    {
      title: "Campus & Studios",
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1735890237/IMG_2962_q10hhb.jpg",
      altText: "Studios professionnels",
    },
    {
      title: "sortie de promotion",
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736099571/IMG_9454_f4tkrl.jpg",
      altText: "Parc informatique performant",
    },
    {
      title: "Salons et conférences",
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736099729/IMG_0554_loiwpl.jpg",
      altText: "Laboratoires spécialisés",
    },
    {
      title: "Reboisement et Actions pour le Climat",
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736099839/IMG_9465_iu7khf.jpg",
      altText: "Studios professionnels",
    },
    {
      title: "Studio radio E-media FM 107.8 mhz",
      imageSrc:
        "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736100093/IMG_1984_g8vloz.jpg",
      altText: "Studios professionnels",
    },
  ];

  const [currentAlbum, setCurrentAlbum] = useState("");

  const handleAlbumClick = (albumTitle) => {
    setCurrentAlbum(albumTitle);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const studioCampus = [
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
  const reboisement = [
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736134667/2_qdckzl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736134665/3_lxtbit.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736134665/4_bvzoic.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736134665/5_uwn5ii.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736134669/6_noumph.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736134671/7_e1ag3r.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736134669/8_v7wl5b.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736134667/9_jjetqa.jpg",
    },
  ];
  const promotion = [
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135227/1_p_pkom7t.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135226/54_p_nmxjzn.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135227/3_p_zwhqks.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135228/4_p_m0bi1t.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135228/5_p_v00sf7.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135228/6_p_fs5dpc.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135228/7_p_psnztc.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135228/8_p_gpemyz.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135238/9_p_cmxucw.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135234/10_p_rddhib.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135233/11_p_orxnrd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135234/12_p_yghkdd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135234/13_p_twggni.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135235/14_p_ctmhz7.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135244/15_p_o094ct.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135244/16_p_ddjdeq.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135245/17_p_v3fgov.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135244/18_p_urazbb.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135245/19_p_smvuoz.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135247/20_p_xka4bd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135250/21_p_uvmkqd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135252/22_p_vxbhdt.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135252/23_p_tz62of.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135254/24_p_kkylon.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135253/25_p_zhoxqb.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135253/26_p_b7hcla.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135254/27_p_ofscv5.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135261/28_p_ycbqbn.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135262/29_p_lrgcub.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135258/30_p_tapphe.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135258/31_p_vsvfpi.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135261/32_p_cfajk6.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135259/33_p_v7yq9u.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135264/34_p_mkk6vj.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135207/35_p_hmjick.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135205/36_p_m9dl8c.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135205/37_p_g5odlt.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135208/38_p_fixnpj.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135209/39_p_xxaqen.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135209/40_p_schgoa.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135214/41_p_qymjlj.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135212/42_p_e5lck7.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135213/43_p_h9zzvz.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135216/44_p_phfdvd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135216/45_p_uifzsd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135217/46_p_o0wri6.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135219/47_p_tkm6ax.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135219/48_p_cobv35.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135225/49_p_ayzqrx.jpg9",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135220/50_p_jovvmh.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135223/51_p_jv8wmz.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135226/52_p_azjt4r.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135225/53_p_spnwy3.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135226/54_p_nmxjzn.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135227/55_p_rtfq1p.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135231/56_p_zfyti4.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135226/57_p_iqlild.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135226/58_p_o3tppm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135227/59_p_ju0p5a.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736135226/60_p_mbifcp.jpg",
    },
  ];
  const radioFm = [
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136501/1_radio_h33azq.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136493/2_radio_tqnykb.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136497/3_radio_wdfoxu.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136503/4_radio_bs28ft.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136513/5_radio_grzmvj.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136506/6_radio_urfhi9.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136506/7_radio_oyr0ip.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136508/8_radio_owfxy3.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136509/9_radio_waal3i.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136462/10_radio_rs0mrr.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136462/11_radio_na2vkn.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136463/12_radio_kkpcks.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136466/13_radio_l4c2id.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136466/14_radio_jymj8a.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136464/15_radio_c7uyup.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136465/16_radio_xnumys.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136467/17_radio_aiyoii.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136472/18_radio_fx1yqd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136470/19_radio_cazrkm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136474/20_radio_uurk1k.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136472/21_radio_w9olkn.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136473/22_radio_bzjxkv.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136477/23_radio_go0qpg.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136477/24_radio_jrst6j.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136480/25_radio_lqiwme.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136485/26_radio_yhjlor.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136483/27_radio_eramwf.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136479/28_radio_yauici.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136483/29_radio_z8nbrp.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136484/30_radio_xqtmar.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136502/31_radio_yluhco.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136498/32_radio_i66wm7.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736136499/33_radio_kgxn5e.jpg",
    },
  ];
  const salons = [
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137155/conference_1_jx4yew.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137159/conference_2_jxvntm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137158/conference_3_vqnzs9.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137159/conference_4_nsu3wq.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137158/conference_5_nqpavy.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137159/conference_6_yrvnxh.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137161/conference_7_jbl9jm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137165/conference_8_lpfbqd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137165/conference_9_cazezj.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137167/conference_10_ekkjhk.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137166/conference_11_e92hgq.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137168/conference_12_d9vh5g.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137172/conference_13_mqgqmw.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137170/conference_14_stczqn.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137171/conference_15_fgjfuj.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137176/conference_16_fcfbqv.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137174/conference_17_bheth1.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137176/conference_18_hud2yt.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137179/conference_19_sahddo.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137181/conference_20_ssnwmr.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137183/conference_21_xmjygl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137179/conference_22_sgs9ue.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137186/conference_23_eqfpon.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137184/conference_24_wiogb9.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137186/conference_25_dmg0av.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137188/conference_26_btodoe.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137188/conference_27_zv1phf.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137190/conference_28_ehvmao.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137190/conference_29_lj124r.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137196/conference_30_b2wqoh.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137191/conference_31_u5dafv.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137194/conference_32_m9nqhp.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137196/conference_30_b2wqoh.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137201/conference_34_qerx9v.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137197/conference_35_rtiuxx.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137198/conference_36_dwpghe.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137202/conference_37_ym41n5.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137201/conference_38_nbgwjl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137201/conference_39_jxzxsd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137210/conference_40_iy4vox.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137209/conference_41_mlxlhu.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137216/conference_42_epawgl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137215/conference_43_r0emi0.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137218/conference_44_h51bdc.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137216/conference_45_rcq2a1.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137219/conference_46_gm0j8k.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137221/conference_47_cgcmf5.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137219/conference_48_eemrof.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137224/conference_49_zf31ds.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137224/conference_50_rdqqaq.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137222/conference_51_qvvfv0.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137223/conference_52_baljfd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137226/conference_53_z2bjsg.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137228/conference_54_pks0zc.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137228/conference_55_riwttm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137229/conference_56_gnsddu.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137231/conference_57_u1pqfh.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137228/conference_58_e09mwl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137230/conference_59_khvufs.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137236/conference_60_utthfi.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137235/conference_61_ktoffy.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137239/conference_62_j1xehz.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137239/conference_63_hsaos7.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137239/conference_63_hsaos7.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137240/conference_65_bs8j0n.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137242/conference_66_x0iybw.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137247/conference_67_hekqts.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137248/conference_68_iiuyf1.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137247/conference_69_voq265.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137248/conference_70_poyarn.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137248/conference_71_wsldya.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137246/conference_72_skn3in.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137255/conference_73_ckbxet.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137254/conference_74_vfjk7m.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137256/conference_75_fxhcfp.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137257/conference_76_eze3hi.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137260/conference_77_endfyt.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137257/conference_78_bbluy2.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137261/conference_79_jxcarx.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137263/conference_80_gxpnih.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137264/conference_81_iriqrl.jpg",
    },
    {
      src: "https://res.cloudinary.com/dx3xhdaym/image/upload/v1736137263/conference_82_pfp097.jpg",
    },
  ];

  return (
    <section className=" py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container ">
        {/* <h1 className="my-10 text-center text-4xl font-bold uppercase text-white">
          Galerie photo
        </h1> */}
        <Carousel
          infinite
          autoPlay
          autoPlaySpeed={3000}
          responsive={responsive}
          itemClass="px-3"
        >
          {album.map((item, index) => (
            <CardGalerie
              key={index}
              imageSrc={item.imageSrc}
              altText={item.altText}
              title={item.title}
              onButtonClick={handleAlbumClick}
            />
          ))}
        </Carousel>
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === "Campus & Studios"}
          close={() => setCurrentAlbum("")}
          slides={studioCampus}
        />
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === "Reboisement et Actions pour le Climat"}
          close={() => setCurrentAlbum("")}
          slides={reboisement}
        />
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === "sortie de promotion"}
          close={() => setCurrentAlbum("")}
          slides={promotion}
        />
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === "Studio radio E-media FM 107.8 mhz"}
          close={() => setCurrentAlbum("")}
          slides={radioFm}
        />
        <Lightbox
          plugins={[Counter, Fullscreen, Zoom, Thumbnails]}
          open={currentAlbum === "Salons et conférences"}
          close={() => setCurrentAlbum("")}
          slides={salons}
        />
      </div>
    </section>
  );
}

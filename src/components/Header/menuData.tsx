import { Menu } from "@/types/menu";

export const menuDataFr: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
  },

  {
    id: 3,
    title: "Formations",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "CFP",
        path: "/formation/cfp",
        newTab: false,
      },
      {
        id: 32,
        title: "Universitaire",
        path: "/formation/universitaire",
        newTab: false,
      },
      {
        id: 32,
        title: "Modulaire",
        path: "/formation/modulaire",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Partenariats",
    path: "/partenariats",
    newTab: false,
  },
  {
    id: 5,
    title: "E-media FM",
    path: "/",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];
export const menuDataEn: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 3,
    title: "Training",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "CFP",
        path: "/formation/cfp",
        newTab: false,
      },
      {
        id: 32,
        title: "University",
        path: "/formation/universitaire",
        newTab: false,
      },
      {
        id: 33, // Updated ID
        title: "Modular",
        path: "/formation/modulaire",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Partnerships",
    path: "/partenariats",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

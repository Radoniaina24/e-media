import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Montserrat } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "E-media",
    template: "media | %s  ",
  },
  description: "...",
};
const inter = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import { Metadata } from "next";
import { LanguageProvider } from "@/lib/context/LanguageContext";

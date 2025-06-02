"use client";
import { useLanguageContext } from "@/lib/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { language } = useLanguageContext();
  return (
    <>
      <footer className="bg-gray-100 py-16 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Logo & Description */}
            <div className="mb-8 w-full md:w-1/3">
              <div>
                <Link href="/">
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    className="w-auto dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    className="hidden dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                {language === "fr" ? (
                  <>
                    <span className="font-bold"> E-Media</span> + Inspirer,
                    Former, Transformer - Pour Madagascar et l&apos;Afrique.
                  </>
                ) : (
                  <>
                    <span className="font-bold">E-Media</span>: Inspire,
                    Educate, Transform - For Madagascar and Africa.
                  </>
                )}
              </p>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <strong>Email :</strong> emediauniv.mada@gmail.com
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Téléphone :</strong> +261 34 31 777 47
              </p>
            </div>

            {/* Liens utiles */}
            <div className="mb-8 w-full md:w-1/6">
              <h3 className="mb-4 font-semibold text-gray-800 dark:text-gray-200">
                {language === "fr" ? "Liens utiles" : "Useful Links"}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/formation/universitaire"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    {language === "fr" ? "Universitaire" : "University"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/formation/cfp"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    CFP
                  </Link>
                </li>
                <li>
                  <Link
                    href="/formation/modulaire"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    {language === "fr" ? "Modulaire" : "Modular"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="mb-8 w-full md:w-1/6">
              <h3 className="mb-4 font-semibold text-gray-800 dark:text-gray-200">
                {language === "fr" ? "Resources" : "Ressources"}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://enligne.e-mediauniversity.io/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    {language === "fr" ? "Se connecter" : "Log in"}
                  </Link>
                </li>
                <li>
                  <Link
                    href=" https://enligne.e-mediauniversity.io/register "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    {language === "fr" ? " Emplois du temps" : "Timetables"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    {language === "fr" ? "Support" : "Support"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="mb-8 w-full md:w-1/6">
              <h3 className="mb-4 font-semibold text-gray-800 dark:text-gray-200">
                Support & Help
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href=" https://enligne.e-mediauniversity.io/register "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    {language === "fr" ? "S'inscrire" : "Sign up"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#why"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    {language === "fr" ? "A propos" : "About"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-300 pt-8 text-center dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Copyright © 2025{" "}
              <Link
                href="/"
                className="font-bold text-primary hover:underline"
                rel="noopener noreferrer"
              >
                E-media
              </Link>{" "}
              {language === "fr"
                ? "Tout droit réservé."
                : "All rights reserved."}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

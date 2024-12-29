"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
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
                <span className="font-bold"> E-Media</span> : Inspirer, Former,
                Transformer - Pour Madagascar et l&apos;Afrique.
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
                Liens utiles
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    CFP
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    Université
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    E-learning
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="mb-8 w-full md:w-1/6">
              <h3 className="mb-4 font-semibold text-gray-800 dark:text-gray-200">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    Emplois du temps
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signin"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    Se connecter
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    Support
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
                    href="#"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    S&apos;inscrire
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
                    href="#why"
                    className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-300 pt-8 text-center dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Copyright © 2024{" "}
              <Link
                href="/"
                className="font-bold text-primary hover:underline"
                rel="noopener noreferrer"
              >
                E-media
              </Link>{" "}
              Tout droit réservé.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

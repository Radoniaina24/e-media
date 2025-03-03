import Link from "next/link";

import { Metadata } from "next";
import Signin from "@/components/Signin/Signin";

export const metadata: Metadata = {
  title: "Connexion ",
  // other metadata
};

const SigninPage = () => {
  return (
    <div>
      <Signin />
    </div>
  );
};

export default SigninPage;

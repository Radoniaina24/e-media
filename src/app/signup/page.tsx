import Link from "next/link";

import { Metadata } from "next";
import SignUp from "@/components/Signup/SignUp";
import HeaderContact from "@/components/Contact/HeaderContact";
import HeaderSignup from "@/components/Signup/HeaderSinup";

export const metadata: Metadata = {
  title: "Inscription",
  description: "This is Sign Up Page for Startup Nextjs Template",
  // other metadata
};

const SignupPage = () => {
  return (
    <div className="">
      <HeaderSignup />
      <SignUp />
    </div>
  );
};

export default SignupPage;

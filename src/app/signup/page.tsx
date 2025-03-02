import Link from "next/link";

import { Metadata } from "next";
import SignUp from "@/components/Signup/SignUp";

export const metadata: Metadata = {
  title: "Inscription",
  description: "This is Sign Up Page for Startup Nextjs Template",
  // other metadata
};

const SignupPage = () => {
  return (
    <div className="mt-36">
      <SignUp />
    </div>
  );
};

export default SignupPage;

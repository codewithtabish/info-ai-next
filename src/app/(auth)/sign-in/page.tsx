// import { LoginForm } from "@/components/forms/LoginForm";
import { LoginForm } from "@/components/general/login-from";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import Logo from "../../../../public/logo.png";
// import { LoginForm } from "@/components/forms/login-form";

const LoginPage = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center">
          <Image src={'/logo.svg'} alt="Logo" width={100} height={200} className="object-center" />
          <h1 className="text-2xl font-bold">
           AI <span className="text-primary">Axon</span>
          </h1>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

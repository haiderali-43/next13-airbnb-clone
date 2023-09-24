"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div>
      <Image
        onClick={() => router.push("/")}
        src={"/logo.png"}
        alt="Logo"
        height={100}
        width={100}
        className="hidden md:block cursor-pointer mt-1"
      />
    </div>
  );
};

export default Logo;

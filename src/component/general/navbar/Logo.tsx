import Link from "next/link";
import React from "react";
import { LuCodeXml } from "react-icons/lu";

export default function Logo() {
  return (
    <Link href="/">
      <div className=" w-10 h-10 bg-gray-200 rounded-full grid place-items-center">
        <LuCodeXml />
      </div>
      <p className="text-gray-200 font-semibold md:text-2xl hidden sm:block">
        
        Awsome-Code
      </p>
    </Link>
  );
}

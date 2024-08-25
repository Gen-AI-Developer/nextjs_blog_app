"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex w-full p-2 justify-center">
      <footer>
        <Link href={"https://github.com/Gen-AI-Developer"}>
          <Image
            className="animate-spin"
            src={"/github.png"}
            width={30}
            height={30}
            alt="github link to developer portfolio"
          />
        </Link>
      </footer>
    </div>
  );
};

export default Footer;

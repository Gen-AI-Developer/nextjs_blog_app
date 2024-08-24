import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex w-full p-2 justify-center">
      <footer>
        <Link href={"https://github.com/Gen-AI-Developer"}>
          <Image
            src={"/github.png"}
            width={20}
            height={20}
            alt="github link to developer portfolio"
          />
          Click Me!
        </Link>
      </footer>
    </div>
  );
};

export default Footer;

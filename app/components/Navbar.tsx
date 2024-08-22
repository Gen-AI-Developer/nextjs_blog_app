import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="px-4 py-5 w-full relative max-w-2xl mx-auto flex items-center justify-between">
      <Link href="/" className="font-bold text-3xl">
        Developers<span className="text-primary">Blog</span>
      </Link>
    </nav>
  );
};

export default Navbar;

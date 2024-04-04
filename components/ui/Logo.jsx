import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <span className="text-[2rem] font-kalam font-bold cursor-pointer">
        Crunch
      </span>
    </Link>
  );
};

export default Logo;
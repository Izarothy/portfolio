import Link from "next/link";
import React from "react";

import { FaGithub, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const NavBar = () => {
  return (
    <nav className="sticky top-0 mx-auto flex w-[70%] items-center justify-between pt-8">
      <Link href="/">
        <FaHome size={30} />
      </Link>
      <span className="flex items-center gap-4">
        <a href="https://github.com/Izarothy">
          <FaGithub size={30} />
        </a>
        <a href="mailto:izarothmail@gmail.com">
          <MdEmail size={30} />
        </a>
      </span>
    </nav>
  );
};

export default NavBar;

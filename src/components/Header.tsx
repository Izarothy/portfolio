import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <h1 className="mb-4 font-semibold">Hi, I&apos;m Michał 👋</h1>
      <p className="text-sm">
        I&apos;m a self-taught developer, who&apos;s mostly creating web stuff,
        although I also wrote a couple of Python scripts, Discord bots, a math
        library and was at some point bored enough to write a simple Fizzbuzz
        program in ASM.
      </p>
      <div className="flex w-min gap-4 pt-4">
        <a href="https://github.com/Izarothy" className="hover:text-blue-200">
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/micha%C5%82-dudek-76b442237/"
          className="hover:text-blue-200"
        >
          <FaLinkedin size={28} />
        </a>
      </div>
    </header>
  );
};

export default Header;

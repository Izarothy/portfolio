import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="relative grid h-screen w-full place-items-center bg-opacity-30">
      <Image
        src="https://images.unsplash.com/photo-1610018556010-6a11691bc905?q=100&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={1170}
        height={780}
        quality={100}
        className="relative h-screen w-full object-cover opacity-50"
        alt="Background"
      />
      <h1 className="absolute text-center text-6xl font-bold">
        Hi, I&apos;m Michał <br />
        <span className="text-xl font-semibold">Web Developer</span>
      </h1>
    </header>
  );
};

export default Header;

import React from "react";
import ArrowTopRight from "./icons/ArrowTopRight";

const Footer = () => {
  return (
    <footer className="mb-8 w-full justify-start">
      <a
        href="https://github.com/izarothy/portfolio"
        target="_blank"
        className="inline-flex w-full items-center gap-1 hover:text-blue-400"
      >
        source <ArrowTopRight />
      </a>
    </footer>
  );
};

export default Footer;

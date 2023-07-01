import Image from "next/image";
import React, { useState } from "react";

type Props = {
  image: string;
  name: string;
  description: string;
  repo: string;
  link: string;
};

const ProjectShowcase = ({ image, name, description, repo, link }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <article
      className="relative rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={`/images/${image}`}
        width={500}
        height={250}
        alt={name}
        className={`${isHovered ? `opacity-40` : ``} rounded-lg object-cover`}
      />
      <span
        className={`${
          isHovered ? `` : `hidden`
        } -translate-1/2 absolute left-0 top-0 flex h-full flex-col justify-between px-4 py-4 sm:px-12`}
      >
        <p className="max-h-[75%] overflow-hidden text-sm lg:text-base">
          {description}
        </p>
        <span className="flex justify-center gap-4">
          <a
            className="btn border-cta hover:bg-cta"
            target="_blank"
            href={link}
          >
            Live version
          </a>
          <a
            className="btn border-gray-500 hover:bg-gray-500"
            target="_blank"
            href={repo}
          >
            Repository
          </a>
        </span>
      </span>
    </article>
  );
};

export default ProjectShowcase;

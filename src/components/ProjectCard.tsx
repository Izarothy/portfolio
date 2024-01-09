import Image from "next/image";
import React from "react";
import ArrowTopRight from "./icons/ArrowTopRight";

type Props = {
  image: string;
  name: string;
  description: string;
  repo: string;
  link: string;
};

const ProjectCard = ({ image, name, description, link }: Props) => {
  return (
    <article className="flex gap-2">
      <Image
        src={`/images/${image}`}
        width={200}
        height={150}
        alt={name}
        className={`rounded-md object-cover`}
      />
      <div className={`flex h-full w-full flex-col gap-2 px-4`}>
        <h3 className="text-left font-semibold hover:text-blue-400">
          <a
            href={link}
            target="_blank"
            className="inline-flex items-center gap-1"
          >
            {name}
            <ArrowTopRight />
          </a>
        </h3>
        <p className="max-h-[75%] overflow-hidden text-justify text-sm text-gray-300">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;

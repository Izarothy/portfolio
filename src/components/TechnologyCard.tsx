import React from "react";

type Props = {
  technologyList: string[];
  title: string;
};

const TechnologyCard = ({ technologyList, title }: Props) => {
  return (
    <article className="min-h-full w-full rounded-md border border-secondary bg-dark py-8 text-center">
      <h3 className="mb-4 text-xl font-bold">{title}</h3>
      <ul className="flex flex-col gap-1 font-semibold text-gray-300">
        {technologyList?.map((technology) => {
          return <li key={technology}>{technology}</li>;
        })}
      </ul>
    </article>
  );
};

export default TechnologyCard;

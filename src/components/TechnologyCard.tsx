import React from "react";

type Props = {
  technologyList: string[];
  title: string;
};

const TechnologyCard = ({ technologyList, title }: Props) => {
  return (
    <article className="min-h-full w-full rounded-md bg-dark py-8 text-center">
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul>
        {technologyList?.map((technology) => {
          return <li key={technology}>{technology}</li>;
        })}
      </ul>
    </article>
  );
};

export default TechnologyCard;

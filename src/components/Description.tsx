import React from "react";

const Description = () => {
  return (
    <article className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-secondary pt-12 text-center ">
      <h2 className="text-3xl font-bold">It&apos;s nice to meet you.</h2>
      <p className=" max-w-2xl px-8 text-center text-lg text-gray-200 lg:px-0">
        I started programming in 2021, with a main focus on web development.
        Since then I&apos;ve created and helped create a few projects ranging
        from websites / web apps, Discord bots, desktop Electron apps, math
        libraries, python automation tools and even a FizzBuzz program in ASM.{" "}
        <br /> Most of them can be found on my Github page.
      </p>
    </article>
  );
};

export default Description;

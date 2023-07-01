import Head from "next/head";
import Header from "~/components/Header";
import NavBar from "~/components/NavBar";
import ProjectShowcase from "~/components/ProjectShowcase";
import TechnologyCard from "~/components/TechnologyCard";
import { languages, frameworks, miscellaneous } from "~/data/technologies.json";
import projects from "~/data/projects.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Izaroth - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <NavBar />
        <main className="mx-auto flex min-h-screen flex-col items-center pb-64">
          <Header />
          <section className="flex min-h-screen w-full flex-col bg-gradient-to-b py-8">
            <article className="flex min-h-[70vh] w-full flex-col items-center gap-4 bg-secondary pt-12 text-center sm:min-h-[60vh]">
              <h2 className="text-3xl font-bold">
                It&apos;s nice to meet you.
              </h2>
              <p className=" max-w-2xl px-8 text-center text-lg text-gray-200 lg:px-0">
                I started programming in 2021, with a main focus on web
                development. Since then I&apos;ve created and helped create a
                few projects ranging from websites / web apps, Discord bots,
                desktop Electron apps, math libraries, python automation tools
                and even a FizzBuzz program in ASM. <br /> Most of them can be
                found on my Github page.
              </p>
            </article>
            <section className="relative -top-32 flex min-h-[70vh] flex-col items-center gap-8 px-[15%] lg:flex-row lg:items-baseline lg:justify-between">
              <TechnologyCard title="Languages" technologyList={languages} />
              <TechnologyCard title="Frameworks" technologyList={frameworks} />
              <TechnologyCard
                title="Miscellaneous"
                technologyList={miscellaneous}
              />
            </section>
          </section>
          <section className="px-[15%] text-center">
            <h2 className="mb-4 text-3xl font-semibold">My Recent Projects</h2>
            <span className=" text-gray-300">
              Here are the more recent projects I&apos;ve worked on
            </span>
            <section className="grid grid-cols-1 gap-8 pt-16 xl:grid-cols-2">
              {projects?.map((project) => {
                return <ProjectShowcase {...project} key={project.name} />;
              })}
            </section>
          </section>
        </main>
      </>
    </>
  );
}

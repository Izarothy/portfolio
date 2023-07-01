import Head from "next/head";
import Header from "~/components/Header";
import NavBar from "~/components/NavBar";
import TechnologyCard from "~/components/TechnologyCard";
import { languages, frameworks, miscellaneous } from "~/data/technologies.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Izaroth - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <NavBar />
        <main className="mx-auto flex min-h-screen flex-col items-center">
          <Header />
          <section className="flex min-h-screen w-full flex-col bg-gradient-to-b py-8">
            <article className="flex min-h-[60vh] w-full flex-col items-center gap-4 bg-secondary py-4 text-center ">
              <h2 className="text-3xl font-bold">
                It&apos;s nice to meet you.
              </h2>
              <p className="max-w-2xl text-center text-lg">
                I started programming in 2021, with a main focus on web
                development. Since then I&apos;ve created and helped create a
                few projects ranging from websites / web apps, Discord bots,
                desktop Electron apps, math libraries, python automation tools
                and even a FizzBuzz program in ASM.
              </p>
            </article>
            <section className="relative -top-32 flex min-h-[80vh] justify-between gap-2 px-[15%]">
              <TechnologyCard title="Languages" technologyList={languages} />
              <TechnologyCard title="Frameworks" technologyList={frameworks} />
              <TechnologyCard
                title="Miscellaneous"
                technologyList={miscellaneous}
              />
            </section>
          </section>
        </main>
      </>
    </>
  );
}

import Head from "next/head";
import Header from "~/components/Header";
import ProjectCard from "~/components/ProjectCard";
import projects from "~/data/projects.json";
import Footer from "~/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Izaroth - Portfolio</title>
        <link rel="icon" href="/favicon-16.png" />
      </Head>
      <>
        <main className="mx-auto mt-24 flex min-h-screen w-screen max-w-[75vw] flex-col items-center bg-dark px-4 xl:max-w-[33vw]">
          <Header />

          <section className="flex w-full flex-col py-16">
            <h2 className="mb-4 text-left text-xl font-semibold">Projects</h2>

            <section className="flex flex-col gap-8 pt-6">
              {projects?.map((project) => {
                return <ProjectCard {...project} key={project.name} />;
              })}
            </section>
          </section>
          <Footer />
        </main>
      </>
    </>
  );
}

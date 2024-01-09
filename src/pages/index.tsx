import Head from "next/head";
import Header from "~/components/Header";
import NavBar from "~/components/NavBar";
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
        <NavBar />
        <main className="mx-auto flex min-h-screen w-screen flex-col items-center px-4 lg:max-w-[33vw]">
          <Header />

          <section className="flex w-full flex-col items-center py-16 text-center">
            <h2 className="mb-4 text-3xl font-semibold">Projects</h2>

            <section className="flex flex-col gap-8 pt-16">
              {projects?.map((project) => {
                return <ProjectCard {...project} key={project.name} />;
              })}
            </section>
          </section>
        </main>
        <Footer />
      </>
    </>
  );
}

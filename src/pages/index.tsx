import Head from "next/head";
import Header from "~/components/Header";
import NavBar from "~/components/NavBar";
import ProjectShowcase from "~/components/ProjectShowcase";
import TechnologyCard from "~/components/TechnologyCard";
import { languages, frameworks, miscellaneous } from "~/data/technologies.json";
import projects from "~/data/projects.json";
import Footer from "~/components/Footer";
import Description from "~/components/Description";

export default function Home() {
  return (
    <>
      <Head>
        <title>Izaroth - Portfolio</title>
        <link rel="icon" href="/favicon-16.png" />
      </Head>
      <>
        <NavBar />
        <main className="mx-auto flex min-h-screen flex-col items-center">
          <Header />
          <section className="flex min-h-screen w-full flex-col bg-gradient-to-b">
            <Description />
            <section className="flex min-h-screen flex-col items-center gap-8 px-[15%] py-8 lg:flex-row lg:items-baseline lg:justify-between">
              <TechnologyCard title="Languages" technologyList={languages} />
              <TechnologyCard title="Frameworks" technologyList={frameworks} />
              <TechnologyCard
                title="Miscellaneous"
                technologyList={miscellaneous}
              />
            </section>
          </section>
          <section className="flex w-full flex-col items-center bg-secondary px-[15%] py-16 text-center">
            <h2 className="mb-4 text-3xl font-semibold">My Recent Projects</h2>

            <section className="grid grid-cols-1 gap-8 pt-16 xl:grid-cols-2">
              {projects?.map((project) => {
                return <ProjectShowcase {...project} key={project.name} />;
              })}
            </section>
          </section>
        </main>
        <Footer />
      </>
    </>
  );
}

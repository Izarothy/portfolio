import Head from "next/head";
import Header from "~/components/Header";
import NavBar from "~/components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Izaroth - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <NavBar />
        <main className="flex min-h-screen flex-col items-center ">
          <Header />
        </main>
      </>
    </>
  );
}

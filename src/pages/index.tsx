import Head from "next/head";
import Header from "~/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Izaroth - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-dark text-white">
        <Header />
      </main>
    </>
  );
}

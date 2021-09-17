import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Exotic Auto Collection</title>
      </Head>
      <Hero />
    </div>
  );
}


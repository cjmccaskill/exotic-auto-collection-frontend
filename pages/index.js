import Head from "next/head";
import Hero from "../components/Hero";
import WelcomeBanner from "../components/WelcomeBanner";
import ImageBanner from "../components/ImageBanner";
import Finance from "../components/Finance";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Exotic Auto Collection</title>
      </Head>
      <Hero />
      <WelcomeBanner />
      <ImageBanner />
      <Finance />
    </div>
  );
}

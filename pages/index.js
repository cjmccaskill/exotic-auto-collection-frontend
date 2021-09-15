import { getAutos } from "../utils/api";
import Head from 'next/head'
import VehiclesList from "../components/VehiclesList";

export default function Home({ autos }) {
  return (
    <div>
      <Head>
        <title>Exotic Auto Collection</title>
      </Head>
      <VehiclesList autos={autos} />
    </div>
  );
}

export async function getStaticProps() {
  const autos = await getAutos();
  return { props: { autos } };
}

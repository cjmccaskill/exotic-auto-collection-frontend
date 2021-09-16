import Head from "next/head";
import { useRouter } from "next/router";
import { getAutos } from "../../utils/api";
import VehiclesList from "../../components/VehiclesList";
import CategoryButtons from "../../components/CategoryButtons";

export default function CurrentInventory({ autos, categories }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading Inventory...</div>;
  }

  return (
    <div className="flex flex-col justify-center bg-gray-200">
      <Head>
        <title>Current Inventory</title>
      </Head>
      <CategoryButtons categories={categories} />
      <VehiclesList autos={autos} />
    </div>
  );
}

export async function getStaticProps() {
  const autos = await getAutos();
  return { props: { autos } };
}

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import VehiclesList from "../../components/VehiclesList";
import { getCategories, getCategory } from "../../utils/api";
import { TiArrowLeftOutline } from "react-icons/ti";

export default function CategoryPage({ category }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  return (
    <div>
      <Head>
        <title>{category.name}</title>
      </Head>
      <Link href="/autos/currentinventory" passHref>
        <button className="text-sm font-bold mt-2 mx-4 rounded-full py-1 px-2 flex items-bottom hover:text-green-400 hover:bg-black hover:bg-opacity-80 hover:shadow-sm w-auto">
          <TiArrowLeftOutline className="text-xl mr-1" />
          Back to inventory
        </button>
      </Link>
      <VehiclesList autos={category.autos} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug);
  return { props: { category } };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map((category) => {
      return {
        params: { slug: category.slug },
      };
    }),
    fallback: true,
  };
}

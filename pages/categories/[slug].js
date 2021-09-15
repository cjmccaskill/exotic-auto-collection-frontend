import Head from "next/head";
import { useRouter } from "next/router";
import VehiclesList from "../../components/VehiclesList";
import { getCategories, getCategory } from "../../utils/api";

const CategoryPage = ({ category }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  return (
    <div>
      <Head>
        <title>{category.name} autos</title>
      </Head>
      <VehiclesList autos={category.autos} />
    </div>
  );
};

export default CategoryPage;

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

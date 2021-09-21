import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAutos, getAuto } from "../../utils/api";
import { TiArrowLeftOutline } from "react-icons/ti";
import Image from "next/image";

export default function AutoPage({ auto }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading auto...</div>;
  }

  return (
    <>
      <Head>
        <title>{auto.title}</title>
      </Head>
      <Link href="/autos/currentinventory" passHref>
        <button className="text-sm font-bold mx-4 mt-2 rounded-full py-1 px-2 flex items-bottom hover:text-green-400 hover:bg-black hover:bg-opacity-80 hover:shadow-sm w-auto">
          <TiArrowLeftOutline className="text-xl mr-1" />
          Back to inventory
        </button>
      </Link>
      <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <div className="m-auto w-full">
          <Image
            src={auto.image[0].url}
            layout="responsive"
            width={auto.image[0].width}
            height={auto.image[0].height}
            alt={auto.title}
          />
        </div>
        <div className="w-full p-5 flex flex-col justify-between">
          <div>
            <h4 className="mt-1 pl-2 font-semibold text-lg leading-tight truncate text-gray-700">
              {auto.title} - ${auto.price}
            </h4>
            <div className="mt-1 p-2 shadow-xl rounded border border-gray-300 text-gray-600">
              {auto.description}
            </div>
          </div>
          <button
            className="snipcart-add-item focus:bg-gray-400 focus:outline-none bg-gray-800 text-gray-100 focus:text-gray-800 font-medium text-sm py-2 px-8 border border-gray-400 hover:shadow-lg shadow-md transform hover:bg-gray-700 hover:translate-x-0.5 hover:translate-y-0.5 transition-200 rounded uppercase min-w-sm max-w-md mx-auto mt-2"
            data-item-id={auto.id}
            data-item-price={auto.price}
            data-item-url={router.asPath}
            data-item-description={auto.description}
            data-item-specs={auto.specs}
            data-item-image={auto.image[0].url}
            data-item-name={auto.title}
            v-bind="customFields"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const auto = await getAuto(params.slug);
  return { props: { auto } };
}

export async function getStaticPaths() {
  const autos = await getAutos();
  return {
    paths: autos.map((auto) => {
      return {
        params: { slug: auto.slug },
      };
    }),
    fallback: true,
  };
}

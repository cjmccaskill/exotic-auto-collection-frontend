import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "../../components/Image";
import { getAutos, getAuto } from "../../utils/api";
import { getStrapiMedia } from "../../utils/media";
import { TiArrowLeftOutline } from "react-icons/ti";

export default function AutoPage({ auto }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading auto...</div>;
  }

  return (
    <>
      <Head>
        <title>{auto.title} auto</title>
      </Head>
      <Link href="/autos/currentinventory" passHref>
        <button className="text-sm font-bold mx-4 mt-2 rounded-full py-1 px-2 flex items-bottom hover:text-green-400 hover:bg-black hover:bg-opacity-80 hover:shadow-sm w-auto">
          <TiArrowLeftOutline className="text-xl mr-1" />
          Back to inventory
        </button>
      </Link>
      <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <div className="m-auto w-full">
          <Image media={auto.image} alt={auto.title} />
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

          {auto.status === "published" ? (
            <button
              className="snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow"
              data-item-id={auto.id}
              data-item-price={auto.price}
              data-item-url={router.asPath}
              data-item-description={auto.description}
              data-item-specs={auto.specs}
              data-item-image={getStrapiMedia(auto.image.url)}
              data-item-name={auto.title}
              v-bind="customFields"
            >
              Add to cart
            </button>
          ) : (
            <div className="text-center mr-10 mb-1" v-else="true">
              <div
                className="mt-4 p-2 bg-green-800 items-center text-green-100 leading-none lg:rounded-full flex lg:inline-flex"
                role="alert"
              >
                <span className="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                  Coming soon...
                </span>
                <span className="font-semibold mr-2 text-left flex-auto">
                  This vehicle is not available yet.
                </span>
              </div>
            </div>
          )}
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

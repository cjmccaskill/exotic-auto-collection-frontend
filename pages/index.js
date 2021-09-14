import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";

export default function Home({ autos }) {
  return (
    <div className="p-10">
      <div className="grid grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-5">
        {autos.map((auto) => (
          <Image url={auto.image.url} key={auto.id} />
        ))}
      </div>
    </div>
  );
}

function Image({ url }) {
  return (
    <div>
      {/* image itself */}
      <div className="relative">
        {/* image shadow */}
        <div className="absolute h-full w-full -right-2 -bottom-2 bg-black rounded-lg"></div>
        <img
          src={`http://localhost:1337${url}`}
          className="relative rounded-lg transform hover:translate-x-1 hover:translate-y-1 transition"
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/autos");
  const autos = await res.json();

  return { props: { autos } };
}

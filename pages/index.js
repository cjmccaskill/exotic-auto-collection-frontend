import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home({ autos }) {
  console.log({ autos });
  return <div>
    {autos.map((auto, index) => (
      <div key={auto.id}>
        <img src={`http://localhost:1337${auto.image.url}`}/>
      </div>
    ))}
  </div>;
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/autos");
  const autos = await res.json();

  return { props: { autos } };
}

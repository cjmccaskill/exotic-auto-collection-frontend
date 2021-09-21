import "tailwindcss/tailwind.css";
import Head from "next/head";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout categories={pageProps.categories}>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css"
        />
        <script
          async
          src="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js"
        />
      </Head>
      <Component {...pageProps} />
      <div
        hidden
        id="snipcart"
        data-api-key="N2RkYTZiMzgtMmNiYS00YThjLWFhYjAtZWVjODI3YTYyYWY0NjM3NjczMzkyNjAxMTUyOTgw"
      />
    </Layout>
  );
}

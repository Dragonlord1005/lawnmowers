import type { NextPage } from "next";
import Head from "next/head";
import { Text } from "@nextui-org/react";
import dynamic from "next/dynamic";
// import Price from "../components/pricing/pricing";

const Price = dynamic(() => import('../components/pricing/pricing'), {
  suspense: true,
})

const Pricing: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Pricing</title>
          <meta name="description" content="Our Pricing" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Text h1>Pricing</Text>
          <Price />
        </main>
      </div>
    </>
  );
};

export default Pricing;

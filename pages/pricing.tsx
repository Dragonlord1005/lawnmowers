import type { NextPage } from "next";
import Head from "next/head";
import { Text, Loading } from "@nextui-org/react";
import dynamic from "next/dynamic";
// import Price from "../components/pricing/pricing";
import { Suspense } from "react";

const Price = dynamic(() => import('../components/price/price'), {
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
          <Suspense fallback={<Loading />}>
            <Price />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default Pricing;

import type { NextPage } from "next";
import Head from "next/head";
import { Text, Loading, Container } from "@nextui-org/react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Pricing: NextPage = () => {
  const Price = dynamic(() => import("../components/price/price"), {
    ssr: true,
  });

  return (
    <div>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="Our Pricing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
      <Text
        h1
        css={{
          textAlign: "center",
        }}
      >
        Pricing
      </Text>
      <Suspense fallback={<Loading />}>
        <Price />
      </Suspense>
      </Container>
    </div>
  );
};

export default Pricing;

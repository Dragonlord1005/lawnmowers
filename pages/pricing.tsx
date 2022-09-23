import type { NextPage } from "next";
import Head from "next/head";
import { Text, Container } from "@nextui-org/react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Price = dynamic(() => import("../components/price/price"), {
  suspense: true,
  ssr: true,
});

const Pricing: NextPage = () => {
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
          <Suspense>
            <Price />
          </Suspense>
        </Container>
      </div>
  );
};

export default Pricing;

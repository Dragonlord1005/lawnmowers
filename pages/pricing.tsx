import type { NextPage } from "next";
import Head from "next/head";
import { Text, Loading, Container } from "@nextui-org/react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Script from "next/script";

const Pricing: NextPage = () => {
  const Price = dynamic(() => import("@/components/price/price"), {
    suspense: true,
  });

  return (
    <div>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="Our Pricing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-83CT70CLK7"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-83CT70CLK7');
        `}
        </Script>

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

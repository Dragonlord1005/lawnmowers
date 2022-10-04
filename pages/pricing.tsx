import type { NextPage } from "next";
import Head from "next/head";
import { Text, Loading, Container } from "@nextui-org/react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Script from "next/script";

const Pricing: NextPage = () => {
  const Price = dynamic(() => import("@/components/price/price"), {
    suspense: true,
    ssr: true,
  });

  return (
    <div>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="Our Pricing" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {/* TODO: Use webworkers */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-83CT70CLK7"
          strategy="afterInteractive"
        />
        {/* <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-83CT70CLK7');
        `}
        </Script> */}

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

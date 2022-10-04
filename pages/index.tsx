import type { NextPage } from "next";
import Script from "next/script";
import Head from "next/head";
import NextLink from "next/link";
import { Text, Link, Spacer, Container } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Lawnmowers</title>
          <meta name="description" content="We mow lawns" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container
          alignItems="center"
          display="flex"
          justify="center"
          direction="column"
        >
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-83CT70CLK7"
            strategy="worker"
          />
          <Script id="google-analytics" strategy="worker">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-83CT70CLK7');
        `}
          </Script>

          <Text h1>Lawnmowers of Valentine</Text>
          <Text h2>We mow Lawns.</Text>
          <NextLink href="/pricing" prefetch={false} passHref>
            <Link>Pricing</Link>
          </NextLink>
          <Spacer />
          <NextLink href="/contact" prefetch={false} passHref>
            <Link>Contact Us</Link>
          </NextLink>
        </Container>
      </div>
    </>
  );
};

export default Home;

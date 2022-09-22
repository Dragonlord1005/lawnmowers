import type { NextPage } from "next";
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

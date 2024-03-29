import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { Text, Link, Container } from "@nextui-org/react";

const Contact: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Contact Us</title>
          <meta name="description" content="Where to contact us" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container
          alignItems="center"
          display="flex"
          justify="center"
          direction="column"
        >
          <Text h1>Contact Us</Text>
          <Text h2>Where to contact us:</Text>
          <Text h3>Email: lawnmowers.of.valentine@gmail.com</Text>
          <Text h3>Phone: 801-693-8079</Text>
          <Text h4>
            Befor reaching out we ask that you please review our terms of
            service
          </Text>
          <NextLink href="/terms" prefetch={false} passHref>
            <Link>Terms of Service</Link>
          </NextLink>
          <br />
          <NextLink href="/pricing" prefetch={false} passHref>
            <Link>Pricing</Link>
          </NextLink>
        </Container>
      </div>
    </>
  );
};

export default Contact;

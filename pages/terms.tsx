import type { NextPage } from "next";
import Head from "next/head";
import { Container, Text } from "@nextui-org/react";

const Terms: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Terms of Service</title>
          <meta name="description" content="Terms of Service" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Container alignItems="center" display="flex" justify="center" direction="column">
          <Text h1>
            Terms of Service
          </Text>
          <Text h4>
            We ask that you read our terms of service before using our services.
          </Text>
          <Text>
            We reserve the right to change our terms of service at any time.
          </Text>
          <Text>
            We are a two person team that are working out from home, we have no
            office, if you have to contact us please email us at
            lawnmowers.of.valentine@gmail.com
          </Text>
          <Text>
            Under no circumstance will we ever work for free or for experience,
            payment is required upfront for our services. If you are not happy
            with the work we provided, we ask that you tell us everything that
            is wrong with the work while we are still there, all at once, we do
            not do fixup jobs, if you have any issues tell us then, and we will
            do our best to fix it.
          </Text>
        </Container>
      </div>
    </>
  );
};

export default Terms;

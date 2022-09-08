import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";
import { Text, Link, Spacer } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Lawnmowers</title>
          <meta name="description" content="We mow lawns" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Text h1>Lawnmowers of Valentine</Text>
          <Text h2>We mow Lawns.</Text>
          <NextLink href="/pricing">
            <Link>Pricing</Link>
          </NextLink>
          <Spacer />
          <NextLink href="/contact">
            <Link>Contact Us</Link>
          </NextLink>
        </main>
      </div>
    </>
  );
};

export default Home;

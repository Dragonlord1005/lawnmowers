import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";
import { Text, Button, Link } from "@nextui-org/react";

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
          <Text>Lawnmowers of Valentine</Text>
          <Text>We mow Lawns.</Text>
          <NextLink href="/pricing">
            <Link>
              <Button>Pricing</Button>
            </Link>
          </NextLink>
          <br />
          <NextLink href="/contact">
            <Button>Contact Us</Button>
          </NextLink>
        </main>
      </div>
    </>
  );
};

export default Home;

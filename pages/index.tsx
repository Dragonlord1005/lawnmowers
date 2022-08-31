import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Text, Button } from "@nextui-org/react";

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
          <Text>
            Lawnmowers of Valentine
          </Text>
          <Text>We mow Lawns.</Text>
          <NextLink href="/pricing" passHref>
            <Button>Pricing</Button>
          </NextLink>
          <br />
          <Link href="/contact" passHref>
            <Button>Contact Us</Button>
          </Link>
        </main>
      </div>
    </>
  );
};

export default Home;

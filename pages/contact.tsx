import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";
import { Text, Link } from "@nextui-org/react";


const Contact: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Contact Us</title>
          <meta name="description" content="Where to contact us" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Text h1>
            Contact Us
          </Text>
          <Text h2>Where to contact us:</Text>
          <Text h3>Email: lawnmowers.of.valentine@gmail.com</Text>
          <Text h3>Phone: 801-693-8079</Text>
          <Text h4>
            Befor reaching out we ask that you please review our terms of
            service
          </Text>
          <NextLink href="/terms" passHref>
            <Link>Terms of Service</Link>
          </NextLink>
          <br />
          <NextLink href="/pricing">
            <Link>Pricing</Link>
          </NextLink>
        </main>
      </div>
    </>
  );
};

export default Contact;

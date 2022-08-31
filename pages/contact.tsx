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
          <Text>
            Contact Us
          </Text>
          <Text>Where to contact us:</Text>
          <Text>Email: lawnmowers.of.valentine@gmail.com</Text>
          <Text>Phone: 801-693-8079</Text>
          <Text>
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

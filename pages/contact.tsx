import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { createStyles, Title, Text, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 100,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },
}));

const Contact: nextPage = () => {
  const { classes } = useStyles();
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Contact Us</title>
          <meta name="description" content="Where to contact us" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Title align="center" className={classes.title}>
            Contact Us
          </Title>
          <Text align="center">Where to contact us:</Text>
          <Text>Email: lawnmowers.of.valentine@gmail.com</Text>
          <Text>Phone: 801-693-8079</Text>
          <Text>
            Befor reaching out we ask that you please review our terms of
            service
          </Text>
          <Link href="/terms" passHref>
            <Button component="a">Terms of Service</Button>
          </Link>
          <br />
          <Link href="/pricing" passHref>
            <Button component="a">Pricing</Button>
          </Link>
        </main>
      </div>
    </>
  );
};

export default Contact;

// Next.js app using mantine and is about pricing
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
    paddingBottom: 50,

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

const Pricing: NextPage = () => {
    const { classes } = useStyles();
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <title>Pricing</title>
                    <meta name="description" content="Our Pricing" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <Title align="center" className={classes.title}>
                        Pricing
                    </Title>
                    <Text>
                        It is $10 for the front lawn, $13 for both the front and back, and $15 for the front, back, and trimming.
                    </Text>
                </main>
            </div>
        </>
    );
};

export default Pricing;
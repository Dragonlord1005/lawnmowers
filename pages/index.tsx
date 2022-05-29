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

const Home: NextPage = () => {
  const { classes } = useStyles();
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Lawnmowers</title>
          <meta name="description" content="We mow lawns" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Title align="center" className={classes.title}>
            Lawnmowers of Valentine
          </Title>
          <Text align="center">We mow Lawns.</Text>
          <Link href="/pricing" passHref>
            <Button component="a">Pricing</Button>
          </Link>
        </main>
      </div>
    </>
  );
};

export default Home;

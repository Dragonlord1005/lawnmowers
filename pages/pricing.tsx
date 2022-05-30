// Next.js app using mantine and is about pricing
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { createStyles, Title, Text, Button, Table } from "@mantine/core";

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

const price = [
  { Area: "Front Lawn", Price: "10" },
  { Area: "Back Lawn and Front Lawn", Price: "13" },
  { Area: "Back Lawn, Front Lawn, and trimming", Price: "15" },
]

const Pricing: NextPage = () => {
  const { classes } = useStyles();
  const rows = price.map((price) => (
    // eslint-disable-next-line react/jsx-key
    <tr>
      <td>{price.Area}</td>
      <td>{price.Price}</td>
    </tr>
  ));
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
          <Table>
            <thead>
              <tr>
                <th>Area</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </Table>
        </main>
      </div>
    </>
  );
};

export default Pricing;

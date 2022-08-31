// Next.js app using mantine and is about pricing
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Text, Table }

const price = [
  { id: 1, Area: "Front Lawn", Price: "10" },
  { id: 2, Area: "Back Lawn and Front Lawn", Price: "13" },
  { id: 3, Area: "Back Lawn, Front Lawn, and trimming", Price: "15" },
];

const Pricing: NextPage = () => {
  const rows = price.map((price) => (
    <tr key={price.id}>
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
          <Text>
            Pricing
          </Text>
          <Table>
            <thead>
              <tr>
                <th>Area</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </main>
      </div>
    </>
  );
};

export default Pricing;

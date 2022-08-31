// Next.js app using mantine and is about pricing
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Text, Table } from "@nextui-org/react";

const price = [
  { id: 1, Area: "Front Lawn", Price: "10" },
  { id: 2, Area: "Back Lawn and Front Lawn", Price: "13" },
  { id: 3, Area: "Back Lawn, Front Lawn, and trimming", Price: "15" },
];

const Pricing: NextPage = () => {
  const columns = [
    {
      key: "area",
      label: "Area",
    },
    {
      key: "price",
      label: "Price",
    },
  ];
  const rows = [
    {
      key: "1",
      area: "Front Lawn",
      price: "$10"
    },
    {
      key: "2",
      area: "Back Lawn and Front Lawn",
      price: "$13"
    },
    {
      key: "3",
      area: "Back Lawn and Front Lawn and Trimming",
      price: "$15"
    }
  ]
  return (
    <>
      <div>
        <Head>
          <title>Pricing</title>
          <meta name="description" content="Our Pricing" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Text h1>
            Pricing
          </Text>
          <Table>
            <Table.Header columns={columns}>
              {(column) => (
              <Table.Column key={column.key}>{column.label}</Table.Column>
              )}
            </Table.Header>
            <Table.Body items={rows}>
              {(item) => (
          <Table.Row key={item.key}>
            {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
          </Table.Row>
        )}
            </Table.Body>
          </Table>
        </main>
      </div>
    </>
  );
};

export default Pricing;

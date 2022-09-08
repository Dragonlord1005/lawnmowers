import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";
import { Text, Link, Spacer } from "@nextui-org/react";

const Images: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Images</title>
          <meta name="description" content="Pictures" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <Text h1>Lawnmowers of Valentine</Text>
          <Text h2>We mow Lawns.</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla
            augue, porttitor in sollicitudin sit amet, tempor a odio. Sed
            tincidunt mollis scelerisque. Praesent ut elit quis metus laoreet
            auctor. Praesent sed laoreet turpis. Morbi feugiat euismod eros,
            molestie aliquam est convallis quis. Sed molestie elit et diam
            efficitur, nec dapibus dui aliquam. Ut pharetra nec arcu a euismod.
            Duis varius sollicitudin arcu, vestibulum semper risus volutpat
            pharetra. Nulla facilisi. Aliquam at pretium dolor, ac placerat mi.
            Morbi a convallis ante. Etiam ipsum ligula, pretium nec pulvinar
            vulputate, molestie ut dui. Aliquam euismod cursus mattis. Vivamus
            bibendum, mauris ac rutrum imperdiet, sapien orci ultricies nisi,
            non porta nunc nisi a odio. Morbi sodales nulla blandit, tincidunt
            lacus eget, auctor augue. Vivamus sit amet libero massa.
            hi
          </Text>
        </main>
      </div>
    </>
  );
};

export default Images;

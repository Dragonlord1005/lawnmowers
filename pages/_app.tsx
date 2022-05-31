import "../styles/globals.css";
import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import Layout from "../components/layout";
import { MantineProvider } from "@mantine/core";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp(props: AppProps) {
  const { Component, pageProps }: AppPropsWithLayout = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    
  );
}

export default MyApp;

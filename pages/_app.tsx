// import "../styles/globals.css";
import { ReactElement, ReactNode, Suspense } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import Layout from "../components/layout";
import { NextUIProvider, createTheme, Loading } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp(props: AppProps) {
  const { Component, pageProps }: AppPropsWithLayout = props;
  // const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Layout>
          <Suspense fallback={<Loading />}>
            <Component {...pageProps} />
          </Suspense>
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;

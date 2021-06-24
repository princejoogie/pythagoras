import React from "react";
import Head from "next/head";
import { DataProvider } from "DataContext";
import { AdminDataProvider } from "AdminDataContext";
import "styles/App.scss";
import "styles/nprogress.scss";
import "styles/SelectLocation.scss";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="Pythagoras" content="Specialty Coffee & Tea" />
        <title>Pythagoras Coffee & Tea</title>
      </Head>
      <DataProvider>
        <AdminDataProvider>
            <Component {...pageProps} />
        </AdminDataProvider>
      </DataProvider>
    </>
  );
}

export default MyApp;

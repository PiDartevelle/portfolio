import Head from "next/head";
import React from "react";
import ScrollToTop from "react-scroll-to-top";

function Layout({ children, pageTitle }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="Pierre's awesome portfolio"
          content="Generated by me, myself and I"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <ScrollToTop smooth />
    </>
  );
}

export default Layout;

import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../shared/theme";
import { Center } from "../components/Center";
import { wrapper } from "../store";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>

    <GlobalStyle theme={theme} />

    <Head>
      <title>What's Next?!</title>
    </Head>

    <Header />

    <main className="main">
      <Center>
        <Component {...pageProps} />
      </Center>
    </main>
    
    <Footer />
  </ThemeProvider>
);

export default wrapper.withRedux(MyApp);

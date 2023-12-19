import React from "react";
import { ServerStyleSheet } from "styled-components";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="The Next generation of a news feed"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Permanent+Ma\
         rker&display=swap"
            rel="stylesheet"
          />

          {this.props.styles}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

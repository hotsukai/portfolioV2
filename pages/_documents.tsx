import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@300&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="開發 功太郎のポートフォリオ" />
          <meta
            name="keywords"
            content="開發功太郎, かいほつこうたろう, Kaihotsu Kotaro"
          />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html lang="vi">
      <Head>
        <link href="/static/favicons/favicon.ico" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link href="/static/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/static/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/static/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link color="#191919" href="/static/favicons/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="#4A5249" name="theme-color" />
        <meta content="#4A5249" name="msapplication-TileColor" />
        <meta content="/static/favicons/browserconfig.xml" name="msapplication-config" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document

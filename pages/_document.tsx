import Document, { Html, Head, Main, NextScript } from 'next/document'
const APP_NAME = 'marivon_pages'
const APP_DESCRIPTION = 'Homepage marIvon'

export default class MyDocument extends Document {

  // Let op: schakel deze uit als "404 | Page not found" verschijnt en initial-props niet gebruikt worden (20200730)
  // Anders melding in functie _document.getPolyfillScripts() (eigenschap filter bij onbekende props)
  // Die melding wordt wel opgelost bij gebruik van lokale node_modules, niet in centrale map (verschil nog niet gevonden)

  static async getInitialProps(ctx: any) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <Html lang='nl' dir='ltr'>
        <Head>
          <meta charSet="utf-8" />
          <meta name='application-name' content={APP_NAME} />
          <meta name='description' content={APP_DESCRIPTION} />
          <meta name="keywords" content="marIvon, Marinus Vonhof, datamodel, otl, ontologie, semantisch web, rdf, node.js, next.js" />
          <meta name="author" content="marIvon" />
          {/* in _app.tsx: <title>marIvon</title> */}
          <link rel="shortcut icon" href='/favicon-16.webp' type="image/webp" />
          <link rel="icon" href="/favicon-16.webp" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}


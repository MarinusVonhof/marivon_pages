import '../styles/globals.css'
import '../styles/marivon.scss'

import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>marIvon</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp

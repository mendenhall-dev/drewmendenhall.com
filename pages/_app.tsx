import Head from 'next/head'
import {Fragment} from 'react'
import {StyleSheetManager} from 'styled-components'

import type {AppProps} from 'next/app'

import GlobalStyle from '../styles/GlobalStyle'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <StyleSheetManager>
      <Fragment>
        <GlobalStyle />
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="apple-touch-icon" href="/favicon-180.png" />
        </Head>
        <Component {...pageProps} />
      </Fragment>
    </StyleSheetManager>
  )
}

export default MyApp

import Head from 'next/head'
import {Fragment} from 'react'

import StyledComponentsRegistry from '../lib/registry';

const RootLayout = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <Fragment>
          <Head>
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="apple-touch-icon" href="/favicon-180.png" />
          </Head>
          <body>
            {children}
          </body>
        </Fragment>
      </StyledComponentsRegistry>
    </html>
  )
}

export default RootLayout

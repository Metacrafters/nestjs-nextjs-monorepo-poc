import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Happy } from '@lms/common'

function MyApp({ Component, pageProps }: AppProps) {
  Happy()
  return <Component {...pageProps} />
}

export default MyApp

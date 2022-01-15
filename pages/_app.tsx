import { AppProps } from 'next/app'
import '../src/styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

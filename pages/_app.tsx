import type { AppProps } from 'next/app'
import { Layout } from '../components'
import '../styles/style.scss'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp

import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Ryzenix Blog</title>
        <meta name="description" content="A blog page of Ryzenix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Container>
  )
}

export default Home

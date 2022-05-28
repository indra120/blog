import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '@mui/material'
import style from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <Container className={style.container}>
      <Head>
        <title>Ryzenix Blog</title>
        <meta name="description" content="A blog page of Ryzenix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Container>
  )
}

export default Home

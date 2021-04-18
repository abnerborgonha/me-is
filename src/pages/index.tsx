import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>abner.is</title>
      </Head>

      <h1>abner.is()</h1>
      <p>This is my profile</p>
    </Container>
  )
}

export default Home

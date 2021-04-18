import React from 'react'
import Head from 'next/head'

import { Container, Name } from '../styles/pages/Home'

import Header from '../components/Header'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>abner.is</title>
      </Head>
      <Header />

      <img
        src="doctor-js.png"
        alt="Doctor JS"
        style={{
          height: '50%',
          width: 'auto'
        }}
      />
      <h1>abner.is()</h1>
      <Name>Abnêr Borgonha</Name>
      <p>This is my profile</p>
    </Container>
  )
}

export default Home

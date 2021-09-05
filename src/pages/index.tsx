import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { Container, Content } from '../styles/pages/Home'

import Typewriter from 'typewriter-effect'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>abner.is</title>
      </Head>
      <Header />
      <Content>
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString("<a>Hi, my name is Abnêr. I'm a</a> \n")
              .typeString('<a><strong>Software developer</strong></a>')
              .deleteChars(18)
              .pauseFor(1000)
              .typeString('<a><strong>Co-fouder of Deeplin</strong></a>')
              .deleteChars(21)
              .pauseFor(1000)
              .typeString('<a><strong>Nerd</strong></a>')
              .deleteChars(4)
              .pauseFor(1000)
              .typeString('<a><strong>Dad</strong></a>')
              .deleteChars(4)
              .pauseFor(1000)
              .typeString('<s><strong>Batman</strong></s>')
              .deleteChars(6)
              .pauseFor(1100)
              .typeString('<a><strong>Software developer</strong></a>')
              .start()
          }}
        />
      </Content>
    </Container>
  )
}

export default Home

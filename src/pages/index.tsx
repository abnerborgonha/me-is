import React from 'react'
import Head from 'next/head'
import Typewriter from 'typewriter-effect'

import Header from '../components/Header'
import Button from '../components/Button'

import { Container, Content, ContainerButton } from '../styles/pages/Home'

const Home: React.FC = () => {
  const TIME_OF_PAUSE = 1000

  return (
    <Container>
      <Head>
        <title>.me</title>
      </Head>
      <Header />
      <Content>
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString("<a>Hi, my name is Abnêr. I'm a</a> \n")
              .typeString('<a><strong>Software developer</strong></a>')
              .deleteChars(18)
              .pauseFor(TIME_OF_PAUSE)
              .typeString('<a><strong>Co-founder of Deeplin</strong></a>')
              .deleteChars(21)
              .pauseFor(TIME_OF_PAUSE)
              .typeString('<a><strong>Nerd</strong></a>')
              .deleteChars(4)
              .pauseFor(TIME_OF_PAUSE)
              .typeString('<a><strong>Dad</strong></a>')
              .deleteChars(4)
              .pauseFor(TIME_OF_PAUSE)
              .typeString('<s><strong>Batman</strong></s>')
              .deleteChars(6)
              .pauseFor(TIME_OF_PAUSE)
              .typeString('<a><strong>Software developer.</strong></a>')
              .start()
          }}
        />
      </Content>
      <ContainerButton>
        <Button label="About me" />
        <a>or</a>
        <Button label="Techs I work" />
      </ContainerButton>
    </Container>
  )
}

export default Home

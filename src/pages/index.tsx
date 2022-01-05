import Head from 'next/head'

import Button from '../components/Button'
import Typewriter from '../components/Typewriter'
import SocialMidia from '../components/SocialMidia'

import {
  Container,
  ContainerButton,
  ContainerTypewriter,
  ContainerSocielMidia
} from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>.me</title>
      </Head>
      <ContainerTypewriter>
        <Typewriter />
      </ContainerTypewriter>
      <ContainerButton>
        <Button label="About me" />
        <a>or</a>
        <Button label="Techs I work" />
      </ContainerButton>
      <ContainerSocielMidia>
        <SocialMidia />
      </ContainerSocielMidia>
    </Container>
  )
}
export default Home

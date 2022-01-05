import Head from 'next/head'

import Button from '../components/Button'
import Typewriter from '../components/Typewriter'

import { Container, Content, ContainerButton } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>.me</title>
      </Head>
      <Content>
        <Typewriter />
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

import Head from 'next/head'
import { useRef } from 'react'

import Button from '../components/Button'
import Typewriter from '../components/Typewriter'
import SocialMidia from '../components/SocialMidia'

import {
  Container,
  ContainerButton,
  ContainerTypewriter,
  ContainerSocielMidia
} from '../styles/pages/Home'
import Modal, { IHandleVisibleOption, IModalHandles } from '../components/Modal'
import Profile from '../components/Profile'
const Home: React.FC = () => {
  const modalRef = useRef<IModalHandles>()

  const handleSetModalVisible = (stateOptionModal: IHandleVisibleOption) => {
    modalRef.current.handleVisible(stateOptionModal)
  }

  const handleOpenCurriculum = () => {
    window.open('curriculum.pdf')
  }

  return (
    <>
      <Head>
        <title>abner.me</title>
      </Head>
      <Container>
        <Profile />
        <ContainerTypewriter>
          <Typewriter />
        </ContainerTypewriter>
        <ContainerButton>
          <Button
            label="About me"
            onClick={() => handleSetModalVisible('visible')}
          />
          <span>or</span>
          <Button label="Curriculum" onClick={handleOpenCurriculum} />
        </ContainerButton>
        <Modal ref={modalRef} />
        <ContainerSocielMidia>
          <SocialMidia />
        </ContainerSocielMidia>
      </Container>
    </>
  )
}
export default Home

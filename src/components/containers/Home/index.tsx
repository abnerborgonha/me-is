import React, { useRef } from 'react'

import Button from '../../global/Button'
import Profile from '../../global/Profile'
import Typewriter from './Typewriter'
import HomeModalContent from './HomeModalContent'
import SocialMidia from '../../global/SocialMidia'
import Modal, { IHandleVisibleOption, IModalHandles } from '../../global/Modal'

import {
  Container,
  ContainerButton,
  ContainerTypewriter,
  ContainerSocielMidia
} from './styles'

import constantsValueToHomePage from '../../../constants/containers/home'

const Home: React.FC = () => {
  const modalRef = useRef<IModalHandles>()

  const handleSetModalVisible = (stateOptionModal: IHandleVisibleOption) => {
    modalRef.current.handleVisible(stateOptionModal)
  }

  const handleOpenCurriculum = () => {
    window.open(constantsValueToHomePage.curriculumPath)
  }

  return (
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

      <Modal ref={modalRef} modalContent={HomeModalContent} />

      <ContainerSocielMidia>
        <SocialMidia />
      </ContainerSocielMidia>
    </Container>
  )
}

export default Home

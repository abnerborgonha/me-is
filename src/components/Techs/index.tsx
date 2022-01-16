import React from 'react'

import techs from './techs'
import { Container } from './styles'

const Techs: React.FC = () => {
  return (
    <Container>
      {techs.map((tech, index) => (
        <>
          <a key={`${tech}_${index}`} href={tech.url} target="blank">
            {React.createElement(tech.icon)}
          </a>
        </>
      ))}
    </Container>
  )
}

export default Techs

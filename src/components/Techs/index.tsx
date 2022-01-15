import React from 'react'

import techs from './techs'
import { Container } from './styles'

const Techs: React.FC = () => {
  return (
    <Container>
      {techs.map(tech => (
        <>
          <a href={tech.url} target="blank">
            {React.createElement(tech.icon)}
          </a>
        </>
      ))}
    </Container>
  )
}

export default Techs

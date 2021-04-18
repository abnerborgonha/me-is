import React from 'react'

import { ContainerHeader, Navbar, Logo } from './styles'

const HeaderWeb: React.FC = () => {
  return (
    <ContainerHeader>
      <Navbar>
        <Logo>is()</Logo>
        <ul>
          <li>.is()</li>
          <li>.work()</li>
          <li>.about()</li>
          <li>.contact()</li>
        </ul>
      </Navbar>
    </ContainerHeader>
  )
}

export default HeaderWeb

import React, { useState } from 'react'
import { GithubIcon, LinkedinIcon } from '../../styles/icons/styles'
import HamburgerMenu from 'react-hamburger-menu'
import { Menu, ListMenu, SocialMidia, Navbar } from './styles'

const Header: React.FC = () => {
  const [menu, setMenu] = useState(true)

  return (
    <>
      <Navbar>
        <HamburgerMenu
          isOpen={menu}
          menuClicked={() => setMenu(!menu)}
          color="#fff"
        />
      </Navbar>
      <Menu open={menu}>
        <ListMenu>
          <a href="">.is()</a>
          <a href="">.work()</a>
          <a href="">.contact()</a>
        </ListMenu>
        <SocialMidia>
          <GithubIcon to="http://github.com/abnerborgonha" />
          <LinkedinIcon />
        </SocialMidia>
      </Menu>
    </>
  )
}

export default Header

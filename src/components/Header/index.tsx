import React, { useState } from 'react'
import HamburgerMenu from 'react-hamburger-menu'

import theme from '../../styles/theme'
import { Menu, ListMenu, SocialMidia, Navbar } from './styles'
import { GithubIcon, LinkedinIcon } from '../../styles/icons/styles'

const Header: React.FC = () => {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <Navbar>
        <HamburgerMenu
          isOpen={menu}
          menuClicked={() => setMenu(!menu)}
          color={theme.colors.text}
        />
      </Navbar>
      <Menu open={menu}>
        <ListMenu>
          <a href="">.about()</a>
          <a href="">.tech()</a>
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

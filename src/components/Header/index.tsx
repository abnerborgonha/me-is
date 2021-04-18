import React from 'react'
import HeaderWeb from './web'
import HeaderMobile from './mobile'

const Header: React.FC = () => {
  return (
    <>
      <HeaderWeb />
      <HeaderMobile />
    </>
  )
}

export default Header

import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../img/logo_white.png'

const Navbar = () => (
  <NavWrapper className="navbar">
    <Link to="/" className="navbar-item">
      <figure className="image">
        <Logo src={logo} alt="Kaldi" />
      </figure>
    </Link>
    <Menu>

      <Item>
        <Link className="navbar-item" to="/concept">
          Concept
        </Link>
      </Item>

      <Item>
        <Link className="navbar-item" to="/stories">
          Stories
        </Link>
      </Item>

      <Item>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </Item>

    </Menu>

  </NavWrapper>
)

export default Navbar

const NavWrapper = styled.nav`
  display: flex
  padding: 1em
  width: calc(100% - 2em);
  justify-content: space-between
  align-items: center
  position: absolute
  z-index: 10
`

const Logo = styled.img`
width: 120px
`

const Menu = styled.ul`
display: flex
color: white
`

const Item = styled.li`
  padding: 0 1em
  line-height: 1em
  text-transform: uppercase
  font-weight: 600
  letter-spacing: .2em
`
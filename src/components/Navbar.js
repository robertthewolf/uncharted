import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../img/logo.png'

import ContactCard from './ContactCard/index'

export default class Navbar extends React.Component {
  state = {
    menuOpen: false,
  }

  toggleMenu = () => {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
    return(
      <NavWrapper className="navbar">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <Logo src={logo} alt="Uncharted" />
          </figure>
        </Link>
        <Menu open={this.state.menuOpen}>

          <Item>
            <Link to="/concept" onClick={this.toggleMenu}>
              Concept
            </Link>
          </Item>

          {/* <Item>
            <Link className="navbar-item" to="/stories" onClick={this.toggleMenu}>
              Stories
            </Link>
          </Item> */}

          <Item>
              <ContactButton>
            <Link to="/contact" onClick={this.toggleMenu}>
                Contact
            </Link>
              </ContactButton>
            <ContactCard/>
          </Item>

        </Menu>

        <MenuButton open={this.state.menuOpen} onClick={this.toggleMenu} />

      </NavWrapper>
    )
  }
}


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
width: 140px
`

const Menu = styled.ul`
display: flex
& a {
  color: black
}
@media screen and (max-width: 600px) {
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100vh
  background-color: black
  flex-direction: column
  justify-content: space-around
  align-items: center
  transform: translateX(${props => props.open ? '0px' : '-100vw'});
  transition: transform .2s ease-in;
  & * {
    color: white !important
  }
}
`

const MenuButton = styled.div`
@media screen and (min-width: 600px) {
  display: none
}
position: fixed
top: 1rem
right: 1rem
width: 25px
text-align: center
background: white
color: black
font-size: 28px
padding: 0 .4em .125em
border-radius: .25rem;
cursor: pointer
&:after{
  content: ${props => props.open ? '"✕"' : '"☰"'};
}

`

const Item = styled.li`
  padding: 0 1em
  line-height: 1em
  text-transform: uppercase
  font-weight: 400
  letter-spacing: .2em
`

const ContactButton = styled.a`
cursor: pointer 
& + div {
  display: none
}

&:hover + div, & + div:hover {
  display: block
}
`
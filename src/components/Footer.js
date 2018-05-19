import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../img/logo_white.png'
import rejsegaranti from '../img/rejsegaranti.png'

import Info from './ContactCard/Info'

const Footer = (props) => (
  <Wrapper>
      <Container>
        <Column>
            <Heading>Adventures</Heading>
            {
                props.packages.map(({ node: post }) => (
                    <Link to={post.fields.slug} key={post.id}>
                    {post.frontmatter.title}
                    </Link>
              ))
            }
        </Column>
        <Column>
            <Heading>Useful Links</Heading>
            <Link to="/faq">
              FAQ's
            </Link>
            <Link to="/terms">
              Terms and conditions
            </Link>
            <Link to="/concept">
              The Concept
            </Link>
            {/* <Link to="/stories">
              Our Stories
            </Link> */}
        </Column>
        <Column>
            <Heading>Reach Us Anytime</Heading>
            <Info />
        </Column>
        <Column>
            <Image src={logo} alt="Uncharted" />
            <p>Copyright © 2017 Uncharted IvS. All rights reserved.
            <br />CVR-number: 38716794</p>
            <Image src={rejsegaranti} alt="Rejsegaranti Fonden" />
        </Column>
      </Container>
        <Signature>
        developed by <a href="http://robertwolf.cz/" target="_blank">Robert Wolf</a>
        </Signature>
  </Wrapper>
)

export default Footer

const Wrapper = styled.footer`
background-color: #1F233D
padding: 1rem
& a {
    display: block
    text-transform: uppercase
    font-weight: 600
    font-size: 1rem
    line-height: 2
}
& p {
    font-size: 1rem
    margin: 1rem 0
}
`

const Container = styled.div`
max-width: 1024px
margin: 0 auto
display: grid
grid-template-columns: 1fr 1fr 1fr 1fr
@media screen and (max-width: 850px) {
    grid-template-columns: 1fr 1fr
}
@media screen and (max-width: 420px) {
    grid-template-columns: 1fr
}
`

const Column = styled.div`
margin: 2rem .5rem;
`
const Heading = styled.h3`
`
const Image = styled.img`
width: 100%
max-width: 140px
`

const Signature = styled.p`
margin: 2rem auto 0 !important;
text-align: center;`
import React from 'react'
import styled from 'styled-components'

import facebookLogo from '../img/facebook.svg';
import instagramLogo from '../img/instagram.svg';

const ContactCard = () => (
    <Wrapper>
        <Container>
        <a href="tel:+4592272285">+45 92 27 22 85</a>
        <a href="mailto:info@uncharted.com">info@uncharted.com</a>
        <SocialLink href="">
            <img src={facebookLogo} alt="facebook" />
        </SocialLink>
        <SocialLink href="">
            <img src={instagramLogo} alt="instagram" />
        </SocialLink>
        </Container>
    </Wrapper>
)

const Wrapper = styled.div`
position: absolute
right: 1em
padding-top: 1em;
`

const Container = styled.div`
background-color: #222
color: white
line-height: 2em
padding: 1em 1.5rem 
border-radius: .5rem
letter-spacing: 0
& a {
color: white !important;
display: block
}`

const SocialLink = styled.a`
display: inline-block !important;
padding: 1em 1em 0 0
& img {
width: 32px
height: 32px
}`

export default ContactCard
import React from 'react'
import styled from 'styled-components'

const ContactCard = () => (
    <Wrapper>
        <Container>
        <a href="tel:+4592272285">+45 92 27 22 85</a>
        <a href="mailto:info@uncharted.com">info@uncharted.com</a>
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

export default ContactCard
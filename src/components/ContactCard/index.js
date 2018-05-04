import React from 'react'
import styled from 'styled-components'

import Info from './Info'

const ContactCard = () => (
    <Wrapper>
        <Container>
        <Info />
        </Container>
    </Wrapper>
)

const Wrapper = styled.div`
position: absolute
right: 1em
padding-top: 1em;
perspective: 100px;
`

const Container = styled.div`
animation: popUp .5s ease;
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
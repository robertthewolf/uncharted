import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

const Header = ({ background, tagline }) => (
  <Wrapper>
        <Image sizes={background} alt="Transylvania Uncharted" />
        <Tagline>{tagline}</Tagline>
  </Wrapper>
)

const Wrapper =  styled.header`
text-align: center
width: 100%
div.gatsby-image-outer-wrapper {
  animation: fadeIn 2s ease;
  max-height: calc(50vh + 20vw);
  margin-bottom: -10vw;
  overflow: hidden;
  z-index: -2
  img {
    z-index: -2
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1
    background: linear-gradient(to bottom, #EBD5D5 0%, transparent 50%, black 100%);

  }
}


section {
    animation: slideUp .5s ease;
}
`

const Tagline = styled.h1`
`

export default Header
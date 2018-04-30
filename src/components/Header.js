import React from 'react'
import styled from 'styled-components'

const Header = ({ children }) => (
  <Wrapper>
      {children}
  </Wrapper>
)

const Wrapper =  styled.header`
text-align: center
width: 100%
div.gatsby-image-outer-wrapper {
  animation: fadeIn 2s ease;
  max-height: 60vh
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, #EBD5D5 0%, transparent 50%, black 100%);
  }
}
`

export default Header
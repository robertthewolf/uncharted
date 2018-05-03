import React from 'react'
import styled from 'styled-components'

const Header = ({ children }) => (
  <Outer>
      {children}
  </Outer>
)

const Outer =  styled.article`
padding: 0 0 4rem;
`

export default Header
import React from 'react'
import styled from 'styled-components'

const Container = ({ children }) => (
  <Outer>
      {children}
  </Outer>
)

const Outer =  styled.section`
max-width: 1024px;
padding: 1rem;
margin: 0 auto;
text-align: left;
@media screen and (min-width: 600px) {
  padding: 2rem;
}
`

export default Container
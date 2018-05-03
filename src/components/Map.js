import React from 'react'
import styled from 'styled-components'

const Map = ({ children }) => (
  <Outer>
      {children}
      
      {React.Children.count(children) % 2 === 1 &&
        <li></li>
      }
  </Outer>
)


export default Map

const Outer = styled.ul`
margin: 0 2rem
padding: 3rem 0
display: grid
@media screen and (min-width: 600px) {
  grid-template-columns: 1fr 1fr
}
perspective: 100rem
color: black
list-style-type: none;

li {
    padding: 1.5rem 1.5rem 1.9rem
    margin: -.3rem -.05rem
    position: relative
    background: linear-gradient(215deg, rgb(215, 202, 235) 0%, rgb(165, 166, 133) 100%);

    @media  screen and (max-width: 600px) {
        &:nth-of-type(2n) {
        transform: rotateX(-4deg) rotateY(5deg) translateX(1.1%);
        }
        &:nth-of-type(2n+1) {
            transform: rotateX(5deg) rotateY(-5deg);
            background: linear-gradient(215deg, rgb(215, 202, 235) 0%, rgb(165, 166, 133) 180%);
        }

    }

    @media screen and (min-width: 600px) {
        &:nth-of-type(4n+1) {
        transform: rotateX(-4deg) rotateY(3deg);
        }

        &:nth-of-type(4n+2) {
        transform: rotateX(-4deg) rotateY(-3deg);
        background: linear-gradient(215deg, rgb(215, 202, 235) -80%, rgb(165, 166, 133) 100%);
        }

        &:nth-of-type(4n + 3) {
            transform: rotateX(4deg) rotateY(3deg);
            background: linear-gradient(215deg, rgb(215, 202, 235) 0%, rgb(165, 166, 133) 180%);
        }
            
        &:nth-of-type(4n + 4) {
            transform: rotateX(4deg) rotateY(-3deg);
        }

    }
    
}
`
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


// const light = '#464F8A';
// const dark = '#1F233D';
// const color = 'white';

// const light = 'rgb(215, 202, 235)';
// const dark = 'rgb(165, 166, 133)';
// const color = 'black';

// const light = '#BABABA';
// const dark = '#8D8D8D';
// const color = 'black';

const light = '#E7E7E7';
const dark = '#B8B8B8';
const color = 'black';

const Outer = styled.ul`
h3, h4 {

    margin-top: 2rem
    max-width: 700px
    margin: 0 auto
    text-align: center
}

h3 {
  font-size: 1.5rem
}

img {
    max-width: 100%;
    margin: 2rem auto;
}

ul {
    margin: 0 2rem
    padding: 3rem 0
    display: grid
    @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr
    }
    perspective: 100rem
    list-style-type: none;

    * {
        color: ${color};
        font-weight: 500 !important;
        text-align: center;
    }

    li {
        padding: 1.5rem 1.5rem 1.9rem
        margin: -.3rem -.05rem
        position: relative
        background: linear-gradient(215deg, ${light} 0%, ${dark} 100%);


        @media  screen and (max-width: 600px) {
            &:nth-of-type(2n) {
            transform: rotateX(-4deg) rotateY(5deg) translateX(1.1%);
            }
            &:nth-of-type(2n+1) {
                transform: rotateX(5deg) rotateY(-5deg);
                background: linear-gradient(215deg, ${light} 0%, ${dark} 180%);
            }

        }

        @media screen and (min-width: 600px) {
            &:nth-of-type(4n+1) {
            transform: rotateX(-4deg) rotateY(3deg);
            }

            &:nth-of-type(4n+2) {
            transform: rotateX(-4deg) rotateY(-3deg);
            background: linear-gradient(215deg, ${light} -80%, ${dark} 100%);
            }

            &:nth-of-type(4n + 3) {
                transform: rotateX(4deg) rotateY(3deg);
                background: linear-gradient(215deg, ${light} 0%, ${dark} 180%);
            }
                
            &:nth-of-type(4n + 4) {
                transform: rotateX(4deg) rotateY(-3deg);
            }

        }

        
    }
}

ol {
    li {
        position: relative
        counter-increment: day
        max-width: 732px
        margin: 0 auto;
        &::after {
            content: '';
            position: absolute
            top: 0
            left: 50%
            width: 1px
            height: calc(100% + 2rem);
            background-color: #1F233D;
            z-index: -1
        }
        &::before {
            content: "Day " counter(day);
            display: block;
            margin: 2rem auto 1rem;
            padding: .5rem 1rem
            text-align: center
            line-height: 1.8rem
            font-weight: 200
            width: 3rem
            background-color: #464F8A;
            border-radius: .5rem
        }

    }
}

`
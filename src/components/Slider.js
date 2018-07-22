import React from 'react'
import styled from 'styled-components'

export default ({ children }) => {
  return (
    <Slider>
      {children}
    </Slider>
  )
}

const Slider = styled.div`
// display: flex;
overflow-x: scroll;
white-space: nowrap;
width: 100vw;
position: relative;
left: 50%;
transform: translateX(-50%);
> * {
    display: inline-block;
    vertical-align: top;
    margin: 1rem;
}


&::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
}`
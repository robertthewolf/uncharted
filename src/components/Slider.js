import React from 'react'
import styled from 'styled-components'

import DragScroll from 'react-dragscroll'

export default ({ children }) => {
  return (
    <Slider>
      <DragScroll width={'100vw'} height={'100%'}>
        <Flex>
        {children}
        </Flex>
      </DragScroll>
    </Slider>
  )
}

const Slider = styled.div`
width: 100vw;
position: relative;
left: 50%;
transform: translateX(-50%);

> div {
  width: 100vw;
  overflow-x: scroll;
  cursor: grabbing;
}
`

const Flex = styled.div`
white-space: nowrap;
> * {
  display: inline-block;
  vertical-align: top;
  margin: 1rem;
}`
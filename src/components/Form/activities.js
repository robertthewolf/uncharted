import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Link from 'gatsby-link'

//context
import { DataContext } from '../../pages/index'

const Element = ({ activities, handleChange }) => {
    console.log(activities)
  return activities
            .filter(activity => activity.node.frontmatter.templateKey === 'activity')
            .map(({node}) => (
            <Activity key={node.id}>
                <Checkbox type="checkbox" name={node.frontmatter.title} onChange={handleChange} />
                <FakeCheckbox />
                <Image sizes={node.frontmatter.image.childImageSharp.sizes} />
                <CheckboxName>{node.frontmatter.title}
                </CheckboxName>
    s            <ReadMore>
                    <Link to={node.fields.slug} >?</Link>
                </ReadMore>
            </Activity>
        ))
}



export default props => (
    <DataContext.Consumer>
        {({ activities }) => (
        <Element {...props} activities={activities} />
        )}
    </DataContext.Consumer>
)

// activities


const Activity = styled.label`
min-width: 150px;
flex: 1;
display: block;
position: relative;
margin: .5rem
cursor: pointer;
text-align: center

display: flex;
flex-direction: column;
justify-content: stretch;

@media screen and (max-width: 600px) {

}
img {
    border-radius: .5rem .5rem 0 0
    margin: 0 !important;
}
.gatsby-image-outer-wrapper {
    flex: 10;
    > div {
        opacity: .6
        transition: opacity 1s ease
        height: 100%
    }
    background-color: black
    border-radius: .5rem .5rem 0 0
}
`

const Checkbox = styled.input`
position: absolute
top: 0;
left: 0;
opacity: 0
cursor: pointer
width: 100%;
height: 100%;
&:checked + div {
    background-color: #464F8A
    box-shadow: 0 0 0 5px #1F233D;
    border-radius: calc(.5rem * 1.05);
}

&:checked ~ .gatsby-image-outer-wrapper > div {
    opacity: 1
}
`

const FakeCheckbox = styled.div`
position: absolute
top: 0;
left: 0;
width: 100%;
height: 100%
background-color: #1F233D
border-radius: .5rem
transition: background-color .5s ease-out;
`
const CheckboxName = styled.span`
text-align: center
text-transform: uppercase
position: relative
z-index: 10
font-size: 1rem
font-weight: 200
display: block
margin: .5rem
`

const ReadMore = styled.div`
position: absolute;
top: .5rem;
right: .5rem;
background-color: white;
border-radius: 50%;
width: 1.7rem;
height: 1.7rem;
box-shadow: 0 0 .5rem rgba(0,0,0,0.5);
a {
    display: block;
    color: black;
    font-size: 1.1rem
    font-weight: 700

}`
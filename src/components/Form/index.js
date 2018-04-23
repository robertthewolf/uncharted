import React from 'react'
import styled from 'styled-components'

import Image from 'gatsby-image'

//date-picker
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css'

export default class Form extends React.Component {
    state = {
        startDate: null,
        endDate: null,
        focusedInput: null,

        people: 1,
        price: 4500,

    }

    plusPeople = () => {
        if (this.state.people === 20) return;
        this.setState({people: this.state.people + 1})
    }

    minusPeople = () => {
        if (this.state.people === 1) return;
        this.setState({people: this.state.people - 1})
    }

    updatePrice = (event) => {
        this.setState({price: event.target.value})
    }

    render() {
        return(
            <Container name="createyourown" method="POST" data-netlify="true" action="/confirmation">
                <Question>When do you want to go?</Question>
                <Date>
                <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="start_date" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="end_date" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                noBorder={true}
                block={true}
                showDefaultInputIcon={true}
                />
                </Date>

                <Question>How many people are going?</Question>
                <PlusButton onClick={this.minusPeople}>-</PlusButton>
                <PeopleValue type="number" name="people" value={this.state.people} disabled />
                <MinusButton onClick={this.plusPeople}>+</MinusButton>

                <Question>How much are you willing to spend per person?</Question>
                <PriceInput type="range" name="price" min="1000" max="10000" value={this.state.price} onChange={this.updatePrice} />
                <PriceLimit>1 000 DKK</PriceLimit>
                <PriceValue>{Math.round(this.state.price * Math.pow(10, -2)) * 100}&nbsp;DKK</PriceValue>
                <PriceLimit>10 000 DKK</PriceLimit>
                    
                    

                <Question>What do you want to do?</Question>
                    {this.props.activities.map(({node : post}) => (
                        <Activity key={post.id}>
                            <Checkbox type="checkbox" name={post.frontmatter.name} />
                            <FakeCheckbox />
                            <Image sizes={post.frontmatter.image} />
                            <CheckboxName>{post.frontmatter.name}</CheckboxName>
                        </Activity>
                    ))}

                <Question>Any other wishes?</Question>
                <Comments name="comments">
                </Comments>
                <EmailContainer>

                <Question>Email</Question>
                <input type="email" name="email" placeholder="required" required />
                </EmailContainer>
                <PhoneContainer>

                <Question>Phone</Question>
                <input type="tel" name="phone" placeholder="optional" />
                </PhoneContainer>
                <Submit type="submit" />
            </Container>
        );
    }
}

const Container = styled.form`
max-width: 650px
margin: 0 auto
padding: 1rem
display: grid
grid-template-columns: 1fr 1fr 1fr
@media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr
    width: calc(100% - 2rem)
}
`

const Question = styled.h3`
font-size: 1rem
text-align: center
margin: 4rem auto 1rem
grid-column: 1 / 4
`

const Date = styled.div`
grid-column: 1 / 4`

const PlusButton = styled.div`
justify-self: right
border-radius: .5rem 0 0 .5rem
background-color: #464F8A
padding: .1rem 1.2rem
font-size: 1.5rem
cursor: pointer
user-select: none;
`

const MinusButton = styled.div`
justify-self: left
border-radius: 0 .5rem .5rem 0
background-color: #464F8A
padding: .1rem 1.2rem
font-size: 1.5rem
cursor: pointer
user-select: none;
`

const PeopleValue = styled.input`
text-align: center
border-radius: 0;
`

const PriceInput = styled.input`
grid-column: 1 / 4
width: calc(100% - 2rem) !important;`

const PriceLimit = styled.label`
white-space: nowrap
font-size: .8rem
opacity: .5
&:nth-of-type(2) {
    text-align: right
}`

const PriceValue = styled.p`
text-align: center`

const Activity = styled.label`
display: block;
position: relative;
margin: .5rem
padding: .8rem 1rem
height: 100px
cursor: pointer;
text-align: center
`

const Checkbox = styled.input`
position: absolute
top: 0;
left: 0;
opacity: 0
cursor: pointer
width: 100%;
height: 100%;
&:checked ~ div {
    background-color: #464F8A
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
transition: background-color .5s ease
`
const CheckboxName = styled.span`
text-align: center
text-transform: uppercase
position: relative
z-index: 20
width: 100%
font-size: 1rem
font-weight: 200
`

const Comments = styled.textarea`
resize: none
width: calc(100% - 2rem);
height: 5rem
grid-column: 1 / 4`

const EmailContainer = styled.div`
grid-column: 1 / 2
@media screen and (max-width: 600px) {
    grid-column: 1 / 3;
    padding: 1rem 0;
    & input {
    width: calc(100% - 3rem);
    }
}`

const PhoneContainer = styled.div`
grid-column: 2 / 3
@media screen and (max-width: 600px) {
    grid-column: 3 / 4;
    padding: 1rem 0;
    min-width: 0
    & input {
    width: calc(100% - 2rem);
    }
}`

const Submit = styled.input`
grid-column: 3 / 4
align-self: end
@media screen and (max-width: 600px) {
    grid-column: 1 / 4;
    padding: 1rem 0;
}`
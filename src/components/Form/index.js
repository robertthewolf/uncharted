import React from 'react'
import styled from 'styled-components'
import { navigateTo } from "gatsby-link";

import Image from 'gatsby-image'

//date-picker
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css'

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}


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

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => navigateTo('/confirmation/'))
          .catch(error => alert(error));
    
        e.preventDefault();
    };

    render() {
        return(
            <Container
                name="createyourown"
                method="post"
                action="/confirmation/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
            >
                <p hidden>
                    <label>
                    Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
                    </label>
                </p>

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
                            <Checkbox type="checkbox" name={post.frontmatter.name} onChange={this.handleChange} />
                            <FakeCheckbox />
                            <Image sizes={post.frontmatter.image.childImageSharp.sizes} />
                            <CheckboxName>{post.frontmatter.name}</CheckboxName>
                        </Activity>
                    ))}

                <Question>Any other wishes?</Question>
                <Comments name="comments" onChange={this.handleChange}>
                </Comments>
                <EmailContainer>

                <Question>Email</Question>
                <input type="email" name="email" placeholder="required" required onChange={this.handleChange} />
                </EmailContainer>
                <PhoneContainer>

                <Question>Phone</Question>
                <input type="tel" name="phone" placeholder="optional" onChange={this.handleChange} />
                </PhoneContainer>
                <Submit type="submit">Submit</Submit>
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
    grid-template-columns: 33% 33% 33%
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

// activities

const Activity = styled.label`
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
    transform: scale(1.05);
    border-radius: .7rem;
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
transition: background-color .5s ease
transition: transform .5s ease
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

const Submit = styled.button`
grid-column: 3 / 4
align-self: end
@media screen and (max-width: 600px) {
    grid-column: 1 / 4;
    padding: 1rem 0;
}`
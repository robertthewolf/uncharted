import React from 'react'
import styled from 'styled-components'
import { navigateTo } from "gatsby-link";
import Link from 'gatsby-link'
import windowSize from 'react-window-size';

//date-picker
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css'


//components
import Activities from './activities'


function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}


class Form extends React.Component {
    state = {
        startDate: null,
        endDate: null,
        focusedInput: null,

        start: '',
        end: '',

        people: 1,
        price: 4500,

    }

    updateDates = data => {
        if (data.startDate) this.setState({ start: data.startDate._d.toString() })
        if (data.endDate) this.setState({ end: data.endDate._d.toString() })
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
          body: encode({
              "form-name": "custom",
              ...this.state })
        })
          .then(() => navigateTo('/confirmation/'))
          .catch(error => alert(error));
    
        e.preventDefault();
    };

    render() {

        let numberOfMonths = 1;
        if (this.props.windowWidth > 1200) {
            numberOfMonths = 3;
        } else if (this.props.windowWidth > 650) {
            numberOfMonths = 2;
        }

        return(
            <Container
                name="custom"
                method="post"
                action="/confirmation/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
            >
                <input type="hidden" name="form-name" value="custom" />
                <p hidden>
                    <label>
                    Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
                    </label>
                </p>

                <Question>What do you want to do?</Question>
                <Flex justify="space-between" wrap="true">
                    <Activities handleChange={this.handleChange} />
                </Flex>

                <Question>When do you want to go?</Question>
                <Date>
                <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="start_date" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="end_date" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => {
                    this.setState({ startDate, endDate })
                    this.updateDates({ startDate, endDate })
                }} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                noBorder={true}
                block={true}
                showDefaultInputIcon={true}
                numberOfMonths={numberOfMonths}
                displayFormat="DD. MMM YYYY"
                />
                </Date>

                <input type="hidden" name="start" value={this.state.start} />
                <input type="hidden" name="end" value={this.state.end} />


                <Question>How many people are going?</Question>

                <Flex justify="center">
                <PlusButton onClick={this.minusPeople}>-</PlusButton>
                <PeopleValue type="number" name="people" value={this.state.people} disabled />
                <MinusButton onClick={this.plusPeople}>+</MinusButton>
                </Flex>

                {/* <Question>How much are you willing to spend per person?</Question>
                <PriceInput type="range" name="price" min="1000" max="10000" value={this.state.price} onChange={this.updatePrice} />
                <Flex>
                <PriceLimit>1 000 DKK</PriceLimit>
                <PriceValue>{Math.round(this.state.price * Math.pow(10, -2)) * 100}&nbsp;DKK</PriceValue>
                <PriceLimit>10 000 DKK</PriceLimit>
                </Flex> */}
                    
                    


                <Question>Any other wishes?</Question>
                <Comments name="comments" onChange={this.handleChange}>
                </Comments>

                <Flex justify="flex-start" wrap="true">

                <div>
                    <Question>Email</Question>
                    <input type="email" name="email" placeholder="required" required onChange={this.handleChange} />
                </div>

                {/* <div>
                    <Question>Phone</Question>
                    <input type="tel" name="phone" placeholder="optional" onChange={this.handleChange} />
                </div> */}

                <Submit type="submit">Submit</Submit>
                </Flex>
                <Terms>
                <input type="checkbox" required />
                <label>I agree with the <Link to="/terms">Terms and Conditions</Link></label>
                </Terms>
            </Container>
        );
    }
}


export default windowSize(Form);

const Container = styled.form`
max-width: 650px
margin: 0 auto 3rem
padding: 1rem
`

const Question = styled.h3`
font-size: 1.2rem !important
text-align: center
margin: 4rem auto 1rem !important
@media screen and (max-width: 600px) {
    margin: 2rem auto 1rem !important
}
`

const Date = styled.div`
`

const Flex = styled.div`
display: flex;
justify-content: ${props => props.justify};
align-items: ${props => props.align};
flex-wrap: ${(props => props.wrap)? 'wrap' : 'no-wrap'};
`

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



const Comments = styled.textarea`
resize: none
width: calc(100% - 2rem);
height: 5rem
`

const Submit = styled.button`
margin-top: auto
margin-left: 1rem`

const Terms = styled.div`
padding-top: 1rem
input {
    margin-right: 1rem
    vertical-align: top
}
a {
    text-decoration: underline
}
`


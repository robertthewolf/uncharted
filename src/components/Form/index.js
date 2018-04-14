import React from 'react'
import styled from 'styled-components'

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

    }

    render() {
        return(
            <Container>
                <Question>When do you want to go?</Question>
                <Date>
                <DateRangePicker
                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                noBorder={true}
                block={true}
                showDefaultInputIcon={true}
                />
                </Date>
                <Question>How many people are going?</Question>
                <button>+</button><input type="number" /><button>-</button>
                <Question>How much are you willing to spend?</Question>
                <PriceContainer><label>1 000 DKK</label><input type="range" min="1000" max="10000"/><label>10 000 DKK</label></PriceContainer>
                <Question>What do you want to do?</Question>
                <ul>
                    {this.props.activities.map(({node : post}) => (
                        <li key={post.id}>
                            <input type="checkbox"/>
                            {post.frontmatter.name}
                            <img src={post.frontmatter.image} />
                        </li>
                    ))}
                </ul>
                <Question>Any other wishes?</Question>
                <Comments>
                </Comments>
                <EmailContainer>
                <Question>Email</Question>
                <input type="email" />
                </EmailContainer>
                <PhoneContainer>
                <Question>Phone</Question>
                <input type="tel" />
                </PhoneContainer>
                <Submit type="submit" />
            </Container>
        );
    }
}

const Container = styled.section`
max-width: 650px
margin: 0 auto
display: grid
grid-template-columns: 1fr 1fr 1fr
`

const Question = styled.h3`
font-size: 1rem
text-align: center
margin: 2rem auto 1rem
grid-column: 1 / 4
`

const Date = styled.div`
grid-column: 1 / 4`

const PriceContainer = styled.div`
grid-column: 1 / 4
display: flex
align-items: center
justify-content: center`

const Comments = styled.textarea`
resize: none
width: calc(100% - 2rem);
height: 5rem
grid-column: 1 / 4`

const EmailContainer = styled.div`
grid-column: 1 / 2`

const PhoneContainer = styled.div`
grid-column: 2 / 3`

const Submit = styled.input`
grid-column: 3 / 4
align-self: end
`
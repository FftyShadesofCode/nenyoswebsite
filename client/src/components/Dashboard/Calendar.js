import React, {useState} from 'react'
import Calendar from 'react-calendar';
import styled from 'styled-components'
import { applyCardStyles } from "./ReusableStyles";

import '../../CSS Files/components/Dashboard/Calendar.css'

function EventCalendar() {
    const [ date, setDate ] = useState(new Date())

    return (
        <Section>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date} selectRange={true} />
                {date.length > 0 ? (
                    <p className='text-center'>
                        <span className='bold'>Start:</span>{' '}
                        {date[0].toDateString()}
                        &nbsp;|&nbsp;
                        <span className='bold'>End:</span> {date[1].toDateString()}
                    </p>
                ) : (
                    <p className='text-center'>
                        <span className='bold'>Default selected date:</span>{' '}
                        {date.toDateString()}
                    </p>
                )}
            </div>
        </Section>
    );
};

const Section = styled.section`
  ${applyCardStyles}
  color:white;
  justify-content: space-between;
  .title-container {
    margin-bottom: 1rem;
    .title {
      display: flex;
      justify-content: space-between;
      svg {
        color: var(--primary-color);
        font-size: 1.3rem;
        cursor: pointer;
      }
    }
  }
  .chart {
    height: 13rem;
    .recharts-default-tooltip {
      background-color: var(--dark-background-color) !important;
      border: none !important;
      border-radius: 1rem;
      box-shadow: 0 0 60px 8px var(--primary-color);
    }
  }
`;

export default EventCalendar
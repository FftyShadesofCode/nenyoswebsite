import React, {useState} from 'react'
import { Calendar } from 'react-modern-calendar-datepicker'

import '../../CSS Files/components/Dashboard/Calendar.css'
import "react-modern-calendar-datepicker/lib/DatePicker.css"

export default function EventCalendar() {
    const [selectedDay, setSelectedDay] = useState(null);

    return (
        <div>
            <Calendar
                value={selectedDay}
                onChange={setSelectedDay}
                shouldHighlightWeekends
                calendarClassName='custom-calendar'
                colorPrimary='#74c69d'
            />
        </div>
    )
};
import React, {useEffect} from 'react'
import Scrollreveal from "scrollreveal";
import TargetAudience from "./TargetAudience";
import Calendar from './Calendar'

import '../../CSS Files/components/Dashboard/Dashboard.css'

export default function Dashboard() {
    useEffect(() => {
        const sr = Scrollreveal({
            origin: "bottom",
            distance: "80px",
            duration: 2000,
            reset: false,
        });
    }, []);
    return (
        <div className='dashboard-container'>
            <div className="grid">
                <div className="row">

                </div>
                <div className="row2">
                    <TargetAudience />
                    <Calendar />
                </div>
            </div>
        </div>
    );
};
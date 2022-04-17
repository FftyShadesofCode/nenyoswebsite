import React, {useEffect} from 'react'
import Sidebar from "../components/Dashboard/Sidebar";
import Dashboard from '../components/Dashboard/Dashboard'
import Scrollreveal from "scrollreveal";

import '../CSS Files/components/Dashboard/AdminDashboard.css'

export default function AdminDashboard() {
    useEffect(() => {
        const sr = Scrollreveal({
            origin: "left",
            distance: "80px",
            duration: 1000,
            reset: false,
        });
        sr.reveal(
            `
       #sidebar
    `,
            {
                opacity: 0,
            }
        );
        const sr2 = Scrollreveal({
            origin: "right",
            distance: "80px",
            duration: 1000,
            reset: false,
        });
        sr2.reveal(
            `
       #rightSidebar
    `,
            {
                opacity: 0,
            }
        );
    }, []);
    return (
        <div className="admin-dashboard">
            <Sidebar />
            <Dashboard />
        </div>
    );
};
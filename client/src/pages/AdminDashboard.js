import React, {useEffect} from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import Routing from "../Routing";
import {useDispatch, useSelector} from "react-redux";
import Sidebar from "../components/Dashboard/Sidebar";
import ThemeAction from '../components/Dashboard/redux/action/ThemeAction'

import '../CSS Files/components/Dashboard/index.css'
import '../CSS Files/components/Dashboard/grid.css'

export default function AdminDashboard() {

    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar {...props}/>
                    <div className="layout__content">
                        <div className="layout__content-main">
                            <Routing />
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    );
};
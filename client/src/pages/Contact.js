import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

import '../App.css'

export default function Contact() {

    return (
        <div id="contact-container">
            <h1>Contact Us</h1>

            <div className="contact-info">
                <div className="contact">
                    <h4>Contact Information</h4>
                    <p><em>Serving the North Eastern New York<br/>(Capital District) area</em></p>
                    <div className="icon-text">
                        <i className="fa fa-solid fa-envelope" />
                            <span>nenyosorchids@gmail.com</span>
                    </div>
                    <div className="icon-text">
                        <i className="fa fa-solid fa-map-pin" aria-hidden="true" />
                            <span>Community Reformed Church<br/>701 Sand Creek Road<br/>Colonie, NY, 12205</span>
                    </div>
                    <div className="social-media">
                        <a href="https://www.nenyos.com/" className="icon-circle" target="_blank">
                            <i className="fa fa-solid fa-laptop"/>
                        </a>
                        <a href="https://www.facebook.com/groups/1567776933533713" className="icon-circle" target="_blank">
                            <i className="fa fa-brands fa-facebook-square" />
                        </a>
                        <a href="https://www.instagram.com/nenyos/" className="icon-circle" target="_blank">
                            <i className="fa fa-brands fa-instagram"/>
                        </a>
                    </div>
                </div>
            <form>
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" placeholder="First Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" placeholder="Last Name" />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="email">E-Mail Address</label>
                        <input type="email" name="email" placeholder="E-Mail Address" />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <input type="text" name="message" placeholder="Message" />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group right">
                        <button className="primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
};
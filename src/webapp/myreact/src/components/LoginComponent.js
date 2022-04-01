import React, { useState } from "react";
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Login() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "vaishnavi",
            password: "vaishnavi"
        },
        {
            username: "aditya",
            password: "aditya"
        },
        {
            username: "swaroop",
            password: "swaroop"
        },
        {
            username: "vamsee",
            password: "vamsee"
        }
    ];

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">
                {errorMessages.message}
            </div>
        );

    function goTo() {
        window.location.replace("/home")
    }

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit} >
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="login">
            <div className="login-form">
                <div className="title">Welcome Ecommuter!</div>
                {isSubmitted ? goTo() : renderForm}
            </div>
        </div>
    );
}

export default Login;


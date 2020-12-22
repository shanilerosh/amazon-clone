import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).
            then(auth => {
                if (auth) {
                    history.push('/')
                }
            }).catch(err => {
                alert(err);
            })

    }

    const handleCreateAccountSubmit = (e) => {
        e.preventDefault();
        auth.
            createUserWithEmailAndPassword(email, password).
            then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(err => {
                alert(err)
            })
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clickbank.com%2Fwp-content%2Fuploads%2F2016%2F05%2Famazon_logo.png&f=1&nofb=1"
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => { setEmail(e.target.value) }} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => { setPassword(e.target.value) }} />
                    <button className="login__signin" type="submit">Sign In</button>
                </form>
                <p>By signing in you are agreeing to to the terms and conditions of amazon</p>
                <button className="login__createaccount" onClick={handleCreateAccountSubmit}>Create Amazon Account</button>
            </div>

        </div>
    );
}

export default Login;

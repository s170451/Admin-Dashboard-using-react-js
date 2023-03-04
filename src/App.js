import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
export default function Login(props) {
const [username, setUserName] = useState("");
const [password, setPassword] = useState("");
function validateFormFields() {
return username.length > 0 && password.length > 0;
}
function handleSubmit(event) {
event.preventDefault();
}
return (
<div className="Login">
<h1> Welcome to Edubca </h1>
<form onSubmit={handleSubmit}>
<FormGroup controlId="Username" bsSize="large">
<ControlLabel>username  </ControlLabel>
<FormControl
autoFocus
type="text"
value={username}
onChange={e => setUserName(e.target.value)}
/>
</FormGroup>
<FormGroup controlId="password" bsSize="large">
<ControlLabel>Password</ControlLabel>
<FormControl
value={password}
onChange={e => setPassword(e.target.value)}
type="password"
/>
</FormGroup>
<Button block bsSize="large" disabled={!validateFormFields()} type="submit">
Login
</Button>
</form>
</div>
);
}
render(<Login />, document.getElementById('root'));

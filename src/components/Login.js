import React, {Component} from 'react'
import {Redirect } from 'react-router-dom'
import { Form, Button } from "react-bootstrap";

export default class Login extends Component{
    constructor(props){
        super(props)
        const token = localStorage.getItem("token");
        let loggedIn = true

        if(token == null){
            loggedIn=false
        }

        this.state = {
            username:'',
            password:'',
            loggedIn
        }
       

       

       

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){

        e.preventDefault()
        const {username, password} = this.state
        if(username === 'A' && password === 'B'){
            console.log("IN");
            localStorage.setItem("token","sdasdasdasdad")
            this.setState({
                loggedIn:true
            })
        }
    }
    render(){
        if(this.state.loggedIn){
            return <Redirect to="/admin" />
        }
        return (
            <div>
                <h4 className="mb-3">Login Form</h4>
                <Form onSubmit={this.submitForm}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name="username" onChange={this.onChange}/>        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.onChange}/>
                    </Form.Group>                   
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
           
    }
}
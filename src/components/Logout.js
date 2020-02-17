import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Logout extends Component{
    constructor(props){
        super(props)
        localStorage.removeItem("token","");
    }
    render(){
        return(
            <div>
                You have been Logout. Please  <Link to="/">Login again</Link>
            </div>
        )
        
    }
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render(){

        return (
            <div>
            <h1>Welcome to your Expense Tracker</h1>
            <p>Look at your group <Link to="/expenses"> expenses </Link>!</p>
            </div>
        )
    }
}
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default (props) => {

        return (
            <div className="navbar">
                <Link to="/"> Home </Link>
                <Link to="/AddExpense"> New Expense </Link>
                <Link to="/expenses"> Expenses </Link>
                <Link to="/about"> About </Link>
            </div>
        )
    }

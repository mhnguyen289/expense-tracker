import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const API_URL = process.env.REACT_APP_API_URL;

export default class Expenses extends Component {

constructor(props) {
    super(props)

    this.state = {
        expenses: [],
        title: '',
        date: '',
        amount:'',
        user_id: ''
    }
}

componentDidMount() {
    console.log(API_URL)

    fetch(`${API_URL}/expenses`)
    .then(response => response.json())
    .then(data => this.setState({ expenses: data }))
}

    render(){

        const expenses = this.state.expenses.map((expense) => (
            <div key={expense.id}>
                <th>Title: {expense.title} Date: {expense.date} Amount: {expense.amount} User: {expense.user ? expense.user.name : ''}</th>
                </div>
        ))

        return (
            <table className='table table-bordered'>
                <h1>Expense List</h1>
                
                {expenses}
                
            </table>
        )
    }
}
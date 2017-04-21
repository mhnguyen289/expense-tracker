import React, { Component } from 'react'
import { API_URL } from './Expenses'

export default class Expenses extends Component {

constructor(props) {
    super(props)
    this.state = { }
    
}

handleInputChange(event) {
    const { value, name } = event.target
    this.setState({
        [name]: value,
    })
}

handleOnClick(event) {
    event.preventDefault()
    fetch(`${API_URL}/expenses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ expense: this.state})
    })
        .then(response => response.json())
        .then(data => {
           
            this.props.history.push('/expenses')
        })
}


    render() {
        console.log(this.state)
        return (
            
            
            <form>
            
            <div className="input-group">
                    <input className="add-expense-field"
                    type="text"
                    name="user"
                    onChange={(event) => this.handleInputChange(event)}
                    placeholder="Paid By" />
                </div>

                <div className="input-group">
                    <input className="add-expense-field"
                    type="text"
                    name="user"
                    onChange={(event) => this.handleInputChange(event)}
                    placeholder="Split By" />
                </div>

                <div className="input-group">
                    <input className="add-expense-field"
                    type="text"
                    name="title"
                    onChange={(event) => this.handleInputChange(event)}
                    placeholder="Title" />
                </div>

                <div className="input-group">
                <input className="add-expense-field"
                    type="date"
                    name="date"
                    onChange={(event) => this.handleInputChange(event)}
                    placeholder="Date" />
                </div>

                <div className="input-group">
                <input className="add-expense-field"
                    type="number"
                    name="amount"
                    onChange={(event) => this.handleInputChange(event)}
                    placeholder="Amount" />
                </div>

                <div className="input-group">
                <input className="add-expense-field"
                    type="submit"
                    value="Create Expense"
                    onClick={(event) => this.handleOnClick(event)} />
                </div>

            </form>
        )
    }
}
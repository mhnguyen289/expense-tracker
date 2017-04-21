import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar'
import Home from './Home';
import Expenses from './Expenses';
import About from './About';
import AddExpense from './AddExpense';
import ExpenseValidation from './ExpenseValidation';

class App extends Component {
  render() {
    
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/expenses" component={Expenses} />
          <Route path="/about" component={About} />
          <Route path="/addExpense" component={AddExpense} />
          <Route path="/ExpenseValidation" component={ExpenseValidation} />
        </div>
      </Router>
    );
  }
}

export default App;

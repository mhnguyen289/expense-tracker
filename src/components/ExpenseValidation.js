import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


const expenses = [];
const expenseTypes = [ 'A', 'B', 'C', 'D' ];


function addExpenses(quantity) {
  const startId = expenses.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    expenses.push({
      id: id,
      status: '200',
      name: 'Item name ' + id,
      type: 'B',
      active: i % 2 === 0 ? 'Y' : 'N'
    });
  }
}

addExpenses(5);

const cellEditProp = {
  mode: 'click',
  blurToSave: true
    };
const selectRow = {
      mode: 'checkbox',
      cliclToSelct: false
};

// validator function pass the user input value and row object. In addition, a bool return value is expected
function expenseNameValidator(value, row) {
  const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
  if (!value) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must be inserted';
    response.notification.title = 'Requested Value';
  } else if (value.length < 10) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must have 10+ characters';
    response.notification.title = 'Invalid Value';
  }
  return response;
}

function expenseStatusValidator(value, row) {
  const nan = isNaN(parseInt(value, 10));
  if (nan) {
    return 'Expense Status must be a integer!';
  }
  return true;
}

export default class EditTypeTable extends React.Component {
  render() {

      
    return (
      <BootstrapTable data={ expenses } selectRow={ selectRow } cellEdit={ cellEditProp } insertRow={ true  } deleteRow search columnFilter >
          <TableHeaderColumn dataField='name' editable={ { type: 'textarea', validator: expenseNameValidator } }>Title</TableHeaderColumn>
          <TableHeaderColumn dataField='status' editable={ { validator: expenseStatusValidator } }>Amount</TableHeaderColumn>
          <TableHeaderColumn dataField='active' editable={ { type: 'select', options: { values: expenseTypes } } }>Paid by?</TableHeaderColumn>
          <TableHeaderColumn dataField='type' editable={ { type: 'select', options: { values: expenseTypes } } }>Split by?</TableHeaderColumn>
          <TableHeaderColumn dataField='id' isKey={ true }>Expense ID</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
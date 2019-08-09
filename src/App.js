import React, {useState} from 'react';
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
import uuid from 'uuid/v4'

import './App.css';

const initialExpenses = [
  {id: uuid(), charge:"rent", amount:1600},
  {id: uuid(), charge:"car payment", amount:1200},
  {id: uuid(), charge:"cellphone", amount:500}
]


//import useState()
//it returns [] with 2 values


function App() {
  return (
    <>
      <Alert />
      <ExpenseForm />
      <ExpenseList />
    </>
  );
}

export default App;

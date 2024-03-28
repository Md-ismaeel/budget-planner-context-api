import { useState } from 'react'
import './App.css'
import { ContextProvider } from './Context/ContextProvider'
import { BudgetPlanner } from './Components/BudgetPlanner'
import { ShowExpenses } from './Components/ShowExpenses'
import { AddExpenses } from './Components/AddExpenses'

function App() {
  
  return (
    <>
      <BudgetPlanner />
      <ShowExpenses />
      <AddExpenses />
    </>
  )
}

export default App

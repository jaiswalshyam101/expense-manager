import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'
import Dashboard from './components/Dashboard'

const App = () => {

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      text: "Salary",
      amount: 95000
    },
    {
      id: 2,
      text: "Rent",
      amount: -15000
    },
    {
      id: 3,
      text: "Shopping",
      amount: -5000
    },
  ])



  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

  return (
    <>
      <Navbar handleShowForm={handleShowForm} showForm={showForm} />
      <div className="p-8">
        {
          showForm && <Form handleShowForm={handleShowForm} />
        }
        <Dashboard />
        <ListGroup />
      </div>
    </>
  )
}

export default App

import React from 'react'

const Navbar = ({ handleShowForm, showForm }) => {
    return (
        <nav className='bg-purple-800 py-2 px-8 shadow-xl flex items-center justify-between'>
            <h1 className='uppercase text-white font-bold'>Expense Manager</h1>
            {
                !showForm && <button onClick={() => handleShowForm()} className='bg-blue-300 p-1 px-2 text-sm font-bold  cursor-pointer hover:bg-blue-500'>Add Transaction</button>
            }
        </nav>
    )
}

export default Navbar

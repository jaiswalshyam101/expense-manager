import React from 'react'

const Form = ({ handleShowForm }) => {
    return (
        <form className='border border-gray-300 shadow-xl p-4'>
            <input className='border border-gray-500 p-2 w-full my-1' type="text" placeholder='Enter Transaction Details..' />
            <input className='border border-gray-500 p-2 w-full my-1' type="text" placeholder='Enter Transaction Amount' />
            <button className='bg-emerald-500 mt-4 w-full p-2 text-white font-bold hover:bg-emerald-600'>Save Transaction</button>
            <button onClick={handleShowForm} className='bg-red-500 mt-4 w-full p-2 text-white font-bold hover:bg-red-600'>Cancel</button>
        </form>
    )
}

export default Form

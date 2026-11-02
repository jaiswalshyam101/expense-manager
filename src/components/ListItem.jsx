import React from 'react'

const ListItem = () => {
    return (
        <li className='my-2 relative p-4 border border-gray-200 shadow-xl'>
            <p className='text-sm text-gray-400 my-2'>#123</p>
            <h1 className='font-bold text-4xl'>250000</h1>
            <h2 className='text-xl font-semibold'>Salary</h2>
            <div className='absolute right-5 top-5'>
                <button className='bg-yellow-500 hover:bg-yellow-600 cursor-pointer mx-1 p-1 px-2 text-sm font-bold text-white'>Edit</button>
                <button className='bg-red-500 hover:bg-red-600 cursor-pointer mx-1 p-1 px-2 text-sm font-bold text-white'>Delete</button>
            </div>
        </li>
    )
}

export default ListItem

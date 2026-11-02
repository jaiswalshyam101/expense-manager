import React from 'react'

const Dashboard = () => {
    return (
        <div className='my-2 grid gap-4 grid-cols-1 md:grid-cols-3'>
            <div className='bg-green-500 p-4'>
                <h1 className='text-4xl font-bold text-white'>250000</h1>
                <h2 className='text-white font-bold my-2 text-2xl'>Total Income</h2>
            </div>
            <div className='bg-red-500 p-4'>
                <h1 className='text-4xl font-bold text-white'>200000</h1>
                <h2 className='text-white font-bold my-2 text-2xl'>Total Expsense</h2>
            </div>
            <div className='bg-blue-500 p-4'>
                <h1 className='text-4xl font-bold text-white'>50000</h1>
                <h2 className='text-white font-bold my-2 text-2xl'>Total Balance</h2>
            </div>
        </div>
    )
}

export default Dashboard

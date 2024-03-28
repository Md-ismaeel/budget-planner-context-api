import React, { useContext } from 'react'
import { UserContext } from '../Context/Context'

export const BudgetPlanner = () => {
    const { budget, totalAmount } = useContext(UserContext);
    console.log(budget);
    console.log(totalAmount);
    return (
        <div className='w-full p-4'>

            <h1 className='text-3xl font-bold w-full text-center border-1 p-6'>My Budget Planner</h1>

            <div className='w-full flex justify-between items-center mt-6 mb-3 px-8'>

                <h2 className='text-2xl font-semibold h-12 flex justify-center items-center w-1/5 bg-gray-200 text-teal-500 rounded-md'>Budget: Rs.{budget}</h2>

                <h2 className='text-2xl font-semibold h-12 flex justify-center items-center w-1/5 bg-slate-200 text-green-600 rounded-md'>Remaining: Rs.{budget - totalAmount}</h2>

                <h2 className='text-2xl font-semibold h-12 flex justify-center items-center w-1/5 bg-cyan-200 text-cyan-800 rounded-md'>Sped so far.{totalAmount}</h2>

            </div>
        </div>
    )
}


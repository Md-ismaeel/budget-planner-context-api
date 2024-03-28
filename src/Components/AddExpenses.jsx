import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../Context/Context'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddExpenses = () => {
    const { expenseData, setExpenseData, setSetTotalAmount } = useContext(UserContext);

    const tittleInputRef = useRef('');
    const priceRef = useRef(0);


    const handleClick = () => {

        let newExpense = {
            tittle: tittleInputRef.current.value,
            amount: Number(priceRef.current.value)
        }
        setExpenseData([...expenseData, newExpense])
        toast.success('Item added successfully!!')

        setSetTotalAmount(prev => prev + newExpense.amount);
        tittleInputRef.current.value = ""
        priceRef.current.value = "";

    }


    return (
        <div className='w-full p-6 flex flex-col gap-4'>

            <h1 className='px-4 text-2xl'>Add Expense</h1>

            <div className='w-full flex justify-between items-center px-4'>

                <input type='text' ref={tittleInputRef} placeholder='Tittle Name' className='w-2/5 py-3 px-5 border rounded-sm focus:outline-none focus:ring focus:ring-blue-200 text-xl ' />

                <input type='number' ref={priceRef} placeholder='Tittle Amount' className='w-2/5 py-3 px-5 border rounded-sm focus:outline-none focus:ring focus:ring-blue-200 text-xl ' />

            </div>

            <div className='w-full flex justify-start items-center px-4'>
                <button className='py-2 px-16 bg-slate-500 text-xl text-white font-semibold rounded-md active:bg-slate-900' onClick={handleClick}>Add</button>
            </div>

        </div>
    )
}

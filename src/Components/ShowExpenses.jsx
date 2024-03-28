import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Context/Context'
import { IoMdCloseCircle } from "react-icons/io";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ShowExpenses = () => {

    const { expenseData, setExpenseData } = useContext(UserContext);

    useEffect(() => {
        const savedData = localStorage.getItem('expenseData');
        if (savedData && JSON.parse(savedData).length) {
            setExpenseData(JSON.parse(savedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('expenseData', JSON.stringify(expenseData));
    }, [expenseData]);

    const removeFromCart = (index) => {
        let filteredData = expenseData.filter((_, i) => i !== index)
        setExpenseData(filteredData)
        toast.warn('Item removed from cart!!')
    }

    return (
        <div className='w-full p-4 flex flex-col gap-4 px-10'>

            <h1 className='text-2xl'>Expenses</h1>

            {expenseData.length > 0 ? (expenseData && expenseData.map((item, index) => (

                <div key={index} className='w-full flex justify-between items-center py-3 px-8 border bg-slate-100 rounded-md'>

                    <p className='text-2xl'>{item.tittle}</p>

                    <p className='flex py-2 px-4 justify-center items-center'>
                        <span className='text-2xl'>{item.amount}</span>
                        <span onClick={() => removeFromCart(index)} className='ml-4 text-3xl cursor-pointer hover:text-orange-400'><IoMdCloseCircle /></span>
                    </p>

                </div>

            ))) : (
                <div className='w-full py-6'>
                    <h1 className='text-2xl font-semibold text-green-500'>Add Data to List....</h1>
                </div>
            )
            }

        </div >
    )
}


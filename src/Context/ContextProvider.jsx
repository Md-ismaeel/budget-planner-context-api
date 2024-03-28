import React, { useState } from 'react'
import { UserContext } from './Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContextProvider = (props) => {

    let budget = 2000;
    const [totalAmount, setSetTotalAmount] = useState(Number(0))
    const [expenseData, setExpenseData] = useState([])

    return (
        <UserContext.Provider value={{ budget, expenseData, setExpenseData, totalAmount, setSetTotalAmount }}>
            {props.children}

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />

        </UserContext.Provider>
    )
}
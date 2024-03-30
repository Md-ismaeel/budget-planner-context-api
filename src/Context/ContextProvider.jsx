import React, { useState, useEffect } from 'react'
import { UserContext } from './Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContextProvider = (props) => {

    let [budget, setBudget] = useState(Number(2000));
    const [totalAmount, setTotalAmount] = useState(Number(0))
    const [expenseData, setExpenseData] = useState([])

    useEffect(() => {

        let savedData = localStorage.getItem('expenseData');
        if (savedData && JSON.parse(savedData).length) {
            setExpenseData(JSON.parse(savedData));
        }

        let amountSaved = localStorage.getItem('totalAmount')
        console.log('totalAmount', totalAmount);

        if (amountSaved !== null) {
            setTotalAmount(Number(amountSaved))
        }

    }, []);

    useEffect(() => {

        localStorage.setItem('expenseData', JSON.stringify(expenseData));

        if (totalAmount !== 0) {
            localStorage.setItem('totalAmount', JSON.stringify(totalAmount))
        }

    }, [expenseData, totalAmount]);


    return (
        <UserContext.Provider value={{ budget, setBudget, expenseData, setExpenseData, totalAmount, setTotalAmount }}>
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

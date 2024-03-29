// import React, { useState, useEffect } from 'react'
// import { UserContext } from './Context'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const ContextProvider = (props) => {

//     let [budget, setBudget] = useState(Number(2000));
//     const [totalAmount, setTotalAmount] = useState(Number(0))
//     const [expenseData, setExpenseData] = useState([])

//     useEffect(() => {
//         let savedData = localStorage.getItem('expenseData');
//         if (savedData && JSON.parse(savedData).length) {
//             setExpenseData(JSON.parse(savedData));
//         }
//         let amountSaved = localStorage.getItem('totalAmount')
//         if (amountSaved.length) {
//             setTotalAmount(Number(JSON.parse(amountSaved)))
//         }
//         let bgt = localStorage.getItem('budget')
//         if (bgt.length) {
//             setTotalAmount(Number(JSON.parse(budget)))
//         }
//     }, []);

//     useEffect(() => {

//         localStorage.setItem('expenseData', JSON.stringify(expenseData));
//         localStorage.setItem('totalAmount', JSON.stringify(totalAmount))
//         localStorage.setItem('budget', JSON.stringify(budget))

//     }, [expenseData, totalAmount, budget]);


//     return (
//         <UserContext.Provider value={{ budget, setBudget, expenseData, setExpenseData, totalAmount, setTotalAmount }}>
//             {props.children}

//             <ToastContainer
//                 position="top-center"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="light"
//                 transition:Bounce
//             />

//         </UserContext.Provider>
//     )
// }

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
        let amountSaved = localStorage.getItem('setTotalAmount')
        if (amountSaved !== null) {
            setTotalAmount(Number(JSON.parse(amountSaved)))
        }
        let bgt = localStorage.getItem('setBudget')
        if (bgt !== null) {
            setBudget(Number(JSON.parse(bgt)))
        }
    }, []);

    useEffect(() => {

        localStorage.setItem('expenseData', JSON.stringify(expenseData));
        localStorage.setItem('totalAmount', JSON.stringify(totalAmount))
        localStorage.setItem('budget', JSON.stringify(budget))

    }, [expenseData, totalAmount, budget]);


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

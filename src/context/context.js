// import { TranscriptDrawer } from '@speechly/react-ui';
import React, { useReducer, createContext} from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":1000,"category":"Investments","type":"Income","date":"2021-12-07","id":"5cef64b3-917c-4b8b-a811-60b9e33d1ba0"},{"amount":79,"category":"Bills","type":"Expense","date":"2021-12-17","id":"5046f346-ea85-4d86-bf5f-25f08d820957"},{"amount":48,"category":"Travel","type":"Expense","date":"2021-12-09","id":"31a74010-8ee8-4921-8a55-ec6df3193451"},{"amount":44,"category":"Business","type":"Income","date":"2021-12-09","id":"4c4797de-4b51-4d60-ab37-73f1e02cf3c7"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions,dispatch] = useReducer(contextReducer, initialState);

    // action creators

    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id});
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    }

    const balance = transactions.reduce((acc,currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount,0);

    // console.log(transactions);
    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}
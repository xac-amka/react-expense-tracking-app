import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction.jsx';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => {
                    return <Transaction key={transaction.id} transaction={transaction} />
                })}
            </ul>
        </>
    )
}
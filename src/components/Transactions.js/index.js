import React, { useContext } from 'react';
import { OptimiserContext } from '../../context';
import Dropdown from '../common/Dropdown';
import Table from '../common/Table';
import { transactionsEntity } from '../../api/entityModel';


const Transactions = () => {
    const {transactions, selectedTransaction, updateTransaction}= useContext(OptimiserContext);
    const onChangeSelectedValue = e => {
        const transactionId = e.target.value;
        const transaction = transactions.filter(el => el.id === transactionId);
        updateTransaction(transaction[0]);
    }
    return (
        <>
            {transactions.length > 0 && 
                <section id='transactions' className='container transactions-container'>
                    <Dropdown selectedValue={selectedTransaction.id} onChangeSelectedValue={onChangeSelectedValue} options={transactions} />
                    <div className='table-heading'>Selected Transactions</div>
                    <Table theadData={transactionsEntity.fields} tbodyData={[selectedTransaction]} />
                </section>
           }
        </>
    )
}

export default Transactions
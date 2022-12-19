import React, { useContext } from 'react';
import { OptimiserContext } from '../../context';
import Dropdown from '../common/Dropdown';
import Table from '../common/Table';
import { accountsEntity } from '../../api/entityModel';


const Accounts = () => {
    const {accounts, selectedAccount, updateAccount}= useContext(OptimiserContext);

    const onChangeSelectedValue = e => {
        const accountId = e.target.value;
        const account = accounts.filter(el => el.id === accountId);
        updateAccount(account[0]);
    }
    return (
        <>
            {accounts.length > 0 && 
                <section id='accounts' className='container accounts-container'>
                    <Dropdown selectedValue={selectedAccount.id} onChangeSelectedValue={onChangeSelectedValue} options={accounts} />
                    <div className='table-heading'>Selected Accounts</div>
                    <Table theadData={accountsEntity.fields} tbodyData={[selectedAccount]} />
                </section>
            }
        </>
    )
}

export default Accounts
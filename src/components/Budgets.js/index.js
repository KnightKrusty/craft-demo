import React, { useContext } from 'react';
import { OptimiserContext } from '../../context';
import Dropdown from '../common/Dropdown';
import Table from '../common/Table';
import entityModel from '../../api/entityModel';


const Budgets = () => {
    const {budgets, selectedBudget, updateBudget}= useContext(OptimiserContext);
    const onChangeSelectedValue = e => {
        const budgetId = e.target.value;
        const budget = budgets.filter(el => el.id === budgetId);
        updateBudget(budget[0]);
    }
    return (
        <>
            {budgets.length > 0 && 
                <section id='budgets' className='container budgets-container'>
                    <Dropdown selectedValue={selectedBudget.id} onChangeSelectedValue={onChangeSelectedValue} options={budgets} />
                    <div className='table-heading'>Selected Budgets</div>
                    <Table theadData={entityModel.budgets.fields} tbodyData={[selectedBudget]} />
                </section>
            }
        </>
    )
}

export default Budgets
import React, { useContext } from 'react';
import { OptimiserContext } from '../../context';
import Dropdown from '../common/Dropdown';
import Table from '../common/Table';
import entityModel from '../../api/entityModel';
import { useSelector, useDispatch } from 'react-redux';
import actionTypes from '../../redux/actions/actionsTypes';

const Entity = ({ type }) => {
    const dispatch = useDispatch();
    const { selected, tableData } = useSelector(state => state[type]);

    const onChangeSelectedValue = e => {
        const recordId = e.target.value;
        const record = tableData.filter(el => el.id === recordId);
        dispatch({type: actionTypes[type].SELECT_ENTITY , selected: record[0]});
    }
    return (
        <>
            {tableData.length > 0 &&
                <section id={type} className='container'>
                    <Dropdown selectedValue={selected.id} onChangeSelectedValue={onChangeSelectedValue} options={tableData} />
                    <div className='table-heading'>Selected {type}</div>
                    <Table theadData={entityModel[type].fields} tbodyData={[selected]} />
                </section>
            }
        </>
    )
}

export default Entity;
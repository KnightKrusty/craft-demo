import React, { useEffect } from 'react';
import Dropdown from '../common/Dropdown';
import Table from '../common/Table';
import entityModel from '../../api/entityModel';
import { useSelector, useDispatch } from 'react-redux';
import actionTypes from '../../redux/actions/actionsTypes';
import { SELECT_ID } from '../../redux/actions/actionsTypes';
import { changeSelection, addToast } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';
import './entity.css';

const Entity = ({ type }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { selected, tableData, isLoading } = useSelector(state => state[type]);
    const { adjacency, selectedIds, dependencies } = useSelector(state => state.dependency);
    const id = useSelector(state => state.dependency.selectedIds[type]);
    const isLoadingDep = useSelector(state => state.dependency.isLoading);

    const onChangeSelectedValue = e => {
        const recordId = e.target.value;
        const record = tableData.filter(el => el.id === recordId);
        dispatch({ type: actionTypes[type].SELECT_ENTITY, selected: record[0] });
        dispatch({ type: SELECT_ID, key: type, selectedId: record[0].id })
    }

    useEffect(() => {
        if (id !== undefined) {
            console.log('--------------------------------------');
            console.log(type, id)
            console.log("changeSelecti");
            dispatch(addToast('success', id ? `${type} changed to ${id}` : `${type} changed`));
            if (adjacency[type] && adjacency[type].length && !isLoadingDep) dispatch(changeSelection(adjacency[type], dependencies, selectedIds))
        }
    }, [id]);

    return (
        <>
            {isLoading ?
                <div>Loading.....</div> :
                <section id={type} className='container'>
                    {tableData.length ? <Dropdown selectedValue={selected.id} onChangeSelectedValue={onChangeSelectedValue} type={type} /> : ''}
                    <div className='header'><p>Selected {type}</p> <button onClick={() => navigate(`/add/${type}`)}>Add {type}</button></div>
                    <Table theadData={entityModel[type].fields} tbodyData={tableData.length ? [selected] : []} type={type} />
                </section>
            }
        </>
    )
}

export default Entity;
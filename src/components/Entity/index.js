import React, { useEffect } from 'react';
import Dropdown from '../common/Dropdown';
import Table from '../common/Table';
import entityModel from '../../api/entityModel';
import { useSelector, useDispatch } from 'react-redux';
import actionTypes from '../../redux/actions/actionsTypes';
import { SELECT_ID } from '../../redux/actions/actionsTypes';
import { changeSelection } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';


const Entity = ({ type }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { selected, tableData, isLoading } = useSelector(state => state[type]);
    const { adjacency, selectedIds, dependencies } = useSelector(state => state.dependency);
    const isLoadingDep = useSelector(state => state.dependency.isLoading);
    let id = selectedIds[type]
    const onChangeSelectedValue = e => {
        const recordId = e.target.value;
        const record = tableData.filter(el => el.id === recordId);
        dispatch({ type: actionTypes[type].SELECT_ENTITY, selected: record[0] });
        dispatch({ type: SELECT_ID, key: type, selectedId: record[0].id })
    }

    useEffect(() => {
        if (adjacency[type] && adjacency[type].length && !isLoadingDep) dispatch(changeSelection(adjacency[type], dependencies, selectedIds))
    }, [id]);

    return (
        <>
            {tableData.length > 0 && !isLoading &&
                <section id={type} className='container'>
                    <Dropdown selectedValue={selected.id} onChangeSelectedValue={onChangeSelectedValue} type={type} />
                    <div className='header'><p>Selected {type}</p> <button onClick={()=> navigate(`/add/${type}`)}>Add {type}</button></div>
                    <Table theadData={entityModel[type].fields} tbodyData={[selected]} type={type}/>
                </section>
            }
            {isLoading && <div>Loading {type}..........</div>}
        </>
    )
}

export default Entity;
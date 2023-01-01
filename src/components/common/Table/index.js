import React from "react";
import TableHeaderItem from "./TableHeaderItem";
import TableRow from "./TableRow";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { deleteData } from "../../../redux/actions/actions";
import './table.css';


const Table = ({ theadData, tbodyData, customClass, type }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Function - move to path /edit/{type}/{id} on click of edit button
    const navigateToEdit = (id) => {
        navigate(`/edit/${type}/${id}`);
    }

    const deleteAction = (id) => {
        dispatch(deleteData(type, id));
    }

    return <table className={customClass}>
        <thead>
            <tr>
                {theadData.map((h) => {
                    return <TableHeaderItem key={h.accessor} item={h} />;
                })}
                <th colSpan={2} className='actions'>Actions</th>
            </tr>
        </thead>
        {tbodyData.length ? <tbody>
            {tbodyData.map((item) => {
                return <TableRow key={item.id} data={item} type={type} editAction={navigateToEdit} deleteAction={deleteAction} />;
            })}
        </tbody> : <div>No Data</div>}
    </table>
}
export default Table;
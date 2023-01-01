import React from "react";
import { ReactComponent as EditIcon } from '../../assets/edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg';


const TableRow = ({ data, editAction, deleteAction }) => {
    return (
        <tr>
            {Object.keys(data).map((key) => {
                return <td key={key}>{data[key]}</td>;
            })}
            <td onClick={() => editAction(data.id)}><EditIcon /></td>
            <td onClick={() => deleteAction(data.id)}><DeleteIcon /></td>
        </tr>
    );
};

export default TableRow;
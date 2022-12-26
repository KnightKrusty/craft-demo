import React from "react";
import { BiPencil } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { useNavigate } from "react-router";

const TableRow = ({ data, type ,editAction,  deleteAction}) => {
    return (
        <tr>
            {Object.keys(data).map((key) => {
                return <td key={key}>{data[key]}</td>;
            })}
            <td onClick={()=> editAction(data.id)}><BiPencil /></td>
            <td onClick={()=> deleteAction(data.id)}><AiOutlineDelete /></td>
        </tr>
    );
};

export default TableRow;
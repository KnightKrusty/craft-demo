import React from "react";
import { BiPencil } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { useNavigate } from "react-router";

const TableRow = ({ data, type }) => {
    const navigate = useNavigate();
    const navigateToEdit = () => {
        navigate(`/edit/${type}/${data.id}`)
    }
    return (
        <tr>
            {Object.keys(data).map((key) => {
                return <td key={key}>{data[key]}</td>;
            })}
            <td onClick={navigateToEdit}><BiPencil /></td>
            <td><AiOutlineDelete /></td>
        </tr>
    );
};

export default TableRow;
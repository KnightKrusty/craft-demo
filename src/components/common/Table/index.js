import React from "react";
import TableHeaderItem from "./TableHeaderItem";
import TableRow from "./TableRow";

const Table = ({ theadData, tbodyData, customClass, type }) => {
    return <table className={customClass}>
        <thead>
            <tr>
                {theadData.map((h) => {
                    return <TableHeaderItem key={h.accessor} item={h} />;
                })}
                 <th colSpan={2} className='actions'>Actions</th>
            </tr>
        </thead>
        <tbody>
            {tbodyData.map((item) => {
                return <TableRow key={item.id} data={item} type={type} />;
            })}
        </tbody>
    </table>
}
export default Table
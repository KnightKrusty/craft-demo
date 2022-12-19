import React from "react";
import TableHeaderItem from "./TableHeaderItem";
import TableRow from "./TableRow";

const Table = ({ theadData, tbodyData, customClass }) => {
    return <table className={customClass}>
        <thead>
            <tr>
                {theadData.map((h) => {
                    return <TableHeaderItem key={h.accessor} item={h} />;
                })}
            </tr>
        </thead>
        <tbody>
            {tbodyData.map((item) => {
                return <TableRow key={item.id} data={item} />;
            })}
        </tbody>
    </table>
}
export default Table
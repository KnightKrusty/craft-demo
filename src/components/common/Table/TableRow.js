import React from "react";

const TableRow = ({ data }) => {
    return (
        <tr>
            {Object.keys(data).map((key) => {
                return <td key={key}>{data[key]}</td>;
            })}
        </tr>
    );
};

export default TableRow;
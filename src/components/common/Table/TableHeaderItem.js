import React from "react";

const TableHeaderItem = ({ item }) => {
    return (
        <>
            <th title={item.fieldName}>
                {item.fieldName}
            </th>
        </>
    );
};

export default TableHeaderItem;
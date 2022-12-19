import React from 'react';

const Dropdown = ({ selectedValue, onChangeSelectedValue, options }) => {
   
    return (
        <div>
            <select
                id="dropdown_select"
                value={selectedValue}
                onChange={onChangeSelectedValue}
            >
                {options.map((item) => {
                    return (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}

export default Dropdown;
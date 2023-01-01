import React from "react";

const Field = ({ field, onChangeInput, value, disable }) => {
  return (
    <div>
      <label htmlFor={field.fieldName}>
        <span>{field.fieldName}</span>
        <input
          id={field.fieldName}
          name={field.accessor}
          type={field.type}
          value={value}
          onChange={onChangeInput}
          disabled={disable}
        />
      </label>
    </div>
  );
};

export default Field;

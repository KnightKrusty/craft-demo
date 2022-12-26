import React from 'react'

const Field = ({ field, onChangeInput, value, disable }) => {
    return (
        <div className='field'>
            <label htmlFor={field.fieldName}> {field.fieldName}</label>
            <input  id={field.fieldName} name={field.accessor} type={field.type} value={value} onChange={onChangeInput} disabled={disable}/>
        </div>

    )
}

export default Field
import React from 'react'

const Field = ({ field, onChangeInput }) => {
    // console.log(field)
    return (
        <div className='field'>
            <label htmlFor={field.fieldName}> {field.fieldName}</label>
            <input  id={field.fieldName} name={field.accessor} type={field.type} value={field.value} onChange={onChangeInput} />
        </div>

    )
}

export default Field
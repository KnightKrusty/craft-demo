import React from 'react'

const Field = ({ field, onChangeInput }) => {
    return (
        <input type={field.type} value={field.value} onChange={onChangeInput} />
    )
}

export default Field
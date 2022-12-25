import React, { useState, useEffect } from 'react';
import Dropdown from '../Dropdown';
import Field from './Field';

const Create = ({ type, fields, dependency = [], defaultState }) => {
  let [formState, setState] = useState(() => defaultState || {});

  useEffect(() => {
    console.log(formState)
  }, [formState])

  useEffect(() => {
    let dependencyFields = fields.filter(field => field.dependencyField === true);

    let obj = {};
    for (let field of dependencyFields) {

    }
    setState(prev => ({ ...prev, }))
  }, [])

  const onChangeInput = e => {
    let { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }))
  }
  const onChangeSelectedValue = (value, name) => {
    console.log(name, value)

  }

  return (
    <form>
      {fields.map(field => {
        if (!field.dependencyField) {
          return <Field field={field} onChangeInput={onChangeInput} />
        }
        return <Dropdown onChangeSelectedValue={(e) => onChangeSelectedValue(e.target.value, field.accessor)} type={field.dependency} label={field.fieldName} />
      })}
      {/* {dependency.map(field => )} */}
    </form>
  )
}

export default Create;
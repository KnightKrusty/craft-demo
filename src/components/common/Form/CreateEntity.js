import React, { useState, useEffect } from 'react';
import Dropdown from '../Dropdown';
import Field from './Field';
import { useNavigate } from 'react-router';

const Create = ({ type, fields, dependency = [], defaultState , disableId, saveFormAction}) => {
  const navigate = useNavigate()
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
    console.log(name, value);
    setState(prev=> ({...prev, [name]: value}))
  }

  const cancel = () => {
    navigate('/');
  }
  const saveForm = (e) => {
    e.preventDefault();
    saveFormAction(formState);
    navigate('/')
  }
  return (
    <form>
      {fields.map(field => {
        if (!field.dependencyField) {
          return <Field field={field} onChangeInput={onChangeInput} value={formState[field.accessor] || ''} disable={field.accessor=== 'id' && disableId} />
        }
        return <Dropdown selectedValue={formState[field.accessor] || ''} onChangeSelectedValue={(e) => onChangeSelectedValue(e.target.value, field.accessor)} type={field.dependency} label={field.fieldName} />
      })}
      <div className='btn-container'>
        <button onClick={saveForm}>
          Save
        </button>
        <button onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default Create;
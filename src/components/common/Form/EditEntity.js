import React, { useEffect, useState } from 'react';
import entityModel from '../../../api/entityModel';
import Create from './CreateEntity';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { editFormData } from '../../../redux/actions/actions';
import './form.css';


const EditEntity = () => {
  const { type, id } = useParams();
  const dispatch = useDispatch();
  const { dependency } = useSelector(state => state?.dependency?.dependencies?.[type])
  const { tableData } = useSelector(state => state[type])
  const [selected, setSelectedData] = useState({});

  useEffect(() => {
    // get the record of the 'type' for the 'id' coming from params
    let filetred = tableData.filter(ele => ele.id === id);
    setSelectedData(filetred[0] || {})
  }, [tableData])

  const saveForm = (formState) => {
    let query = {};
    let queryFields = entityModel[type].fields.filter(field=> field.dependencyField)
    queryFields.forEach(field=> {
      query[field.accessor] = formState[field.accessor];
    })
    dispatch(editFormData(type, id, formState, query));
  }
  return (
    <div className='form container'>
      <h1>
        Edit Entity: {type}
      </h1>
      {
        Object.keys(selected).length
        &&
          <Create
            type={type}
            dependency={dependency}
            fields={entityModel[type].fields}
            defaultState={selected}
            disableId={true}
            saveFormAction={saveForm}
          />
      }
    </div>
  )
}

export default EditEntity
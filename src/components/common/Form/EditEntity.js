import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import entityModel from '../../../api/entityModel';
import Create from './CreateEntity';
import { useDispatch } from 'react-redux';
import { saveFormData } from '../../../redux/actions/actions';

const EditEntity = () => {
  const { type, id } = useParams();
  const dispatch = useDispatch();
  const { dependency } = useSelector(state => state?.dependency?.dependencies?.[type])
  const { tableData } = useSelector(state => state[type])
  const [selected, setSelectedData] = useState({});

  useEffect(() => {
    let filetred = tableData.filter(ele => ele.id === id);
    setSelectedData(filetred[0] || {})
  }, [tableData])

  const saveForm = (formState) => {
    let query = {};
    let queryFields = entityModel[type].fields.filter(field=> field.dependencyField)
    // .map(field=> field.accessor);
    queryFields.forEach(field=> {
      query[field.accessor] = formState[field.accessor];
    })

    dispatch(saveFormData(type, id, formState , query));
  }
  return (
    <div className='form'>
      <h1 className='heading'>
        Edit Entity: {type}
      </h1>
      {
        Object.keys(selected).length
        &&
        <>
          <Create
            type={type}
            dependency={dependency}
            fields={entityModel[type].fields}
            defaultState={selected}
            disableId={true}
            saveFormAction={saveForm}
          />
        </>
      }

    </div>
  )
}

export default EditEntity
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Create from './CreateEntity';
import entityModel from '../../../api/entityModel';
import { addNewData } from '../../../redux/actions/actions';
import { useDispatch } from 'react-redux';

const AddEntity = () => {
    const { type } = useParams();
    const dispatch = useDispatch();
    const dependency = useSelector(state => state?.dependency?.dependencies?.[type])
    const saveForm = (formState) => {
        let query = {};
        let queryFields = entityModel[type].fields.filter(field=> field.dependencyField)
        queryFields.forEach(field=> {
          query[field.accessor] = formState[field.accessor];
        })
        dispatch(addNewData(type, formState, query));
      }
    return (
        <>
            {
                type
                &&
                <div className='form'>
                    <h1 className='heading'>
                        Add Entity: {type}
                    </h1>
                    <Create
                        type={type}
                        dependency={dependency}
                        fields={entityModel[type].fields}
                        disableId={false}
                        saveFormAction={saveForm}
                    />
                </div>
            }
        </>
    )
}

export default AddEntity;
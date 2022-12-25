import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Create from './CreateEntity';
import entityModel from '../../../api/entityModel';

const AddEntity = () => {
    const { type } = useParams();
    const dependency = useSelector(state => state?.dependency?.dependencies?.[type])
    return (
        <>
            {
                type
                &&
                <>
                    <div>
                        AddEntity {type}
                    </div>
                    <Create
                        type={type}
                        dependency={dependency}
                        fields={entityModel[type].fields}
                    />
                </>
            }
        </>
    )
}

export default AddEntity;
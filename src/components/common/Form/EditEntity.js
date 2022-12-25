import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import entityModel from '../../../api/entityModel';
import Create from './CreateEntity';

const EditEntity = () => {

  const { type, id } = useParams();
  const { dependency } = useSelector(state => state?.dependency?.dependencies?.[type])
  const { tableData } = useSelector(state => state[type])
  const { state } = useLocation();
  const [selected, setSelectedData] = useState({});

  useEffect(() => {
    let filetred = tableData.filter(ele => ele.id === id);
    setSelectedData(filetred[0])
  })
  console.log(state.data);

  return (
    <div>
      <div>
        AddEntity {type}
      </div>
      {Object.keys(selected).length && <Create
        type={type}
        dependency={dependency}
        fields={entityModel[type].fields}
        defaultState={selected}
      />}
    </div>
  )
}

export default EditEntity
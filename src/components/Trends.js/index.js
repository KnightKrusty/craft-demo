import React, { useContext } from 'react';
import { OptimiserContext } from '../../context';
// import Dropdown from '../common/Dropdown';
import Table from '../common/Table';
import { trendsEntity } from '../../api/entityModel';


const Trends = () => {
    const {trends}= useContext(OptimiserContext);
    // const onChangeSelectedValue = e => {
    //     const trendsId = e.target.value;
    //     const trends = trends.filter(el => el.id === trendsId);
    //     updatetrends(trends[0]);
    // }
    return (
        <>
            {trends.length > 0 &&
                <section id='trends' className='container trends-container'>
                    {/* <Dropdown selectedValue={selectedtrends} onChangeSelectedValue={onChangeSelectedValue} options={trends} /> */}
                    <div className='table-heading'>Selected Trends</div>
                    <Table theadData={trendsEntity.fields} tbodyData={trends} />
                </section>
           }
        </>
    )
}

export default Trends
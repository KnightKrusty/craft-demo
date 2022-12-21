
import actionTypes from '../actions/actionsTypes'
const init = {
    selected: '',
    tableData: []
};

const tagsReducer = (state = init, action) => {
    switch (action.type) {
        case actionTypes.tags.CREATE: return {...state, tableData:[
            ...state.tableData, action.record
        ]}
        case actionTypes.tags.READ: return {...state, tableData: action.records}
        case actionTypes.tags.UPDATE: {
            let newState = state.tableData.filter(record => record.id !== action.payload.id);
            return {...state, tableData: [...newState, { ...action.payload }]} 
        }
        case actionTypes.tags.DELETE: return {
            ...state, tableData: [
                ...state.tableData.filter(record => record.id !== action.id)
            ]
        } 
        case actionTypes.tags.SELECT_TAG: return {
            ...state, selected: action.selected
        }
        default: return state;
    }
}


export default tagsReducer;
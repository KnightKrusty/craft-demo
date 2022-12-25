
import actionTypes from '../actions/actionsTypes'
const init = {
    selected: '',
    tableData: [],
    isLoading: false
};

const tagsReducer = (state = init, action) => {
    switch (action.type) {
        case actionTypes.tags.CREATE: return {...state, tableData:[
            ...state.tableData, action.record
        ]}
        case actionTypes.tags.READ: return {...state, tableData: action.records , isLoading: false}
        case actionTypes.tags.UPDATE: {
            let newState = state.tableData.filter(record => record.id !== action.payload.id);
            return {...state, tableData: [...newState, { ...action.payload }]} 
        }
        case actionTypes.tags.DELETE: return {
            ...state, tableData: [
                ...state.tableData.filter(record => record.id !== action.id)
            ]
        } 
        case actionTypes.tags.SELECT_ENTITY: return {
            ...state, selected: action.selected
        }
        case actionTypes.accounts.IS_LOADING: return {
            ...state, isLoading: action.isLoading
        }
        default: return state;
    }
}


export default tagsReducer;
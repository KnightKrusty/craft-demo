
import actionTypes from '../actions/actionsTypes'
const init = {
    selected: '',
    tableData: [],
    isLoading: false
};

const budgetsReducer = (state = init, action) => {
    switch (action.type) {
        case actionTypes.budgets.CREATE: return {...state, tableData:[
            ...state.tableData, action.record
        ]}
        case actionTypes.budgets.READ: return {...state, tableData: action.records , isLoading: false}
        case actionTypes.budgets.UPDATE: {
            let newState = state.tableData.filter(record => record.id !== action.payload.id);
            return {...state, tableData: [...newState, { ...action.payload }]} 
        }
        case actionTypes.budgets.DELETE: return {
            ...state, tableData: [
                ...state.tableData.filter(record => record.id !== action.id)
            ]
        } 
        case actionTypes.budgets.SELECT_ENTITY: return {
            ...state, selected: action.selected
        }
        case actionTypes.budgets.IS_LOADING: return {
            ...state, isLoading: action.isLoading
        }
        default: return state;
    }
}


export default budgetsReducer;

import actionTypes from '../actions/actionsTypes'
const init = {
    selected: '',
    tableData: [],
    isLoading: false
};

const transactionsReducer = (state = init, action) => {
    switch (action.type) {
        case actionTypes.transactions.CREATE: return {...state, tableData:[
            ...state.tableData, action.record
        ]}
        case actionTypes.transactions.READ: return {...state, tableData: action.records , isLoading: false}
        case actionTypes.transactions.UPDATE: {
            let newState = state.tableData.filter(record => record.id !== action.payload.id);
            return {...state, tableData: [...newState, { ...action.payload }]} 
        }
        case actionTypes.transactions.DELETE: return {
            ...state, tableData: [
                ...state.tableData.filter(record => record.id !== action.id)
            ]
        } 
        case actionTypes.transactions.SELECT_ENTITY: return {
            ...state, selected: action.selected
        }
        case actionTypes.transactions.IS_LOADING: return {
            ...state, isLoading: action.isLoading
        }
        default: return state;
    }
}


export default transactionsReducer;
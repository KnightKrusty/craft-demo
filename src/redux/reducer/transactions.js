
import actionTypes from '../actions/actionsTypes'
const init = {
    selected: '',
    tableData: []
};

const transactionsReducer = (state = init, action) => {
    switch (action.type) {
        case actionTypes.transactions.CREATE: return {...state, tableData:[
            ...state.tableData, action.record
        ]}
        case actionTypes.transactions.READ: return {...state, tableData: action.records}
        case actionTypes.transactions.UPDATE: {
            let newState = state.tableData.filter(record => record.id !== action.payload.id);
            return {...state, tableData: [...newState, { ...action.payload }]} 
        }
        case actionTypes.transactions.DELETE: return {
            ...state, tableData: [
                ...state.tableData.filter(record => record.id !== action.id)
            ]
        } 
        case actionTypes.transactions.SELECT_ACCOUNT: return {
            ...state, selected: action.selected
        }
        default: return state;
    }
}


export default transactionsReducer;
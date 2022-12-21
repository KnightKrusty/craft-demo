
import actionTypes from '../actions/actionsTypes'
const init = {
    selected: '',
    tableData: []
};

const accountsReducer = (state = init, action) => {
    switch (action.type) {
        case actionTypes.accounts.CREATE: return {...state, tableData:[
            ...state.tableData, action.record
        ]}
        case actionTypes.accounts.READ: return {...state, tableData: action.records}
        case actionTypes.accounts.UPDATE: {
            let newState = state.tableData.filter(record => record.id !== action.payload.id);
            return {...state, tableData: [...newState, { ...action.payload }]} 
        }
        case actionTypes.accounts.DELETE: return {
            ...state, tableData: [
                ...state.tableData.filter(record => record.id !== action.id)
            ]
        } 
        case actionTypes.accounts.SELECT_ACCOUNT: return {
            ...state, selected: action.selected
        }
        default: return state;
    }
}


export default accountsReducer;
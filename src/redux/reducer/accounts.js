
import actionTypes from '../actions/actionsTypes'
const init = {
    selected: '',
    tableData: [],
    isLoading: false
};

const accountsReducer = (state = init, action) => {
    switch (action.type) {
        case actionTypes.accounts.CREATE: return {
            ...state, tableData: [
                ...state.tableData, action.record
            ]
        }
        case actionTypes.accounts.READ: return { ...state, tableData: action.records, isLoading: false }
        case actionTypes.accounts.UPDATE: {
            let newState = state.tableData.filter(record => record.id !== action.payload.id);
            return { ...state, tableData: [...newState, { ...action.payload }] }
        }
        case actionTypes.accounts.DELETE: return {
            ...state, tableData: [
                ...state.tableData.filter(record => record.id !== action.id)
            ]
        }
        case actionTypes.accounts.SELECT_ENTITY: return {
            ...state, selected: action.selected
        }
        case actionTypes.accounts.IS_LOADING: return {
            ...state, isLoading: action.isLoading
        }
        default: return state;
    }
}


export default accountsReducer;

import actionTypes from '../actions/actionsTypes'
const init = {
    selected: '',
    tableData: [],
    isLoading: false
};

const trendsReducer = (state = init, action) => {
    switch (action.type) {
        case actionTypes.trends.CREATE: return {
            ...state, tableData: [
                ...state.tableData, action.record
            ]
        }
        case actionTypes.trends.READ: return { ...state, tableData: action.records , isLoading: false}
        case actionTypes.trends.UPDATE: {
            let newState = state.tableData.filter(record => record.id !== action.payload.id);
            return { ...state, tableData: [...newState, { ...action.payload }] }
        }
        case actionTypes.trends.DELETE: return {
            ...state, tableData: [
                ...state.tableData.filter(record => record.id !== action.id)
            ]
        }
        case actionTypes.trends.SELECT_ENTITY: return {
            ...state, selected: action.selected
        }
        case actionTypes.trends.IS_LOADING: return {
            ...state, isLoading: action.isLoading
        }
        default: return state;
    }
}


export default trendsReducer;
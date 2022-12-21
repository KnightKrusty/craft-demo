
import actionTypes from '../actions/actionsTypes'
const init = {
    selected: '',
    tableData: []
};

const trendsReducer = (state = init, action) => {
    switch (action.type) {
        case actionTypes.trends.CREATE: return {
            ...state, tableData: [
                ...state.tableData, action.record
            ]
        }
        case actionTypes.trends.READ: return { ...state, tableData: action.records }
        case actionTypes.trends.UPDATE: {
            let newState = state.tableData.filter(record => record.id !== action.payload.id);
            return { ...state, tableData: [...newState, { ...action.payload }] }
        }
        case actionTypes.trends.DELETE: return {
            ...state, tableData: [
                ...state.tableData.filter(record => record.id !== action.id)
            ]
        }
        case actionTypes.trends.SELECT_TREND: return {
            ...state, selected: action.selected
        }
        default: return state;
    }
}


export default trendsReducer;

import { GET_DEPENDENCIES, IS_LOADING_DEP, SELECT_ID } from '../actions/actionsTypes'
let init = {
    dependencies: { accounts: [], transactions: [], trends: [], tags: [], budgets: [] },
    adjacency: {},
    topo: [],
    selectedIds: {
        accounts: "", transactions: "", trends: "", tags: "", budgets: "" 
    },
    LL: {
        accounts: ["transactions", "trends"],
        transactions: ["trends"],
        budgets: ["trends"],
        tags: [],
        trends: []
    },
    isLoading: false
};

const dependencyReducer = (state = init, action) => {
    switch (action.type) {
        case GET_DEPENDENCIES: return {
            ...state,
            dependencies: { ...state.dependencies, ...action.dependencies },
            topo: [...action.topo],
            adjacency: { ...state.adjacency, ...action.adjacency }
        }
        case IS_LOADING_DEP : return {
            ...state, isLoading: action.isLoading
        }
        case SELECT_ID : return {
            ...state, selectedIds: {...state.selectedIds, [action.key]: action.selectedId}
        }
        default: return { ...state }
    }
}

export default dependencyReducer;
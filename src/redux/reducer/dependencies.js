
import { GET_DEPENDENCIES } from '../actions/actionsTypes'
let init = {
    accounts: [], transactions: [], trends: [], tags: [], budgets: []
};

const dependencyReducer = (state = init, action) => {
    switch (action.type) {
        case GET_DEPENDENCIES: return {
            ...state, ...action.dependencies
        }
        default: return { ...state }
    }
}

export default dependencyReducer;
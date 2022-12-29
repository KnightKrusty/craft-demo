import { configureStore } from '@reduxjs/toolkit'
import accountsReducer from './reducer/accounts';
import transactionsReducer from './reducer/transactions';
import budgetsReducer from './reducer/budgets';
import trendsReducer from './reducer/trends';
import tagsReducer from './reducer/tags';
import dependencyReducer from './reducer/dependencies';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

export default configureStore({
    reducer: {
        accounts: accountsReducer,
        transactions: transactionsReducer,
        budgets: budgetsReducer,
        trends: trendsReducer,
        tags: tagsReducer,
        dependency: dependencyReducer
    },
    middleware: [thunk],
})
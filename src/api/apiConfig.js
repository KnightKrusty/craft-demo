import api from './defaultData.json';

const getData = (type) => {
    return new Promise((res, rej) => {
        setTimeout(() => res(api[type]), 1000);
    });
}

const getTransactions = (accountsId) => {
    let transData = [...api.transactions];
    let filteredData = transData.filter(item => item.accountId === accountsId);
    return new Promise((res, rej) => {
        setTimeout(() => res(filteredData), 1000);
    });
}

const getTrends = (budgetId, transactionId) => {
    let trendsData = [...api.trends];
    let filteredData = trendsData.filter(item => item.budgetId == budgetId && item.transactionId == transactionId);
    return new Promise((res, rej) => {
        setTimeout(() => res(filteredData), 1000);
    });
}

export { getData, getTransactions, getTrends };
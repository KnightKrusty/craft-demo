import { GET_DEPENDENCIES, IS_LOADING_DEP, SELECT_ID } from './actionsTypes';
import { get, post, put, deleteRecord } from "../../api/apiConfig";
import actionsTypes from './actionsTypes';

// data : 
// transactions : ['accounts']
// trends : ['transactions', 'budgets']

// -> tags, accounts, trans, budgets, trends
// topo - BFS
// ['accounts', 'budgets', 'tags', 'transactions', 'trends']

// adj
// accounts: ['transactions'], budgets: ['trends'], tags: [], transactions: ['trends'], trends: []

// Linked list 
// Acc -> trans -> trends
// trans -> trends 
// budgets -> trends
// trends -> null
// tags -> null


const getTopoSortBFS = (data) => {
    let topo = [];
    let indegree = new Map();
    let keys = ["accounts", "transactions", "budgets", "trends", "tags"];
    let adj = {};
    for (let key of keys) {
        if (adj[key] === undefined) adj[key] = [];
        for (let child of data[key] || []) {
            adj[child].push(key);
        }
    }
    let que = [];
    for (let key of keys) {
        if (!indegree.has(key)) indegree.set(key, 0)
        for (let child of adj[key] || []) {
            let ind = indegree.get(child) || 0;
            indegree.set(child, ind + 1);
        }
    }
    for (let key of keys) {
        if (indegree.get(key) === 0) {
            que.push(key);
        }
    }

    while (que.length) {
        let key = que.shift();
        topo.push(key);
        for (let ele of adj[key] || []) {
            let ind = indegree.get(ele) - 1;
            indegree.set(ele, ind);
            if (ind === 0) que.push(ele);
        }
    }
    return topo;
}
const getTopoSortDFS = (data) => {
    let topo = [];

    let keys = ["accounts", "transactions", "budgets", "trends", "tags"];
    let adj = {};
    for (let key of keys) {
        if (adj[key] === undefined) adj[key] = [];
        for (let child of data[key] || []) {
            adj[child].push(key);
        }
    }
    let stack = [];
    let visited = {};
    for (let key of keys) {
        if (visited[key] == undefined) {
            findTopoSOrt(key, visited, stack, adj);
        }
    }
    while (stack.length) {
        topo.push(stack.pop());
    }
    console.log(topo)
    return { adj, topo };

}
function findTopoSOrt(node, vis, st, adj) {
    vis[node] = 1;
    for (let ele of adj[node]) {
        if (vis[ele] == undefined) {
            findTopoSOrt(ele, vis, st, adj);
        }
    }
    st.push(node);
}
let keys = {
    accounts: { selected: '', refer: 'accountId' },
    transactions: { selected: '', refer: 'transactionId' },
    budgets: { selected: '', refer: 'budgetId' },
    trends: { selected: '', refer: 'trendsId' },
    tags: { selected: '', refer: "tagId" }
}
let selectedIds = {
    accounts: "", transactions: "", trends: "", tags: "", budgets: "" 
};
const callGetApis = (order, data, selectedIds, dispatch) => {
    let promise = Promise.resolve();
    for (let key of order) {
        promise = promise.then(() => {
            return new Promise((resolve, reject) => {
                let dependants = {};
                // tranverse through all dependencies of the curremt key and add the default id
                for (let dep of data[key] || []) {
                    let ele = keys[dep].refer;
                    let id = selectedIds[dep];
                    dependants[ele] = id;
                }

                dispatch({ type: actionsTypes[key].IS_LOADING, isLoading: true })
                get(key, dependants).then(data => {
                    selectedIds[key]= data[0]?.id || '';
                    dispatch({ type: actionsTypes[key].READ, records: data });
                    return data;
                }).then(data => {
                    dispatch({ type: actionsTypes[key].SELECT_ENTITY, selected: data[0] || {} });
                    dispatch({type: SELECT_ID, key: key, selectedId: data[0]?.id || ''})
                    dispatch({ type: actionsTypes[key].IS_LOADING, isLoading: false })
                    resolve();
                }).catch(e => {
                    dispatch({ type: actionsTypes[key].IS_LOADING, isLoading: false })
                    console.log(e)
                    reject(e);
                })
            })
        })
    }
     promise.finally(()=> {
        dispatch(({ type: IS_LOADING_DEP, isLoading: false }))
    })
    // return promise
}

const getDependencies = () => dispatch => {
    dispatch(({ type: IS_LOADING_DEP, isLoading: true }))
    get('dependencies', {}).then(data => {
        let { adj, topo } = getTopoSortDFS(data)
        dispatch({ type: GET_DEPENDENCIES, dependencies: data, adjacency: adj, topo: topo });
        callGetApis(topo, data,selectedIds, dispatch);
    })
        .catch(e => {
            dispatch(({ type: IS_LOADING_DEP, isLoading: false }))
            console.log(e)
        })
}

const changeSelection = (order, data, selectedIds) => {
    return dispatch => {
        callGetApis(order, data, selectedIds, dispatch)
    }
}


export { getDependencies, changeSelection };

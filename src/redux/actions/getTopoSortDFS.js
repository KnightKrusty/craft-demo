// data : 
// transactions : ['accounts']
// trends : ['transactions', 'budgets']
// -> tags, accounts, trans, budgets, trends
// topo - BFS
// ['accounts', 'budgets', 'tags', 'transactions', 'trends']
// adj
// accounts: ['transactions'], budgets: ['trends'], tags: [], transactions: ['trends'], trends: []

export const getTopoSortDFS = (data) => {
    let topo = [];
    let keys = ["accounts", "transactions", "budgets", "trends", "tags"];
    let adj = {};
    for (let key of keys) {
        if (adj[key] === undefined)
            adj[key] = [];
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
    return { adj, topo };
};

function findTopoSOrt(node, vis, st, adj) {
    vis[node] = 1;
    for (let ele of adj[node]) {
        if (vis[ele] == undefined) {
            findTopoSOrt(ele, vis, st, adj);
        }
    }
    st.push(node);
}

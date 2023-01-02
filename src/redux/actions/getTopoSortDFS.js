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
    for (let child of data[key] || []) {
      if (adj[child] === undefined) adj[child] = [];
      adj[child].push(key);
    }
  }
  let stack = [];
  let visited = {};
  let currentVis = {};
  let isCycle = {flag: false};
  for (let key of keys) {
    if (visited[key] === undefined) {
      if (!isCycle.flag) findTopoSOrt(key, visited, currentVis, stack, adj, isCycle);
    }
  }
  if(isCycle.flag) return 'Cycle exists in the dependencies recieved from the server';
  while (stack.length) {
    topo.push(stack.pop());
  }
  return { adj, topo};
};

function findTopoSOrt(node, vis, currentVis, st, adj, isCycle) {
  if (isCycle.flag) return;
  vis[node] = 1;
  currentVis[node] = 1;
  for (let ele of adj[node] || []) {
    if (vis[ele] === undefined) {
      findTopoSOrt(ele, vis, currentVis, st, adj, isCycle);
    } else if (currentVis[ele]) {
      isCycle.flag = true;
      return;
    }
  }
  currentVis[node] = 0;
  st.push(node);
}

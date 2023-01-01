# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run serve-json`

Start JSON Server

## Project Idea 
### Problem statement
Path - <b>network-call-optimiser\SSE UI Craft demo.pdf</b>

For example the dependency of entities is as below:-
```
"dependencies": {
    "transactions": [
      "accounts"
    ],
    "trends": [
      "transactions",
      "budgets"
    ]
}
```
<b>Algo used - Topological sort using DFS</b>

Why ? 
1. Gives the entities topologically sorted so that all the dependant entities are rendered after the entities they are dependant on are resolved.
   example - "transactions" will render only after we have the "accounts" entity rendered as we are sending selected account id in the transactions get api call.
2. Gives the <b>adjacency list</b> - gives the dependant entities to be refreshed on the selection change of one entity
   example - if "accounts" is changed from acc_1 to acc_2 -> "transactions" will be refreshed for acc_2
```
adjacency: {
    accounts: [
      'transactions'
    ],
    transactions: [
      'trends'
    ],
    budgets: [
      'trends'
    ],
    trends: [],
    tags: []
}
  ```
### API calls for the given dependencies

<b> GET Calls </b>
1. accounts - GET /accounts
2. transactions - GET /transactions?accountId={account_id}
3. budgets - GET /budgets
4. trends - GET /trends?transactionId={transaction_id}&budgetId={budget_id}
5. tags - GET /tags

<b> Other Calls </b>
type can be - accounts, transactions, tags, budgets, trends

POST - /{type} with JSON data
PUT - /{type}/{id} with JSON data
DELETE - /{type}/{id}

#### The Flow diagram of the current dependencies :-

![image](https://user-images.githubusercontent.com/55315778/210150617-b7062ff6-c1a1-41ce-b746-27725c581fff.png)


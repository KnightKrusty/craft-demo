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
Problem statement can be found in -> network-call-optimiser\SSE UI Craft demo.pdf

For example the dependency of enetities is as below:-
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
Algo used - Topological sort using DFS
Why ? 
1. Gives the adjacency list - gives the dependant entities to be refreshed on the selection change of one entity
   example - if "accounts" is changed from acc_1 to acc_2 -> "transactions" will be refreshed  




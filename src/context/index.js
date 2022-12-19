import React, { createContext, useEffect, useState } from "react";

import { getData, getTransactions, getTrends} from "../api/apiConfig";

export const OptimiserContext = createContext(null);

const OptimiserProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [trends, setTrends] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState({});
  const [selectedTransaction, setSelectedTransaction] = useState({id: ''});
  const [selectedBudget, setSelectedBudget] = useState({id: ''});

  useEffect(() => {
        fetchAccounts();
  }, []);

  const fetchAccounts = () => {
    getData('accounts')
      .then((data) => {
        // console.log(data)
        return data;
      })
      .then((accountsData) => {
        // console.log("Accounts Data => ", accountsData);
        setAccounts(accountsData);
        if (accountsData.length) {
            setSelectedAccount(accountsData[0])
          return accountsData[0];
        }
        return [];
      })
      .then((accountData) => {
        // console.log("Account Data -> ", accountData);
        updateAccount(accountData);
      })
      .catch((error) => {
        // console.error("Error in getting accounts => ", JSON.stringify(error));
        setAccounts([]);
      });
  };

  const fetchTransactions = (accountData) => {
    const { id: accountId = "" } = { ...accountData };
    return new Promise((resolve, reject) => {
      getTransactions(accountId)
        .then((data) => {
          return data;
        })
        .then((transactionsData) => {
          // console.log("Transaction data -> ", transactionsData);
          setTransactions(transactionsData);
          resolve(transactionsData);
        })
        .catch((error) => {
          // console.error(
          //   "Error in fetching transactions -> ",
          //   JSON.stringify(error)
          // );
          setTransactions([]);
          reject("error in transactions");
        });
    });
  };

  const fetchBudgets = () => {
    return new Promise((resolve, reject) => {
      getData('budgets')
        .then((data) => {
          return data;
        })
        .then((budgetsData) => {
          // console.log("Budget Data -> ", budgetsData);
          setBudgets(budgetsData);
          resolve(budgetsData);
        })
        .catch((error) => {
          // console.error(
          //   "Error in getting bugetsData -> ",
          //   JSON.stringify(error)
          // );
          setBudgets([]);
          reject("error in budget");
        });
    });
  };

  const fetchTrends = (transactionId, budgetId) => {
    getTrends(budgetId, transactionId)
      .then((data) => {
        return data;
      })
      .then((trendsData) => {
        // console.log("Trends Data -> ", trendsData);
        setTrends(trendsData);
      })
      .catch((error) => {
        // console.error(
        //   "Error in getting trends Data -> ",
        //   JSON.stringify(error)
        // );
        setTrends([]);
      });
  };

  const onAccountUpdate = (account) => {
    Promise.all([fetchTransactions(account), fetchBudgets()]).then(
      (transactionBudgetData) => {
        const [transactionData, budgetData] = transactionBudgetData;
        setSelectedTransaction(transactionData[0]);
        setSelectedBudget(budgetData[0]);
        onUpdateTransactionOrBudget(transactionData[0], budgetData[0]);
      }
    );
  }

  const onUpdateTransactionOrBudget = (transaction, budget) =>{
    fetchTrends(transaction?.id, budget?.id);
  }

  const updateAccount = (account) => {
    setSelectedAccount(account);
    onAccountUpdate(account);
  };

  const updateTransaction = (transaction) => {
    setSelectedTransaction(transaction);
    fetchTrends(transaction?.id, selectedBudget?.id);

  };

  const updateBudget = (budget) => {
    setSelectedBudget(budget);
    fetchTrends(selectedTransaction?.id, budget?.id);
  };

  return (
    <OptimiserContext.Provider
      value={{
        accounts,
        transactions,
        budgets,
        trends,
        selectedAccount,
        selectedTransaction,
        selectedBudget,
        updateAccount,
        updateTransaction,
        updateBudget
      }}
    >
      {children}
    </OptimiserContext.Provider>
  );
};

export default OptimiserProvider;

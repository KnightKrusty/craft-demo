const accounts = {
    fields: [
        {
            fieldName: 'Account Id',
            type: 'string',
            accessor: 'id',
            dependencyField: false
        },
        {
            fieldName: 'Account Holder',
            type: 'string',
            accessor: 'account_holder',
            dependencyField: false
        },
        {
            fieldName: 'Balance',
            type: 'number',
            accessor: 'balance',
            dependencyField: false
        },
        {
            fieldName: 'Account Name',
            type: 'string',
            accessor: 'name',
            dependencyField: false
        }
    ]
}

const transactions = {
    fields: [
        {
            fieldName: 'Transaction Id',
            type: 'string',
            accessor: 'id',
            dependencyField: false
        },
        {
            fieldName: 'Name',
            type: 'string',
            accessor: 'name',
            dependencyField: false
        },
        {
            fieldName: 'Account Id',
            type: 'string',
            accessor: 'accountId',
            dependencyField: true,
            dependency: "accounts"
        },
      
        {
            fieldName: 'Transaction type',
            type: 'number',
            accessor: 'type',
            dependencyField: false
        },
        {
            fieldName: 'Transaction amount',
            type: 'number',
            accessor: 'amount',
            dependencyField: false
        },
        {
            fieldName: 'Tag Id',
            type: 'string',
            accessor: 'tagId',
            dependencyField: true,
            dependency: "tags"
        }
    ]
}

const budgets = {
    fields: [
        {
            fieldName: 'budget id',
            type: 'string',
            accessor: 'id',
            dependencyField: false
        },
        {
            fieldName: 'Name',
            type: 'string',
            accessor: 'name',
            dependencyField: false
        }
    ]
}

const trends = {
    fields: [
        {
            fieldName: 'Id',
            type: 'string',
            accessor: 'id',
            dependencyField: false
        },
        {
            fieldName: 'Name',
            type: 'string',
            accessor: 'name',
            dependencyField: false
        },
        {
            fieldName: 'Budget Id',
            type: 'string',
            accessor: 'budgetId',
            dependencyField: true,
            dependency: "budgets"
        },
        {
            fieldName: 'Transaction Id',
            type: 'string',
            accessor: 'transId',
            dependencyField: true,
            dependency: "transactions"
        }
    ]
}


const tags = {
    fields: [
        {
            fieldName: 'Id',
            type: 'string',
            accessor: 'id',
            dependencyField: false
        },
        {
            fieldName: 'Name',
            type: 'string',
            accessor: 'name',
            dependencyField: false
        }
    ]
}


export default { accounts, transactions, trends, budgets, tags };
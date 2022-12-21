const accounts = {
    fields: [
        {
            fieldName: 'Account Id',
            type: 'string',
            accessor: 'id'
        },
        {
            fieldName: 'Account Holder',
            type: 'string',
            accessor: 'account_holder'
        },
        {
            fieldName: 'Balance',
            type: 'number',
            accessor: 'balance'
        },
        {
            fieldName: 'Account Name',
            type: 'string',
            accessor: 'name'
        }
    ]
}

const transactions = {
    fields: [
        {
            fieldName: 'Transaction Id',
            type: 'string',
            accessor: 'id'
        },
        {
            fieldName: 'Name',
            type: 'string',
            accessor: 'name'
        },
        {
            fieldName: 'Account Id',
            type: 'string',
            accessor: 'accountId'
        },
      
        {
            fieldName: 'Transaction type',
            type: 'number',
            accessor: 'type'
        },
        {
            fieldName: 'Transaction amount',
            type: 'number',
            accessor: 'amount'
        },
        {
            fieldName: 'Tag',
            type: 'string',
            accessor: 'tag'
        }
    ]
}

const budgets = {
    fields: [
        {
            fieldName: 'budget id',
            type: 'string',
            accessor: 'id'
        },
        {
            fieldName: 'Name',
            type: 'string',
            accessor: 'name'
        }
    ]
}

const trends = {
    fields: [
        {
            fieldName: 'Id',
            type: 'string',
            accessor: 'id'
        },
        {
            fieldName: 'Name',
            type: 'string',
            accessor: 'name'
        },
        {
            fieldName: 'Budget Id',
            type: 'string',
            accessor: 'budgetId'
        },
        {
            fieldName: 'Transaction Id',
            type: 'string',
            accessor: 'transId'
        }
    ]
}


const tags = {
    fields: [
        {
            fieldName: 'Id',
            type: 'string',
            accessor: 'id'
        },
        {
            fieldName: 'Name',
            type: 'string',
            accessor: 'name'
        }
    ]
}


export default { accounts, transactions, trends, budgets, tags };
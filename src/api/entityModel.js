const accountsEntity = {
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

const transactionsEntity = {
    fields: [
        {
            fieldName: 'Transaction Id',
            type: 'string',
            accessor: 'id'
        },
        {
            fieldName: 'Linked to Account',
            type: 'string',
            accessor: 'accountId'
        },
        {
            fieldName: 'Name',
            type: 'string',
            accessor: 'name'
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
        }
    ]
}

const budgetsEntity = {
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

const trendsEntity = {
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
            fieldName: 'Account',
            type: 'string',
            accessor: 'accountId'
        },
        {
            fieldName: 'Transaction',
            type: 'string',
            accessor: 'transId'
        }
    ]
}


const tagsEntity = {
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


export {accountsEntity, transactionsEntity, trendsEntity, budgetsEntity, tagsEntity};
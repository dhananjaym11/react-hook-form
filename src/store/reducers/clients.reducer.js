const initialState = [
    {
        name: 'Paytm',
        formOne: {
            clientName: 'a',
            clientId: 'q',
            industry: 'w',
            accountNumber: 'e',
            ifscCode: 'r',
            bankName: 't'
        },
        formTwo: {
            pocName: 'a',
            designation: 'a',
            emailId: 'a',
            sales: 'a',
            manager: 'a',
            associate: 'a'
        }
    },
    {
        name: 'Myntra',
        formOne: {
            clientName: 'a',
            clientId: 'q',
            industry: 'w',
            accountNumber: 'e',
            ifscCode: 'r',
            bankName: 't'
        },
        formTwo: {
            pocName: 'a',
            designation: 'a',
            emailId: 'a',
            sales: 'a',
            manager: 'a',
            associate: 'a'
        }
    },
    {
        name: 'Karvy',
        formOne: {
            clientName: 'a',
            clientId: 'q',
            industry: 'w',
            accountNumber: 'e',
            ifscCode: 'r',
            bankName: 't'
        },
        formTwo: {
            pocName: 'a',
            designation: 'a',
            emailId: 'a',
            sales: 'a',
            manager: 'a',
            associate: 'a'
        }
    }
]

export default (state = initialState, action) => {
    switch (action.type) {
        default: {
            return [...state];
        }
    }
}
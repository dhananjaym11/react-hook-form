import { ADD_CLIENT, UPDATE_CLIENTS } from "../constants";

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
        case ADD_CLIENT: {
            return [
                ...state,
                action.payload.client
            ];
        }
        case UPDATE_CLIENTS: {
            return [...action.payload];
        }
        default: {
            return [...state];
        }
    }
}
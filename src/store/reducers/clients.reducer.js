import { ADD_CLIENT, UPDATE_CLIENT } from "../constants";

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
        case UPDATE_CLIENT: {
            const updatedClient = state.map((client, index) => index === action.payload.id ? action.payload.client : client);
            return [
                ...updatedClient
            ];
        }
        default: {
            return [...state];
        }
    }
}
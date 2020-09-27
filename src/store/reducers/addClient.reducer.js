import { ADD_CLIENT_FORM_ALL, ADD_CLIENT_FORM_ONE, ADD_CLIENT_FORM_TWO } from "../constants";

const initialState = {
    formOne: {},
    formTwo: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CLIENT_FORM_ALL: {
            return {
                ...state,
                formOne: action.payload.formOne,
                formTwo: action.payload.formTwo,
            };
        }
        case ADD_CLIENT_FORM_ONE: {
            return {
                ...state,
                formOne: action.payload
            };
        }
        case ADD_CLIENT_FORM_TWO: {
            return {
                ...state,
                formTwo: action.payload
            };
        }
        default: {
            return { ...state };
        }
    }
};
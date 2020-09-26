import { TOGGLE, ADD_FORM } from "../constants";

const initialState = {
    toggle: false,
    list: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE: {
            return {
                ...state,
                toggle: !state.toggle
            };
        }
        case ADD_FORM: {
            return {
                ...state,
                list: state.list.concat(action.payload)
            };
        }
        default: {
            return { ...state };
        }
    }
};
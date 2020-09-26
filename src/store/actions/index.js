import { TOGGLE, ADD_FORM } from "../constants";

export const toggleSwitch = () => dispatch => {
    dispatch({ type: TOGGLE });
};

export const addForm = (form) => dispatch => {
    dispatch({ type: ADD_FORM, payload: form });
};
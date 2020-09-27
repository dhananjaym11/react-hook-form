import React from 'react';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from 'react-router-dom';

import { ADD_CLIENT_FORM_TWO } from '../../store/constants';

function AddClientFormTwo(props) {
    const addClient = useSelector(state => state.addClient);
    const defaultValues = addClient.formTwo;
    const { handleSubmit, register, errors } = useForm({ defaultValues });
    const dispatch = useDispatch();
    const onSubmit = form => {
        console.log(form);
        dispatch({
            type: ADD_CLIENT_FORM_TWO,
            payload: form
        })
        props.history.push('/client/add/form-one');
    }
    const onBack = () => {
        props.history.push('/client/add/form-one');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Client PoC details</h4>
            <div>
                <div>
                    <label>pocName</label>
                    <input
                        name="pocName"
                        ref={register({ required: "Required" })}
                    />
                    {errors.pocName && errors.pocName.message}
                </div>
                <div>
                    <label>designation</label>
                    <input
                        name="designation"
                        ref={register({ required: "Required" })}
                    />
                    {errors.designation && errors.designation.message}
                </div>
                <div>
                    <label>emailId</label>
                    <input
                        name="emailId"
                        ref={register({ required: "Required" })}
                    />
                    {errors.emailId && errors.emailId.message}
                </div>
            </div>

            <h4>Darwinbox owner</h4>
            <div>
                <div>
                    <label>sales</label>
                    <input
                        name="sales"
                        ref={register({ required: "Required" })}
                    />
                    {errors.sales && errors.sales.message}
                </div>
                <div>
                    <label>manager</label>
                    <input
                        name="manager"
                        ref={register({ required: "Required" })}
                    />
                    {errors.manager && errors.manager.message}
                </div>
                <div>
                    <label>associate</label>
                    <input
                        name="associate"
                        ref={register({ required: "Required" })}
                    />
                    {errors.associate && errors.associate.message}
                </div>
            </div>

            <input className="btn btn-primary" type="submit" />
            <input className="btn btn-secondary" type="button" value="Back" onClick={onBack} />
        </form>
    )
}

export default withRouter(AddClientFormTwo)